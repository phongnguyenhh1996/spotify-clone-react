import LoginLayout from '@/components/Layout/LoginLayout'
import Home from '@/containers/Home'
import Login from '@/containers/Login'

const routes = [
  {
    path: '/',
    component: Home,
    isAuthRoute: false,
    exact: true,
    layout: LoginLayout,
  },
  {
    path: '/login',
    component: Login,
    isAuthRoute: false,
    exact: true,
    layout: LoginLayout,
  },
]

export default routes
