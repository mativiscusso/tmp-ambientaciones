import styles from "./Accordion.module.scss";
import TitleSection from "components/TitleSection";
import Link from "next/link";
import { useEffect, useState } from "react";
import { fetchCategoryEvent } from "firebase/client";

export default function Accordion() {
    const [eventsName, setEventsName] = useState(undefined);

    useEffect(() => {
        fetchCategoryEvent()
            .then((result) => {
                const categoriesFiltered = result.filter(
                    (category) => category.name !== "interiorismo"
                );
                setEventsName(categoriesFiltered);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    return (
        <>
            <TitleSection text="nuestros trabajos" size="48px" />
            <div className={styles.container}>
                {eventsName &&
                    eventsName.map((event) => (
                        <div key={event.id} className={styles.box}>
                            <Link href={`/${event.name}`}>
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
