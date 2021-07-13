import styles from "./Accordion.module.scss";
import TitleSection from "components/TitleSection";

export default function Accordion() {
    return (
        <>
            <TitleSection text="nuestros trabajos" size="48px" />
            <div className={styles.container}>
                <div className={styles.box}>
                    <span>BODAS</span>
                    <div className={styles.bg}></div>
                </div>
                <div className={styles.box}>
                    <span>EDITORIALES</span>
                    <div className={styles.bg}></div>
                </div>
                <div className={styles.box}>
                    <span>INTERIORISMO</span>
                    <div className={styles.bg}></div>
                </div>
                <div className={styles.box}>
                    <span>EMPRESARIALES</span>
                    <div className={styles.bg}></div>
                </div>
                <div className={styles.box}>
                    <span>SOCIAL</span>
                    <div className={styles.bg}></div>
                </div>
            </div>
        </>
    );
}
