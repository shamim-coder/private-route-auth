import { getAuth, signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import app from "../../firebase.init";
// import useFirebase from "../../Hooks/useFirebase";

const auth = getAuth(app);

const Header = () => {
    // const { user, handleSignOut } = useFirebase();

    const [user] = useAuthState(auth);

    return (
        <header className="flex justify-between py-5">
            <div className="logo">
                <h2 className="text-xl font-bold">COMPANY LOGO</h2>
            </div>
            <nav>
                <ul className="flex gap-5">
                    <li className="hover:text-orange-700 font-semibold">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="hover:text-orange-700 font-semibold">
                        <Link to="/about">About Us</Link>
                    </li>
                    <li className="hover:text-orange-700 font-semibold">
                        <Link to="/orders">Orders</Link>
                    </li>
                    <li className="hover:text-orange-700 font-semibold">
                        <Link to="/contact">Contact</Link>
                    </li>
                    {user?.uid ? (
                        <button className="font-semibold hover:text-orange-700" onClick={() => signOut(auth)}>
                            Logout <span className="font-normal text-orange-700">({user?.email})</span>
                        </button>
                    ) : (
                        <div className="flex gap-5">
                            <li className="hover:text-orange-700 font-semibold">
                                <Link to="/registration">Register</Link>
                            </li>
                            <li className="hover:text-orange-700 font-semibold">
                                <Link to="/login">Login</Link>
                            </li>
                        </div>
                    )}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
