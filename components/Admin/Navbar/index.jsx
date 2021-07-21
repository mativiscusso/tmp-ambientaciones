import { signOutUserAdmin } from "firebase/client";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./NavbarAdmin.module.scss";

export default function NavbarAdmin() {
    const router = useRouter();

    const handleLogout = () => {
        signOutUserAdmin()
            .then((result) => {
                if (result) {
                    return router.push("/login");
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

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
            <Link href="/">
                <a>Ver sitio</a>
            </Link>
            <button onClick={handleLogout}>Log out</button>
        </nav>
    );
}
