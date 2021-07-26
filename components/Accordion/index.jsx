import styles from "./Accordion.module.scss";
import TitleSection from "components/TitleSection";
import Link from "next/link";

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
                                    <span>{event.name}</span>
                                    <div className={styles.bg}></div>
                                </a>
                            </Link>
                        </div>
                    ))}
            </div>
        </>
    );
}
