import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ProtectedRotes from "./components/ProtectedRotes"


function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element:<ProtectedRotes user={true}>
        <MainLayout/>
      </ProtectedRotes>,
      children:[
      {
        index:true,
        element:<Home/>
      }
    ]
    },
    {
      path:'/signin',
      element:<SignIn/>
    },
    {
      path:'/signup',
      element:<SignUp/>
    }
  ]);

  return <RouterProvider router={routes}/>
}

export default App;
