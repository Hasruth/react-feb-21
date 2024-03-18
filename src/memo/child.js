import React from "react";



function ChildComponentmemo() {
    console.log("Child re-render");
    return (
        <div>
            Child memo
        </div>
    )
}


export default React.memo(ChildComponentmemo)