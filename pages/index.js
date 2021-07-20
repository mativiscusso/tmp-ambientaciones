import Image from "next/image";
import headerImgDesktop from "assets/images/header.jpg";
import headerImgMobile from "assets/images/header-mobile.jpg";
import styles from "../styles/Home.module.scss";
import Accordion from "components/Accordion";
import RockVector from "components/RockVector";
import Layout from "components/Layout";

export default function Home() {
    return (
        <Layout>
            <header className={styles.header}>
                <div className={styles.textHeader}>
                    <RockVector />
                </div>
                <div className={styles.imgHeaderDesktop}>
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
                </div>
            </header>
            <main className={styles.container}>
                <Accordion />
            </main>
        </Layout>
    );
}
