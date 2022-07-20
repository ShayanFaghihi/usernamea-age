import React from "react";

import styles from "./Button.module.css";

const Button = props => {
    return <button className={styles} type={props.type || 'button'} onSubmit={props.onSubmit}>{props.children}</button>
}

export default Button;