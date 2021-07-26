import Loading from "components/Loading";
import { signOutUserAdmin } from "firebase/client";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./NavbarAdmin.module.scss";
import { useState } from "react";
import UserIcon from "components/Icons/User";
import logoTmp from "svg/logo.svg";
import Image from "next/image";

export default function NavbarAdmin() {
    const [loading, setLoading] = useState(false);

    const router = useRouter();

    const handleLogout = () => {
        setLoading(true);
        signOutUserAdmin()
            .then((result) => {
                if (result) {
                    router.push("/login");
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <>
            <nav className={styles.nav}>
                <Link href="/admin">
                    <a>
                        <Image
                            src={logoTmp}
                            alt="Logo tmp"
                            width={80}
                            height={80}
                        />
                    </a>
                </Link>
                <Link href="/admin/create/events">
                    <a>Crear Eventos</a>
                </Link>
                <Link href="/admin/create/posts">
                    <a>Crear Posteos</a>
                </Link>
                <Link href="/">
                    <a>Ver sitio</a>
                </Link>
            </nav>
            <nav className={styles.secondNav}>
                <div>
                    <UserIcon />
                    <strong>Hola Admin</strong>
                </div>

                <button
                    onClick={handleLogout}
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    {loading && <Loading />}
                    CERRAR SESIÓN
                </button>
            </nav>
        </>
    );
}
