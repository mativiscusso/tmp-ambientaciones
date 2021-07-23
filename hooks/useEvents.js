import { fetchFilterEvents } from "firebase/client";
import { useState, useEffect } from "react";

export default function useEvents(fieldToFilter, valueToFilter) {
    const [events, setEvents] = useState(undefined);

    useEffect(() => {
        fetchFilterEvents(fieldToFilter, valueToFilter)
            .then(setEvents)
            .catch((err) => {
                console.log(err);
            });
    }, [fieldToFilter, valueToFilter]);

    return events;
}
