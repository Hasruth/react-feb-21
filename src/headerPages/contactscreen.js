import ParentCallback from "../hooks/useCallback/parentCallback"
import ParentComponentmemo from "../memo/parent"
import NavbarComponent from "../navbar/navbar"


const ContactScreen=()=>{
    return(
        <div>
            <NavbarComponent/>
            <ParentCallback/>
        </div>
    )
}

export default ContactScreen