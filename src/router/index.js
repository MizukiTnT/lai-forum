import Vue from 'vue'
import Router from 'vue-router'
import layOut from '@/pages/layOut'
const _import = file => () => import('@/pages/' + file)
Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'index',
      path: '/',
      redirect: '/home'
    },
    {
      name: 'home',
      path: '/home',
      component: layOut,
      redirect: '/home/index/1',
      children: [
        {
          path: 'index/:sort',
          component: _import('home'),
          props: true,
          meta: {
            // component其实表示的是指哪个页面用到了component
            component: 'home'
          }
        }
      ]
    },
    {
      name: 'writte',
      path: '/writte',
      component: layOut,
      redirect: '/writte/index',
      children: [
        {
          path: 'index',
          component: _import('writte')
        }
      ]
    },
    {
      name: 'user',
      path: '/userCenter',
      redirect: '/userCenter/editor/account',
      component: layOut,
      children: [
        {
          path: 'editor/:page',
          component: _import('userCenter'),
          props: true,
          meta: {
            role: 'user'
          }
        },
        {
          path: 'account/:list',
          component: _import('myAccount'),
          props: true,
          meta: {
            role: 'user',
            component: 'account'
          }
        }
      ]
    },
    {
      path: '/article',
      name: 'article',
      component: layOut,
      redirect: '/article/page',
      children: [
        {
          path: 'page/:id',
          component: _import('article')
        }
      ]
    }
  ]
})
