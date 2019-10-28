import Vuex from 'vuex'
import Vue from "vue"

import mutations from "./mutations";
import getters from "./getters";
import actions from "./actions";
import publicModule from './modules/publicModule'
import * as types from './mutation-types'


Vue.use(Vuex)

let state = {
	Authorization: "",
	testData:'1'
}
const store = new Vuex.Store({
	state: state,
	actions,
	getters,
	mutations: {//状态更新
		[types.UPDATE_TOKEN](state,Authorization) { //token更新
			state.Authorization = Authorization

		}

	}

})
export default store