import React,{useState,useEffect} from "react"
import Navbar from "./Navbar"


const DashboardComponent = () => {

    let alltodos = [
        {
            "id": 1,
            "title": "delectus aut autem",
            "level": "to do"
        },
        {
            "id": 2,
            "title": "Checking all notes",
            "level": "doing"
        },
        {
            "id": 3,
            "title": "joining today's sessions",
            "level": "to do"
        },
        {
            "id": 4,
            "title": "implementing UIs",
            "level": "done"
        },
        {
            "id": 5,
            "title": "Reporting all tasks done",
            "level": "to do"
        },
    ]

    const [listoftodos,settodos] = useState([])
    const [listofdoing,setdoing] = useState([])
    const [listofdone,setdones] = useState([])

    useEffect(()=> {
        settodos(alltodos.filter(todo => todo.level === "to do"))
        setdoing(alltodos.filter(todo => todo.level === "doing"))
        setdones(alltodos.filter(todo => todo.level === "done"))
    })

    return (

        <div>
            <Navbar />
            <div class="form-container">
                <div class="mx-8 py-8 grid grid-cols-3 gap-8">
                    <div class="bg-white shadow p-4">
                        <h1 class="text-center font-medium">To do</h1>
                        {listoftodos.map(todo => {
                            return <div class="mt-4 flex items-center justify-between border rounded-sm p-2">
                            <p>{todo.title}</p>
                            <select value={todo.level} class ="text-green-600 ml-2">
                                <option>To do</option>
                                <option>Doing</option>
                                <option>Done</option>
                            </select>

                            <div class="flex">
                            <svg class="mt-1 ml-4 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0h24v24H0z"/><path d="M20 7v14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7H2V5h20v2h-2zM6 7v13h12V7H6zm1-5h10v2H7V2zm4 8h2v7h-2v-7z" fill="rgba(217,8,8,0.78)"/></svg>
                            </div>

                            <svg class="mt-1 ml-4 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0h24v24H0z"/><path d="M15.728 9.686l-1.414-1.414L5 17.586V19h1.414l9.314-9.314zm1.414-1.414l1.414-1.414-1.414-1.414-1.414 1.414 1.414 1.414zM7.242 21H3v-4.243L16.435 3.322a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414L7.243 21z" fill="rgba(50,152,219,1)"/></svg>
                        </div>
                        })}
                    </div>

                    <div class="bg-white shadow p-4">
                        <h1 class="text-center font-medium">Doing</h1>

                        {listofdoing.map(todo => {
                            return <div class="mt-4 flex border rounded-sm p-2">
                            <p>{todo.title}</p>
                            <select value={todo.level} class ="text-green-600 ml-2">
                                <option>To do</option>
                                <option>Doing</option>
                                <option>Done</option>
                            </select>

                            <div class="flex">
                            <svg class="mt-1 ml-4 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0h24v24H0z"/><path d="M20 7v14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7H2V5h20v2h-2zM6 7v13h12V7H6zm1-5h10v2H7V2zm4 8h2v7h-2v-7z" fill="rgba(217,8,8,0.78)"/></svg>
                            </div>

                            <svg class="mt-1 ml-4 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0h24v24H0z"/><path d="M15.728 9.686l-1.414-1.414L5 17.586V19h1.414l9.314-9.314zm1.414-1.414l1.414-1.414-1.414-1.414-1.414 1.414 1.414 1.414zM7.242 21H3v-4.243L16.435 3.322a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414L7.243 21z" fill="rgba(50,152,219,1)"/></svg>
                        </div>
                        })}
                    </div>

                    <div class="bg-white shadow p-4">
                        <h1 class="text-center font-medium">Done</h1>

                        {listofdone.map(todo => {
                            return <div class="mt-4 flex border rounded-sm p-2">
                            <p>{todo.title}</p>
                            <select value={todo.level} class ="text-green-600 ml-2">
                                <option>To do</option>
                                <option>Doing</option>
                                <option>Done</option>
                            </select>

                            <div class="flex">
                            <svg class="mt-1 ml-4 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0h24v24H0z"/><path d="M20 7v14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7H2V5h20v2h-2zM6 7v13h12V7H6zm1-5h10v2H7V2zm4 8h2v7h-2v-7z" fill="rgba(217,8,8,0.78)"/></svg>
                            </div>

                            <svg class="mt-1 ml-4 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0h24v24H0z"/><path d="M15.728 9.686l-1.414-1.414L5 17.586V19h1.414l9.314-9.314zm1.414-1.414l1.414-1.414-1.414-1.414-1.414 1.414 1.414 1.414zM7.242 21H3v-4.243L16.435 3.322a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414L7.243 21z" fill="rgba(50,152,219,1)"/></svg>
                        </div>
                        })}
                    </div>
                </div>
            </div>
        </div>
    )

}

export default DashboardComponent