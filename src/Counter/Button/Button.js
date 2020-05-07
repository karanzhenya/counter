import React from 'react';
import Btn from "./Btn";
import style from "./Button.module.css"

class Button extends React.Component {
        render = () => {

        return (
            <div className={style.classesButton}>
                    <Btn state={this.props.state} name={"inc"} function={this.props.increment}/>
                    <Btn state={this.props.state} name={"reset"} function={this.props.reset}/>

            </div>
        )}
}

export default Button;