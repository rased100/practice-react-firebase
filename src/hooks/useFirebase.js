import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/Firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, GithubAuthProvider } from "firebase/auth";

initializeAuthentication();

const auth = getAuth();

const useFirebase = () => {
    const [user, setUser] = useState();
    console.log(user)

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGoogleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
        // .then((result) => {
        //     setUser(result.user)
        // })

    }

    const handleGithubSignIn = () => {
        return signInWithPopup(auth, githubProvider)
            .then((result) => {
                setUser(result.user)
            })
    }

    const logOut = () => {
        signOut(auth).then(() => {
            setUser({})
        })
    }

    // observe whether user auth state changed or not
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
        });
        return unsubscribe;
    }, [])

    return {
        user,
        handleGoogleSignIn,
        logOut,
        handleGithubSignIn
    }
}

export default useFirebase;
