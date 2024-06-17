import React from 'react';
import ReactDOM from 'react-dom/client'
import App from './App.jsx';

import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';
import Contact from './pages/Contact';
import About from './pages/About';
import Projects from './pages/Projects';
import Resume from './pages/Resume';


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
        path: '/contact',
        element: <Contact />
      }, {
        path: '/about',
        element: <About />
      }, {
        path: '/resume',
        element: <Resume/>
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
