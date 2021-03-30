// eslint-disable-next-line
import { UserLayout, BasicLayout, BlankLayout } from '@/layouts'
import { bxAnaalyse } from '@/core/icons'

// const RouteView = {
//   name: 'RouteView',
//   render: h => h('router-view')
// }

export const asyncRouterMap = [
  {
    path: '/',
    name: 'index',
    component: BasicLayout,
    meta: { title: 'menu.home' },
    redirect: '/dashboard/workplace',
    children: [
      {
        path: 'workSpace',
        name: 'workSpace',
        component: () => import('@/views/dashboard/WorkSpace'),
        // eslint-disable-next-line no-undef
        meta: { title: '工作台', icon: bxAnaalyse }
      },
      {
        path: 'receipt',
        name: 'receiptIssued',
        component: () => import('@/views/receiptIssu/ReceiptIssu'),
        meta: { title: '收据开具', icon: bxAnaalyse }
      },
      {
        path: 'receipt-collection',
        name: 'receiptCollection',
        component: () => import('@/views/receiptPayment/ReceiptPayment'),
        meta: { title: '收据收款', icon: bxAnaalyse }
      },
      {
        path: 'receipt-audit',
        name: 'receiptAudit',
        component: () => import('@/views/receiptAudit/ReceiptAudit'),
        meta: { title: '收据审核', icon: bxAnaalyse }
      },
      {
        path: 'receipt-query',
        name: 'receiptQuery',
        component: () => import('@/views/receiptTheQuery/ReceiptTheQuery'),
        meta: { title: '收据查询', icon: bxAnaalyse }
      },
      {
        path: 'receipt-print-list',
        name: 'receiptPrintList',
        component: () => import('@/views/receiptPrintList/ReceiptPrintList'),
        meta: { title: '收据打印', icon: bxAnaalyse }
      },
      {
        path: 'receipt-print',
        name: 'receiptPrint',
        component: () => import('@/views/receiptPrint/ReceiptPrint'),
        meta: { title: '收据打印详情' }
        // hidden: true
      }
    ]
  },
  {
    path: '*',
    redirect: '/404',
    hidden: true
  }
]

/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
  {
    path: '/user',
    component: UserLayout,
    redirect: '/user/login',
    hidden: true,
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/Login')
      },
      {
        path: 'register',
        name: 'register',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/Register')
      },
      {
        path: 'register-result',
        name: 'registerResult',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/RegisterResult')
      },
      {
        path: 'recover',
        name: 'recover',
        component: undefined
      }
    ]
  },

  {
    path: '/404',
    component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/404')
  }
]
