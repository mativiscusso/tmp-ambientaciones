import Layout from "components/Layout";
import HeaderPages from "components/HeaderPages";
import styles from "styles/Nosotros.module.scss";

export default function NosotrosPage() {
    return (
        <main className={styles.nosotros}>
            <Layout>
                <HeaderPages title="Nosotros" />
                <p>
                    Hey, Hola! Suena típico contar que somos un equipo creativo,
                    pero es la verdad, ¡somos eso!
                </p>
                <p>
                    Decorar una fiesta, no es solo poner una mesa bonita, para
                    nosotros involucra un proceso creativo y dinámico que será
                    el reflejo de las personalidades de los anfitriones de una
                    fiesta.
                </p>
                <p>
                    Queremos que tus invitados se sientan absolutamente cómodos,
                    pero sobre todo representados con vos.
                </p>
                <p>
                    Planeamos detalles, muchos detalles, que marcan la
                    diferencia. Somos super fanáticos de las fiestas. Nos gusta
                    celebrar, nos gusta transformar los espacios, nos gusta
                    convertir tu evento en algo único, distinto. Queremos que
                    vivan una experiencia con los cinco sentidos, ayudaremos a
                    que eso se concrete involucrando a cada proveedor, luces,
                    sonido, catering, tragos y diversión.
                </p>
                <p>
                    Nuestro trabajo es hacer escenarios efímeros e inolvidables.
                    Y nuestro equipo, está preparado para eso. Tenemos el
                    orgullo de contar con arquitectos, diseñadores de interiores
                    y artistas florales distinguidos y únicos. ¡Nos fascina
                    buscar materiales innovadores, nuevos, cosas únicas !
                </p>
                <p>
                    Sabemos mezclar tu estilo y reproducirlo en la ambientación,
                    estamos capacitados para adaptar los espacios y
                    ¡TRANSFORMARLOS!
                </p>
                <p>
                    Como profesionales del sector, conocemos las tendencias y
                    los secretos necesarios para hacer UNA AMBIENTACIÓN MÁGICA y
                    ÚNICA!
                </p>
                <p>
                    Te dejamos nuestro portfolio y redes sociales para que veas
                    con tus propios ojos lo que te estamos contando!!! Y si
                    quieres conocer más sobre nuestro servicio y honorarios,
                    mandanos un mail o rellena el formulario aquí y te
                    responderemos lo más rápido que podamos.
                </p>
                <p>
                    ¿Y sabes que más queremos hacer? Queremos seguir diseñando y
                    soñando fiestas divertidas, bonitas, llenas de amor y buena
                    vibra.
                </p>
            </Layout>
        </main>
    );
}
