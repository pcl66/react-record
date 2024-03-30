import { NavLink, Navigate, Outlet, createBrowserRouter } from 'react-router-dom'
import { Welcome } from './pages/welcome'

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
            element: <div style={{ border: '1px solid red' }}>
                1
                <NavLink to="/welcome/2">2</NavLink>
              </div>,
          },
          {
            path: '2',
            element: <div style={{ border: '1px solid red' }}>
                2
                <NavLink to="/welcome/3">3</NavLink>
              </div>,
          },
          {
            path: '3',
            element: <div style={{ border: '1px solid red' }}>3</div>,
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
