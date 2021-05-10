import Vue from 'vue'
import Router from 'vue-router'
// import Pos from '@/components/page/Pos'

// Vue.use(Router)

// export default new Router({
//     routes: [{
//         path: '/',
//         name: 'Pos',
//         component: Pos
//     }]
// })
const Pos = () =>
    import ("@/components/page/Pos")

// 1.通过Vue.use(插件), 安装插件
Vue.use(Router)

// 2.创建VueRouter对象
const routes = [{
    path: '/',
    name: 'Pos',
    component: Pos
}]
const router = new Router({
    // 配置路由和组件之间的应用关系
    routes,
    hash: 'history',
})

// 3.将router对象传入到Vue实例
export default router