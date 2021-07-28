import styles from "./HeaderPages.module.scss";
import BodasTitle from "components/CustomTitles/Bodas";
import CorporativosTitle from "components/CustomTitles/Corporativos";
import SocialTitle from "components/CustomTitles/Social";
import EditorialTitle from "components/CustomTitles/Editoriales";

function titleAccordion(title) {
    const items = {
        bodas: <BodasTitle color="#fff" />,
        corporativos: <CorporativosTitle color="#fff" />,
        social: <SocialTitle color="#fff" />,
        editoriales: <EditorialTitle color="#fff" />,
        interiorismo: <h2>WE DO HOMES</h2>,
    };

    return items[title] ? items[title] : <h1>{title}</h1>;
}

export default function HeaderPages({
    title,
    subtitle = "",
    image = null,
    isHomeDesign,
}) {
    return (
        <header
            className={styles.header}
            style={{
                backgroundImage: `url(${image})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
            }}
        >
            <div className={styles.textHeader}>
                <>{titleAccordion(title)}</>
                <p>{subtitle}</p>
            </div>
            <div className={styles.imgHeaderDesktop}>
                <div
                    className={styles.bg}
                    style={{
                        background: !isHomeDesign
                            ? "linear-gradient(180deg, rgba(0, 0, 0, 0.7) 40%, rgba(238, 48, 35, 1) 100%)"
                            : "linear-gradient(180deg, rgba(0, 0, 0, 0.7) 40%, #7c3127 100%)",
                    }}
                ></div>
            </div>
        </header>
    );
}
