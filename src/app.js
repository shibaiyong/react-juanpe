
require("./style/style.css")
require("./style/common.css")

import {Router,Route,hashHistory,IndexRedirect,IndexRoute} from 'react-router'

import RouteBox from './scripts/componnent/RouteBoxCom'
import NewGood from './scripts/componnent/NewGoodCom'
import StraitStore from './scripts/componnent/StraitStoreCom'
import Global from './scripts/componnent/GlobalComponent'
import ShopCar from './scripts/componnent/ShopCarComponent'
import Mine from './scripts/componnent/MineComponent'

ReactDOM.render(
			<Router history={hashHistory}>
				<Route path='/' component={RouteBox}>
					<IndexRedirect to="/newgood"/>
					<Route path="newgood" component={NewGood}></Route>
					<Route path="straitstore" component={StraitStore}></Route>
					<Route path="global" component={Global}></Route>
					<Route path="shopcar" component={ShopCar}></Route>
					<Route path="mine" component={Mine}></Route>					
					<Route path="*" component={NewGood}></Route>
				</Route>
			</Router>,document.getElementById('root'))

