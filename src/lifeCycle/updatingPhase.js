import { Component } from "react";





class UpdatingPhase extends Component {

    state = {
        counter: 0,
        color: "red"
    }

    increment = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    componentDidMount() {
        console.log("Did Mount")
        document.title = `Current count ${this.state.counter}`
    }


    componentDidUpdate() {
        //api calls
        console.log("Did Update")
        document.title = `Current count ${this.state.counter}`
    }

    shouldComponentUpdate() {
        //this component returns boolean
        //by default it will br true
        //it is not manadatory to take this component
        //we use in optimization purpose ,in pure components 
        console.log("Should Update")
        return true
    }

    getSnapshotBeforeUpdate(pervProps,prevState){
        console.log(prevState,"previous state")
        return null 
    }


    static getDerivedStateFromProps(props, state) {
        console.log("get derived state from prop")
        return { color: props.favColor }
    }

    render() {
        console.log("render")
        return (
            <>
                <h1 style={{ color: this.state.color }}>Counter example {this.state.counter}</h1>
                <button onClick={this.increment}>Increment</button>
            </>
        )
    }
}

export default UpdatingPhase