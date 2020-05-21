<template>
  <el-container>
    <el-header>
      <div class="title">自媒体数据增长服务平台</div>
      <ul>
        <li><i>用户:</i>15767221942</li>
        <li><i>账户余额:</i>￥0.10</li>
        <li @click="logout()">退出</li>
      </ul>
    </el-header>
    <el-container>
      <el-aside width="auto">
        <el-row>
            <el-col>   
              <el-menu
                default-active="2-1"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                v-if="!isCollapse" 
                >
                <el-menu-item index="1" @click="goTo('/')"><i class="el-icon-s-home"></i><span>首页</span></el-menu-item>
                <el-submenu index="2">
                  <template slot="title">
                    <i class="el-icon-s-tools"></i>
                    <span>微信任务</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="2-1" @click="goTo('/publicread')">普通阅读</el-menu-item>
                    <el-menu-item index="2-2" @click="goTo('/rellread')">真人阅读</el-menu-item>
                    <el-menu-item index="2-3" @click="goTo('/publicread')">普通阅读</el-menu-item>
                    <el-menu-item index="2-4" @click="goTo('/rellread')">真人阅读</el-menu-item>
                    <el-menu-item index="2-5" @click="goTo('/publicread')">普通阅读</el-menu-item>
                    <el-menu-item index="2-6" @click="goTo('/rellread')">真人阅读</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>  
              </el-menu>
            </el-col>
          </el-row>
      </el-aside>
      <el-container>
        <el-main>
            <div class="toper">
              <el-radio-group v-model="isCollapse">
                <el-radio-button :label="false" v-show='isCollapse'><i class='el-icon-s-unfold'></i></el-radio-button>
                <el-radio-button :label="true" v-show='!isCollapse'><i class='el-icon-s-fold'></i></el-radio-button>
              </el-radio-group>
              <el-breadcrumb separator=">"><!--separator改成面包屑导航分隔线-->
                  <el-breadcrumb-item v-for="item in levelList" :key="item.path" :to="item.path">{{item.meta.title}}</el-breadcrumb-item>
              </el-breadcrumb>
            </div>
            <div class="container">
              <router-view></router-view>
            </div>
        </el-main>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
export default {
    data(){
      return{
        isCollapse:false,
        levelList: []
      }
    },
    props:['currentPath'],
    watch:{
      $route() {
        this.getBreadcrumb()
      }
    },
    created(){
      this.getBreadcrumb()
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      goTo(path) {
        this.$router.replace(path);
      },
      // 退出功能
      logout() {
        // 清空token
        window.sessionStorage.clear()
        this.$router.push('/login')
      },
      /***面包屑导航***/
      getBreadcrumb() {
        let matched = this.$route.matched.filter(item => item.name)
        const first = matched[0];
        console.log(first);
        if (first && first.name.trim().toLocaleLowerCase() !== '首页'.toLocaleLowerCase()) {
            matched = [{ path: '/', meta: { title: '首页' }}].concat(matched)
        }
        this.levelList = matched
      },
    }
  }
</script>

<style scoped>
  .el-container {
    height:100%
  }
  .el-header {
    background:url('http://frontendengineer.gzmylike.cn/ling/xinbangadmin/images/bg.png') repeat #c10903;
    color: #fff;
    line-height: 60px;
    font-size:22px;
    display: flex;
    display: -webkit-flex;
    justify-content: space-between;
  }
  .el-header ul li{ float: left; padding:0 10px}
  .el-header ul li i{ font-size:20px;}
  
  .el-aside {
    background-color: #e4e4e4;
    color: #333;
    text-align: center;
    z-index:1;
  }
  .el-aside .el-menu{ background: none;}
  /**下面这句很重要，不加伸缩会有点卡顿**/
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
  }
  .el-main {
    background-color: #fff;
    color: #333;
    min-height: 100%;
    position: relative;
  }
  .container{ padding:30px 0}
  .el-submenu .el-menu-item{ padding:0 !important; min-width:auto;}
  .el-radio-button__inner{
    font-size:28px; background: #c10903 !important; padding:5px 10px; color: #fff; border-radius:5px;
  }
  .toper{ display: flex; display: -webkit-flex;}
  .el-breadcrumb{ font-size: 16px; padding:0 20px; line-height: 34px;}
</style>

