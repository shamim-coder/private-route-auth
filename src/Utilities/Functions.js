import { signOut } from "firebase/auth";

const handleSignOut = (auth) => {
    signOut(auth)
        .then(() => {
            console.log("Sign-out successful.");
        })
        .catch((error) => {
            console.log(error.message);
        });
};

export { handleSignOut };
