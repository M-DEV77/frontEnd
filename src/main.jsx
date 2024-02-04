import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Login from './pages/Login.jsx';
import Home from './pages/Home.jsx';
import Sobre from './pages/Sobre.jsx';
import PageErro from './pages/PageErro.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
const router = createBrowserRouter([
{
  path:"/",
  element:<App />,
  errorElement: <PageErro/>,
  children:[
      {
        path:"/",
        element:<Login />
      },
      {
        path:"/home",
        element:<Home />
      },
      {
        path:"/sobre",
        element:<Sobre />
      },
   ]
  },
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
