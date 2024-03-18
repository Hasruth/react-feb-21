import React from "react"



   

function Button({children,onClick}){
    console.log(children,onClick)
    return(
        <button onClick={onClick}>{children}</button>
    )
}

export default React.memo(Button)


