import { useEffect, useState } from "react"




const UseEffectEx3 = () => {
    const [X, setX] = useState(null)
    const [Y, setY] = useState(null)
    useEffect(() => {
        window.addEventListener("mousemove", (event) => {
            //  console.log("mouse moiving", event)
            setX(event.clientX)
            setY(event.clientY)

        })


        return () => {
            console.log("Unmounting")
        }
    }, [])

    return (
        <>
            <h1>Use Effect Ex-3</h1>
            <h2>X-axis={X}</h2>
            <h3>y-axis={Y}</h3>
        </>
    )
}

export default UseEffectEx3