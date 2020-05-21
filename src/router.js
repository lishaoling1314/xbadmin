import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login/Login.vue'
import Home from '@/pages/home/Home.vue'
import Index from '@/pages/index/Index.vue'
import Wx from '@/pages/wx/Wx.vue'
import Publicread from '@/pages/publicread/Publicread.vue'
import Rellread from '@/pages/rellread/Rellread.vue'

Vue.use(Router)

const router = new Router({
    mode:'history',
    routes: [
      {
        path: "/login",
        name: "login",
        component: Login,
      },
      {
        path: '/',
        name: 'home',
        component:Home,
        icon:'el-icon-s-tools',
        redirect: '/home',
        meta:{isLogin: true},
        children:[
          {
            name:"home",
            path:"home",
            component:Index,
          },
          {
            path: '/wx',
            name: '微信任务',
            component: Wx,
            children:[
              {
                name:"publicread",
                path:"/publicread",
                component:Publicread,
                meta: { title: '普通阅读'}
              },
              {
                name:"rellread",
                path:"/rellread",
                component:Rellread,
                meta: { title: '真人阅读',noCache: true }
              },
            ]
          }
        ]
      },
    ]
})

export default router;
