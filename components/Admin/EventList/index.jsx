import { useState, useEffect } from "react";
import { deleteDocumentOfCollection, fetchAllEvents } from "firebase/client";
import styles from "./Table.module.scss";
import DeleteIcon from "components/Icons/Delete";
import EditIcon from "components/Icons/Edit";
import Tooltip from "components/Tooltip";
import Loading from "components/Loading";
import router from "next/router";
import Link from "next/link";

const pageSize = 5;
export default function EventList({ admin }) {
    const [events, setEvents] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const [evtToDelete, setEvtToDelete] = useState(undefined);

    const [page, setPage] = useState(1);
    const [rangePage, setRangePage] = useState({
        init: 0,
        end: page * pageSize,
    });

    useEffect(() => {
        setIsLoading(true);
        fetchAllEvents()
            .then((result) => {
                setEvents(result);
                setIsLoading(false);
            })
            .catch((err) => console.log(err));
    }, []);

    const handleDelete = async () => {
        setOpen(false);
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
            <Link href="/admin/create/events">
                <a className={styles.buttonTable}>Crear Eventos</a>
            </Link>
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
                        events
                            .slice(rangePage.init, rangePage.end)
                            .map((event, i) => (
                                <tr key={event.id}>
                                    <th>{rangePage.init + i + 1}</th>
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
                                        <button
                                            id={event.id}
                                            onClick={handleEdit}
                                        >
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
            <p>
                Mostrar eventos ( {rangePage.init + 1} - {rangePage.end} )
            </p>
            <div>
                <button
                    onClick={() => {
                        setRangePage((prevState) => ({
                            init: prevState.init - pageSize,
                            end: prevState.end - pageSize,
                        }));
                    }}
                    disabled={rangePage.init === 0}
                    className={styles.buttonsPagination}
                >
                    <svg
                        height="21"
                        viewBox="0 0 21 21"
                        width="21"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g
                            fill="none"
                            fillRule="evenodd"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            transform="translate(5 6)"
                        >
                            <path d="m8.5 8.5-4-4 4-4" />
                            <path d="m4.5 8.5-4-4 4-4" />
                        </g>
                    </svg>
                </button>
                <button
                    onClick={() => {
                        setRangePage((prevState) => ({
                            init: prevState.init + pageSize,
                            end: prevState.end + pageSize,
                        }));
                    }}
                    disabled={rangePage.end >= events.length}
                    className={styles.buttonsPagination}
                >
                    <svg
                        height="21"
                        viewBox="0 0 21 21"
                        width="21"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g
                            fill="none"
                            fillRule="evenodd"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            transform="translate(7 6)"
                        >
                            <path d="m.5 8.5 4-4-4-4" />
                            <path d="m4.5 8.5 4-4-4-4" />
                        </g>
                    </svg>
                </button>
            </div>
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
