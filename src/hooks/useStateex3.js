import { useState } from "react"




const UseStateExample3 = () => {
    const [fruits, setFruits] = useState(["banana", "apple", "watermelon"])


    const addfruit = () => {
        const newList = [...fruits, "newfruits"]
        setFruits(newList)
    }

    const removefruit = () => {
        const newarr=fruits.slice(0,-1)
        setFruits(newarr)
    }

    return (
        <>
            <h1>TO DO LIST</h1>
            <button onClick={addfruit}>Add fruits</button>
            <button onClick={removefruit}>Remove fruit</button>
            <ol>
                {
                    fruits.map((eachfruit, index) => {
                        return <li key={index}>{eachfruit}</li>
                    })
                }
            </ol>
        </>

    )
}

export default UseStateExample3