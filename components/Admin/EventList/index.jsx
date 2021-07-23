import { useState, useEffect } from "react";
import {
    deleteDocumentOfCollection,
    fetchAllEvents,
    getDocumentOfCollection,
} from "firebase/client";
import styles from "./Table.module.scss";

export default function EventList({ admin }) {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        admin &&
            fetchAllEvents()
                .then(setEvents)
                .catch((err) => console.log(err));
    }, [admin]);

    const handleDelete = (evt) => {
        const id = evt.currentTarget.id;
        deleteDocumentOfCollection(id, "events");
    };
    const handleEdit = async (evt) => {
        const id = evt.currentTarget.id;
        const event = await getDocumentOfCollection(id, "events");
        console.log(event);
    };

    return (
        <div>
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
                <tbody>
                    {events &&
                        events.map((event, i) => (
                            <tr key={event.id}>
                                <th>{i + 1}</th>
                                <th>Industial</th>
                                <th>{event.title}</th>
                                <th>{event.category}</th>
                                <th>
                                    {/* <button id={event.id} onClick={handleEdit}>
                                        Edit
                                    </button> */}

                                    <button
                                        id={event.id}
                                        onClick={handleDelete}
                                    >
                                        Eliminar
                                    </button>
                                </th>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
}
