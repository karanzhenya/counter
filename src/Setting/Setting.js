import React from 'react';
import style from '../App.module.css';
import Display from "../Counter/Display/Display";
import Button from "../Counter/Button/Button";

class Setting extends React.Component {


    render = () => {
        return (
            <div className={style.app}>
                <Display state={this.state}/>
                <Button reset={this.reset} increment={this.increment} state={this.state}/>
            </div>
        )
    }
}

export default Setting;