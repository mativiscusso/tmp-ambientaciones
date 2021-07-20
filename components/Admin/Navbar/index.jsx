import Link from "next/link";
import useLogout from "hooks/useLogout";
import styles from "./NavbarAdmin.module.scss";

export default function NavbarAdmin() {
    return (
        <nav className={styles.nav}>
            <Link href="/admin">
                <a>DASHBOARD</a>
            </Link>
            <Link href="/admin/create/events">
                <a>Eventos</a>
            </Link>
            <Link href="/admin/create/posts">
                <a>Posteos</a>
            </Link>
            <button onClick={useLogout}>Log out</button>
        </nav>
    );
}
