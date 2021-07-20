import EventForm from "components/Admin/EventForm";
import useAdmin from "hooks/useAdmin";
import styles from "styles/Admin.module.scss";
import useAuth from "hooks/useAuth";
import NavbarAdmin from "components/Admin/Navbar";

export default function AdminPage() {
    const [admin, loading] = useAdmin();
    useAuth(admin, loading);

    return (
        <div className={styles.admin}>
            {!loading && admin && (
                <>
                    <NavbarAdmin />
                    <div className={styles.container}>
                        <EventForm admin={admin} />
                    </div>
                </>
            )}
        </div>
    );
}
