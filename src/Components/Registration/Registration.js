import { getAuth } from "firebase/auth";
import React, { useState } from "react";
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from "react-firebase-hooks/auth";
import app from "../../firebase.init";

const auth = getAuth(app);
const Registration = () => {
    const [displayName, setDisplayName] = useState("");
    const [photoURL, setPhotoURL] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [createUserWithEmailAndPassword, , loading] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile] = useUpdateProfile(auth);

    const handleRegistration = () => {
        createUserWithEmailAndPassword(email, password).then(async () => {
            await updateProfile({ displayName, photoURL }).then(() => {
                console.log("update successfully");
            });
        });
    };

    return (
        <div className="w-1/2 mx-auto text-center">
            <h3 className="text-3xl my-5">Registration Your Account</h3>
            <form onSubmit={(e) => e.preventDefault()}>
                <input onChange={(e) => setDisplayName(e.target.value)} value={displayName} className="border px-3 py-1 mb-4" type="displayName" placeholder="Your Full Name" />
                <br />
                <input onChange={(e) => setPhotoURL(e.target.value)} type="photoURL" value={photoURL} className="border px-3 py-1 mb-4" />
                <br />
                <input onChange={(e) => setEmail(e.target.value)} value={email} className="border px-3 py-1 mb-4" type="email" placeholder="Your Email Address" />
                <br />
                <input onChange={(e) => setPassword(e.target.value)} value={password} className="border px-3 py-1 mb-4" type="password" placeholder="Your Password" />
                <br />
                <button onClick={handleRegistration} className="bg-orange-700 text-white py-2 px-4">
                    Register {loading && "Loading..."}
                </button>
            </form>
        </div>
    );
};

export default Registration;
