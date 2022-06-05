import React from "react";

const Login = () => {
    return (
        <div>
            Login Your Account
            <form>
                <input type="email" name="loginEmail" id="loginEmail" placeholder="Your Email Address" /> <br />
                <input type="password" name="loginPassword" id="loginPassword" placeholder="Your Password" />
                <br />
                <button>login</button>
            </form>
        </div>
    );
};

export default Login;
