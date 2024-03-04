import { Component, PureComponent } from "react";





class ParentEle extends Component {

    constructor() {
        super()
        this.state = {
            counter: 0
        }
    }


    increment = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }


    render() {
        console.log("Parent rendering")
        return (
            <>

                <h1>parent</h1>
                <h2>{this.state.counter}</h2>
                <button onClick={this.increment}>increment</button>
                <ChildEle />
            </>
        )
    }
}

export default ParentEle

class ChildEle extends PureComponent {
    render() {
        console.log("Child rendering")
        return (
            <>
                <h1>  Child </h1>
            </>
        )
    }
}