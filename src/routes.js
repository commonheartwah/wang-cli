// 登录注册404
import Login from './views/Login'
import NotFound from './views/404'
import Home from './views/Home'
// demo
import DemoList from './views/demoManage/demoList.vue'

// let or const 影响
const routes = [
    {
        path: '/login',
        component: Login,
        name: '',
        hidden: true
    },
    {
        path: '/404',
        component: NotFound,
        name: '',
        hidden: true
    },
    {
        path: '*',
        hidden: true,
        redirect: { path: '/404' }
    },
    {
        path: '/',
        component: Home,
        name: 'demo',
        iconCls: 'fa fa-envelope fa-fw',
        children: [
            { path: '/DemoList', component: DemoList, name: 'demo列表' },
        ]
    },
]
export default routes;
