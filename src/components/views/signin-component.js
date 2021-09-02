import React,{useState} from "react"
import { Redirect, useHistory,Link } from "react-router-dom";

const SigninComponent = () => {

    const history  = useHistory()


    const [signinvalues,setsigninvalues] = useState({
        cardcode: "",
        pincode: ""
    })

    let carddata = [
        {cardcode: "190223930GH", pincode:"123",blocked: false,remainingtoblock: 3},
        {cardcode: "198393930GH", pincode:"123",blocked: false,remainingtoblock: 3},
        {cardcode: "430223930GH", pincode:"123",blocked: false,remainingtoblock: 3}
    ]

    const [timestoblock,settimetoblock] = useState(9)

    const [iscardcodeempty,setiscardcodeempty] = useState(false)
    const [ispincodeempty,setispincodeempty] = useState(false)
    const [loginsuccess,setloginsuccess] = useState(false)
    const [loginfailed,setloginfailed] = useState(false)
    const [cardblocked,setcardblocked] = useState(false)
    
    const handleValuesChange = (event) => {
        setsigninvalues({
            ...signinvalues,
            [event.target.name] : event.target.value
        })
    }

    const handlebuttonclicked = () => {

        if(signinvalues.cardcode === "") setiscardcodeempty(true)
        else setiscardcodeempty(false)

        if(signinvalues.pincode === "") setispincodeempty(true)
        else setispincodeempty(false)

        if(signinvalues.cardcode !== "" && signinvalues.pincode !== "") {

            let carddatafound =  carddata.find(card => card.cardcode === signinvalues.cardcode)
                
            if(carddatafound.cardcode === signinvalues.cardcode){
                if(carddatafound.pincode === signinvalues.pincode && carddatafound.remainingtoblock > 1){
                    setloginsuccess(true)
                    setloginfailed(false)
                    setcardblocked(false)
                    sessionStorage.setItem('loggedIn',true)
                    setTimeout(()=> {
                        history.push('/dashboard')
                    },6000)
                }
                else{
                    console.log("data: ",carddatafound);
                    for (var i = 0; i < carddata.length; i++) {
                        if (carddata[i].cardcode === signinvalues.cardcode) {
                            carddata[i].remainingtoblock =  carddata[i].remainingtoblock - 1
                        }
                    }

                    if(carddatafound.remainingtoblock <= 1 ) {
                        setloginsuccess(false)
                        setloginfailed(false)
                        setcardblocked(true)
                    }
                    else{
                        
                        setloginsuccess(false)
                        setloginfailed(true)
                    }
                }
            }
            
        }
        else setloginsuccess(false) 
    }


    return (
        <div class="grid grid-cols-2 form-container pt-24">
            <div class="pl-32 pt-28 main">
                <h1>Check.</h1>
                <p>Manage  your ATM card</p>
            </div>
            <div class="container flex flex-col text-white">
                <p class="font-light mb-8 text-sm">LOGIN  <br /><strong class="text-lg">YOUR ACCOUNT</strong></p>

                {loginsuccess? <p class="px-4 py-2 center bg-green-600 text-white my-2">Login is successful</p> : ""}

                {cardblocked? <p class="px-4 py-2 center bg-red-600 text-white my-2">Three time failed attempt, Your card is blocked</p> : ""}

                {loginfailed? <p class="px-4 text-sm py-2 mb-2 font-light center bg-red-700 text-white my-2">Login failed, card or pin code is incorrect</p> : ""}


                <div class="mb-4">
                    <label class="block text-grey-darker text-sm mb-2" for="pincode">
                        Card code :
                    </label>
                    <input class=" w-full py-2 text-white-300" id="cardcode" type="text" placeholder="pincode" name="cardcode" onChange={handleValuesChange} />
                    {iscardcodeempty? <p class="text-red-300 text-xs italic mt-2">Please enter card code</p>: ""}

                </div>
                <div class="mb-6">
                    <label class="block text-grey-darker text-sm mb-2" for="pincode">
                        Pin code :
                    </label>
                    <input class="border-red  w-full py-2 text-white-300 mb-3" name="pincode" onChange={handleValuesChange} id="pincode" type="password" placeholder="******************" />
                    {ispincodeempty? <p class="text-red-300 text-xs italic">Please choose a pincode.</p> : ""}
                </div>
                <div class="flex items-center justify-between">
                <button class="text-white font-bold py-3 px-10 text-sm" type="button" onClick={handlebuttonclicked}>
                    LOGIN
                </button>
                <a class="inline-block align-baseline font-medium text-sm" href="#">
                    Forgot pincode?
                </a>
                </div>
            </div>
        </div>
    )

}

export default SigninComponent