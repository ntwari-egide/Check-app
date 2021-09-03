import React,{useState,useEffect} from "react"
import Navbar from "./Navbar"
import { Redirect, useHistory,Link } from "react-router-dom";


const DashboardTransferComponent = () => {
    const history  = useHistory()

    const [amount,setamount] = useState(400000)
    const [bankamount,setbankamount] = useState(400000)
    const [receiversbanknum,setreceiversbanknum] = useState("")
    const [newamount,setnewamount] = useState(0)
    const [agreeterms,setagreeterms] = useState(false)

    const updateamount = (e) => {
        setnewamount(e.target.value)
    }

    const updateagreement = (e) => {
        setagreeterms(true)
    }

    const updatereceiver = (e) => {
        setreceiversbanknum(e.target.value)
    }

    const handleaddamount = () => {
        let newatmvalue = parseInt(amount) - parseInt(newamount)

        if(!agreeterms) alert('You should agree terms and conditions')
        else {
            if(newamount > amount )  alert('Amount to transfer is greater to balance on your card')
            else {

                if(receiversbanknum == "BK123456789"){
                    setamount(newatmvalue)
                    setnewamount(0)
                    alert('Money tranfer is successfully done!')

                    var today = new Date();

                    var dd = String(today.getDate()).padStart(2, '0');

                    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!

                    var yyyy = today.getFullYear();

                    today = mm + '/' + dd + '/' + yyyy+" "+today.getHours()+":"+today.getMinutes()+":"+today.getSeconds();

                    let receipt = []
                    receipt = JSON.parse(localStorage.getItem('receipt'))

                    receipt.push({date: today,action: "You've transfered "+newamount+" RW to  "+receiversbanknum+" from your bank"})

                localStorage.setItem('receipt',JSON.stringify(receipt));
                }
                else{
                    alert('Please try to enter valid receivers bank number')
                }
            }
        }
    }

    if(sessionStorage.getItem('loggedIn')){
        return (

            <div>
                <Navbar />
                <div className="dashboard">
                    <div className="grid grid-cols-5 text-center gap-4 p-8">
                        <Link to="/dashboard-check-cash">
                            <div className="flex px-4 py-14 bg-white rounded-sm shadow cursor-pointer">
                                <p className="text-lg">Check your balance</p>
                                <svg class="mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12.172 12L9.343 9.172l1.414-1.415L15 12l-4.243 4.243-1.414-1.415z" fill="rgba(16,9,145,1)"/></svg>
                            </div>
                        </Link>

                        <Link to="/dashboard-deposit-cash">
                            <div className="flex px-4 py-14 bg-white rounded-sm shadow cursor-pointer">
                                <p className="text-lg">Deposit cash</p>
                                <svg class="mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12.172 12L9.343 9.172l1.414-1.415L15 12l-4.243 4.243-1.414-1.415z" fill="rgba(16,9,145,1)"/></svg>
                            </div>
                        </Link>

                        <Link to="/dashboard-deposit-check">
                            <div className="flex px-4 py-14 bg-white rounded-sm shadow cursor-pointer">
                                <p className="text-lg">Deposit Check</p>
                                <svg class="mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12.172 12L9.343 9.172l1.414-1.415L15 12l-4.243 4.243-1.414-1.415z" fill="rgba(16,9,145,1)"/></svg>
                            </div>
                        </Link>

                        <Link to="/dashboard-withdraw">
                            <div className="flex px-4 py-14 bg-white rounded-sm shadow cursor-pointer">
                                <p className="text-lg">Withdraw cash</p>
                                <svg class="mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12.172 12L9.343 9.172l1.414-1.415L15 12l-4.243 4.243-1.414-1.415z" fill="rgba(16,9,145,1)"/></svg>
                            </div>
                        </Link>

                        <Link to="/dashboard-transfer">
                            <div className="flex px-4 py-14 bg-white rounded-sm shadow cursor-pointer">
                                <p className="text-lg">Transfer money</p>
                                <svg class="mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12.172 12L9.343 9.172l1.414-1.415L15 12l-4.243 4.243-1.414-1.415z" fill="rgba(16,9,145,1)"/></svg>
                            </div>
                        </Link>
                    </div>

                    <div class="bg-white rounded-sm shadow mx-8 p-8 main-content" style={{height: '70vh'}}>
                        <h1 className="text-lg font-bold">Transfer Money</h1>
                        <p className="text-sm mt-4">your balance: <strong>{amount} RWF</strong></p>

                        <section className="mt-8">
                            <label>Enter amount to transfer: </label> <br />
                            <input type="number" onChange={updateamount} value={newamount} /><br /><br />

                            <label>Enter receivers account number: </label> <br />
                            <input type="text" onChange={updatereceiver} value={receiversbanknum} /><br /><br />

                           <section className="mt-4">
                                <input type="checkbox" id="contactChoice1" name="contact" onChange={updateagreement} />
                                <label for="contactChoice1" className="ml-2">Do you agree terms and conditions</label> <br />
                           </section>

                            <button onClick={handleaddamount}>WITHDRAW</button>
                        </section>
                    </div>
                </div>
            </div>
        )
    }

    else{
        alert('In order to access this page you need to be logged in ')
        history.push('/login')
    }

}

export default DashboardTransferComponent