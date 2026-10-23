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
                    <span>
                        <details className="Hint"><summary className="Hint_btn">Hint</summary>Click a button to navigate to a page, with the coresponding function.</details>
                    </span>
                    </p>

                    <ul className="Home_p_li">
                        <li className="Home_li_1"> <span>Cookie Clicker</span></li>
                        <li className="Home_li_2"> <span>Cat facts</span> </li>
                        <li className="Home_li_3"> <span> User </span> </li>
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