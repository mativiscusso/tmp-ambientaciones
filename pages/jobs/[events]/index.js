import HeaderPages from "components/HeaderPages";
import CardEvents from "components/CardEvents";
import useEvents from "hooks/useEvents";
import { useRouter } from "next/router";
import Layout from "components/Layout";
import styles from "styles/EventsPage.module.scss";

export default function BodasPage() {
    const router = useRouter();
    const { events: eventQuery } = router.query;
    const events = useEvents("category", eventQuery);
    console.log(events.length);
    return (
        <Layout>
            <main className={styles.events}>
                <HeaderPages title={eventQuery} />
                {events && events.length <= 0 && (
                    <p>Aún no hay eventos cargados...</p>
                )}
                <CardEvents events={events} />
            </main>
        </Layout>
    );
}
