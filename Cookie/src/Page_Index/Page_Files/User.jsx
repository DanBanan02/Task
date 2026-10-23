import { useState } from "react"

function User({ setPage })
{
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [removeName, setRemoveName] = useState("")

    const [mockData, setMockData] = useState([
        { username: "Ola Normann", email: "ola.normann@norge.no" },
        { username: "Torleif", email: "torleif@kodehode.no" },
        { username: "Jan Egil", email: "jan.egil@kodehode.no" },
        { username: "Sander", email: "sander@kodehode.no" }
    ])

    const listItems = mockData.map((person) => (
        <li className="li_User" key={person.email}>
            {person.username} - {person.email}
        </li>
    ))

    return(
        <>
            <button
                className="User_btn_Home"
                onClick={() => setPage("Home")}
            >
                Home
            </button>

            <h1 className="User_title">
                User setup
            </h1>
            <div>
                <div>
                    <input
                        type="text"
                        placeholder="Enter name"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                    />
                </div>

                <div>
                    <input
                        type="text"
                        placeholder="Enter Email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </div>
                <div>
                    <button onClick={() => {setMockData([...mockData,
                                {
                                    username: username,
                                    email: email
                                }
                            ])

                            setUsername("")
                            setEmail("")
                        }} >Add User</button>
                </div>
                <br></br>
                <div>
                    <input
                    type="text"
                    placeholder="Name to remove"
                    value={removeName}
                    onChange={(event) => 
                    
                    setRemoveName(event.target.value)}/>
                    
                    <button
                        onClick={() =>
                        { setMockData( mockData.filter((person) => person.username !== removeName ))

                            setRemoveName("")}}
                            > Remove User 
                    </button>
                </div>
            </div>

            <ul className="user_text">
                {listItems}
            </ul>
        </>
    )
}

export default User