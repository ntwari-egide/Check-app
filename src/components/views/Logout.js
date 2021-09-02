import React,{useState} from "react"
import { Redirect, useHistory,Link } from "react-router-dom";

const LogoutComponent = () => {

    return (

        <div>
            <div class="form-container">
            <div class="h-screen bg-gray-300">
                <h1 class="m-auto pt-24 text-center">Logged out, Go <Link to={"/signin"} class="border">Login</Link> </h1>    
            </div>
        </div>
        </div>
    )

}

export default LogoutComponent