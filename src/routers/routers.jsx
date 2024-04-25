import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import AllSpots from "../Pages/AllSpots";
import AddSpot from "../Pages/AddSpot";
import MyList from "../Pages/MyList";

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
