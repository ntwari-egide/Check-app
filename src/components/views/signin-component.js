import React,{useState} from "react"
import { Redirect, useHistory,Link } from "react-router-dom";

const SigninComponent = () => {

    const history  = useHistory()


    const [signinvalues,setsigninvalues] = useState({
        email: "",
        password: ""
    })

    const [isemailempty,setisemailempty] = useState(false)
    const [ispasswordempty,setispasswordempty] = useState(false)
    const [loginsuccess,setloginsuccess] = useState(false)
    const [loginfailed,setloginfailed] = useState(false)
    
    const handleValuesChange = (event) => {
        setsigninvalues({
            ...signinvalues,
            [event.target.name] : event.target.value
        })
    }

    const handlebuttonclicked = () => {

        if(signinvalues.email === "") setisemailempty(true)
        else setisemailempty(false)

        if(signinvalues.password === "") setispasswordempty(true)
        else setispasswordempty(false)

        if(signinvalues.email !== "" && signinvalues.password !== "") {
            if(signinvalues.email === "testing@gmail.com" && signinvalues.password === "123") {
                setloginsuccess(true)
                setloginfailed(false)
                
                setTimeout(()=> history.push("/dashboard"),2000)
            }
            else {
                setloginsuccess(false)
                setloginfailed(true)
            }
        }
        else setloginsuccess(false) 
    }


    return (
        <div class="form-container pt-24">
            <div class="container bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
                <h1>Sign in in <strong>Todara.</strong></h1>

                {loginsuccess? <p class="px-4 py-2 center bg-green-600 text-white my-2">Login is successful</p> : ""}

                {loginfailed? <p class="px-4 py-2 center bg-red-600 text-white my-2">Login failed, emal or passowrd is incorrect</p> : ""}


                <div class="mb-4">
                    <label class="block text-grey-darker text-sm font-bold mb-2" for="email">
                        email
                    </label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="email" type="text" placeholder="email" name="email" onChange={handleValuesChange} />
                    {isemailempty? <p class="text-red-500 text-xs italic mt-2">Please enter your email</p>: ""}

                </div>
                <div class="mb-6">
                    <label class="block text-grey-darker text-sm font-bold mb-2" for="password">
                        Password
                    </label>
                    <input class="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" name="password" onChange={handleValuesChange} id="password" type="password" placeholder="******************" />
                    {ispasswordempty? <p class="text-red-500 text-xs italic">Please choose a password.</p> : ""}
                </div>
                <div class="flex items-center justify-between">
                <button class="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded" type="button" onClick={handlebuttonclicked}>
                    Login
                </button>
                <a class="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker" href="#">
                    Forgot Password?
                </a>
                </div>
            </div>
        </div>
    )

}

export default SigninComponent