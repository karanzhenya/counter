import React from 'react';
import style from './Setting.module.css';
import SettingDisplay from "./SettingDisplay/SettingDisplay";
import SettingButton from "./SettingButton/SettingButton";

class Setting extends React.Component {

    render = () => {
        return (
            <div className={style.setting}>
                <SettingDisplay changeMaxValue={this.props.changeMaxValue} changeStartValue={this.props.changeStartValue} state={this.props.state} />
                <SettingButton changeSetting={this.props.changeSetting} state={this.props.state}/>
            </div>
        )
    }
}

export default Setting;