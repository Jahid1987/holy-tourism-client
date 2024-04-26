import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import AllSpots from "../Pages/AllSpots";
import AddSpot from "../Pages/AddSpot";
import MyList from "../Pages/MyList";
import Spot from "../Pages/Spot";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <h3>Page not Found</h3>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/spots",
        element: <AllSpots></AllSpots>,
      },
      {
        path: "/spot/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/spots/${params.id}`),
        element: <Spot></Spot>,
      },
      {
        path: "/create",
        element: <AddSpot></AddSpot>,
      },
      {
        path: "/list",
        element: <MyList></MyList>,
      },
    ],
  },
]);

export default router;
