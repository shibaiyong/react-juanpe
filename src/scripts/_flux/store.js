
//store是用来管理状态的，状态就是数据，用store来管理的状态可以在任意一个组件里得到，也可以在任意一个组件里进行更改。更改之后，所有使用该状态的组件都会进行更新，数据共享
//event 是react自带的插件。
var EventEmitter=require('events').EventEmitter

var assign =require('object-assign')

const store=assign({},EventEmitter.prototype,{
	container:[
		
	],
	page:1,
	count:0,
	getAll:function(){
		console.log('getAll')
		this.removeRepeat()
		return this.container
	},
	getPage:function(){
		
		console.log('getPage')
		return this.page
	},
	addContent:function(content){		
		this.count++;
		this.container.push({
			id:this.count,
			data:content
		})		
		this.emit('store-change')
	},
	addPage:function(page){
		console.log('store addpage')
		if(this.page!=page){
			this.container=[]
		}
		this.page=page
		this.emit('store-change')
	},
	removeRepeat:function(){
		var arr=[];
		var anthor=this.container
			for(var i=0;i<anthor.length-1;i++){
				for(var j=i+1;j<anthor.length;j++){
					if(anthor[i].data.page==anthor[j].data.page){
						anthor.splice(i,1)
						i--;
					}
				}
				
			}		
	},
	
	addChangeListener:function(callback){
		this.on('store-change',callback)
	}
	
})

export {store}
