
import {store} from '../_flux/store'

import BannerNewGood from './bannerNewgood'

class NewGoodPage1 extends React.Component {
	constructor(props,context){
		super(props,context)
		this.state={
			loadcontent:null
		}
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
			
			<div className="newgood">
				<header>
					<img src="//jp.juancdn.com/jpwebapp/images/go_load_new.png?20161115"/>
				</header>
				<div className="search">
					<p>
						<img src="./images/search.png"/>
						<input type="text" placeholder="搜索商品"/>
					</p>
					<span><img src='./images/class.png'/></span>
				</div>
				
				<BannerNewGood/>
				
				<div className='notice'>
					<ul>
					<li><a href="http://m.juanpi.com/qiang"><img src="https://goods5.juancdn.com/bao/160905/9/0/57cd1455151ad1f6428b45bf_80x80.png?iopcmd=convert&amp;Q=88&amp;dst=webp"/>最后疯抢</a></li>
					<li><a href="http://m.juanpi.com/jiu"><img src="https://goods1.juancdn.com/bao/160905/0/a/57cd1466151ad1cf368b4621_80x80.png?iopcmd=convert&amp;Q=88&amp;dst=webp"/>9.9包邮</a></li>
					<li><a href="https://tuan.juanpi.com/pintuan/?mjuanpi_wx=1"><img src="https://goods3.juancdn.com/bao/160905/4/8/57cd14a2151ad1e1348b4633_80x80.png?iopcmd=convert&amp;Q=88&amp;dst=webp"/>拼团</a></li>
					<li><a href="http://m.juanpi.com/yugao"><img src="https://goods4.juancdn.com/bao/160905/7/4/57cd14a7151ad1ab408b45ab_80x80.png?imageMogr2/quality/88!/format/png"/>即将上线</a></li>
					</ul>
				</div>
				<div className='another'>
					<div className="col" >
						<a href="https://m.juanpi.com/cate/490"><img src="https://goods1.juancdn.com/bao/170628/1/a/595341095a3f3228f7409816_375x456.png?iopcmd=convert&amp;Q=88&amp;dst=webp"/></a>
					</div>
					<div className="row" >
						<a href="https://m.juanpi.com/cate/318?select=1_9&amp;mjuanpi_wx=1"><img src="https://goods8.juancdn.com/bao/170616/e/3/5943546fad0a49dc0c8b45d1_375x228.png?imageMogr2/quality/88!/format/png"/></a>
						<a href="https://mact.juanpi.com/ldx_10704?mjuanpi_wx=1"><img src="https://goods2.juancdn.com/jas/170718/3/7/596de36ca9fcf86c676d9024_375x228.png?imageMogr2/quality/88!/format/png"/></a>
					</div>
				</div>
				<div className='actionimg'><a href="https://mact.juanpi.com/shengxia719?qmshareview=1&amp;mjuanpi_wx=1"><img src="https://goods4.juancdn.com/jas/170717/7/5/596c72b58150a13d685f735b_750x228.gif"/></a></div>
				<div className='stitle'>
				<a href='#'>
					<img src="https://goods7.juancdn.com/jas/170717/d/b/596c81a98150a10c0439e7aa_750x100.png?iopcmd=convert&amp;Q=88&amp;dst=webp"/>
				</a>
				</div>
				
				<div className='someimg'>
					<a href='#'>
						<img src="https://goods2.juancdn.com/jas/170717/2/9/596c84b18150a10ee43bacbb_375x236.png?imageMogr2/quality/88!/format/png"/>
					</a>
					<a href='#'>
						<img src="https://goods4.juancdn.com/jas/170717/6/3/596c84cba9fcf84e6e7901fc_375x236.png?imageMogr2/quality/88!/format/png"/>
					</a>
					<a href='#'>
						<img src="https://goods7.juancdn.com/jas/170717/d/5/596c84f38150a10ae677d7be_375x236.png?iopcmd=convert&amp;Q=88&amp;dst=webp"/>
					</a>
					<a href='#'>
						<img src="https://goods8.juancdn.com/jas/170717/e/0/596c84fb8150a10f023fa8bb_375x236.png?imageMogr2/quality/88!/format/png"/>
					</a>
				</div>
				<div className='stitle'>
					<a href='#'>
						<img src="https://goods7.juancdn.com/jas/170717/d/b/596c81a98150a10c0439e7aa_750x100.png?iopcmd=convert&amp;Q=88&amp;dst=webp"/>
					</a>
				</div>
				<div className="twocol">
					<div className='left'>
						<a href='#'>
							<img src="https://goods6.juancdn.com/jas/170717/a/3/596c866f8150a10f7372a16f_375x170.png?imageMogr2/quality/88!/format/png"/>
						</a>
						<a href='#'>
							<img src="https://goods1.juancdn.com/jas/170717/0/1/596c86daa9fcf84df624423e_375x170.png?iopcmd=convert&amp;Q=88&amp;dst=webp"/>
						</a>
					</div>
					<div className="right">
						<a href='#'>
							<img src="https://goods1.juancdn.com/jas/170717/1/6/596c866aa9fcf84dd978e168_375x170.png?iopcmd=convert&amp;Q=88&amp;dst=webp"/>					
						</a>
						<a href='#'>
							<img src="https://goods6.juancdn.com/jas/170717/b/0/596c86d5a9fcf84dee06e76e_375x170.png?imageMogr2/quality/88!/format/png"/>
						</a>
					</div>
				</div>
				<div className='adboard'>
					<div className="col">
					<a href="https://mact.juanpi.com/sub_muying719?qmshareview=1&amp;mjuanpi_wx=1">
						<img src="https://goods6.juancdn.com/jas/170717/b/e/596c87f68150a10e0e37359b_200x250.png?imageMogr2/quality/88!/format/png"/>
					</a>
					</div>
					<div className="col">
					<a href="https://mact.juanpi.com/sub_meizhuang719?qmshareview=1&amp;mjuanpi_wx=1">
						<img className="lazy loaded" src="https://goods8.juancdn.com/jas/170717/e/b/596c87fd8150a10df20ac0e4_200x250.png?imageMogr2/quality/88!/format/png"/>
					</a>
					</div>
					<div className="col">
					<a href="https://mact.juanpi.com/sub_shuma719?qmshareview=1&amp;mjuanpi_wx=1">
						<img src="https://goods3.juancdn.com/jas/170717/5/9/596c88038150a10e1a66ca33_200x250.png?iopcmd=convert&amp;Q=88&amp;dst=webp"/>
					</a>
					</div>
					<div className="col">
					<a href="https://mact.juanpi.com/sub_meishi719?qmshareview=1&amp;mjuanpi_wx=1">
						<img src="https://goods7.juancdn.com/jas/170717/d/f/596c880aa9fcf84eff0027bc_200x250.png?iopcmd=convert&amp;Q=88&amp;dst=webp"/>
					</a>
					</div>
				</div>
				<div className='time'>
					<a href='#'>
						<img src="https://goods1.juancdn.com/bao/170310/0/f/58c20db7a43d1f63427015d8_750x96.jpg?iopcmd=convert&amp;Q=88&amp;dst=webp"/>
					</a>
				</div>
				{this.putData()}
			</div>
		)
	}	
	
	componentDidMount(){
		var that=this;
		store.addChangeListener(()=>{
			that.setState({
				loadcontent:store.getAll()
			})
		})
	}
	
}

export default NewGoodPage1