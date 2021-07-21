import Layout from "components/Layout";
import HeaderPages from "components/HeaderPages";
import styles from "styles/Nosotros.module.scss";

export default function NosotrosPage() {
    return (
        <main className={styles.nosotros}>
            <Layout>
                <HeaderPages title="Nosotros" />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Distinctio adipisci ullam inventore minima culpa ipsam
                    aliquam rerum laudantium sint cum.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Distinctio adipisci ullam inventore minima culpa ipsam
                    aliquam rerum laudantium sint cum.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Distinctio adipisci ullam inventore minima culpa ipsam
                    aliquam rerum laudantium sint cum.
                </p>
            </Layout>
        </main>
    );
}
