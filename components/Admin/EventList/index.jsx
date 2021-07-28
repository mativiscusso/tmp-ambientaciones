import { useState, useEffect } from "react";
import {
    deleteDocumentOfCollection,
    fetchAllEvents,
    getDocumentOfCollection,
} from "firebase/client";
import styles from "./Table.module.scss";
import DeleteIcon from "components/Icons/Delete";
import Tooltip from "components/Tooltip";
import Loading from "components/Loading";
import router from "next/router";

export default function EventList({ admin }) {
    const [events, setEvents] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        fetchAllEvents()
            .then((result) => {
                setEvents(result);
                setIsLoading(false);
            })
            .catch((err) => console.log(err));
    }, []);

    const handleDelete = (evt) => {
        const id = evt.currentTarget.id;
        deleteDocumentOfCollection(id, "events");
        router.reload();
    };
    const handleEdit = async (evt) => {
        const id = evt.currentTarget.id;
        const event = await getDocumentOfCollection(id, "events");
    };

    return (
        <div className={styles.tableWrapper}>
            <h2>Eventos</h2>

            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Estilo</th>
                        <th>Nombre</th>
                        <th>Categoría</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                {isLoading && <Loading />}

                <tbody>
                    {events &&
                        events.map((event, i) => (
                            <tr key={event.id}>
                                <th>{i + 1}</th>
                                <th>Industial</th>
                                <th>{event.title}</th>
                                <th style={{ textTransform: "uppercase" }}>
                                    {event.category}
                                </th>
                                <th>
                                    {/* <button id={event.id} onClick={handleEdit}>
                                        Edit
                                    </button> */}

                                    <button
                                        id={event.id}
                                        onClick={handleDelete}
                                    >
                                        <Tooltip text="Eliminar">
                                            <DeleteIcon />
                                        </Tooltip>
                                    </button>
                                </th>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
}
