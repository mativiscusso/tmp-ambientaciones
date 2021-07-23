import { useRouter } from "next/router";
import Layout from "components/Layout";
import styles from "styles/ArticlesPage.module.scss";
import Image from "next/image";
import usePost from "hooks/usePost";

export default function ArticlePage() {
    const router = useRouter();
    const { slug } = router.query;
    const post = usePost(slug);

    return (
        <Layout>
            <main className={styles.article}>
                {post && (
                    <section>
                        <Image
                            src={post.images && post.images[0]}
                            alt={post.title}
                            layout="responsive"
                            width={100}
                            height={100}
                            styles={{ width: "100%", height: "100%" }}
                        />
                        <h1>{post.title}</h1>
                        <p>{post.content}</p>
                    </section>
                )}
            </main>
        </Layout>
    );
}
