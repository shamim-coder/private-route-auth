import { getAuth } from "firebase/auth";
import React, { useState } from "react";
import app from "../../firebase.init";
// import useFirebase from "../../Hooks/useFirebase";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";

const auth = getAuth(app);
const Login = () => {
    // const { loginWithGoogle } = useFirebase();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const [signInWithGoogle] = useSignInWithGoogle(auth);

    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

    const handleSignIn = () => {
        signInWithEmailAndPassword(email, password);
    };

    const handleGoogleSignIn = () => {
        signInWithGoogle().then(() => {
            navigate(from, { replace: true });
        });
    };

    return (
        <div className="w-1/2 mx-auto text-center">
            <h3 className="text-3xl my-5">Login Your Account</h3>
            <form onSubmit={(e) => e.preventDefault()}>
                <input onChange={(e) => setEmail(e.target.value)} value={email} className="border px-3 py-1 mb-4" type="email" placeholder="Your Email Address" /> <br />
                <input onChange={(e) => setPassword(e.target.value)} value={password} className="border px-3 py-1 mb-4" type="password" placeholder="Your Password" />
                <br />
                <button onClick={handleSignIn} className="bg-orange-700 text-white py-2 px-4">
                    login {loading && "Loading..."}
                </button>
            </form>

            <button onClick={handleGoogleSignIn} className="bg-blue-700 text-white py-2 px-4 mt-5">
                Login with Google
            </button>
        </div>
    );
};

export default Login;
