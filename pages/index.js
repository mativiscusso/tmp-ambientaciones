import Image from "next/image";
import headerImg from "assets/images/header.jpg";
import rockVector from "svg/rock.svg";
import styles from "../styles/Home.module.scss";
import Accordion from "components/Accordion";
import RockVector from "components/RockVector";

export default function Home() {
    return (
        <div>
            <header className={styles.header}>
                <div className={styles.textHeader}>
                    <RockVector />
                </div>
                <Image
                    src={headerImg}
                    layout="responsive"
                    alt="header banner"
                />
            </header>
            <main className={styles.container}>
                <Accordion />
            </main>
        </div>
    );
}
