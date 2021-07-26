import Image from "next/image";
import headerImgDesktop from "assets/images/header.jpg";
import styles from "../styles/Home.module.scss";
import Accordion from "components/Accordion";
import RockVector from "components/RockVector";
import Layout from "components/Layout";
import Link from "next/link";
import Video from "components/Video";
import { fetchCategoryEvent } from "firebase/client";
import EditorialesTitle from "components/CustomTitles/Editoriales";

const videoUrl = "/video/header_video_tmp.mp4";

export default function Home({ categories }) {
    return (
        <Layout>
            <header className={styles.header}>
                <div className={styles.textHeader}>
                    <RockVector />
                </div>
                <Video mainVideo={videoUrl} />
            </header>
            <main className={styles.container}>
                <Accordion categories={categories} />
                <div className={styles.editoriales}>
                    <Link href="/jobs/editoriales">
                        <a>
                            <Image
                                src={headerImgDesktop}
                                layout="responsive"
                                alt="header banner"
                            />
                            <div className={styles.textHeader}>
                                <EditorialesTitle color="#fff" />
                            </div>
                        </a>
                    </Link>
                </div>
            </main>
        </Layout>
    );
}

export async function getStaticProps() {
    const videoUrl =
        "https://firebasestorage.googleapis.com/v0/b/tmp-ambientaciones.appspot.com/o/video%2Fshooting_backstage_TMPweb2.mp4?alt=media&token=de3f9735-9682-44dd-a393-73ee1fa594e0";

    try {
        const categories = await fetchCategoryEvent();
        const categoriesFiltered = categories.filter(
            (category) =>
                category.name !== "interiorismo" &&
                category.name !== "editoriales"
        );
        return { props: { categories: categoriesFiltered } };
    } catch (error) {
        console.log(error);
        return { props: { categories: [] } };
    }
}
