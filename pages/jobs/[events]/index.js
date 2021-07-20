import HeaderPages from "components/HeaderPages";
import CardEvents from "components/CardEvents";
import useEvents from "hooks/useEvents";
import { useRouter } from "next/router";
import Layout from "components/Layout";

export default function BodasPage() {
    const router = useRouter();
    const { events: eventQuery } = router.query;

    const events = useEvents("category", eventQuery);

    return (
        <Layout>
            <HeaderPages title={eventQuery} />
            <CardEvents events={events} />
        </Layout>
    );
}
