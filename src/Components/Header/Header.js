import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
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
                        <Link to="/service">Service</Link>
                    </li>
                    <li className="hover:text-orange-700 font-semibold">
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li className="hover:text-orange-700 font-semibold">
                        <Link to="/registration">Register</Link>
                    </li>
                    <li className="hover:text-orange-700 font-semibold">
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
