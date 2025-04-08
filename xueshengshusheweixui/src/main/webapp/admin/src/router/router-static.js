import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'

     import users from '@/views/modules/users/list'
    import dictionary from '@/views/modules/dictionary/list'
    import forum from '@/views/modules/forum/list'
    import guzhangshangbao from '@/views/modules/guzhangshangbao/list'
    import guzhangshangbaoCommentback from '@/views/modules/guzhangshangbaoCommentback/list'
    import news from '@/views/modules/news/list'
    import weixiuyuan from '@/views/modules/weixiuyuan/list'
    import xuesheng from '@/views/modules/xuesheng/list'
    import config from '@/views/modules/config/list'
    import dictionaryChulijieguo from '@/views/modules/dictionaryChulijieguo/list'
    import dictionaryForum from '@/views/modules/dictionaryForum/list'
    import dictionaryForumState from '@/views/modules/dictionaryForumState/list'
    import dictionaryGuzhangshangbao from '@/views/modules/dictionaryGuzhangshangbao/list'
    import dictionaryNews from '@/views/modules/dictionaryNews/list'
    import dictionaryQuyu from '@/views/modules/dictionaryQuyu/list'
    import dictionarySex from '@/views/modules/dictionarySex/list'





//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    } ,{
        path: '/users',
        name: '管理信息',
        component: users
      }
    ,{
        path: '/dictionaryChulijieguo',
        name: '处理结果',
        component: dictionaryChulijieguo
    }
    ,{
        path: '/dictionaryForum',
        name: '帖子类型',
        component: dictionaryForum
    }
    ,{
        path: '/dictionaryForumState',
        name: '帖子状态',
        component: dictionaryForumState
    }
    ,{
        path: '/dictionaryGuzhangshangbao',
        name: '故障类型',
        component: dictionaryGuzhangshangbao
    }
    ,{
        path: '/dictionaryNews',
        name: '新闻信息类型',
        component: dictionaryNews
    }
    ,{
        path: '/dictionaryQuyu',
        name: '所在区域',
        component: dictionaryQuyu
    }
    ,{
        path: '/dictionarySex',
        name: '性别类型',
        component: dictionarySex
    }
    ,{
        path: '/config',
        name: '轮播图',
        component: config
    }


    ,{
        path: '/dictionary',
        name: '字典表',
        component: dictionary
      }
    ,{
        path: '/forum',
        name: '论坛',
        component: forum
      }
    ,{
        path: '/guzhangshangbao',
        name: '故障上报',
        component: guzhangshangbao
      }
    ,{
        path: '/guzhangshangbaoCommentback',
        name: '故障上报评价',
        component: guzhangshangbaoCommentback
      }
    ,{
        path: '/news',
        name: '新闻信息',
        component: news
      }
    ,{
        path: '/weixiuyuan',
        name: '维修人员',
        component: weixiuyuan
      }
    ,{
        path: '/xuesheng',
        name: '学生',
        component: xuesheng
      }


    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
