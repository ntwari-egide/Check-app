import React,{useState} from "react"
import Navbar from "./Navbar"

const UserProfileComponent = () => {

    const [userprofilevalues,setuserprofilevalues] = useState({
        email: "testing@gmail.com",
        firstname: "testing",
        secondname: "user"
    })

    const [isemailempty,setisemailempty] = useState(false)
    const [isfirstnameempty,setisfirstnameempty] = useState(false)
    const [issecondnameempty,setissecondnameempty] = useState(false)
    const [userupdated,setuserupdated] = useState(false)
    
    const handleValuesChange = (event) => {
        setuserprofilevalues({
            ...userprofilevalues,
            [event.target.name] : event.target.value
        })
    }

    const handlebuttonclicked = () => {

        if(userprofilevalues.email === "") setisemailempty(true)
        else setisemailempty(false)

        if(userprofilevalues.firstname === "") setisfirstnameempty(true)
        else setisfirstnameempty(false)

        if(userprofilevalues.secondname === "") setissecondnameempty(true)
        else setissecondnameempty(false)

        if(userprofilevalues.email !== "" && userprofilevalues.firstname !== "" && userprofilevalues.secondname !== "") setuserupdated(true)
        else setuserupdated(false)
    }

    return (

        <div>
            <Navbar />
            <div class="form-container">
            <div class="h-screen bg-gray-300">
                    <div class="flex justify-center py-20">
                        <div class="user-profile py-8 px-8 bg-white rounded-sm max-w-lg hover:shadow">

                            <h1>Your user profile in <strong>Todara.</strong></h1>

                            {userupdated? <p class="px-4 py-2 center bg-green-600 text-white my-2">You've updated your profile in Todara</p> : ""}

                            <div class="flex justify-between w-full"> <img src="https://i.imgur.com/CeVfZyY.jpg" width="150" height="150" class="rounded-lg" />
                                <div class="ml-2">
                                    <div>
                                        <p>First name: </p>
                                        <input onChange={handleValuesChange}  class="appearance-none border rounded w-full py-2 px-3 text-grey-darker" value={userprofilevalues.firstname} type="text" placeholder="first name" name="firstname"/>
                                       
                                        {isfirstnameempty? <p class="text-red-500 text-xs italic mt-2">Please enter your first name</p>: ""}
                                    </div>

                                    <div class="mt-4">
                                        <p>Second name: </p>
                                        <input onChange={handleValuesChange}  class="appearance-none border rounded w-full py-2 px-3 text-grey-darker" value={userprofilevalues.secondname} type="text" placeholder="second name" name="secondname"/>

                                        {issecondnameempty? <p class="text-red-500 text-xs italic mt-2">Please enter your second name</p>: ""}
                                    </div>

                                    <div class="mt-4">
                                        <p>Email: </p>
                                        <input onChange={handleValuesChange}  class="appearance-none border rounded w-full py-2 px-3 text-grey-darker" value={userprofilevalues.email} type="text" placeholder="user email" name="email"/>

                                        {isemailempty? <p class="text-red-500 text-xs italic mt-2">Please enter your email</p>: ""}
                                    </div>

                                    <button class="mt-4 bg-blue-500 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded" type="button" onClick={handlebuttonclicked}> update profile </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        </div>
    )

}

export default UserProfileComponent