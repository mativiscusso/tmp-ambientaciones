import HeaderPages from "components/HeaderPages";
import { useRouter } from "next/router";
import Layout from "components/Layout";
import useEvent from "hooks/useEvent";
import styles from "styles/EventsPage.module.scss";
import GalleryImages from "components/GalleryImages";
import formatArrayEventsToGallery from "helpers";

export default function EventPage() {
    const router = useRouter();
    const { sku } = router.query;
    const event = useEvent(sku);
    return (
        <Layout>
            <main className={styles.events}>
                <HeaderPages title={event?.title} />
                {event && (
                    <GalleryImages
                        photos={formatArrayEventsToGallery(event?.images)}
                    />
                )}
            </main>
        </Layout>
    );
}
