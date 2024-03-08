import { useRef } from "react"


const UnControlledComponent = () => {
    //useRef returns an object it accepts initial state as for now we take null
    const usernameRef = useRef(null)
    const passwordRef = useRef(null)


    const submitHandler = (e) => {
        // preventDefault is used to stop of auto refresh when sumbit is clicked
        e.preventDefault()
        //current is property of useRef hook to access the current tag
        //collecting input from form & storing in a variable
        const username = usernameRef.current.value
        const password = passwordRef.current.value

        //performing the basic validations
        if (username.length > 5 || password.length > 5) {
            //invalid info
            alert("Username and password must be less than 5 characters")
        } else {
            //valid info
            //to convert the userinfo to Object
            const userInfo = {
                username: username,
                password: password
            }
            console.log(userInfo)
        }
    }

    return (
        <>
            <form onSubmit={submitHandler}>
                <div className="form-group">
                    <label htmlFor="txt">Enter your name:</label>
                    <input type="text"
                        className="form-control"
                        id="email"
                        placeholder="Enter your name"
                        ref={usernameRef}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="pwd">Password:</label>
                    <input type="password"
                        className="form-control"
                        id="pwd"
                        placeholder="password"
                        ref={passwordRef}
                    />
                </div>
                <br></br>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </>
    )
}

export default UnControlledComponent