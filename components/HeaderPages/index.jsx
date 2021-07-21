import React from "react";
import styles from "./HeaderPages.module.scss";
import Image from "next/image";
import headerImgDesktop from "assets/images/header.jpg";
import useEvents from "hooks/useEvents";

export default function HeaderPages({ title, subtitle = "" }) {
    return (
        <header className={styles.header}>
            <div className={styles.textHeader}>
                <h1>{title}</h1>
                <p>{subtitle}</p>
            </div>
            <div className={styles.imgHeaderDesktop}>
                <div className={styles.bg}></div>

                <Image
                    src={headerImgDesktop}
                    layout="responsive"
                    alt="header banner"
                />
            </div>
        </header>
    );
}
