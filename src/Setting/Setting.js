import React from 'react';
import style from './Setting.module.css';
import Button from "../Counter/Button/Button";
import SettingDisplay from "./SettingDisplay";

class Setting extends React.Component {

    render = () => {
        return (
            <div className={style.setting}>
                <SettingDisplay state={this.props.state}/>
                <Button reset={this.props.reset} increment={this.props.increment} state={this.props.state}/>
            </div>
        )
    }
}

export default Setting;