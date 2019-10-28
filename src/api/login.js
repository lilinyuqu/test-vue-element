import request from "../untils/request.js"
export function login(params){
	return request({
		closeLoading:true,
		url:"oauth/user/token",
		method:"post",
		headers: {'client_id': "webApp", 'client_secret': "webApp"},
		data:params

	})
}