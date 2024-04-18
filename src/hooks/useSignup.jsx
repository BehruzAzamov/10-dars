import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { useState } from "react";
import { useContext } from "react";
import { GlobalContext } from "../context/useGlobalContext";

function useSignup() {
    const [user, setUser] = useState(null);
    const [err, setErr] = useState(null);

    const { dispatch } = useContext(GlobalContext);

    const signUpWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                setUser(user);
                dispatch({ type: "SIGN_IN", payload: user });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.customData.email;
                setErr(errorMessage);
            });
    };

    return { signUpWithGoogle, user, err };
}

export { useSignup };
