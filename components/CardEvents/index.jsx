import Link from "next/link";
import styles from "./CardEvents.module.scss";
import IndustrialTitle from "components/CustomTitles/Industrial";
import EuropeanTitle from "components/CustomTitles/European";
import BohoTitle from "components/CustomTitles/Boho";

function titleAccordion(title) {
    const items = {
        boho: <BohoTitle color="#fff" />,
        industrial: <EuropeanTitle color="#fff" />,
        european: <IndustrialTitle color="#fff" />,
    };

    return items[title] ? items[title] : <p>{title}</p>;
}

export default function CardEvents({ events }) {
    return (
        <div className={styles.wrapper}>
            {events &&
                events.map((event, index) => (
                    <Link
                        href={`/jobs/${event.category}/${event.id}`}
                        key={event.id}
                    >
                        <a
                            className={styles.card}
                            style={{
                                backgroundImage: `url(${event.images[0]})`,
                            }}
                        >
                            <div className={styles.bg}></div>

                            <>{titleAccordion(event.title)}</>
                        </a>
                    </Link>
                ))}
        </div>
    );
}
