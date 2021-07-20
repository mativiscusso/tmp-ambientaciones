import EventList from "components/Admin/EventList";
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
                        <h1>Hola, Admin</h1>
                        <EventList admin={admin} />
                    </div>
                </>
            )}
        </div>
    );
}
