import HeaderPages from "components/HeaderPages";
import Layout from "components/Layout";
import styles from "styles/EventsPage.module.scss";
import GalleryImages from "components/GalleryImages";
import formatArrayEventsToGallery from "helpers";
import { getDocumentOfCollection } from "firebase/client";

function EventPage({ event }) {
    return (
        <Layout>
            <main className={styles.events}>
                <HeaderPages title={event.title} />

                <GalleryImages
                    photos={formatArrayEventsToGallery(event.images)}
                />
            </main>
        </Layout>
    );
}

export async function getServerSideProps({ params }) {
    const { sku } = params;
    try {
        const event = await getDocumentOfCollection(sku, "events");
        return { props: { event } };
    } catch (error) {
        console.log(error);
        return { props: { event: "" } };
    }
}

export default EventPage;
