import React from 'react';
import style from './Setting.module.css';
import SettingDisplay from "./SettingDisplay";
import SettingButton from "./SettingButton";

class Setting extends React.Component {

    render = () => {
        return (
            <div className={style.setting}>
                <SettingDisplay state={this.props.state}/>
                <SettingButton state={this.props.state}/>
            </div>
        )
    }
}

export default Setting;