import React from "react";

class AppAcount extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number : 10
        };
    }

    handleIncreament = () => this.setState({...this.state, number: this.state.number + 1});

    handleDecreament = () => this.setState({...this.state, number: this.state.number - 1});


    render() {
        return (
            <>
            <h1>{ this.state.number}</h1>
           <button onClick={ this.handleIncreament}>Increament</button>

           <button onClick={ this.handleDecreament}>Decreament</button>
             </>
        )
  
    }
}


export default AppAcount;