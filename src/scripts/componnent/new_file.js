//				<div className="swiper-container banner">
//					<div className='swiper-wrapper'>
//						<div className="swiper-slide"><img src="https://goods2.juancdn.com/jas/170718/3/5/596dd202a9fcf829a822e5c3_750x290.png?imageMogr2/quality/80!/format/png"/></div>
//						<div className="swiper-slide"><img src="https://goods8.juancdn.com/jas/170719/e/4/596ec16c8150a115db37a747_750x290.png?imageMogr2/quality/80!/format/png"/></div>
//					</div>
//					<div className="swiper-pagination">
//						<span className="swiper-pagination-bullet"></span>
//						<span className="swiper-pagination-bullet"></span>
//					</div>
//				</div>				
//
//https://shop.juanpi.com/zxg?key=zuixinzhekou&type=1&zhouyi_ids=p8_c3_l1_18_51_5_151_157&machining=gsortzxg&page=1&rows=10&dtype=JSONP&cm=1&cm_channel=1&callback=gsort_callback
//https://shop.juanpi.com/zxg?key=312&type=6&zhouyi_ids=p8_c3_l1_18_51_5_151_157&machining=gsortzxg&page=2&rows=10&dtype=JSONP&cm=1&cm_cate=312&callback=gsort_callback
//https://shop.juanpi.com/zxg?key=313&type=6&zhouyi_ids=p8_c3_l1_18_51_5_151_157&machining=gsortzxg&page=2&rows=10&dtype=JSONP&cm=1&cm_cate=313&callback=gsort_callback		

//this.bannerSwiper = new Swiper ('.banner', {
//	    	
//	    	loop: true,
//	   		pagination: '.swiper-pagination',
//	   		paginationType : 'bullets'
//		}) 
//		
//
//<div className='goodHead'>
//						<img src="https://goods8.juancdn.com/bao/170524/f/4/59255428a43d1f5964470948_180x90.png?imageMogr2/quality/88!/format/png"/>
//						<ul>
//							<li>欧美芙719女装专场</li>
//							<li>满2件6.8折</li>
//						</ul>
//						<p>17.2万人已团 ＞</p>
//					</div>
//					<div className='goodimgbox'>
//						<ul>
//							<li><img src="https://goods5.juancdn.com/bao/170706/8/b/595df0658150a157ee21f196_800x800.jpg?iopcmd=thumbnail&amp;type=11&amp;height=310&amp;width=310%7Ciopcmd=convert&amp;Q=88&amp;dst=jpg"/></li>
//							<li>¥38</li>
//							<li>宽松露肩雪纺套装</li>
//						</ul>
//						<ul>
//							<li><img src="https://goods5.juancdn.com/bao/170706/8/b/595df0658150a157ee21f196_800x800.jpg?iopcmd=thumbnail&amp;type=11&amp;height=310&amp;width=310%7Ciopcmd=convert&amp;Q=88&amp;dst=jpg"/></li>
//							<li>¥38</li>
//							<li>宽松露肩雪纺套装</li>
//						</ul>
//					</div>
//					
//componentWillMount(){
//		var that=this;
//		store.subscribe(function(){
//			console.log('7.reducer返回新数据之后，view会重新获取数据')
//			that.setState({
//				loadcontent:
//			})
//		})
//	}
//	componentDidMount(){
//		var that=this;
//		store.subscribe(function(){
//			console.log('7.reducer返回新数据之后，view会重新获取数据')
//			that.setState({
//				loadcontent:store.getState().content
//			})
//		})
//	}


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