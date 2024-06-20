import React from 'react';
import ReactDOM from 'react-dom/client'
import App from './App.jsx';

import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';
import Projects from './pages/Projects';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />
      }, {
        path: '/projects',
        element: <Projects/>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
