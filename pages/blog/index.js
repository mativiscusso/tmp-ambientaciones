import { fetchLastestPosts } from "firebase/client";

import Layout from "components/Layout";
import HeaderPages from "components/HeaderPages";
import CardBlog from "components/CardBlog";

import styles from "styles/Blog.module.scss";

function BlogPage({ posts }) {
    return (
        <Layout>
            <main className={styles.blog}>
                <HeaderPages title="blog" />
                <div className={styles.container}>
                    {posts && posts.length > 0 ? (
                        posts.map((post) => (
                            <CardBlog
                                key={post.id}
                                id={post.id}
                                title={post.title}
                                date={post.createdAt}
                                content={post.content}
                            />
                        ))
                    ) : (
                        <div>
                            <h1>Aun no hay posteos</h1>
                        </div>
                    )}
                </div>
            </main>
        </Layout>
    );
}

export async function getServerSideProps() {
    try {
        const posts = await fetchLastestPosts();

        return {
            props: { posts },
        };
    } catch (error) {
        console.log(error);
        return {
            props: { posts: undefined },
        };
    }
}

export default BlogPage;
