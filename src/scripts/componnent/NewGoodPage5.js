import {store} from '../_flux/store'
import {actions} from '../_flux/actions'
import json from 'jsonp'
import BannerNewGood from './bannerNewgood'

class NewGoodPage5 extends React.Component {
	constructor(props,context){
		super(props,context)
		this.state={
			loadcontent:null
		}
	}
	getData(){
		json("https://shop.juanpi.com/zxg?key=1296&type=1&zhouyi_ids=p8_c3_l1_18_51_5_151&machining=gsortzxg&page="+1+"&rows=10&dtype=JSONP&cm=1&cm_channel=1",{					
						param:'callback',
						name:'gsort_callback'//name是回调函数的名称
					},(err,data)=>{
						if(err){
							console.log(err)
						}else{
							actions.addContent(data)
						
						}	
					})
	}
	
	putData(){
		var that=this;
		var arr=[]
		if(this.state.loadcontent!=null){			
			var len=this.state.loadcontent.length;
			for(var i =0;i<len;i++){		
				var datalist=this.state.loadcontent[i].data.list			
				for(var j=0;j<datalist.length;j++){				
					arr.push(
						<div className='newGoodbox'>
						<div className='goodHead'>
								<img src={datalist[j].logo_url}/>
								<ul>
									<li>{datalist[j].title}</li>
									<li>{datalist[j].coupon_tips}</li>
								</ul>
								<p>{datalist[j].mkt_info}＞</p>
							</div>
							<div className='goodimgbox'>
								<ul>
									<li><img src={datalist[j].sub_data[0].pic}/></li>
									<li>{datalist[j].sub_data[0].cp}</li>
									<li>{datalist[j].sub_data[0].title}</li>
								</ul>
								<ul>
									<li><img src={datalist[j].sub_data[1].pic}/></li>
									<li>{datalist[j].sub_data[1].cp}</li>
									<li>{datalist[j].sub_data[1].title}</li>
								</ul>
							</div>
							</div>)
				}
			}
		}
		return arr;
	}
	render(){
		
		return (			
			<div className="newgoodpage2">
				<header>
					<span className='title'>卷皮</span>
					<img src='./images/class.png'/>
				</header>
				<BannerNewGood/>
				{this.putData()}
			</div>
		)
	}	
	componentDidMount(){
		this.getData()
		var that=this;
		store.addChangeListener(()=>{
			that.setState({
				loadcontent:store.getAll()
			})
		})
		
	}
	
}

export default NewGoodPage5