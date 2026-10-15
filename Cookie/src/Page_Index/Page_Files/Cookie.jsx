import { useState } from "react"
import cookieImg from "../Image_page/cookie.png"

function Cookie({ setPage })
{
    const [clicks, setClicks] = useState(0)

    return(
        <>
            
            <button
                    className="Cookie_btn"
                    onClick={() => setPage("Home")}
                >
                    Home
                </button>

                <h1 className="Cookie_title">Cookie Clicker</h1>


            <div className="Cookie_Page">
                <div>

                    <h1 className="Cookie_flash">
                        Cookie Clicker
                    </h1>

                    <p className="Cookie_amount">
                        {clicks}x Cookies
                    </p>
                </div>
                
                <div>
                    <button
                        className="Cookie_btn2"
                        onClick={() =>
                        {
                            const newClicks = clicks + 1

                            setClicks(newClicks)

                            if (newClicks % 100 === 0)
                            {
                                console.log(
                                    "Congrats, you achieved: " +
                                    newClicks +
                                    " cookies."
                                )
                            }
                            else if (newClicks % 10 === 0)
                            {
                                console.log(
                                    "Congrats, you Achieved: " +
                                    newClicks +
                                    " cookies."
                                )
                            }
                            else
                            {
                                console.log(
                                    "Achieved: " +
                                    newClicks +
                                    " cookies."
                                )
                            }
                        }}
                    >
                        <img
                            className="Cookie_img"
                            draggable="false"
                            src={cookieImg}
                            alt="Cookie"
                        />
                    </button>
                </div>
            </div>
        </>
    )
}

export default Cookie