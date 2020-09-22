import React, {Component } from 'react'

class Counter extends Component {
    constructor(props){
        super(props)
        this.state={
            count:0
        }
    }
    increment(){
        this.setState({
            count:this.state.count+1
        }, 
        ()=> { console.log('callback value', this.state.count)}
        )
        console.log(this.state.count)
    }

    render(){
        return(
            <div>
                <div>Count {this.state.count}</div>
                <button onClick={()=> this.increment()}>Increment</button>
            </div>           
        )
    }
}

export default Counter