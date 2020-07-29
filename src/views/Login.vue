<template>
    <body id="poster">
    <el-form
            class="login-container"
            ref="loginFormRef" :model="loginForm" :rules="rules"
           label-position="left" label-width="0px">
        <h3 class="login_title">系统登录</h3>
        <el-form-item prop="userName">
            <el-input type="text" v-model="loginForm.userName" auto-complete="off" placeholder="用户名"></el-input>
        </el-form-item>
        <el-form-item prop="password">
            <el-input type="password" v-model="loginForm.password" auto-complete="off" placeholder="密码"></el-input>
        </el-form-item>

        <el-form-item style="width: 100%">
            <el-button type="primary" style="width: 100%;background: #505458;border: none" v-on:click="login">登录</el-button>
        </el-form-item>
    </el-form>
    </body>
</template>


<script>
    export default {
        name: "Login",
        data() {
            return {
                loginForm: {
                    userName: 'admin',
                    password: '123456'
                },
                responseResult: [],
                rules:{
                    userName : [
                        {type: "string",required :true,message:"请输入用户名",trigger:"blur"},
                        {min:3,max:10,message: "用户名长度在3-10个字符之间",trigger:"blur"}
                    ],
                    password :[
                        {required :true,message:"请输入密码",trigger:"blur"},
                        {min:6,max:15,message: "密码长度在6-15个字符之间",trigger:"blur"}
                    ]
                }
            }
        },
        methods: {
            login() {
                this.$refs.loginFormRef.validate(async  valid=>{
                    if(!valid) return;
                    const {data:res} = await this.$http.post(`/user/login/${this.loginForm.userName}/${this.loginForm.password}`)
                    console.log(res)
                    if(res.code===401){
                        const h = this.$createElement;
                        return this.$notify({
                            title: '登录异常',
                            message: h('i', { style: 'color: teal'}, res.msg)
                        })
                    }else if(res.code===500){
                        const h = this.$createElement;
                        return this.$notify({
                            title: '登录异常',
                            message: h('i', { style: 'color: teal'}, res.msg)
                        })
                    }else {
                        this.$message.success(res.msg)
                        window.sessionStorage.setItem('token',res.object.token)
                        await this.$router.push('/orderList')
                    }
                })

                // const  _this= this
                // axios
                //     .post('http://192.168.0.110:9091/user/login?userName='+this.loginForm.username+"&password="+this.loginForm.password).then(function (resp) {
                //     // .get('http://192.168.1.182:8087/Login.html?userName=user&password=123456').then(function (resp) {
                //
                //     if(resp.data.code==='200'){
                //         _this.$router.push('/orderList ')
                //     }else{
                //         const h = _this.$createElement;
                //
                //         _this.$notify({
                //             title: '登录异常',
                //             message: h('i', { style: 'color: teal'}, '登录失败，请稍后再试！')
                //         });
                //     }
                // })

            }
        }
    }
</script>

<style>
    #poster {
        /*background:url("../assets/eva.jpg") no-repeat;*/
        /*background-position: center;*/
        height: 100%;
        width: 100%;
        background-size: cover;
        position: fixed;
    }
    body{
        margin: 0px;
        padding: 0;
    }

    .login-container {
        border-radius: 15px;
        background-clip: padding-box;
        margin: 90px auto;
        width: 350px;
        padding: 35px 35px 15px 35px;
        background: #fff;
        border: 1px solid #eaeaea;
        box-shadow: 0 0 25px #cac6c6;
    }

    .login_title {
        margin: 0px auto 40px auto;
        text-align: center;
        color: #505458;
    }


</style>
