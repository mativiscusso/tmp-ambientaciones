import { fetchCategoryEvent, fetchFilterEvents } from "firebase/client";
import HeaderPages from "components/HeaderPages";
import CardEvents from "components/CardEvents";
import Layout from "components/Layout";
import styles from "styles/EventsPage.module.scss";

function EventsPage({ events, eventQuery, category }) {
    return (
        <Layout isHomeDesign={eventQuery === "interiorismo"}>
            <main
                className={styles.events}
                style={{
                    backgroundColor:
                        eventQuery !== "interiorismo" ? "#ee3123" : "#7c3127",
                }}
            >
                <HeaderPages
                    title={eventQuery}
                    image={category[0].image}
                    isHomeDesign={eventQuery === "interiorismo"}
                />
                {events && events.length <= 0 && (
                    <div style={{ minHeight: "50vh" }}>
                        <p>Aún no hay eventos cargados...</p>
                    </div>
                )}
                <div className={styles.container}>
                    <CardEvents events={events} />
                </div>
            </main>
        </Layout>
    );
}

export async function getStaticProps({ params }) {
    const { events: eventQuery } = params;
    try {
        const events = await fetchFilterEvents("category", eventQuery);
        const categories = await fetchCategoryEvent();
        const category = categories.filter(
            (category) => category.name === eventQuery
        );

        return { props: { events, eventQuery, category } };
    } catch (error) {
        console.log(error);
        return { props: { events: [] } };
    }
}
export async function getStaticPaths() {
    try {
        const categories = await fetchCategoryEvent();
        return {
            paths: categories.map((category) => ({
                params: { events: category.name },
            })),
            fallback: false, // See the "fallback" section below
        };
    } catch (error) {
        console.log(error);
    }
}
export default EventsPage;
