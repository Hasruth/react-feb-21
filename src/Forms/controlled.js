import { useState } from "react"



const Controlled = () => {
    const [username, setUsername] = useState("")
    const [userNameError, setUserError] = useState("")


    //event bcoz every function has event
    const usernameHandler = (event) => {

        const uservalue = event.target.value
        setUsername(uservalue)

        if (uservalue.length > 5) {
            setUserError("Username must be less than 5 characters")

        } else {
            let userInfo = {
                username: uservalue
            }
            setUserError("")
            // console.log(userInfo)
        }
        //console.log("User Typing")
    }

    const submitHandler = (event) => {
        event.preventDefault()
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
                        value={username}
                        onChange={usernameHandler}
                    />
                    {
                        userNameError ?
                            <h5 style={{ color: "red" }}>{userNameError}</h5> :
                            null
                    }
                </div>
                <div className="form-group">
                    <label htmlFor="pwd">Password:</label>
                    <input type="password"
                        className="form-control"
                        id="pwd"
                        placeholder="password"

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

export default Controlled