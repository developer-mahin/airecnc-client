import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import ErrorPage from '../Pages/Shared/ErrorPage'
import Home from '../Pages/Home'
import Login from '../Pages/Login/Login'
import Signup from '../Pages/Login/Signup'
import Main from '../Layout/Main'
import ComingSoon from '../Pages/Shared/ComingSoon'
import Details from '../Pages/Details'
import SearchResult from '../Pages/SearchResult'
import Checkout from '../Pages/Checkout'
import PrivateRoute from './PrivateRoute'
import Welcome from '../Pages/Dashboard/Wellcome/Welcome'
import DashboardLayout from '../Layout/DashboardLayout'
import MyBookings from '../Pages/Dashboard/MyBookings/MyBookings'
import BecomeAHost from '../Pages/Dashboard/BecomeAHost/BecomeAHost'
import AllUsers from '../Pages/Dashboard/AllUsers/AllUsers'
import AllBookings from '../Pages/Dashboard/AllBookings/AllBookings'
import AddHome from '../Pages/Dashboard/AddHome/AddHome'
import ManageHome from '../Pages/Dashboard/ManageHome/ManageHome'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/signup',
        element: <Signup />,
      },
      {
        path: '/coming-soon',
        element: <ComingSoon />,
      },
      {
        path: '/service-details',
        element: <Details />,
      },
      {
        path: '/search-result',
        element: <SearchResult />,
      },
      {
        path: '/checkout',
        element: <PrivateRoute><Checkout /></PrivateRoute>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
    children: [
      {
        path: '/dashboard',
        element: <Welcome></Welcome>
      },
      {
        path: '/dashboard/my-bookings',
        element: <PrivateRoute><MyBookings></MyBookings></PrivateRoute>
      },
      {
        path: '/dashboard/become-host',
        element: <PrivateRoute><BecomeAHost></BecomeAHost></PrivateRoute>
      },
      {
        path: '/dashboard/all-users',
        element: <PrivateRoute><AllUsers></AllUsers></PrivateRoute>
      },
      {
        path: '/dashboard/all-bookings',
        element: <PrivateRoute><AllBookings></AllBookings></PrivateRoute>
      },
      {
        path: '/dashboard/add-home',
        element: <PrivateRoute><AddHome></AddHome></PrivateRoute>
      },
      {
        path: '/dashboard/manage-homes',
        element: <PrivateRoute><ManageHome></ManageHome></PrivateRoute>
      },
    ]
  }
])

export default router
