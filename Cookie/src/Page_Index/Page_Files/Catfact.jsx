import { useEffect, useState } from "react"

function Catfact()
{
    const [facts, setFacts] = useState([])

    useEffect(() =>
    {
        fetch("https://catfact.ninja/facts?limit=5")
            .then((response) => response.json())
            .then((data) =>
            {
                setFacts(data.data)
            })
    }, [])

    return(
        <>
            <h1 className="Catfact_title">Facts about Cats</h1>

            {facts.map((item, index) => (<p className="Pfact" key={index}>{item.fact}</p>        
                
            ))}
        </>
    )
}

export default Catfact