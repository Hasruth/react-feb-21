import NavbarComponent from "../navbar/navbar"
import UseCounter from "../hooks/customHook/useCounter"
import useAxios from "../hooks/customHook/useAxios"
import { DNA } from "react-loader-spinner"


const AboutScreen = () => {
    //importing from custom hook
    //in usecounter parenthesis 1st is initail value,2nd is how much to add
    // if we r using(100,10) here we should pass to main hook wr we created as parameters
    const [counter, setCounter, message] = UseCounter(100, 10)

    const [categories] = useAxios("https://fakestoreapi.com/products/categories")
    return (
        <div><NavbarComponent />
            <h3>{counter}</h3>
            <button onClick={setCounter}>Increment</button>
            {
                categories.length > 0 ?
                    categories.map(eachString => <h2>{eachString}</h2>)
                    :
                    <DNA/> 
            }


        </div>

    )
}

export default AboutScreen