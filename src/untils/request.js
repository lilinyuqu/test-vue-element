import Axios from "axios";
import {Notification, Loading} from 'element-ui'; //elem-ui 组件


//创建axios 实例
const contentType="application/json";
const Authorization=""
const service = Axios.create({
	baseURL: "http://192.168.13.8:9200/api-auth/",
	headers: {"Authorization":Authorization,"Content-type":contentType},
	// headers: { 'Accept': '*/*'},
	timeout: "",
})
service.defaults.retry = 3;
service.defaults.retryDelay = 2000;

// 请求拦截器
service.interceptors.request.use(config => {
		if (!config.closeLoading) { //显示请求图标
			window.lodingIndabce = Loading.service();
		}
		return config;
	},
	error => {
		Promise.reject(error);
	}
)
//响应拦截器
service.interceptors.response.use(response =>{
	console.log(response.data)
	return response.data

},error =>{
	return Promise.reject(error)
})
export default service