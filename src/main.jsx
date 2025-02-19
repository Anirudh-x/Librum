/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home.jsx';
import TrendingBooks from './pages/TrendingBooks.jsx';
import NewReleased from './pages/NewReleased.jsx';
import UpcomingBooks from './pages/UpcomingBooks.jsx';
import FavouriteBooks from './pages/FavouriteBooks.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/trending-books",
        element: <TrendingBooks />,
      },
      {
        path: "/new-released",
        element: <NewReleased />,
      },
      {
        path: "/upcoming-books",
        element: <UpcomingBooks />,
      },
      {
        path: "/favourite-books",
        element: <FavouriteBooks />,
      },

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
