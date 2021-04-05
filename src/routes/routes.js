import Home from '@/containers/Home'
import Login from '@/containers/Login'

const routes = [
  {
    path: '/',
    component: Home,
    isAuthRoute: false,
    exact: true,
  },
  {
    path: '/login',
    component: Login,
    isAuthRoute: false,
    exact: true,
  },
]

export default routes
