import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import Favorites from "./Pages/Favorites";
import Order from "./Pages/Order";
import Root from "./Root/Root";

const router = createBrowserRouter([

  {
    path:'/',
    element:<Root/>,
    children:[
      {
        path: "",
        element: <Home/>
      },
      {
        path:'/cart',
        element:<Cart/>
      },
      {
        path:'/favs',
        element:<Favorites/>
      },
      {
        path:'/orders',
        element:<Order/>
      }
    ]
  }
  
]);

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App


