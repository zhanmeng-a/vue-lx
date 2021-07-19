import VueRouter from 'vue-router'



import home from './home.vue'
import search from './subcom/search.vue'
import huiyuan from './subcom/huiyuan.vue'
import shopping from './subcom/shopping.vue'


var router =new VueRouter({
    // routes:[
    //     { path: '/', redirect: '/home'},
    //     {path:'/home',component:home},
    //     {path:'/search',component:search},
    //     {path:'/huiyuan',component:huiyuan},
    //     {path:'/shopping',component:shopping},
    // ]
    routes:[
                { path: '/', redirect: '/home'},
                {path:'/home',component:home},
                {path:'/search',component:search},
                {path:'/huiyuan',component:huiyuan},
                {path:'/shopping',component:shopping},
//         {path:'/a',component:two},
//         {path:'/b',component:there}
    ]
})

export default router