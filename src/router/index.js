import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Logout from '../views/Logout.vue'
import Index from '../views/Index.vue'
import About from '../views/About.vue'
import categoryList from '../views/category/CategoryList.vue'
import categoryImport from '../views/category/CategoryImport.vue'
import orderList from '../views/order/OrderList'
import AllOrder from '../views/order/AllOrder'
import productList from '../views/product/ProductList'
import productImport from '../views/product/ProductImport'
import fa from "element-ui/src/locale/lang/fa";


Vue.use(VueRouter)

  const routes = [

    {

      path: '/',
      name: '订单管理',
      component: Index,
      redirect:"/orderList",
      children :[
        {
          path: '/orderList',
          name: '当前订单',
          component: orderList
        },
        {
          path: '/AllOrder',
          name: '全部订单',
          component: AllOrder
        }
      ]
    }, {

      path: '/',
      name: '商品管理',
      component: Index,
      redirect:"/productList",
      children :[
        {
          path: '/productList',
          name: '商品列表',
          component: productList
        },
        {
          path: '/productImport',
          name: '批量导入',
          component: productImport
        }
      ]
    },
    {

      path: '/',
      name: '类目管理',
      component: Index,
      redirect:"/categoryList",
      children :[
        {
          path: '/categoryList',
          name: '类目列表',
          component: categoryList
        },
        {
          path: '/categoryImport',
          name: '批量导入',
          component: categoryImport
        }
      ]
    },
    {

      path: '/',
      name: '',

      redirect:"/login",
      component: Login,
      children :[
        {
          path: '/login',
          name: '退出登录',
          component: Logout
        }
        ]
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
