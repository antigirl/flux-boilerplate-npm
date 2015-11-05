import React, { Component } from 'react';
import SubComponent from './components/SubComponent';

export default class App extends Component {
    constructor(props) {
        super(props);
        console.log('passed down props', props);
        console.log('default props', this.props.someInt);

        this.state = {
            counter: 0
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({
            counter: this.state.counter + 1
        })
    }
  render() {
    return (
        <div>
            <h1>Hello, world i am app #{this.state.counter} <button onClick={this.handleClick}>++ Counter</button></h1>
            <br/>
            <SubComponent />
        </div>
    );
  }
}

App.defaultProps = { someInt: 1 };
