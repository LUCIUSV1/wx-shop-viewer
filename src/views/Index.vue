<template>
<el-container>
    <el-header class="el-header">
        <div class="header-div">
            <img src="../assets/icon2.png" alt="">
            <span>后台管理系统</span>
        </div>
        <el-button class="logoutBtn" type="info" @click="logout">退出</el-button>
    </el-header>
    <el-container>
        <el-aside style="width: 200px">

            <el-menu
                    class="el-menu-vertical-demo"
                    background-color="#333744"
                    text-color="#fff"
                    :unique-opened="true "
                    active-text-color="#409EFF"

                    :collapse-transition="false"

                    :router="true">
                <el-submenu v-for="item in menu_info" :index="item.authName+' '" :key="item.id">
                    <template slot="title">
                        <i></i>
                        <span>{{item.authName}}</span>
                    </template>
                    <el-menu-item :index="'/'+subItem.path" v-for="subItem in item.children"
                                  :key="subItem.id"
                    >
                        <span>{{subItem.authName}}</span>
                    </el-menu-item>
                </el-submenu>
            </el-menu>
        </el-aside>
        <el-container>
            <el-main>
                <router-view></router-view>
            </el-main>
            <el-footer>@2020</el-footer>
        </el-container>
    </el-container>
</el-container>


</template>

<script>
    export default {
        name: "Index",
        data(){
            return {
                    menu_info:[
                        {
                            id: 101,
                            authName: "订单管理",
                            path: null,
                            children: [
                                {
                                    id: 1011,
                                    authName: "订单列表",
                                    path: '/orderList',
                                }
                            ]
                        },
                        {
                            id: 102,
                            authName: "商品管理",
                            path: null,
                            children: [
                                {
                                    id: 1021,
                                    authName: "商品列表",
                                    path: 'productList',

                                },
                                {
                                    id: 1022,
                                    authName: "类目列表",
                                    path: 'proCateList',

                                },
                                {
                                    id: 1023,
                                    authName: "批量导入",
                                    path: 'proCateImp',

                                }
                            ]
                        }
                    ]
            }
        },
        methods:{
            logout(){
                window.sessionStorage.clear()
                this.$message.info('退出成功')
                this.$router.push('/login')
            }
        }
        ,created() {
        }
    }
</script>

<style scoped>
img{
    width: 50px;
    height: 50px;
}
.el-footer {
    background-color: #373d41;
    color: #ffffff;
    text-align: center;
    line-height: 60px;
}
.el-header{
    background-color: #373d41;
    display: flex;
    justify-content: space-between;
    padding-left: 0px;
    align-items: center;
    color: white;
    font-size: 20px;
}
.el-container{
    height: 100%;
}
.el-aside {

    color: #333;
    text-align: center;
    line-height: 200px;

}
.el-menu-vertical-demo{
    height: 100%;
}
.el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
}

body > .el-container {
    margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
    line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
    line-height: 320px;
}
</style>
