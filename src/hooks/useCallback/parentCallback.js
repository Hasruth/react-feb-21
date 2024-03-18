import { useCallback, useState } from "react"
import Button from "./button"




function ParentCallback() {
    const [age, setAge] = useState(100)
    const [salary, setSalary] = useState(10000)


    //usecallback first argument accepts memorize function
    //2nd argumnet takes depency 
    const handleAge = useCallback(() => {
        setAge(age + 1)
    }, [age])

    const handleSalary = useCallback(() => {
        setSalary(salary + 1000)
    }, [salary])

    return (

        <div>
            <h1>Current age:{age}</h1>
            <h1>Current salary:{salary}</h1>
            <Button onClick={handleAge}>
                Increment Age
            </Button>
            <Button onClick={handleSalary}>
                Increment salary
            </Button>

        </div>
    )
}


export default ParentCallback