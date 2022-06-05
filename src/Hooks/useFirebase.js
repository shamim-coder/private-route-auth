import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import app from "../firebase.init";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
    const [user, setUser] = useState({});

    const loginWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                setUser(user);
                console.log(user);
            })
            .catch((error) => {
                console.log(error.message);
            });
    };

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                console.log("Sign-out successful.");
            })
            .catch((error) => {
                console.log(error.message);
            });
    };

    useEffect(() => {
        onAuthStateChanged(auth, user=> {
            setUser(user)
        })
    }, []);

    return { user, loginWithGoogle, handleSignOut };
};

export default useFirebase;
