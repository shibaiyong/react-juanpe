
import json from 'jsonp'
import {store} from '../_flux/store'
import {actions} from '../_flux/actions'

class RoutBox extends React.Component {
	constructor(props,context){
		super(props,context)
		this.state={
			loadcontent:{},
			page:'',
			astyle:'newgood',
			navpage:1
		}
		this.myScroll=null
		this.count={};
		this.page=1;
	}
	changeStyle(type){	
		this.setState({
			astyle:type
		})
	}
	render(){
		return (
			<div className="root-box">	
			<div className="routebox" id="wrapper">		
				{this.props.children}
			</div>
			<footer>
				<ul onClick={this.changeStyle.bind(this,'newgood')}>
					<li><a href="#/newgood" className='iconfont'>&#xe60e;</a></li>
					<li><a  href="#" className='commontext' className={this.state.astyle=='newgood'?'clickred':''}>今日上新</a></li>
				</ul>
				<ul onClick={this.changeStyle.bind(this,'straitstore')}>
					<li><a   href="#/straitstore" className='iconfont'>&#xe602;</a></li>
					<li><a href="#" className='commontext' className={this.state.astyle=='straitstore'?'clickred':''} >直发仓</a></li>
				</ul>
				<ul onClick={this.changeStyle.bind(this,'global')}>
					<li><a  href="#/global" className='iconfont'>&#xe6e8;</a></li>
					<li><a   href="#" className='commontext' className={this.state.astyle=='global'?'clickred':''} >全球购</a></li>
				</ul>
				<ul onClick={this.changeStyle.bind(this,'shopcar')}>
					<li><a  href="#/shopcar" className='iconfont'>&#xf0148;</a></li>
					<li><a  href="#" className='commontext' className={this.state.astyle=='shopcar'?'clickred':''} >购物车</a></li>
				</ul>
				<ul onClick={this.changeStyle.bind(this,'mine')}>
					<li><a  href="#/mine" className='iconfont'>&#xe620;</a></li>
					<li><a href="#" className='commontext' className={this.state.astyle=='mine'?'clickred':''}  >我的卷皮</a></li>
				</ul>
			</footer>
			</div>
		)
	}
	componentDidMount(){
		var that=this
		store.addChangeListener(()=>{
					that.setState({
						navpage:store.getPage()
					})
				})
		var scrollTop;
		var wrapperHeight;
		var Hnewgood;
		var page=1;
		
		
		this.myScroll=new iScroll("wrapper",{
			momentum:true,
			fixedScrollbar:true,
			bounce:false,
			fadeScrollbar:true,
			useTransition: true,
			onScrollMove: function () {	
				
				
				scrollTop=-this.y;
				wrapperHeight=$('#wrapper').height();
				Hnewgood=$('.newgood').height();
				var isGet=false
				if(scrollTop+wrapperHeight>=Hnewgood-50){			
					isGet=true;
				}
				if(scrollTop>=100){
					$('.nav').css({'position':'fixed','top':'0px','left':'0px'})
				}else{
					$('.nav').css({'position':'relative'})
				}
				if(isGet){
					var key=that.state.navpage==1?'zuixinzhekou':(310+that.state.navpage)
					console.log(310+that.state.navpage)
					json("https://shop.juanpi.com/zxg?key="+key+"&type=1&zhouyi_ids=p8_c3_l1_18_51_5_151&machining=gsortzxg&page="+that.page+"&rows=10&dtype=JSONP&cm=1&cm_channel=1",{					
						param:'callback',
						name:'gsort_callback'//name是回调函数的名称
					},(err,data)=>{
						if(err){
							console.log(err)
						}else{
							actions.addContent(data)
							isGet=false;
						}	
					})
				}
			},
			onScrollEnd:function(){
				console.log('that.page'+that.page)
				that.myScroll.refresh();
				if(scrollTop+wrapperHeight>=Hnewgood-10){			
					that.page++;
				}		
			}
		});
		console.log('组件装载在完成')
	}
	componentDidUpdate(){
		console.log('scroll我刷新了')
		
		var that=this;
		that.myScroll.refresh();	
	}
}

export default RoutBox