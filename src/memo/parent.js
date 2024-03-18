import { useState } from "react"
import ChildComponentmemo from "./child"







function ParentComponentmemo() {

    const [count, setCount] = useState(0)

    const changecount = () => {
        setCount((c) => {
            return c + 1
        })
    }

    return (
        <div>

            <h1>Counter Value:{count}</h1>
            <button onClick={changecount}>Change Counter value</button>
            <ChildComponentmemo />
        </div>
    )
}


export default ParentComponentmemo