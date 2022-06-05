import { getAuth } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import app from "../../firebase.init";

const auth = getAuth(app);

const Home = () => {
    const [user] = useAuthState(auth);
    return (
        <div className="text-center">
            <h2 className="mb-4 text-3xl font-semibold">Welcome {user ? user.displayName : "Home"}</h2>
            <img className="mx-auto" src={user?.photoURL} alt="" />
        </div>
    );
};

export default Home;
