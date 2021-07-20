import HeaderPages from "components/HeaderPages";
import { useRouter } from "next/router";
import Masonry from "components/Masonry";
import Layout from "components/Layout";
import useEvent from "hooks/useEvent";

export default function BodasPage() {
    const router = useRouter();
    const { sku } = router.query;
    const event = useEvent(sku);

    return (
        <Layout>
            <HeaderPages title={event?.title} />

            <Masonry event={event} />
        </Layout>
    );
}
