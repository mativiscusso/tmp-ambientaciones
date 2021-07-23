import Layout from "components/Layout";
import HeaderPages from "components/HeaderPages";
import styles from "styles/Blog.module.scss";
import CardBlog from "components/CardBlog";
import usePosts from "hooks/usePosts";

export default function BlogPage() {
    const posts = usePosts();

    return (
        <Layout>
            <main className={styles.blog}>
                <HeaderPages title="Blog" />
                {posts &&
                    posts.map((post) => (
                        <CardBlog
                            key={post.id}
                            id={post.id}
                            title={post.title}
                            date={post.createdAt}
                            content={post.content}
                            images={post.images}
                        />
                    ))}
            </main>
        </Layout>
    );
}
