import logo from "assets/svg/logo.svg";
import InstagramIcon from "components/Icons/Instagram";
import Image from "next/image";
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
                    <p>Cordoba 2035 - Rosario - Argentina</p>
                    <p>info@tmpambientaciones.com</p>
                    <section className={styles.socialBrand}>
                        <InstagramIcon />
                        <Link href="https://www.instagram.com/tmpambientaciones">
                            <a>TMP Ambientaciones</a>
                        </Link>
                    </section>
                    <div className={styles.socialBrand}>
                        <InstagramIcon />

                        <Link href="https://www.instagram.com/tmphomestaging/">
                            <a>TMP Home staging</a>
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
                        <a
                            href="https://wa.link/3t01jp"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Contacto
                        </a>
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
                        href="https://docs.google.com/forms/d/173JJxm-RmJEJf98XQIqvpx3MADfPJ45qaUgUP_vznbI/viewform?edit_requested=true
"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.formLink}
                    >
                        Presupuestar quince
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
