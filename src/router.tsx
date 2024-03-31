import { Navigate, Outlet, createHashRouter } from 'react-router-dom'
import { Welcome } from './pages/welcome'
import { Welcome1 } from './pages/welcome/components/Welcome1'
import { Welcome2 } from './pages/welcome/components/Welcome2'
import { Welcome3 } from './pages/welcome/components/Welcome3'
import { Welcome4 } from './pages/welcome/components/Welcome4'

export const router = createHashRouter([
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
    path: '*',
    element: <Navigate to="/welcome/1" />,
  },

])
