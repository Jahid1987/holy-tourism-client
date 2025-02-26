import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import AllSpots from "../Pages/AllSpots";
import AddSpot from "../Pages/AddSpot";
import MyList from "../Pages/MyList";
import Spot from "../Pages/Spot";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoute from "../Components/PrivateRoute";
import UpdatePost from "../Pages/UpdatePost";
import Error from "../Pages/Error";
import CountryWiseSpots from "../Pages/CountryWiseSpots";
import Pagination from "../Pages/Pagination";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/pagination",
        element: <Pagination />,
      },
      {
        path: "/spots",
        element: <AllSpots></AllSpots>,
      },
      {
        path: "/spot/:id",
        loader: ({ params }) =>
          fetch(`https://holy-tourism-server.vercel.app/spots/${params.id}`),
        element: <Spot></Spot>,
      },
      {
        path: "/create",
        element: (
          <PrivateRoute>
            <AddSpot></AddSpot>
          </PrivateRoute>
        ),
      },
      {
        path: "/update/:id",
        loader: ({ params }) =>
          fetch(`https://holy-tourism-server.vercel.app/spots/${params.id}`),
        element: (
          <PrivateRoute>
            <UpdatePost></UpdatePost>
          </PrivateRoute>
        ),
      },
      {
        path: "/list",
        element: (
          <PrivateRoute>
            <MyList></MyList>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/countrywise/:country",
        element: <CountryWiseSpots></CountryWiseSpots>,
      },
    ],
  },
]);

export default router;
