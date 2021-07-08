import { useState, useEffect } from "react";

const useAdmin = () => {
    const [loading, setLoading] = useState(true);
    const [admin, setAdmin] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("auth-admin");
        if (token) {
            setAdmin(true);
        }
        setLoading(false);
    }, []);

    return [admin, loading];
};

export default useAdmin;
