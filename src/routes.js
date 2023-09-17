import React from 'react'

const Register = React.lazy(() => import('./views/pages/register/Register'))
const Login = React.lazy(() => import('./views/pages/login/Login'))
const Account = React.lazy(() => import('./views/account/index'))
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Home = React.lazy(() => import('./views/home/index'))
const TopUp = React.lazy(() => import('./views/Transaction/topUp/index'))
const Report = React.lazy(() => import('./views/report/index'))
const Payment = React.lazy(() => import('./views/Transaction/payment/index'))

const routes = [
  { path: '/register', name: 'Register', element: Register },
  { path: '/login', name: 'Login', element: Login },
  { path: '/account', name: 'Account', element: Account },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/home', name: 'Home', element: Home },
  { path: '/top-up', name: 'Top Up', element: TopUp },
  { path: '/report', name: 'Report', element: Report },
  { path: '/payment', name: 'Payment', element: Payment },
]

export default routes
