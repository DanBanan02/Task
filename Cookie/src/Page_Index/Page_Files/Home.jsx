import MonkeyImg from "../Image_page/Monkey.jpg"

function Home({ setPage })
{
    return(
        <div className="Home_page">
            <div className="Home_Buttons">
                <button
                    className="Cookie_btn"
                    onClick={() => setPage("Cookie")}
                >
                    Cookie Clicker
                </button>

                <button
                    className="Catfact_btn"
                    onClick={() => setPage("Catfact")}
                >
                    Cat Facts
                </button>

                <button
                    className="User_btn"
                    onClick={() => setPage("User")}
                >
                    User
                </button>
            </div>

            <h1 className="Home_title">
                Home Page
            </h1>
            <div className="Home_div">

                <aside>
                    <p className="Home_p">
                    Navigate trough the page, by clicking on one of the buttons on top of the page.
                    </p>

                    <p className="Home_p">
                    does buttons will lead you to a "Cookie clicker", "Facts about cats" or "add or remove user setup"
                    </p>
                
                    <ul className="Home_p_li">
                        <li className="Home_li_1">Cookie Clicker</li>
                        <li className="Home_li_2">Cat facts</li>
                        <li className="Home_li_3">User </li>
                    </ul>
                </aside>
                <div>
                    <img
                        className="Monkey_img"
                        draggable="false"
                        src={MonkeyImg}
                        alt="Monkey"
                    />
                </div>
            </div>

        </div>
    )
}

export default Home