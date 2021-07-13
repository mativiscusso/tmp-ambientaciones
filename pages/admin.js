import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import EventList from "../components/EventList";
import EventForm from "../components/EventForm";
import PostList from "../components/PostList";
import PostForm from "../components/PostForm";
import { signOutUserAdmin } from "../firebase/client";
import useAdmin from "../hooks/useAdmin";

const AdminPage = () => {
    const [admin, loading] = useAdmin();

    const router = useRouter();

    useEffect(() => {
        if (admin === null && loading === false) {
            router.push("/login");
        }
    }, [admin, router, loading]);

    const handleClick = async () => {
        const result = await signOutUserAdmin();
        if (result) {
            router.push("/");
        }
    };

    return (
        <>
            {!loading && admin && (
                <div>
                    <h1>DASHBOARD</h1>
                    <EventForm admin={admin} />
                    <PostForm admin={admin} />
                    <button onClick={handleClick}>Log out</button>
                    <EventList admin={admin} />
                    {/* <PostList admin={admin} /> */}
                </div>
            )}
        </>
    );
};

export default AdminPage;
