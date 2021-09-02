import React,{useState,useEffect} from "react"
import Navbar from "./Navbar"
import { Redirect, useHistory,Link } from "react-router-dom";


const DashboardDepositCheckComponent = () => {
    const history  = useHistory()

    if(sessionStorage.getItem('loggedIn')){
        return (

            <div>
                <Navbar />
                <div className="flex dashboard">
                    <div className="grid grid-cols-4 text-center gap-4 p-8">
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

export default DashboardDepositCheckComponent