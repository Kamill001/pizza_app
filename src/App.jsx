import { RouterProvider , createBrowserRouter } from "react-router-dom"
import Menu from "./pages/Menu/Menu"
import Cart from "./pages/Cart/Cart"
import NotFound from "./pages/NotFound/NotFound"
import Layout from "./components/Layout/Layout"

const routes = createBrowserRouter([
 
{
  path:"/",
  element:<Layout/>,
  children: [
    {
      path:"",
      element:<Menu/>,
    },
    {
      path:"/cart",
      element:<Cart/>,
    },
    {
      path:"*",
      element:<NotFound/>,
    },
  ]
}
])
function App() {
  return (
    <>
    
     <RouterProvider router={routes}/>
    </>
  )
}

export default App
