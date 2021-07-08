import { useState, useEffect } from "react";
import { onAuthStateChanged } from "../firebase/client";

export default function useAdmin() {
    const [admin, setAdmin] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        onAuthStateChanged(setAdmin);
        setTimeout(() => {
            setLoading(false);
        }, 500);
    }, []);

    return [admin, loading];
}
