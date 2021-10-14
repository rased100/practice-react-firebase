import { useState } from "react";
import initializeAuthentication from "../Firebase/Firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";

initializeAuthentication();

const auth = getAuth();

const useFirebase = () => {
    const [user, setUser] = useState();
    console.log(user)

    const provider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                setUser(result.user)
                // console.log('me', result.user)
            })

    }

    const logOut = () => {
        signOut(auth).then(() => {
            setUser({})
        })
    }

    return {
        user,
        handleGoogleSignIn,
        logOut
    }
}

export default useFirebase;
