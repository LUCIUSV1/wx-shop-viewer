<template>
    <!--  构建整个页面布局    -->
    <el-container style=" border: 1px solid #eee">
        <!--构建左侧菜单-->
        <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
            <h2 style="text-align: center">后台管理</h2>
            <!--        左侧菜单-->
            <el-menu router :default-openeds="['1']">
                <el-submenu v-for="(item,index) in $router.options.routes" :index="index+''">
                    <template slot="title">{{item.name}}</template>
                    <el-menu-item v-for="(item2,index2)  in item.children" :index="item2.path" :class="$route.path==item2.path ? 'is-active' :''">
                        {{item2.name}}
                    </el-menu-item>
                </el-submenu>
            </el-menu>

        </el-aside>

        <el-container>
            <el-header style="text-align: right; font-size: 12px">

                <span>{{username}}</span>
            </el-header>

            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>


</template>

<script>
    export default {
        name: "Index",
        data(){
            return {
                username : sessionStorage.getItem("user")
            }
        }
    }
</script>

<style scoped>

</style>
