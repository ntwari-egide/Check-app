import React,{useState} from "react"

const SignupComponent = () => {

    const [signupvalues,setsignupvalues] = useState({
        email: "",
        password: ""
    })

    const [isemailempty,setisemailempty] = useState(false)
    const [ispasswordempty,setispasswordempty] = useState(false)
    const [accountcreated,setaccountcreated] = useState(false)
    
    const handleValuesChange = (event) => {
        setsignupvalues({
            ...signupvalues,
            [event.target.name] : event.target.value
        })
    }

    const handlebuttonclicked = () => {

        if(signupvalues.email === "") setisemailempty(true)
        else setisemailempty(false)

        if(signupvalues.password === "") setispasswordempty(true)
        else setispasswordempty(false)

        if(signupvalues.email !== "" && signupvalues.password !== "") setaccountcreated(true)
        else setaccountcreated(false)
    }


    return (
        <div class="form-container pt-24">
            <div class="container bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
                <h1>Create account in <strong>Todara.</strong></h1>

                {accountcreated? <p class="px-4 py-2 center bg-green-600 text-white my-2">You've created account in todara</p> : ""}

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
                    create account
                </button>
                <a class="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker" href="#">
                    Forgot Password?
                </a>
                </div>
            </div>
        </div>
    )

}

export default SignupComponent