import React from "react";
import { useAuth } from "../Context/AuthProvider";
import toast from "react-hot-toast";

export default function Logout() {
    const [authUser, setAuthUser] = useAuth();
    function handleLogout() {
        try {
            setAuthUser({
                ...authUser,
                user: null
            });
            localStorage.removeItem("User");
            toast.success("Logout Successful");
            setTimeout(() => {
                window.location.reload();
            }, 1000);
        } catch (error) {
            if (error.response) {
                console.log("logout error is ", error.response);
                toast.error("logout failed", error.response.message);
            }
        }
    }
    return (
        <a className="btn bg-red-500 text-white rounded-500 ml-4" onClick={handleLogout}>
            Log out
        </a>
    )
}