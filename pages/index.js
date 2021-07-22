import Image from "next/image";
import headerImgDesktop from "assets/images/header.jpg";
import styles from "../styles/Home.module.scss";
import Accordion from "components/Accordion";
import RockVector from "components/RockVector";
import Layout from "components/Layout";
import Link from "next/link";
import Video from "components/Video";

const videoUrl = "/video/header_video_tmp.mp4";
// "https://firebasestorage.googleapis.com/v0/b/tmp-ambientaciones.appspot.com/o/video%2Fshooting_backstage_TMPweb2.mp4?alt=media&token=de3f9735-9682-44dd-a393-73ee1fa594e0";

export default function Home() {
    return (
        <Layout>
            <header className={styles.header}>
                <div className={styles.textHeader}>
                    <RockVector />
                </div>
                <Video mainVideo={videoUrl} />
            </header>
            <main className={styles.container}>
                <Accordion />
                <div className={styles.editoriales}>
                    <Link href="/jobs/editoriales">
                        <a>
                            <Image
                                src={headerImgDesktop}
                                layout="responsive"
                                alt="header banner"
                            />
                            <div className={styles.textHeader}>
                                <h2>editoriales</h2>
                            </div>
                        </a>
                    </Link>
                </div>
            </main>
        </Layout>
    );
}
