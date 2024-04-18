import { createContext, useReducer } from "react";

export const GlobalContext = createContext();

const changeState = (state, action) => {
  switch (action.type) {
    case "NAVBAR-BG":
      return { ...state, navbarBgColor: action.payload };
    case "SIGN_IN":
      return { ...state, user: action.payload }; // Corrected key from 'use' to 'user'
    case "AUTH_CHANGE":
      return {...state,authChange:true}
    default:
      return state;
  }
};

export function GlobalContextProvider({ children }) {
  const [state, dispatch] = useReducer(changeState, {
    user:null,
    navbarBgColor:"bg-base-300",
    authChange:false,
});

  return <GlobalContext.Provider value={{...state,dispatch}}>{children}</GlobalContext.Provider>;
}
