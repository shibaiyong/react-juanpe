import {store} from '../_flux/store'
import NewGoodPage1 from './NewGoodPage1'
import NewGoodPage2 from './NewGoodPage2'
import NewGoodPage3 from './NewGoodPage3'
import NewGoodPage4 from './NewGoodPage4'
import NewGoodPage5 from './NewGoodPage5'
import NewGoodPage6 from './NewGoodPage6'





class NewGood extends React.Component {
	constructor(props,context){
		super(props,context)
		this.state={
			page:1
		}
	}
	
	judgePage(){
		console.log('开始判断第几页')
		switch(this.state.page){
			case 1:console.log('第一页'); return <NewGoodPage1/>;break;
			case 2:console.log('第2页'); return <NewGoodPage2/>;break;
			case 3:console.log('第3页'); return <NewGoodPage3/>;break;
			case 4:console.log('第4页'); return <NewGoodPage4/>;break;
			case 5:console.log('第5页');return <NewGoodPage5/>;break;
			case 6:console.log('第6页');return <NewGoodPage6/>;break;
		}
	}
	
	
	render(){
		console.log(this.parent)
		console.log("我的状态时"+this.state.page)
		return (			
			<div className="newgood">
				{this.judgePage()}
			</div>
		)
	}
	componentDidMount(){
		console.log('page变化了')
		var that=this;
		store.addChangeListener(()=>{
			that.setState({
				page:store.getPage()
			})
		})
	}
}

export default NewGood