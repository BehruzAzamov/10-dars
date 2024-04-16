import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ProtectedRoutes from "./components/ProtectedRotes";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoutes user={true}>
          {[<MainLayout key="mainLayout" />]}
        </ProtectedRoutes>
      ),
      children: [
        {
          index: true,
          element: <Home key="home" />
        }
      ]
    },
    {
      path: '/signin',
      element: <SignIn key="signIn" />
    },
    {
      path: '/signup',
      element: <SignUp key="signUp" />
    }
  ]);

  return <RouterProvider router={routes} />;
}

export default App;