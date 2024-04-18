import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import { useContext } from "react";
import { auth } from "../firebase/firebaseConfig";
import { GlobalContext } from "../context/useGlobalContext";
import { signOut } from "firebase/auth";

function Navbar() {
  const {navbarBgColor,user} = useContext(GlobalContext)
  const signOutFunc = () => {
    signOut(auth).then(() => {
      console.log("Sign out");
    }).catch((error) => {
      console.log(error);
    })
  }

  return (
    <div className="bg-base-300 duration-300 transition" style={{backgroundColor:navbarBgColor}}>
      <div className="navbar align-el">
        <div className="navbar-start">
          <Link to="/" className="btn btn-primary lg:btn-lg hidden lg:flex">
            MyKitchen
          </Link>
          <div className="dropdown flex lg:hidden">
            <button
              tabIndex={0}
              role="button"
              className="btn mb-3 btn-primary lg:btn-lg "
            >
              MyK
            </button>
            <div
              tabIndex={0}
              className="dropdown-content z-[1] menu mt-20 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <NavLinks />
            </div>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <NavLinks />
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <h2 className="mt-1">{user.displayName}</h2>
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src={user.photoURL}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <button onClick={signOutFunc} className="btn btn-sm">Logout</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
