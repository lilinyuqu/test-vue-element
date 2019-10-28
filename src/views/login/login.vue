<template>
    <div class="login">
        <div class="login-form">
            <div class="login-header">
                <img src="../../assets/images/logo.svg" alt="" width="100" height="100">
            </div>
            <el-form>
                <el-input placeholder="请输入用户名" style="margin-bottom: 18px" suffix-icon="fa fa-user"
                          v-model="username"></el-input>
                <el-input placeholder="请输入密码" style="margin-bottom: 18px" suffix-icon="fa fa-keyboard-o"
                          v-model="password"></el-input>
                <el-button type="primary" style="width: 100%;margin-bottom: 18px" @click="login">登录</el-button>
            </el-form>
        </div>
    </div>
</template>

<script>
	import {login as loginApi} from "../../api/login"
	import $getRsaCode from "../../untils/jsencrypt"; //rsa  加密
    import {UPDATE_TOKEN} from "../../store/mutation-types";

		export default {
		name: "login",
		data() {
			return {
				username: '',
				password: ''
			}
		},
		methods: {
			login() {
				loginApi({username: this.username, password: $getRsaCode(this.password)}).then(r => {
					this.$store.commit(UPDATE_TOKEN,r.access_token)
									this.$router.push({path: '/app'})
								}).catch(_ => {
					console.log("error")
				})
			}

		}

	}
</script>

<style lang="scss">
    @import "login.scss";

</style>
