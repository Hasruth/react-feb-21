import { useContext, useRef } from "react"
import UseEffectEx4 from "../hooks/useEffectHook/useEffectEx4"
import NavbarComponent from "../navbar/navbar"
import { MessageInformation } from "../navigation/navigation"



const HomeScreen = () => {
    //const sharedInformation = useContext(MessageInformation)
    //in h2 we can access sharedInformation.message instead of this use destructure
    //using destructure
    const { message,messageChanger } = useContext(MessageInformation)
    //console.log(sharedInformation)


    return (
        <div>
            <NavbarComponent />
            <h2>{message}</h2>
            <button onClick={messageChanger}>Change Text </button>
            <UseEffectEx4 />
        </div>
    )
}

export default HomeScreen
