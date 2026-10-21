import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Project from '../views/Project.vue'
import ProjectList from '../views/ProjectList.vue'
import ProjectDetail from '../views/ProjectDetail.vue'
import Login from '../views/Login.vue'
import Admin from '../views/Admin.vue'
import AdminProfile from '../views/AdminProfile.vue'
import AdminProject from '../views/AdminProject.vue'
import NotFound from '../views/NotFound.vue'
import ArticleList from '../views/ArticleList.vue'
import AdminArticle from '../views/AdminArticle.vue'
import { useUserStore } from '../stores/userStore'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: { title: '个人主页', requireAuth: false }
  },
  {
    path: '/project',
    name: 'Project',
    component: Project,
    redirect: { name: 'ProjectList' },
    meta: { title: '项目中心', requireAuth: false },
    children: [
      {
        path: 'list',
        name: 'ProjectList',
        component: ProjectList,
        meta: { title: '项目列表', requireAuth: false }
      },
      {
        path: 'detail/:id',
        name: 'ProjectDetail',
        component: ProjectDetail,
        meta: { title: '项目详情', requireAuth: false }
      }
    ]
  },
  {
    path:'/article',
    name:'ArticleList',
    component:ArticleList,
    meta:{title:'文章列表',requireAuth:false}
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { title: '登录后台', requireAuth: false }
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    redirect: { name: 'AdminProfile' },
    meta: { title: '后台管理', requireAuth: true },
    children: [
      {
        path: 'profile',
        name: 'AdminProfile',
        component: AdminProfile,
        meta: { title: '编辑个人简介', requireAuth: true }
      },
      {
        path: 'project',
        name: 'AdminProject',
        component: AdminProject,
        meta: { title: '编辑项目信息', requireAuth: true }
      },
      {
        path:'article',
        name:'AdminArticle',
        component:AdminArticle,
        meta:{title:'文章管理',requireAuth:true}
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
    meta: { title: '页面不存在', requireAuth: false }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title ? to.meta.title + " | 钟丹个人主页" : "钟丹个人主页"
  const userStore = useUserStore()
  if (to.meta.requireAuth && !userStore?.isAuthenticated) {
    next({ name: 'Login', query: { redirect: to.fullPath } })
  } else {
    next()
  }
})

export default router
