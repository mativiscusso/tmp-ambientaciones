import Layout from "components/Layout";
import HeaderPages from "components/HeaderPages";
import styles from "styles/Blog.module.scss";

export default function BlogPage() {
    return (
        <main className={styles.blog}>
            <Layout>
                <HeaderPages title="Blog" />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Distinctio adipisci ullam inventore minima culpa ipsam
                    aliquam rerum laudantium sint cum.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Distinctio adipisci ullam inventore minima culpa ipsam
                    aliquam rerum laudantium sint cum.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Distinctio adipisci ullam inventore minima culpa ipsam
                    aliquam rerum laudantium sint cum.
                </p>
            </Layout>
        </main>
    );
}
