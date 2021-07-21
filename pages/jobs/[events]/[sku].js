import HeaderPages from "components/HeaderPages";
import { useRouter } from "next/router";
import Masonry from "components/Masonry";
import Layout from "components/Layout";
import useEvent from "hooks/useEvent";
import styles from "styles/EventsPage.module.scss";

export default function EventPage() {
    const router = useRouter();
    const { sku } = router.query;
    const event = useEvent(sku);

    return (
        <Layout>
            <main className={styles.events}>
                <HeaderPages title={event?.title} />
                <Masonry event={event} />
            </main>
        </Layout>
    );
}
