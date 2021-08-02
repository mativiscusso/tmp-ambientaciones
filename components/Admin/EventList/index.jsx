import { useState, useEffect } from "react";
import { deleteDocumentOfCollection, fetchAllEvents } from "firebase/client";
import styles from "./Table.module.scss";
import DeleteIcon from "components/Icons/Delete";
import EditIcon from "components/Icons/Edit";
import Tooltip from "components/Tooltip";
import Loading from "components/Loading";
import router from "next/router";

export default function EventList({ admin }) {
    const [events, setEvents] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const [evtToDelete, setEvtToDelete] = useState(undefined);

    useEffect(() => {
        setIsLoading(true);
        fetchAllEvents()
            .then((result) => {
                console.log(result);
                setEvents(result);
                setIsLoading(false);
            })
            .catch((err) => console.log(err));
    }, []);

    const handleDelete = async () => {
        setOpen(false);
        console.log(evtToDelete);
        await deleteDocumentOfCollection(evtToDelete, "events");
        router.reload();
    };
    const handleOpenModal = (evt) => {
        setOpen(true);
        const id = evt.currentTarget.id;
        setEvtToDelete(id);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleEdit = async (evt) => {
        const id = evt.currentTarget.id;
        router.push(`/admin/edit/event/${id}`);
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
                                <th>
                                    {event.style
                                        ? event.style.toUpperCase()
                                        : "Sin Estilo"}
                                </th>
                                <th>{event.title}</th>
                                <th style={{ textTransform: "uppercase" }}>
                                    {event.category}
                                </th>
                                <th>
                                    <button id={event.id} onClick={handleEdit}>
                                        <Tooltip text="Editar">
                                            <EditIcon />
                                        </Tooltip>
                                    </button>

                                    <button
                                        id={event.id}
                                        onClick={handleOpenModal}
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
            {open && (
                <div
                    className={styles.modal}
                    style={{ display: open ? "block" : "none" }}
                >
                    <p>¿Desea eliminar el evento?</p>
                    <div>
                        <button onClick={handleClose}>Cancelar</button>
                        <button onClick={handleDelete}>Eliminar</button>
                    </div>
                </div>
            )}
        </div>
    );
}
