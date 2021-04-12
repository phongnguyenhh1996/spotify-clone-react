import Layout from '@/components/layout/layout'
import Home from '@/containers/Home'
import Login from '@/containers/Login'

const routes = [
  {
    path: '/',
    component: Home,
    isAuthRoute: false,
    exact: true,
    layout: Layout,
  },
  {
    path: '/login',
    component: Login,
    isAuthRoute: false,
    exact: true,
    layout: Layout,
  },
]

export default routes
