function Home({ setPage })
{
    return(
        <div className="Home_page">
            <div>
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

        </div>
    )
}

export default Home