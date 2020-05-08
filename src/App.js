import React from 'react';
import style from './App.module.css';
import Counter from "./Counter/Counter";
import Setting from "./Setting/Setting";

class App extends React.Component {

    state = {
        value: 0,
        maxValue: 5,
    };
    increment = (value) => {
        if (this.state.value < 5) {
            this.setState(
                {value: this.state.value + 1})
        }
    };
    reset = (value) => {
        this.setState(
            {value: this.state.value = 0}
        )
    };
    startValue = (e) => {this.setState({value: e.currentTarget.value})};
    maximumValue = (e) => {this.setState({maxValue: e.currentTarget.value})}

    render = () => {
        return (
            <div className={style.app}>
                <Counter state={this.state} reset={this.reset} increment={this.increment}/>
                <Setting state={this.state} set={this.set} startValue={this.startValue} maximumValue={this.maximumValue}/>
            </div>
        )
    }
}

export default App;