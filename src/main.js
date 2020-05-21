import Vue from 'vue'
import App from './App.vue'
import router from './router.js' /**不加这个会报[Vue warn]: Unknown custom element: <router-view>．．．**/
Vue.config.productionTip = false

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css' //(根据版本路径不同会有差异，按照自己版本路径)
// import '../theme/index.css' // element改变主题(建议百度)
Vue.use(ElementUI)

import '@/assets/css/common.css' // 共用css

//router.beforeEach记得要写在new Vue的前面，不然不执行
router.beforeEach((to, from, next) => {
  //console.log(to.meta.isLogin);
  if (to.meta.isLogin) {
    if(sessionStorage.getItem('user')){ //如果获取到用户名，则next()
        next();
    } else { //不然就跳转到登录；
        next('/');
    }
  } else {
      next();
  }
})

new Vue({
  el: '#app',
  router,
  render: h => h(App),
}).$mount('#app')
