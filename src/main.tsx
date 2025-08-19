import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import  Root from './layout/Root';
import HomePage from './layout/HomePage';
import Login from './Pages/Login/Login';
import DetailsPage from './Pages/DetailsPage/DetailsPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:"/",
        element:<HomePage></HomePage>
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/propertyDetails/:id",
        element:<DetailsPage></DetailsPage>
      },
    ]
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
