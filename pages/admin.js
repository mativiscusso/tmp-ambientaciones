import { Router, useRouter } from "next/dist/client/router";
import { useEffect } from "react";
import useAdmin from "../hooks/useAdmin";

const AdminPage = () => {
    const [admin, loading] = useAdmin();
    const router = useRouter();

    useEffect(() => {
        if (!admin && !loading) {
            router.push("/");
        }
    }, [admin, router, loading]);

    return (
        <>
            {!loading && admin && (
                <div>
                    <h1>DASHBOARD</h1>
                </div>
            )}
        </>
    );
};

export default AdminPage;
