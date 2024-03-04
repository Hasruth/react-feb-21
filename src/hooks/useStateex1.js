import { useState } from "react"
import Counter from "../state/counter"



function UseStateExample1() {
    //using destructor bcoz useState returns array
    const [currentState, setCounter] = useState(0)


    //this function is used to increment the current counter value by 1
    const handleChange = (values) => {
        switch (values) {
            case "increment":
                setCounter(currentState + 1)
 //if we use  currentState++ instead of currentState+1 its shows error bcoz of hooks rules,i.e assign will ocuurs here
                break;
            case "decrement":
                setCounter(currentState - 1)
                break;
            case "reset":
                setCounter(0)
            default:
                break;    
        }

    }
    return (
        <>
            <h1>Use state example </h1>
            <h2>Current Counter Value {currentState}</h2>
            <button onClick={() => handleChange("increment")}>Increment</button>
            <button onClick={() => handleChange("decrement")}>Decrement</button>
            <button onClick={() => handleChange("reset")}>Reset</button>
        </>
    )
}


export default UseStateExample1  