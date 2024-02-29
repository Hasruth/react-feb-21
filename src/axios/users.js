import * as React from 'react'
import axios from "axios";

import { Component } from "react";

class UserData extends Component {

    constructor() {
        super()
        this.state = {
            userInfo: []
        }
    }
    fetchData = () => {
        // fetch('https://dummyjson.com/users')
        //   .then(res => res.json())
        //   .then(response =>{
        //      this.setState({
        //         userInfo:response.users
        //    })
        //  });
        axios.get("https://dummyjson.com/users")
            .then(response => {
                console.log(response)
                if (response.status === 200) {
                    this.setState({
                        userInfo: response.data.users
                    })
                }
            })
    }

    render() {
        return (
            <>
                <h1>User Collection { }</h1>
                <button onClick={this.fetchData}>Click to get users info</button>
                {
                    this.state.userInfo.length > 0 &&
                    this.state.userInfo.map(eachObj => {
                        return (
                        
                            <React.Fragment key={eachObj.id}>
                                <h3>Full Name : {`${eachObj.firstName} ${eachObj.lastName}`}</h3>
                                <h4>Age :{eachObj.age}</h4>
                                <h2>--------------------------------</h2>
                            </React.Fragment>
                        )
                    })
                }

            </>
        )
    }
}


export default UserData