import { fetchFilterEvents } from "firebase/client";
import HeaderPages from "components/HeaderPages";
import CardEvents from "components/CardEvents";
import Layout from "components/Layout";
import styles from "styles/EventsPage.module.scss";

function EventsPage({ events, eventQuery }) {
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

export async function getServerSideProps({ params }) {
    const { events: eventQuery } = params;
    try {
        const events = await fetchFilterEvents("category", eventQuery);
        return { props: { events, eventQuery } };
    } catch (error) {
        console.log(error);
        return { props: { events: [] } };
    }
}

export default EventsPage;
