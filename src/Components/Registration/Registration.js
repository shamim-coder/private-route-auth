import React from "react";

const Registration = () => {
    return (
        <div className="w-1/2 mx-auto text-center">
            Registration Your Account
            <form>
                <input type="text" name="name" id="name" placeholder="Your Full Name" />
                <br />
                <input type="email" name="registerEmail" id="registerEmail" placeholder="Your Email Address" />
                <br />
                <input type="password" name="registerPassword" id="registerPassword" placeholder="Your Password" />
                <br />
                <button>Register</button>
            </form>
        </div>
    );
};

export default Registration;
