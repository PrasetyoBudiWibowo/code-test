import React from 'react'

const Login = React.lazy(() => import('./views/pages/login/Login'))
const Home = React.lazy(() => import('./views/home/index'))

const routes = [
  { path: '/login', name: 'Login', element: Login },
  { path: '/home', name: 'Home', element: Home },
]

export default routes
