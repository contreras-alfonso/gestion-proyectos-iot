import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import './index.css'
import 'react-toastify/dist/ReactToastify.css';
import { Login } from './pages/Login';
import { LayoutPublico } from './layouts/LayoutPublico';
import { Dashboard } from './pages/Dashboard';
import { LayoutPrivado } from './layouts/LayoutPrivado';
import { Layouts } from './pages/Layouts';
import { Changelog } from './pages/Changelog';
import { Dispositivos } from './pages/Dispositivos';
import { Plantas } from './pages/Plantas';
import { PlantasProvider } from './context/PlantasProvider';
import { Dispositivo } from './pages/Dispositivo';
import { DispositivosProvider } from './context/DispositivosProvider';
import { UserProvider } from './context/UserProvider';
import { ToastContainer } from 'react-toastify';

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
        path:'plantas',
        element: <Plantas/>
      },
      {
        path:'sistemas',
        element: <Dispositivos/>
      },
      {
        path:'sistema/:id',
        element: <Dispositivo/>
      },
      {
        path:'changelog',
        element: <Changelog/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <DispositivosProvider>
        <PlantasProvider>
          <RouterProvider router={router} />
        </PlantasProvider>
      </DispositivosProvider>
    </UserProvider>
    <ToastContainer /> 
  </React.StrictMode>,
)
