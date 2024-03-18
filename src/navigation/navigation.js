import { createContext, useState } from "react"
import AboutScreen from "../headerPages/aboutscreen"
import ContactScreen from "../headerPages/contactscreen"
import InvalidScreen from "../headerPages/invalidScreen"
import ProductDetails from "../headerPages/productdetails"
import SettingScreen from "../headerPages/settingscreen"
import HomeScreen from "../headerPages/homescreen"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginScreen from "../headerPages/preRoutes/login"
import RegisterScreen from "../headerPages/preRoutes/registerration"


//follow steps for context api
export const MessageInformation = createContext()


const NavigationStack = () => {

    const [message, setMessage] = useState("Good Morning")
    const [login, setLogin] = useState(false)


    const changeMessage = () => {
        setMessage("Good Evening")
    }

    const loginHandler = () => {
        setLogin(true)
    }

    return (
        <BrowserRouter>
            <MessageInformation.Provider
                value={{
                    message: message,
                    messageChanger: changeMessage,
                    changeLogin:loginHandler
                }}>
                <Routes>
                    {
                        true ?
                            <>
                                {/*List Of Route in the app i.e<Route> may have multiples*/}
                                <Route path="/" Component={HomeScreen} />
                                <Route path="/about" Component={AboutScreen} />
                                <Route path="/contacts" Component={ContactScreen} />
                                <Route path="/settings" Component={SettingScreen} />
                                <Route path="/:category/:productsid" Component={ProductDetails} />

                            </> :
                            <>
                                <Route path="/" Component={RegisterScreen} />
                                <Route path="/login" Component={LoginScreen} />

                            </>
                    }
                    <Route path="*" Component={InvalidScreen} />
                </Routes>
            </MessageInformation.Provider>
        </BrowserRouter>
    )
}

export default NavigationStack
