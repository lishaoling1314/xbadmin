<template>
    <div class="login">
      <div class="login-container">
          <el-form :model="ruleForm" :loginRules="loginRules"
          status-icon
          ref="ruleForm" 
          label-position="left" 
          label-width="0px" 
          class="demo-ruleForm login-page">
              <h3 class="title">自媒体数据增长服务平台</h3>
              <el-form-item prop="username">
                  <el-input type="text" 
                      v-model="ruleForm.username" 
                      auto-complete="off" 
                      placeholder="用户名"
                  ></el-input>
              </el-form-item>
              <el-form-item prop="password">
                  <el-input type="password" 
                      v-model="ruleForm.password" 
                      auto-complete="off" 
                      placeholder="密码"
                  ></el-input>
              </el-form-item>
              <el-checkbox 
                  v-model="checked"司空见惯
                  class="rememberme"
              >一周内自动登录</el-checkbox>
              <el-form-item style="width:100%;">
                  <el-button type="primary" style="width:100%;" @click="handleSubmit" :loading="logining">登录</el-button>
              </el-form-item>
          </el-form>
      </div>
      <div class="wx">
          <p>使用第三方微信号登录</p>
          <a onclick="alert('OK,线上才能实现此功能')"><img src="http://frontendengineer.gzmylike.cn/ling/xinbangadmin/images/wx.png" alt=""></a>
      </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            logining: false,
            ruleForm: {
                username:'admin',
                password:'123456',
            },
            loginRules: {
                username:[{required:true, message:'请输入用户名', trigger:'blur'}],
                password:[{required:true, message:'请输入您的密码', trigger:'blur'}]
            },
            checked: false
        }
    },
    methods: {
        handleSubmit(){
            this.$refs.ruleForm.validate((valid) => {
                if(valid){
                    this.logining = true;
                    if(this.ruleForm.username === 'admin' && this.ruleForm.password === '123456'){
                        this.logining = false;
                        sessionStorage.setItem('user', this.ruleForm.username);
                        this.$router.push({path: '/home'});
                        //console.log(sessionStorage.getItem('user'))
                    }else{
                        this.logining = false;
                        this.$alert('用户名或者密码错误,请重新输入!', 'info', {
                            confirmButtonText: '好的'
                        })
                    }
                }else{
                    console.log('error submit!');
                    return false;
                }
            })
        },
    }
};
</script>

<style scoped>
.login{
    width:100%;
    height:100%;
    position: absolute;
    top:0;bottom:0; left:0; right:0;
    margin:auto;
    background:url('http://frontendengineer.gzmylike.cn/ling/xinbangadmin/images/bg.png') repeat #c10903;
}
.login-container {
    width: 100%;
}
.login-page {
    -webkit-border-radius: 5px;
    border-radius: 5px;
    margin: 180px auto 30px;
    width: 350px;
    padding: 35px 35px 15px;
    background: #fff;
}
.login-page .title{ font-weight:normal; text-align: center; margin-bottom:10px;}
.login-page label.el-checkbox.rememberme {
    margin: 0px 0px 15px;
    text-align: left;
}
.el-button--primary{ background: #c10903; border: none;}
.login .wx { text-align: center;}
.login .wx p{ color: #fff; font-size: 16px;}
.login .wx a{ display: block; margin-top: 10px; cursor: pointer;}
</style>

