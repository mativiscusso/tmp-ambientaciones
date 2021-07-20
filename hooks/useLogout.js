import { useRouter } from "next/router";
import { useEffect } from "react";

export default function useLogout() {
    const router = useRouter();

    useEffect(() => {
        signOutUserAdmin()
            .then((result) => {
                if (result) {
                    return router.push("/");
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }, [router]);
}
