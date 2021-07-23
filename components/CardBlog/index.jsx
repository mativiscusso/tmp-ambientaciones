import Link from "next/link";
import styles from "./CardBlog.module.scss";

export default function CardBlog({ id, title, content, date, images }) {
    return (
        <div className={styles.cardBlog}>
            <section
                className={styles.image}
                style={{
                    backgroundImage: `url(${images && images[0]} )`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            ></section>
            <section className={styles.body}>
                <h2>{title}</h2>
                <p>{content}</p>
                <Link href={`/blog/${id}`}>
                    <a>
                        <strong>Leer mas...</strong>
                    </a>
                </Link>
                <time>{date}</time>
            </section>
        </div>
    );
}
