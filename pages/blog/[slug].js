import Layout from "components/Layout";
import styles from "styles/ArticlesPage.module.scss";
import { getDocumentOfCollection } from "firebase/client";

export default function ArticlePage({ post, image }) {
    return (
        <Layout>
            <main className={styles.article}>
                <article
                    style={{
                        backgroundImage: `url(${image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                    className={styles.postImage}
                ></article>
                <section>
                    <h1>{post.title}</h1>
                    <p>{post.content}</p>
                </section>
            </main>
        </Layout>
    );
}

export async function getServerSideProps({ params }) {
    const { slug } = params;
    try {
        const post = await getDocumentOfCollection(slug, "posts");
        return {
            props: { post, image: post.images[0] },
        };
    } catch (error) {
        console.log(error);
        return {
            props: { post: [] },
        };
    }
}
