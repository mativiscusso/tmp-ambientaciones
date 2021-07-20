import { useRouter } from "next/router";
import { useEffect } from "react";

export default function useAuth(admin, loading) {
    const router = useRouter();

    useEffect(() => {
        if (admin === null && loading === false) {
            return router.push("/login");
        }
    }, [admin, router, loading]);
}
