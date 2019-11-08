<template>
    <nav class="nav-bar">
        <ScrollPane>
            <router-link :to="v.path" v-for="(v,i) in nav" class="nav-bar-tag"
                         :class="$route.path == v.path ? ' active':''">
                <i class="point"></i>
                {{v.title}}
                <div class="close-box">
                    <span class="el-icon-close" @click.prevent.stop="closeSelectedTag(i)"></span>
                </div>
            </router-link>
        </ScrollPane>
    </nav>
</template>

<script>
	import ScrollPane from "../../components/ScrollPane";

	export default {
		name: "NavBar",
		data() {
			return {
				nav: []
			}
		},
		created() {
			// 导航守卫
			this.$router.afterEach(this.afterEachHandler)
		},
		methods: {
			afterEachHandler(to, from) {
				//判断当前是否存在即将跳转的标签，如果不存在，则创建 some() 存在 true
				if (!this.nav.some(item => item.path === to.path)) {
					this.nav.push({
						path: to.path,
						title: to.meta.title
					})
				}

			},
			closeSelectedTag(i) {
				let nav = this.nav
				let thisPath = nav[i].path
				nav.splice(i, 1)
				if (thisPath == this.$route.path) { //跳转至最后一个路由
					this.$router.push(nav[(nav.length - 1)].path)
				}
			}

		},
		mounted() {
			//当前path 保存到nav
			this.nav.push({
				path: this.$route.path,
				title: this.$route.meta.title,
			});
		},
		components: {
			ScrollPane
		}
	}
</script>

<style lang="scss" scoped>
    @import "../../assets/css/variables.scss";

    .nav-bar {
        /*margin-top: 50px;*/
        height: 38px;
        line-height: 38px;
        width: 100%;
        background: #fff;
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .12), 0 0 3px 0 rgba(0, 0, 0, .04);
        transition: all 0.2s;

        .nav-bar-tag {
            display: inline-block;
            height: 26px;
            color: #495060;
            padding: 0 6px;
            font-size: 12px;
            line-height: 26px;
            border: 1px solid #ebeef5;
            border-radius: 2px;

            .close-box {
                display: inline-block;
                height: 100%;
                border-left: 1px solid #ebeef5;
                margin-left: 6px;
            }

            .point {
                display: none;
                width: 8px;
                height: 8px;
                border-radius: 50%;
                margin: auto 0;
                position: relative;
                background: #fff;
            }
        }

        .active {
            border: 1px solid $--color-primary;
            background: $--color-primary;
            color: #fff;

            .point {
                display: inline-block;
            }
        }

    }

</style>