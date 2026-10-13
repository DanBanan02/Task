import { useState } from "react"

import './App.css'

import Cookie from "./Page_Index/Page_Files/Cookie.jsx"
import Catfact from "./Page_Index/Page_Files/Catfact.jsx"
import User from "./Page_Index/Page_Files/User.jsx"

function App() {

  const [page, setPage] = useState("Cookie")
  return (
    <>
       <div><h1>Home page</h1></div>
       <br></br>
       <div>
          <div>
               <button className="Cookie_btn" onClick={() => setPage("Cookie")}>Cookie Clicker</button>
          </div>

          <div>
            <button className="Catfact_btn" onClick={() => setPage("Catfact")}>Facts about cats</button>
          </div>

          <div>
             <button className="User_btn" onClick={() => setPage("User")}>User Setup</button>
          </div>
          
        </div>

  {page === "Cookie" && <Cookie />}
  {page === "Catfact" && <Catfact />}
  {page === "User" && <User />}
      
    </>
  )
};

export default App;