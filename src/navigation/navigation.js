import AboutScreen from "../headerPages/aboutscreen"
import ContactScreen from "../headerPages/contactscreen"
import InvalidScreen from "../headerPages/invalidScreen"
import ProductDetails from "../headerPages/productdetails"
import SettingScreen from "../headerPages/settingscreen"

const { BrowserRouter, Routes, Route } = require("react-router-dom")
const { default: HomeScreen } = require("../headerPages/homescreen")



const NavigationStack = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/*List Of Route in the app i.e<Route> may have multiples*/}
                <Route path="/" Component={HomeScreen} />
                <Route path="/about" Component={AboutScreen} />
                <Route path="/contacts" Component={ContactScreen} />
                <Route path="/settings" Component={SettingScreen} />
                <Route path="/:category/:productsid" Component={ProductDetails} />
                <Route path="*" Component={InvalidScreen} />

            </Routes>
        </BrowserRouter>
    )
}

export default NavigationStack
