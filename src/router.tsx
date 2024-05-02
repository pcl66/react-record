import { Navigate, Outlet, createBrowserRouter } from 'react-router-dom'
import { Welcome } from './pages/welcome'
import { Welcome1 } from './pages/welcome/components/Welcome1'
import { Welcome2 } from './pages/welcome/components/Welcome2'
import { Welcome3 } from './pages/welcome/components/Welcome3'
import { Welcome4 } from './pages/welcome/components/Welcome4'
import { Home } from './pages/home'
import { RecordList } from './pages/record-list'
import { Login } from './pages/login'
import { ItemsNew } from './pages/items-new'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Outlet />,
    children: [
      {
        path: '',
        element: <Navigate to="/welcome/1" />,
      },
      {
        path: 'welcome',
        element: <Welcome />,
        children: [
          {
            path: '1',
            element: <Welcome1 />,
          },
          {
            path: '2',
            element: <Welcome2 />,
          },
          {
            path: '3',
            element: <Welcome3 />,
          },
          {
            path: '4',
            element: <Welcome4 />,
          },
        ],
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/record-list',
    element: <RecordList />,
  },
  {
    path: '/items-new',
    element: <ItemsNew />,
  },
  {
    path: '*',
    element: <Navigate to="/welcome/1" />,
  },

])
