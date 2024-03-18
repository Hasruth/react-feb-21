import { useReducer } from "react"



function reduce(state, action) {

    switch (action.type) {
        case "INCREMENT_AGE":
            return { ...state, age: state.age + 10 }
        case "DECREMENT_AGE":
            return { ...state, age: state.age -  10 }
        case "INCREMENT_SALARY":
            return { ...state, salary: state.salary + 1000 }
        case "DECREMENT_SALARY":
            return { ...state, salary: state.salary -  1000 }
        default:
            return state
    }



}

const initialState = {
    age: 100,
    salary: 10000,
    name: "user1",
    skill: ["html", "css"]
}

//this component is expoeted in setting screen
function UseReducer() {

    const [currentState, dispatch] = useReducer(reduce, initialState)

    const handleIncrementAge = () => {
        dispatch(
            {
                type: "INCREMENT_AGE"
            }
        )
    }

    const handleDecrementAge = () => {
        dispatch(
            {
                type: "DECREMENT_AGE"
            }
        )
    }

    const handleIncrementSalary=()=>{
        dispatch(
            {
                type:"INCREMENT_SALARY"
            }
        )
    }

    const handleDecrementSalary=()=>{
        dispatch(
            {
                type:"DECREMENT_SALARY"
            }
        )
    }

    return (
        <div>
            <h1>Current Age:{currentState.age}</h1>
            <button onClick={handleIncrementAge}>Increment Age</button>
            <button onClick={handleDecrementAge}>Decrement Age</button>
            <h2>{currentState.salary}</h2>
            <button onClick={handleIncrementSalary}>Increment Salary</button>
            <button onClick={handleDecrementSalary}>Decrement Salary</button>

        </div>
    )
}

export default UseReducer