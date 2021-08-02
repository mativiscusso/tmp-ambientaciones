import useTimeAgo from "hooks/useTimeAgo";
import Link from "next/link";
import styles from "./CardBlog.module.scss";

export default function CardBlog({ id, title, date }) {
    return (
        <div className={styles.cardBlog}>
            <section className={styles.body}>
                <h2>{title}</h2>
                <time>{useTimeAgo(date)}</time>
                <Link href={`/blog/${id}`}>
                    <a>
                        <strong>Leer mas...</strong>
                    </a>
                </Link>
            </section>
        </div>
    );
}
