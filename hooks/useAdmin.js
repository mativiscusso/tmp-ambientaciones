import { useState, useEffect } from "react";

const useAdmin = () => {
    const [admin, setAdmin] = useState(undefined);

    useEffect(() => {
        //TODO Verificar token de admin
    }, []);
    return admin;
};

export default useAdmin;
