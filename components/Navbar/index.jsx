import Link from "next/link";
import Image from "next/image";
import logoTmp from "svg/logo.svg";
import MenuMobile from "components/MenuMobile";
import styles from "./Navbar.module.scss";

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.navbarIconHamburg}>
                <MenuMobile right />
            </div>
            <div className={styles.navbarLinks}>
                <ul>
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
                    <Link href="/">
                        <a>
                            <Image
                                src={logoTmp}
                                alt="Logo Punto Ian"
                                width={80}
                                height={80}
                            />
                        </a>
                    </Link>
                    <li>
                        <Link href="/#nosotros">
                            <a>Nuestros trabajos</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/#contacto">
                            <a>Contacto</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
