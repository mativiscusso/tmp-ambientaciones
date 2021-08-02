import Image from "next/image";
import logo from "assets/svg/logo.svg";
import InstagramIcon from "components/Icons/Instagram";
import Link from "next/link";
import styles from "./Footer.module.scss";

export default function Footer({ isHomeDesign }) {
    return (
        <>
            <footer
                className={styles.footer}
                id="contacto"
                style={{
                    backgroundColor: !isHomeDesign ? "#ee3123" : "#7c3127",
                }}
            >
                <div className={styles.items}>
                    <p className={styles.marca}>
                        <Image
                            src={logo}
                            width={40}
                            height={40}
                            alt="logo TMP"
                        />
                        &nbsp; ambientaciones
                    </p>
                    <p>Calle falsa 123 - Rosario - Argentina</p>
                    <p>email@email.com</p>
                    <div className={styles.socialBrand}>
                        <InstagramIcon />
                        <Link href="https://www.instagram.com/tmpambientaciones">
                            <a>Organización de bodas</a>
                        </Link>
                    </div>
                    <div className={styles.socialBrand}>
                        <InstagramIcon />

                        <Link href="https://www.instagram.com/tmphomestaging/">
                            <a>Home staging</a>
                        </Link>
                    </div>
                </div>
                <div className={styles.items}>
                    <p>
                        <Link href="/nosotros">
                            <a>¿Qué hacemos?</a>
                        </Link>
                    </p>
                    <p>
                        <Link href="/blog">
                            <a>Blog</a>
                        </Link>
                    </p>
                    <p>
                        <Link href="/#contacto">
                            <a>Contacto</a>
                        </Link>
                    </p>
                    <p>
                        <Link href="/jobs/interiorismo">
                            <a>Interiorismo</a>
                        </Link>
                    </p>
                </div>
                <div
                    className={styles.items}
                    style={{ display: "flex", flexDirection: "column" }}
                >
                    <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSc-4XwzzyeV-myNMBP3R1xSZt5EHMI9y08TSvL4I4UVNIr2hQ/viewform?vc=0&c=0&w=1&flr=0
"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.formLink}
                    >
                        Presupuestar boda
                    </a>

                    <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSc-4XwzzyeV-myNMBP3R1xSZt5EHMI9y08TSvL4I4UVNIr2hQ/viewform?vc=0&c=0&w=1&flr=0
"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.formLink}
                    >
                        Presupuestar home
                    </a>
                </div>
            </footer>
            <small className={styles.poweredBy}>
                Powered by{" "}
                <strong>
                    <a
                        href="https://soymev.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        SoyMEV
                    </a>
                </strong>
                - 2021
            </small>
        </>
    );
}
