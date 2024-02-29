import { Component } from "react";
import axios from "axios";
import DNASpinners from "../spinners/dna";





class MountingPhase extends Component {

    constructor() {
        console.log("Costructor")
        super()
        this.state = {
            message: "Good Evening",
            users:[]
        }
    }


    componentDidMount(){
        console.log("Component did Mount")
        axios.get("https://dummyjson.com/users")
        .then(response=>{
            this.setState({
                users:response.data.users
            })
            
        })
    }


    render() {
        console.log("renders")
        return (
            <>
                <h3>Hello World</h3>
                {
                    this.state.users.length>0 ?
                    this.state.users.map(eachObj=>{
                        return(
                            <>
                            <h3>{eachObj.firstName}</h3>
                            </>
                        )
                    })
                    :
                    <DNASpinners/>
                }
            </>
        )
    }
}

export default MountingPhase