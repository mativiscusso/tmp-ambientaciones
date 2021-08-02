import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import firebase from "firebase";

export default function useAuth() {
    const router = useRouter();
    const [admin, setAdmin] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                const currentUser = {
                    username: user.displayName,
                    email: user.email,
                    id: user.uid,
                };
                setAdmin(currentUser);
                setLoading(false);
            } else {
                return router.push("/login");
            }
        });
    }, [router]);

    return { admin, loading };
}
