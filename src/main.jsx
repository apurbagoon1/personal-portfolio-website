import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Home from './Pages/Home.jsx';
import ProjectDetails from './Pages/ProjectDetails.jsx';
import ErrorPage from './Pages/ErrorPage.jsx';
import Loading from './Pages/Loading.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>
  },
  {
    path: "/projects/:id",
    element: <ProjectDetails></ProjectDetails>
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>
  }
], {
  fallbackElement: <Loading></Loading>
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
