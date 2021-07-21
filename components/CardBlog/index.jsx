import Link from "next/link";
import styles from "./CardBlog.module.scss";

export default function CardBlog() {
    return (
        <div className={styles.cardBlog}>
            <section className={styles.image}></section>
            <section className={styles.body}>
                <h2>Mi Primer Post</h2>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Eligendi, natus.
                </p>
                <Link href="/blog/mi-primer-blog">
                    <a>
                        <strong>Leer mas...</strong>
                    </a>
                </Link>
                <time>11/2/2001</time>
            </section>
        </div>
    );
}
