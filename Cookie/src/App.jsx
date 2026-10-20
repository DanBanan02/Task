import { useState } from "react"

/* Import Css File */
import "./App.css"

/* Imported Page to main Page */
import Home from "./Page_Index/Page_Files/Home.jsx"
import Cookie from "./Page_Index/Page_Files/Cookie.jsx"
import Catfact from "./Page_Index/Page_Files/Catfact.jsx"
import User from "./Page_Index/Page_Files/User.jsx"

/* Navigation Function */
function App()
{
    /* Page Function */
    const [page, setPage] = useState("Home")

    return(
        <>
            {/* Goes to Start Menu */}
            {page === "Home" && (
                <Home setPage={setPage} />
            )}

            {/* Goes to Cookie Page */}
            {page === "Cookie" && (
                <Cookie setPage={setPage} />
            )}

            {/* Goes to CatFact Page */}
            {page === "Catfact" && (
                <Catfact setPage={setPage} />
            )}

            {/* Goes to User Page */}
            {page === "User" && (
                <User setPage={setPage} />
            )}

            <img src="" alt="" srcset="" />
        </>
    )
}

export default App