import { useEffect, useState } from "react"

/* CatFact Page Functions */
function Catfact({ setPage })
{

    const [fact, setFact] = useState([])
    const [factIndex, setFactIndex] = useState(0)

    useEffect(() =>
    {
        const getCats = async() =>
        {
            
            const data = await fetch("https://catfact.ninja/facts?limit=5")
            const res = await data.json()

            const idX = res.data.map((fact, index) =>
            {
                return {
                    ...fact,
                    id: index + 1
                }
            })
            setFact(idX)
        }

        getCats()

    }, [])

    return(
        <>
            <button
                className="Cat_btn_Home"
                onClick={() => setPage("Home")}
            >
                Home
            </button>

            {/* Main Title of the page */}
            <h1 className="Catfact_title">
                Facts about Cats
            </h1>

            {/* Function that lets you see the previous Fact about cats */}
        <div className="Fact_btn">
            <button className="Prev_btn"
                onClick={() =>
                {
                    setFactIndex(
                        (factIndex - 1 + fact.length) % fact.length
                    )
                }}
            >
                Previous
            </button>

            {/* Function that let you see the next Fact about cats */}
            <button className="Next_btn"
                onClick={() =>
                {
                    setFactIndex(
                        (factIndex + 1) % fact.length
                    )
                }}
            >
                Next
            </button>
        </div>

            {fact.length > 0 && (
                <p
                    className="Pfact"
                    key={fact[factIndex].id}
                >
                    ({fact[factIndex].id}. ) {fact[factIndex].fact}
                </p>
            )}
        </>
    )
}

export default Catfact