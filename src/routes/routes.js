import LoginLayout from '@/components/Layout/WellComeLayout'
import Home from '@/containers/Home'
import Login from '@/containers/Login'
import Register from '@/containers/Register'
import Wellcome from '@/containers/WellCome'

const routes = [
  {
    path: '/home',
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
  },
  {
    path: '/register',
    component: Register,
    isAuthRoute: false,
    exact: true,
  },
  {
    path: '/',
    component: Wellcome,
    isAuthRoute: false,
    exact: true,
    layout: LoginLayout,
  },
]

export default routes
