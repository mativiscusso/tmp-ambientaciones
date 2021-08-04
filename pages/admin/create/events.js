import EventForm from "components/Admin/EventForm";
import { useState } from "react";
import styles from "styles/Admin.module.scss";
import useAuth from "hooks/useAuth";
import NavbarAdmin from "components/Admin/Navbar";

export default function CreateEventsPage() {
    const { admin, loading } = useAuth();
    const [postEditorVisible, setPostEditorVisible] = useState(false);

    return (
        <div className={styles.admin}>
            {!loading && admin && (
                <>
                    <NavbarAdmin setPostEditorVisible={setPostEditorVisible} />
                    <div className={styles.container}>
                        <EventForm admin={admin} />
                    </div>
                </>
            )}
        </div>
    );
}
