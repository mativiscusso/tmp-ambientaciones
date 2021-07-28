import Footer from "components/Footer";
import Navbar from "components/Navbar";
import styles from "./Layout.module.scss";
import Head from "next/head";

export default function Layout({ children, isHomeDesign }) {
    return (
        <>
            <Head>
                <title>TMP | Eventos & Home Staging</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
                <meta name="title" content="TMP | Eventos & Home Staging" />
                <meta
                    name="description"
                    content="Somos un equipo creativo que crea escenarios efímeros e inolvidables. Tenemos el orgullo de contar con arquitectos, diseñadores de interiores y artistas florales distinguidos y únicos. ¡Nos fascina buscar materiales innovadores, nuevos, cosas únicas !"
                />
                <meta
                    name="keywords"
                    content="eventos,organizacion,home,staging,deco,decoracion,bodas,casamientos,empresariales,coorporativos,interior,interiorismo,diseño,creativo,rosario,cumpleaños,fiestas"
                />
                <meta name="robots" content="index, follow" />
                <meta name="language" content="Spanish" />
                <meta name="revisit-after" content=" days" />
                <meta name="author" content="soymev" />
                <meta name="theme-color" content="#f11c00" />
                <link rel="shortcut icon" href="/favicon.png" />
            </Head>
            <main className={styles.layout}>
                <Navbar />
                {children}
                <Footer isHomeDesign={isHomeDesign} />
            </main>
        </>
    );
}
