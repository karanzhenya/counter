import React from 'react';
import style from './SettingDisplay.module.css';

class SettingDisplay extends React.Component {

    newChangeMaxValue = (e) => {this.props.changeMaxValue(e.currentTarget.valueAsNumber)};
    newChangeStartValue = (e) => {this.props.changeStartValue(e.currentTarget.valueAsNumber)};

    render = () => {
        return (
            <div className={style.settingDisplay}>
               <div className={style.input}>
                   <h2>max value:</h2>
                   <input onChange={this.newChangeMaxValue} value={this.props.state.maxValue} type="number"></input>
               </div>
                <div className={style.input}>
                    <h2>start value:</h2>
                    <input onChange={this.newChangeStartValue} value={this.props.state.startValue} type="number"></input>
                </div>
            </div>
        )
    }
}

export default SettingDisplay;