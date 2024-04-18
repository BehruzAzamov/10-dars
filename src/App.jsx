import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ProtectedRoutes from "./components/ProtectedRotes";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { useContext, useEffect } from "react";
import { GlobalContext } from "./context/useGlobalContext";
import { auth } from "./firebase/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";


function App() {
  const {user,dispatch,authChange} = useContext(GlobalContext)
  console.log(user);
  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoutes user={user}>
          {[<MainLayout key="mainLayout" />]}
        </ProtectedRoutes>
      ),
      children: [
        {
          index: true,
          element: <Home key="home" />
        },
        {
          path:"/about",
          element:<About key="about"/>
        },
        {
          path:"/contact",
          element:<Contact key="contact"/>
        }
      ]
    },
    {
      path: '/signin',
      element:user ? <Navigate to="/"/> : <SignIn key="signIn" />
    },
    {
      path: '/signup',
      element: user ? <Navigate to="/"/> : <SignUp key="SignUp" />
    }
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      dispatch({
        type:"SIGN_IN",
        payload:user
      })
      dispatch({
        type:"AUTH_CHANGE"
      })
    });
  },[])

  return <>{authChange &&  <RouterProvider router={routes} />}</>;
}

export default App;