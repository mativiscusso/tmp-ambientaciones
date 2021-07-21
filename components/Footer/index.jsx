import Image from "next/image";
import logo from "svg/logo.svg";
import instagram from "svg/instagram.svg";
import facebook from "svg/facebook.svg";
import Link from "next/link";
import styles from "./Footer.module.scss";

export default function Footer() {
    return (
        <footer className={styles.footer} id="contacto">
            <div className={styles.items}>
                <p className={styles.marca}>
                    <Image src={logo} width={40} height={40} alt="logo TMP" />
                    &nbsp; ambientaciones
                </p>
                <p>Calle falsa 123 - Rosario - Argentina</p>
                <p>email@email.com</p>
                <span>
                    <Image
                        src={instagram}
                        width={30}
                        height={30}
                        alt="logo TMP"
                    />
                    <Image
                        src={facebook}
                        width={30}
                        height={30}
                        alt="logo TMP"
                    />
                </span>
            </div>
            <div className={styles.items}>
                <p>
                    <Link href="/">
                        <a>¿Qué hacemos?</a>
                    </Link>
                </p>
                <p>
                    <Link href="/">
                        <a>Blog</a>
                    </Link>
                </p>
                <p>
                    <Link href="/">
                        <a>Nuestros trabajos</a>
                    </Link>
                </p>
                <p>
                    <Link href="/">
                        <a>Contacto</a>
                    </Link>
                </p>
            </div>
            <div className={styles.items}>Google Form LINK</div>
        </footer>
    );
}
