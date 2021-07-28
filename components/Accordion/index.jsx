import styles from "./Accordion.module.scss";
import Link from "next/link";
import BodasTitle from "components/CustomTitles/Bodas";
import CorporativosTitle from "components/CustomTitles/Corporativos";
import SocialTitle from "components/CustomTitles/Social";
import Image from "next/image";

function TitleAccordion({ title }) {
    const items = {
        bodas: <BodasTitle color="#fff" />,
        corporativos: <CorporativosTitle color="#fff" />,
        social: <SocialTitle color="#fff" />,
    };

    return <>{items[title]}</>;
}

export default function Accordion({ categories }) {
    return (
        <>
            <div className={styles.container}>
                {categories &&
                    categories.map((event) => (
                        <div key={event.id} className={styles.box}>
                            <Image
                                src={event.image}
                                alt={event.name}
                                layout="fill"
                                objectFit="cover"
                            />
                            <Link href={`/jobs/${event.name}`}>
                                <a>
                                    <span>
                                        <TitleAccordion title={event.name} />
                                    </span>
                                    <div className={styles.bg}></div>
                                </a>
                            </Link>
                        </div>
                    ))}
            </div>
        </>
    );
}
