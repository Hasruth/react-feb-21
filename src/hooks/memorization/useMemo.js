import { useMemo, useState } from "react"




function UseMemo() {

    const [counter1, setCounter1] = useState(10)
    const [counter2, setCounter2] = useState(10)

    //usememo accept function what to memorize
    const isEven = useMemo(() => {
        return counter1 % 2 === 0 ? "EVEN" : "ODD"
    }, [counter1])

    return (
        <div>
            <h2>{isEven}Counter A</h2>
            <h1>Counter A :{counter1}</h1>
            <button onClick={() => { setCounter1(counter1 + 1) }}>Change Counter A</button>
            <h1>Counter B :{counter2}</h1>
            <button onClick={() => { setCounter2(counter2 + 1) }}>Change counter B </button>

        </div>

    )
}

export default UseMemo