import Link from "next/link";
import Image from "next/image";
import logoTmp from "assets/svg/logo.svg";
import styles from "./Navbar.module.scss";

export default function Navlinks({ isMobile }) {
    return (
        <ul>
            {isMobile && (
                <li>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </li>
            )}
            <li>
                <Link href="/nosotros">
                    <a>¿Qué hacemos?</a>
                </Link>
            </li>
            <li>
                <Link href="/blog">
                    <a>Blog</a>
                </Link>
            </li>
            {!isMobile && (
                <Link href="/">
                    <a>
                        <Image
                            src={logoTmp}
                            alt="Logo tmp"
                            width={80}
                            height={80}
                        />
                    </a>
                </Link>
            )}

            <li>
                <Link href="#contacto">
                    <a>Contacto</a>
                </Link>
            </li>
            <li className={styles.interiorismoBtn}>
                <Link href="/jobs/interiorismo">
                    <a>Interiorismo</a>
                </Link>
            </li>
        </ul>
    );
}
