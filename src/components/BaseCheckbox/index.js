import React from "react";
import styles from "./index.module.css";

export default function BaseCheckbox() {
    return (
        <label className={styles.container}>
            <input type="checkbox" />
            <span className={styles.checkmark}></span>
        </label>
    )
}