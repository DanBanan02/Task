import { useState } from "react"

import "./App.css"

import Home from "./Page_Index/Page_Files/Home.jsx"
import Cookie from "./Page_Index/Page_Files/Cookie.jsx"
import Catfact from "./Page_Index/Page_Files/Catfact.jsx"
import User from "./Page_Index/Page_Files/User.jsx"

function App()
{
    const [page, setPage] = useState("Home")

    return(
        <>
            {page === "Home" && (
                <Home setPage={setPage} />
            )}

            {page === "Cookie" && (
                <Cookie setPage={setPage} />
            )}

            {page === "Catfact" && (
                <Catfact setPage={setPage} />
            )}

            {page === "User" && (
                <User setPage={setPage} />
            )}
        </>
    )
}

export default App