import { useState } from "react"




//this custom hook used in about and settings screen for reference
//it is not a component 
function UseCounter(initial,value) {
    const [count, setCount] = useState(initial)


    const handleIncrement = () => {
        setCount(count + value)
    }
    const handleDecrement = () => {
        setCount(count - value)
    }


    return [count,handleIncrement,handleDecrement]
}


export default UseCounter