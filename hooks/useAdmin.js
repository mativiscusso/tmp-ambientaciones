import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/client";

export default function useAdmin() {
    const [admin, setAdmin] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        onAuthStateChanged(setAdmin);
        setLoading(false);
    }, []);

    return [admin, loading];
}
