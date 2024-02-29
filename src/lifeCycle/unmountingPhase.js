
import { Component } from "react";




class Parent extends Component {
    //this is the object way of creating state
    state = {
        isChildVisible: true
    }

    toggleChild = () => {
        this.setState({
            isChildVisible: !this.state.isChildVisible
        })
    }

    render() {
        return (
            <>
                <h3>I am parent</h3>
                <button onClick={this.toggleChild}>Toggle</button>
                {
                    this.state.isChildVisible ?
                        <Child />
                        :
                        <h1>Child Hidden</h1>
                }
            </>

        )
    }
}
export default Parent


class Child extends Component {
    componentWillUnmount() {
        console.log("We can  clear the memeory leaks")
    }
    render() {
        return (
            <>
                <h1>Child Visible</h1>
            </>
        )
    }
}
