import Image from "next/image";
import headerImgDesktop from "assets/images/header.jpg";
import headerImgMobile from "assets/images/header-mobile.jpg";
import styles from "../styles/Home.module.scss";
import Accordion from "components/Accordion";
import RockVector from "components/RockVector";
import Layout from "components/Layout";

const videoUrl =
    "https://firebasestorage.googleapis.com/v0/b/tmp-ambientaciones.appspot.com/o/video%2Fshooting_backstage_TMPweb2.mp4?alt=media&token=de3f9735-9682-44dd-a393-73ee1fa594e0";

export default function Home() {
    return (
        <Layout>
            <header className={styles.header}>
                <div className={styles.textHeader}>
                    <RockVector />
                </div>
                <video muted autoPlay loop playsInline>
                    <source src={videoUrl} type="video/mp4" />
                </video>
                {/* <div className={styles.imgHeaderDesktop}>
                    <Image
                        src={headerImgDesktop}
                        layout="responsive"
                        alt="header banner"
                    />
                </div>
                <div className={styles.imgHeaderMobile}>
                    <Image
                        src={headerImgMobile}
                        layout="responsive"
                        alt="header banner"
                    />
                </div> */}
            </header>
            <main className={styles.container}>
                <Accordion />
            </main>
        </Layout>
    );
}
