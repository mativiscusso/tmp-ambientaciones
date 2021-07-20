import { getDocumentOfCollection } from "firebase/client";
import { useState, useEffect } from "react";

export default function useEvent(eventId) {
    const [event, setEvent] = useState(undefined);

    useEffect(() => {
        getDocumentOfCollection(eventId, "events")
            .then(setEvent)
            .catch((err) => {
                console.log(err);
            });
    }, [eventId]);

    return event;
}
