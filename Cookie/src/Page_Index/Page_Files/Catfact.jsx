import { useEffect, useState } from "react"

function Catfact({ setPage })
{
    const [fact, setFact] = useState([])
    const [getFact, setGetFact] = useState(true)

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

    }, [getFact])

    return(
        <>
            <button
                className="Cat_btn"
                onClick={() => setPage("Home")}
            >
                Home
            </button>

            <h1 className="Catfact_title">
                Facts about Cats
            </h1>

            <button
                onClick={() =>
                {
                    setGetFact(!getFact)

                    setFactNumber((number) =>
                    {
                        if (number >= 1)
                        {
                            return +1
                        }

                        return number + 1
                    })
                }}
            >
                Facts
            </button>

            {fact.map((catFact) => (
                <p className="Pfact" key={catFact.id}>
                    ({catFact.id}) {catFact.fact}
                </p>
            ))}
        </>
    )
}

export default Catfact