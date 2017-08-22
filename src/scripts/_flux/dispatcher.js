
//dispatcher专门接受actionCreate传递过来action，然后去调用store的方法（更改数据）

import {store} from './store'

var Dispatcher = require('flux').Dispatcher

const dispatcher = new Dispatcher()

dispatcher.register((action)=>{
	
	switch(action.type){
		case 'ADD_NEW':
		store.addContent(action.data)
		break;
		case 'ADD_PAGE':
			store.addPage(action.page)
			break;
	}
})
export {dispatcher}
