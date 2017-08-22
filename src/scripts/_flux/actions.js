
//actionCreate就是一个纯对象，上面有很多方法，供View 去调用，方法被调用之后会产生一个action
//交予dispatcher来进行处理

import {dispatcher} from './dispatcher'

var actions={
	addContent:function(content){
		var action={
			data:content,
			type:'ADD_NEW'
		}
		dispatcher.dispatch(action)
	},
	addPage:function(page){
		console.log('action addpage')
		dispatcher.dispatch({
			type:'ADD_PAGE',
			page:page
		})
	}
}
export {actions}
