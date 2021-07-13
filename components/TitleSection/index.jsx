import styles from "./TitleSection.module.scss";

export default function TitleSection({ text }) {
    return <h2 className={styles.titleSection}>{text}</h2>;
}
