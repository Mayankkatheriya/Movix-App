import React, { useEffect } from 'react'
import { fetchDataFromApi } from './utils/api'
import { useSelector, useDispatch } from 'react-redux'
import { getApiConfiguration } from './store/homeSlice'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";

import Home from "./pages/home/Home";
import Details from "./pages/details/Details";
import SearchResults from "./pages/searchResults/SearchResults";
import Explore from "./pages/explore/Explore";
import PageNotFound from "./pages/404/PageNotFound"
import Layout from './layout/Layout';

const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      errorElement: <PageNotFound />,
      children: [
        {
          path: '/',
          element: <Home/>
        },
        {
          path: '/:mediaType/:id',
          element: <Details />
        },
        {
          path: '/:search/:query',
          element: <SearchResults />
        },
        {
          path: '/explore/:mediaType',
          element: <Explore />
        },
      ]
    }
  ])

  const dispatch = useDispatch()
  const url = useSelector((store) => store.home.url)

  useEffect(() => {
    apiTesting()
  }, [])

  const apiTesting = () => {
    fetchDataFromApi("/movie/popular")
    .then((res) => {
      console.log(res);
      dispatch(getApiConfiguration(res))
    })
  }

  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
