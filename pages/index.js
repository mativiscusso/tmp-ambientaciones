import Image from "next/image";
import headerImgDesktop from "assets/images/editorial.jpg";
import styles from "../styles/Home.module.scss";
import Accordion from "components/Accordion";
import RockVector from "components/RockVector";
import Layout from "components/Layout";
import Link from "next/link";
import Video from "components/Video";
import { fetchCategoryEvent } from "firebase/client";
import EditorialesTitle from "components/CustomTitles/Editoriales";

const videoUrl = "/video/header_video_tmp.mp4";

export default function Home({ categories, editoriales }) {
    console.log(editoriales);
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
                                src={editoriales[0].image}
                                layout="fill"
                                objectFit="cover"
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
    try {
        const categories = await fetchCategoryEvent();
        const categoriesFiltered = categories.filter(
            (category) =>
                category.name !== "interiorismo" &&
                category.name !== "editoriales"
        );

        const editoriales = categories.filter(
            (category) => category.name === "editoriales"
        );
        const interiorismo = categories.filter(
            (category) => category.name === "interiorismo"
        );
        return {
            props: {
                categories: categoriesFiltered,
                editoriales: editoriales,
                interiorismo: interiorismo,
            },
        };
    } catch (error) {
        console.log(error);
        return { props: { categories: [] } };
    }
}
