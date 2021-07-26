import styles from "./Tooltip.module.scss";
export default function Tooltip({ children, text }) {
    return (
        <div className={styles.tooltip}>
            {children}
            <span>{text}</span>
        </div>
    );
}
