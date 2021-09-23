import logoTmp from "assets/svg/logo.svg";
import Image from "next/image";
import Link from "next/link";
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
                            width={110}
                            height={110}
                        />
                    </a>
                </Link>
            )}

            <li>
                <a
                    href="http://wa.link/3t01jp"
                    target="_blank"
                    rel="noreferrer"
                >
                    Contacto
                </a>
            </li>
            <li className={styles.interiorismoBtn}>
                <Link href="/jobs/interiorismo">
                    <a>Interiorismo</a>
                </Link>
            </li>
        </ul>
    );
}
