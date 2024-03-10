import { useEffect, useState, useSyncExternalStore } from "react"



const UseEffectEx1 = () => {
    const [initialcounter, setCounter] = useState(0)


    useEffect(() => {
        document.title = `Current Count ${initialcounter}`
        console.log("use Effect")
    }, [initialcounter])

    const increment=()=>{
        setCounter((count)=>{
            return count+1
        })
    }
    return (
        <>
            <h1>Use Effect Hook Example</h1>
            <h1>Current Count {initialcounter}</h1>
            <button onClick={increment}>Count Increment</button>
        </>
    )
}

export default UseEffectEx1