
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import AppLayout from "./layouts/app-layout";
import LandingPage from "./pages/landing";
import Dashbord from "./pages/dashboard";
import Auth from "./pages/auth";
import Link from "./pages/link";
import RedirectLink from "./pages/redirect-link";

const router = createBrowserRouter([
  {
    element:<AppLayout/>,
    children:[
      {
        path: '/',
        element: <LandingPage />,
      },
      {
        path: '/dashbord',
        element: <Dashbord/>,
      },
      {
        path: '/auth',
        element: <Auth />,
      },
      {
        path: '/link/:id',
        element: <Link />,
      },
      {
        path: '/:id',
        element: <RedirectLink />,
      }
    ]
  }
])
function App() {


  return <RouterProvider router={router}/>
  
}

export default App
