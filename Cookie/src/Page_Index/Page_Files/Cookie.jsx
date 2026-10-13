import { useState } from "react"
import cookieImg from "../Image_page/cookie.png"

function Cookie()
{
    const [clicks, setClicks] = useState(0)

    const newClicks = clicks +1

    if (newClicks === 100)
    {
        console.log("Congrats nerd!")
        
    }

    return(
        <>

            <h1 className="Cookie_title">Cookie Clicker</h1>

            <p className="Cookie_amount">Cookies {clicks}</p>

            <button
                className="Cookie_btn2"
                onClick={() => {
                    setClicks(clicks + 1)
                    console.log("Cookie Clicked:", clicks + 1)}}>
                
                <img className="Cookie_img" src={cookieImg} alt="Cookie"/></button>  
    
            
        </>
    )
}

export default Cookie