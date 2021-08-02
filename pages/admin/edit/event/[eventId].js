import EventForm from "components/Admin/EventForm";
import { useState, useEffect } from "react";
import styles from "styles/Admin.module.scss";
import useAuth from "hooks/useAuth";
import NavbarAdmin from "components/Admin/Navbar";
import { useRouter } from "next/router";
import { getDocumentOfCollection } from "firebase/client";
import FormEdit from "components/Admin/FormEdit";

export default function CreateEventsPage() {
    const { admin, loading } = useAuth();
    const [event, setEvent] = useState(undefined);
    const router = useRouter();
    const { eventId } = router.query;

    useEffect(() => {
        getDocumentOfCollection(eventId, "events")
            .then(setEvent)
            .catch((err) => {
                console.log(err);
            });
    }, [eventId]);

    return (
        <div className={styles.admin}>
            {!loading && admin && (
                <>
                    <NavbarAdmin />
                    <div className={styles.container}>
                        <FormEdit event={event} />
                    </div>
                </>
            )}
        </div>
    );
}
