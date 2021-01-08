import React, { Component } from 'react';

export default class LilComp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            message: "Hello fellow kids",
            title: "Cheer back"
        }
    }

    styles = {
        fontStyle: 'italic',
        color: 'teal'
    }

    ButtonClicked = () => {
        this.setState({
            message: "Hello to you too",
            title: "You cheered back"
        })
    }

    render() {
        return (
            <div className="App">
                <h3 style={this.styles}>{this.state.message}</h3>
                <button onClick={this.ButtonClicked}>{this.state.title}</button>
            </div>
        )
    }
}