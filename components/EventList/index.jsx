import { useState, useEffect } from "react";
import { fetchLastestEvents } from "../../firebase/client";

export default function EventList({ admin }) {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        admin &&
            fetchLastestEvents()
                .then(setEvents)
                .catch((err) => console.log(err));
    }, [admin]);

    return (
        <div>
            <h2>Events</h2>
            {events &&
                events.map((event) => <p key={event.id}>{event.title}</p>)}
        </div>
    );
}
