import Layout from "components/Layout";
import styles from "styles/ArticlesPage.module.scss";
import { getDocumentOfCollection } from "firebase/client";
import convertToHtml from "draftjs-to-html";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function ArticlePage() {
    const [post, setPost] = useState(undefined);

    const router = useRouter();
    const { slug } = router.query;

    useEffect(() => {
        getDocumentOfCollection(slug, "posts")
            .then(setPost)
            .catch((err) => {
                console.log(err);
            });
    }, [slug]);

    return (
        <Layout>
            <main className={styles.article}>
                {post && (
                    <div
                        className="blog-post__preview"
                        dangerouslySetInnerHTML={{
                            __html: convertToHtml(post.data),
                        }}
                    />
                )}
            </main>
        </Layout>
    );
}
