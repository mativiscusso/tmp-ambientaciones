import styles from "./Accordion.module.scss";
import TitleSection from "components/TitleSection";
import Link from "next/link";
import BodasTitle from "components/CustomTitles/Bodas";
import EmpresarialTitle from "components/CustomTitles/Empresarial";
import SocialTitle from "components/CustomTitles/Social";

function TitleAccordion({ title }) {
    const items = {
        bodas: <BodasTitle color="#fff" />,
        empresarial: <EmpresarialTitle color="#fff" />,
        social: <SocialTitle color="#fff" />,
    };

    return <>{items[title]}</>;
}

export default function Accordion({ categories }) {
    return (
        <>
            <TitleSection text="nuestros trabajos" size="48px" />
            <div className={styles.container}>
                {categories &&
                    categories.map((event) => (
                        <div key={event.id} className={styles.box}>
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
