
import {actions} from '../_flux/actions'
class BannerNewGood extends React.Component {
	constructor(props,context){
		super(props,context)
		this.state={
			
		}
		this.navSwiper=null
		this.bannerSwiper=null
	}
	
	importPage(page){
		event.preventDefault()
		console.log(page)
		actions.addPage(page)
	}
	
	
	render(){
		return (
			<div className='bannerbox'>
				<div className="swiper-container nav">
				  	<div className='swiper-wrapper'>
						<div className="swiper-slide"><a href="#" onClick={this.importPage.bind(this,1)}>上新</a></div>
						<div className="swiper-slide"><a href="#" onClick={this.importPage.bind(this,2)}>女装</a></div>
						<div className="swiper-slide"><a href="#" onClick={this.importPage.bind(this,3)}>鞋包</a></div>
						<div className="swiper-slide"><a href="#" onClick={this.importPage.bind(this,4)}>母婴</a></div>
						<div className="swiper-slide"><a href="#" onClick={this.importPage.bind(this,5)}>数码</a></div>
						<div className="swiper-slide"><a href="#" onClick={this.importPage.bind(this,6)}>居家</a></div>
						<div className="swiper-slide"><a href="#" onClick={this.importPage.bind(this,7)}>男士</a></div>
						<div className="swiper-slide"><a href="#" onClick={this.importPage.bind(this,8)}>美妆</a></div>
						<div className="swiper-slide"><a href="#" onClick={this.importPage.bind(this,9)}>美食</a></div>
					</div>
				</div>
				<div className="swiper-container banner">
					<div className='swiper-wrapper'>
						<div className="swiper-slide"><img src="https://goods2.juancdn.com/jas/170718/3/5/596dd202a9fcf829a822e5c3_750x290.png?imageMogr2/quality/80!/format/png"/></div>
						<div className="swiper-slide"><img src="https://goods8.juancdn.com/jas/170719/e/4/596ec16c8150a115db37a747_750x290.png?imageMogr2/quality/80!/format/png"/></div>
					</div>
					<div className="swiper-pagination">
						<span className="swiper-pagination-bullet"></span>
						<span className="swiper-pagination-bullet"></span>
					</div>
				</div>
			</div>
		)
	}
	componentDidMount(){
		
		var that=this;
	    this.navSwiper = new Swiper('.nav', {   
	        slidesPerView: 'auto',  
	        spaceBetween: 20,
	        loop:true
	    });
	    this.bannerSwiper = new Swiper ('.banner', {
	    	autoplay:2500,
	    	loop: true,
	   		pagination: '.swiper-pagination',
	   		paginationType : 'bullets',
	   		autoplayDisableOnInteraction: false
		})
	    setTimeout(function(){
			that.navSwiper.update()
			that.bannerSwiper.update()	
		},1000)	
	}
	componentDidUpdate(){
		var that=this;
			that.navSwiper.update()
			that.bannerSwiper.update()
	}
}

export default BannerNewGood