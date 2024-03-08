import { useState } from "react"




const UseStateExample3 = () => {
    const [fruits, setFruits] = useState([])


    const addfruit = () => {
        var  a=prompt("enter the fruit")
        const newList = [...fruits, a]
        setFruits(newList)
    }

    const removefruit = () => {
        const newarr=fruits.slice(0,-1)
        setFruits(newarr)
    }

    return (
        <>
            <h1>Add Fruits List</h1>
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