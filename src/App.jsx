import { RouterProvider, createBrowserRouter } from "react-router-dom"

import "./App.scss"
import Layout from "./layout"
import About from "./pages/about"
import Home from "./pages/home"
import ServicePage from "./pages/service"
import Trainning from "./pages/trainning"

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/service",
          element: <ServicePage />,
        },
        {
          path: "/training",
          element: <Trainning />,
        },
      ],
    },
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
