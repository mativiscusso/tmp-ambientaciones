import { useState, useEffect } from "react";
import {
    deleteDocumentOfCollection,
    fetchAllEvents,
    getDocumentOfCollection,
} from "../../../firebase/client";

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
            <h2>Events</h2>
            {events &&
                events.map((event) => (
                    <div key={event.id}>
                        <p>{event.title}</p>

                        <button id={event.id} onClick={handleEdit}>
                            Edit
                        </button>
                        <button id={event.id} onClick={handleDelete}>
                            Delete
                        </button>
                    </div>
                ))}
        </div>
    );
}
