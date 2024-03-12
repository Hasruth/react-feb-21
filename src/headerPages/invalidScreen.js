import { useNavigate } from "react-router-dom"



const InvalidScreen = () => {

    const navigation = useNavigate()

    const navigatehome = () => {
        navigation("/")
    }


    return (
        <div>
            <h1>URL not Found, 404 Status</h1>
            <button onClick={navigatehome}>Go To Home</button>
        </div>
    )
}

export default InvalidScreen