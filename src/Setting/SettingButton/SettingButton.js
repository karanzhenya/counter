import React from 'react';
import style from './SettingButton.module.css';
import Btn from "../../Counter/Button/Btn";

class SettingButton extends React.Component {

    render = () => {
        return (
            <div className={style.settingButton}>
                <Btn function={this.props.setSetting} state={this.props.state} name={"set"}/>
            </div>
        )
    }
}

export default SettingButton;