<template>
    <div class="main">
        <div class="header">
            <div class="logo">
                <span class="big">权限应用模板</span>
            </div>
            <!--           隐藏按钮-->
            <span class="header-btn" v-on:click="hiddenSidebar">
               <i class="el-icon-menu"></i>
           </span>
            <!--           right-->
            <div class="right">
                <!--               全屏按钮-->
                <span class="header-btn">
                   <i class="fa fa-arrows-alt"></i>
               </span>
                <!--               navbar配置按钮-->
                <el-dropdown>
                    <span class="header-btn">
                        <i class="el-icon-setting"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <div style="padding: 10px;text-align: center;width: 420px">
                            <div class="setting-category">
                                <el-switch active-text="开启TabBar"
                                           inactive-text="关闭TabBar">
                                </el-switch>
                                <el-switch style="margin-top: 10px" active-text="固定在顶部"
                                           inactive-text="随页面滚动">
                                </el-switch>
                                <el-alert style="margin-top: 10px" title="导航标签超过容器时,可在导航上滚动鼠标来移动标签"></el-alert>
                            </div>
                            <div class="setting-category" style="display: flex;height: 80px;align-items: center">
                                <div style="width: 80px">
                                    <el-button type="primary" icon="el-icon-sort"
                                               style="transform: rotate(90deg)"></el-button>
                                </div>
                                <div>
                                    <el-alert title="切换灰度模式" style="margin-top: 10px"></el-alert>
                                </div>
                            </div>
                        </div>

                    </el-dropdown-menu>
                </el-dropdown>
                <!--               消息-->
                <span class="header-btn">
                    <el-badge>
                      <i class="el-icon-bell"></i>
                    </el-badge>
                </span>
                <!--               admin-->
                <el-dropdown>
                    <span class="header-btn">
                        Admin <i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu>
                        <el-dropdown-item>
                            <i class="fa fa-cog">个人中心</i>
                        </el-dropdown-item>
                        <el-dropdown-item>
                            <i class="fa fa-key">退出系统</i>
                        </el-dropdown-item>

                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </div>
        <div class="app">
            <div class="aside">
                <!--                menu-->
                <div class="menu">
                    <el-menu class="menu" @open="handleOpen" @close="handleClose"
                             :collapse="isCollapse">
                        <el-submenu index="1">
                            <template slot="title">
                                <i class="el-icon-location"></i>
                                <span slot="title">导航一</span>
                            </template>
                            <el-menu-item-group>
                                <span slot="title">分组一</span>
                                <el-menu-item index="1-1">选项1</el-menu-item>
                                <el-menu-item index="1-2">选项2</el-menu-item>
                            </el-menu-item-group>
                            <el-menu-item-group title="分组2">
                                <el-menu-item index="1-3">选项3</el-menu-item>
                            </el-menu-item-group>
                            <el-submenu index="1-4">
                                <span slot="title">选项4</span>
                                <el-menu-item index="1-4-1">选项1</el-menu-item>
                            </el-submenu>
                        </el-submenu>
                        <el-submenu index="1">
                            <template slot="title">
                                <i class="el-icon-location"></i>
                                <span slot="title">导航一</span>
                            </template>
                            <el-menu-item-group>
                                <span slot="title">分组一</span>
                                <el-menu-item index="1-1">选项1</el-menu-item>
                                <el-menu-item index="1-2">选项2</el-menu-item>
                            </el-menu-item-group>
                            <el-menu-item-group title="分组2">
                                <el-menu-item index="1-3">选项3</el-menu-item>
                            </el-menu-item-group>
                            <el-submenu index="1-4">
                                <span slot="title">选项4</span>
                                <el-menu-item index="1-4-1">选项1</el-menu-item>
                            </el-submenu>
                        </el-submenu>
                    </el-menu>

                </div>
                <!--                sidebar-->
                <div class="sidebar-toggle">
                    <div class="icon-left" @click="sidebarToggle">
                        <i class="el-icon-back"></i>
                    </div>
                </div>
            </div>
            <div class="app-body">
                11
                <div class="mainContainer"></div>
            </div>
        </div>
    </div>
</template>

<script>
	export default {
		name: "App",
		data() {
			return {
				isCollapse: false,//菜单默认折叠
			}
		},
		methods: {
			//侧边栏显示隐藏
			hiddenSidebar(e) {
				e.preventDefault();
				document.body.classList.toggle("sidebar-close");

			},
			//侧边栏展开收起
			sidebarToggle(e) {
				e.preventDefault(this.isCollapse);
				if (this.isCollapse) {
					document.body.classList.remove("sidebar-hidden");
					this.isCollapse = false;
				} else {
					document.body.classList.add("sidebar-hidden");
					this.isCollapse = true;
				}

			}
		},
		mounted() {

		}
	}
</script>

<style lang="scss">
    @import "../../assets/css/variables";

    .sidebar-hidden {
        .header {
            .logo {
                background: #222d32;

                .big {
                    display: none;
                }

                .min {
                    display: block;
                }

                width: 64px;
            }

        }

        .sidebar-toggle {
            .icon-left {
                transform: rotate(180deg);
            }
        }

        .main {
            .app-body {
                margin-left: 64px;
            }
        }

    }

    .sidebar-close {
        .header {
            .logo {
                width: 0;
                overflow: hidden;
            }
        }
        .aside {
            margin-left: -230px;
        }

        .main {
            .app-body {
                margin-left: 0;
            }
        }
    }

    .sidebar-hidden.sidebar-close {
        .aside {
            margin-left: -64px;
        }
    }

    .main {
        display: flex;

        .el-menu:not(.el-menu--collapse) {
            width: 230px;
        }

        .app {
            width: 100%;
            background-color: #ecf0f5;
            margin-top: 50px;
        }

        .aside {
            position: fixed;
            background-color: #222d32;
            top: 50px;
            transition: all 0.3s ease-in-out;
            .menu {
                height: calc(100vh - 100px);
                overflow: auto;
            }

            .sidebar-toggle {
                position: relative;
                width: 100%;
                height: 50px;
                background: mix(#000, $--color-primary, 10%);
                color: #fff;
                cursor: pointer;

                .icon-left {
                    position: absolute;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    right: 0;
                    width: 64px;
                    height: 100%;
                    font-size: 20px;
                    transition: all 0.3s ease-in-out;
                }
            }


        }

        .app-body {
            margin-left: 230px;
            -webkit-transition: margin-left 0.3s ease-in-out;
            transition: margin-left 0.3s ease-in-out;
        }

        .main-container {
            padding: 6px;
            min-height: calc(100vh - 50px);
        }

    }

    .header {
        width: 100%;
        position: fixed;
        display: flex;
        height: 50px;
        background: $--color-primary;
        z-index: 10;

        .logo {
            width: 230px;
            height: 50px;
            text-align: center;
            line-height: 50px;
            color: #fff;
            background: mix(#000, $--color-primary, 10%);
            -webkit-transition: width 0.35s;
            transition: all 0.3s ease-in-out;
        }

        .right {
            /*header 右侧*/
            position: absolute;
            right: 0;
        }

        .header-btn {
            /*header 按钮*/
            height: 50px;
            line-height: 50px;
            text-align: center;
            cursor: pointer;
            color: #fff;
            padding: 0 14px;

        }
    }

    .menu {
        border-right: none;
    }


</style>