import React from 'react';
import style from './SettingDisplay.module.css';

class SettingDisplay extends React.Component {

    render = () => {
        return (
            <div className={style.settingDisplay}>
               <div className={style.input}>
                   <h2>max value:</h2>
                   <input></input>
               </div>
                <div className={style.input}>
                    <h2>start value:</h2>
                    <input></input>
                </div>
            </div>
        )
    }
}

export default SettingDisplay;