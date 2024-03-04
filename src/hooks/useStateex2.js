import { useState } from "react"




const UseStateExample2 = () => {

    const [initialsec, countdown] = useState(120)

    const start = () => {
        setInterval(() => {
            countdown((sec) => {
                return sec - 1
            })
        }, 1000)

    }

    return (
        <>
            <h1>Count Down {initialsec} </h1>
            <button onClick={start}>Start CountDown</button>

        </>
    )
}

export default UseStateExample2