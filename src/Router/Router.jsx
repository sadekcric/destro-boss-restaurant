import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import OurMenu from "../Pages/OutMenu/OurMenu";
import Order from "../Pages/Order/Order";
import PrivateRoute from "./PrivateRoute";
import DashBoard from "../Pages/UserHome/DashBoard";
import UserHome from "../Pages/UserHome/UserHome";
import Cart from "../Pages/UserHome/Cart";
import AddReview from "../Pages/UserHome/AddReview/AddReview";
import MyBooking from "../Pages/UserHome/MyBooking/MyBooking";
import PaymentHistory from "../Pages/UserHome/PaymentHistory/PaymentHistory";
import Reservation from "../Pages/UserHome/Reservation/Reservation";
import AdminHome from "../Pages/Admin/AdminHome";
import AddItmes from "../Pages/Admin/AddItmes";
import AllUsers from "../Pages/Admin/AllUsers";
import ManageBooking from "../Pages/Admin/ManageBooking";
import ManageItems from "../Pages/Admin/ManageItems";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "/menu",
        element: <OurMenu />,
      },
      {
        path: "/order/:category",
        element: (
          <PrivateRoute>
            <Order />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashBoard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "user-home",
        element: <UserHome />,
      },
      {
        path: "/dashboard/cart",
        element: <Cart />,
      },
      {
        path: "/dashboard/add-review",
        element: <AddReview />,
      },
      {
        path: "/dashboard/booking",
        element: <MyBooking />,
      },
      {
        path: "/dashboard/payment-history",
        element: <PaymentHistory />,
      },
      {
        path: "/dashboard/reservation",
        element: <Reservation />,
      },
      {
        path: "/dashboard/admin-home",
        element: <AdminHome />,
      },
      {
        path: "/dashboard/add-item",
        element: <AddItmes />,
      },
      {
        path: "/dashboard/all-users",
        element: <AllUsers />,
      },
      {
        path: "/dashboard/manage-booking",
        element: <ManageBooking />,
      },
      {
        path: "/dashboard/manage-items",
        element: <ManageItems />,
      },
    ],
  },
]);

export default router;
