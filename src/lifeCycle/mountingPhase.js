import * as React from "react"
import { Component } from "react";
import axios from "axios";
import DNASpinners from "../spinners/dna";





class MountingPhase extends Component {

    constructor() {
        console.log("Costructor")
        super()
        this.state = {
            message: "Good Evening",
            users: [],
            color: "red"
        }
    }


    componentDidMount() {
        //it will execute only once in lifecycle
        console.log("Component did Mount")
        axios.get("https://dummyjson.com/users")
            .then(response => {
                this.setState({
                    users: response.data.users
                })

            })
    }

    static getDerivedStateFromProps(props, state) {
        console.log("get derived state from prop")
        return { color: props.favColor }
    }

    render() {
        console.log("renders") 
        return (
            <>
                <h3 style={{ color: this.state.color }}> Hello World</h3>
                {
                    this.state.users.length > 0 ?
                        this.state.users.map(eachObj => {
                            return (
                                <React.Fragment key={eachObj.id}>
                                    <h3>{eachObj.firstName}</h3>
                                </React.Fragment>
                            )
                        })
                        :
                        <DNASpinners />
                }
            </>
        )
    }
}

export default MountingPhase