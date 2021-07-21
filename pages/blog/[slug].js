import { useRouter } from "next/router";
import Layout from "components/Layout";
import styles from "styles/ArticlesPage.module.scss";

export default function BodasPage() {
    const router = useRouter();
    const { slug } = router.query;
    // const event = useEvent(slug);

    return (
        <Layout>
            <main className={styles.article}>
                {/* <HeaderPages title={event?.title} /> */}
                <section>
                    <h1>Mi primer post</h1>
                    <p>Este es mi primer post sobre el tema de las bodas.</p>
                </section>
            </main>
        </Layout>
    );
}
