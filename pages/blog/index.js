import Layout from "components/Layout";
import HeaderPages from "components/HeaderPages";
import styles from "styles/Blog.module.scss";
import CardBlog from "components/CardBlog";

export default function BlogPage() {
    return (
        <main className={styles.blog}>
            <Layout>
                <HeaderPages title="Blog" />
                <CardBlog />
                <CardBlog />
                <CardBlog />
            </Layout>
        </main>
    );
}
