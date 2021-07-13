import styles from "./TitleSection.module.scss";

export default function TitleSection({ text, size, padding }) {
    return (
        <h2
            className={styles.titleSection}
            style={{ fontSize: size, padding: padding }}
        >
            {text}
        </h2>
    );
}
