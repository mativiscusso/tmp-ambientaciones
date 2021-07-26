import EventList from "components/Admin/EventList";
import useAdmin from "hooks/useAdmin";
import styles from "styles/Admin.module.scss";
import useAuth from "hooks/useAuth";
import NavbarAdmin from "components/Admin/Navbar";
import PostList from "components/Admin/PostList";

export default function AdminPage() {
    const [admin, loading] = useAdmin();
    useAuth(admin, loading);

    return (
        <div className={styles.admin}>
            {!loading && admin && (
                <>
                    <NavbarAdmin />
                    <div className={styles.container}>
                        <EventList admin={admin} />
                        <br />
                        <PostList admin={admin} />
                    </div>
                </>
            )}
        </div>
    );
}
