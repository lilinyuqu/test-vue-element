export default {
	//异步操作
	actionDemo(context,payload){
		return new Promise((resolve,reject)=>{
			setTimeout(()=>{
				context.commit('');
				console.log(payload);
				resolve('异步数据')
			},1000)
		})
	}

}