import Loading from "components/Loading";
import { signOutUserAdmin } from "firebase/client";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./NavbarAdmin.module.scss";
import { useState } from "react";
import UserIcon from "components/Icons/User";
import logoTmp from "assets/svg/logo.svg";
import Image from "next/image";

export default function NavbarAdmin({ setPostEditorVisible }) {
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
                <div>
                    <UserIcon />
                    <strong>Hola Admin</strong>
                </div>
                <Link href="/">
                    <a>Ver sitio</a>
                </Link>

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
            {/* <nav className={styles.secondNav}>
            </nav> */}
        </>
    );
}
