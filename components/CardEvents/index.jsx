import Link from "next/link";
import styles from "./CardEvents.module.scss";

export default function CardEvents({ events }) {
    console.log(events);
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

                            <p>{event.title}</p>
                        </a>
                    </Link>
                ))}
        </div>
    );
}
