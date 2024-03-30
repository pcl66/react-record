import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Welcome } from './pages/welcome'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Welcome />,
  },

])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
