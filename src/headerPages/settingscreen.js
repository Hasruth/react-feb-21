import UseCounter from "../hooks/customHook/useCounter"
import UseMemo from "../hooks/memorization/useMemo"
import UseReducer from "../hooks/useReducer/useReducer"
import NavbarComponent from "../navbar/navbar"


const SettingScreen=()=>{
    const [salary,setSalary,downSalary]=UseCounter(10000,1000)
    return(
        <div><NavbarComponent/>
        
        <h1>{salary}</h1>
        <button onClick={setSalary}>Increment salary</button>
        <button onClick={downSalary}>Decrement salary</button>
        </div>
    )
}


export default SettingScreen