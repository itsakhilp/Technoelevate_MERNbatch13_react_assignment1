import React, { Component } from 'react';
import './Count.css'



export default class Count extends Component {

    state = {
        count:0 
    };
  
    increment=()=>this.setState({count:this.state.count + 1});
    reset=()=>this.setState({count:0});
    decrement=()=>this.setState({count:this.state.count-1});



    render() {
        return (
            <>
                <div style={{textAlign:"center"}}>
                <h1 id="h1id">{this.state.count}</h1>
                <button  id="incid" onClick={this.increment}>+</button>
                <button id="resetid" onClick={this.reset}>Reset</button>
                <button  id="decid" onClick={this.decrement}>-</button>
                </div>

            </>
        )
    }
}
