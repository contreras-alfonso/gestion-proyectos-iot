import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import './index.css'
import { Login } from './pages/Login';
import { LayoutPublico } from './layouts/LayoutPublico';
import { Dashboard } from './pages/Dashboard';
import { LayoutPrivado } from './layouts/LayoutPrivado';
import { Layouts } from './pages/Layouts';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPublico/>,
    children:[
      {
        index:true,
        element: <Login/>
      }
    ]
  },
  {
    path: "/administration",
    element: <LayoutPrivado/>,
    children:[
      {
        path:'dashboard',
        element: <Dashboard/>
      },
      {
        path:'layouts',
        element: <Layouts/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
