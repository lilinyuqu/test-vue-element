<template>
    <div class="main">
        <div class="header">
            <div class="logo">
                <span class="big">权限应用模板</span>
            </div>
            <!--           隐藏按钮-->
            <span class="header-btn">
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
                    <span class="el-dropdown-link">
                        <i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">

                    </el-dropdown-menu>
                </el-dropdown>
                <!--               消息-->
                <!--               admin-->
            </div>
        </div>
        <div class="app">
            <div class="aside"></div>
            <div class="app-body"></div>
        </div>
    </div>
</template>

<script>
	export default {
		name: "App"
	}
</script>

<style lang="scss">
    @import "../../assets/variables.scss";

    .main {
        display: flex;

        .app {
            width: 100%;
            background-color: #ecf0f5;
            margin-top: 50px;
        }

        .aside {
            position: fixed;
            background-color: #222d32;

        }

    }

    .header {
        width: 100%;
        position: fixed;
        display: flex;
        height: 50px;
        background: $--color-primary;
        z-index: 10;
    }


</style>