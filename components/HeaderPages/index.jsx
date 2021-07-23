import React from "react";
import styles from "./HeaderPages.module.scss";

export default function HeaderPages({ title, subtitle = "" }) {
    return (
        <header className={styles.header}>
            <div className={styles.textHeader}>
                <h1>{title}</h1>
                <p>{subtitle}</p>
            </div>
            <div className={styles.imgHeaderDesktop}>
                <div className={styles.bg}></div>
            </div>
        </header>
    );
}
