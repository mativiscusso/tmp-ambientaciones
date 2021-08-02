import EventList from "components/Admin/EventList";
import styles from "styles/Admin.module.scss";
import useAuth from "hooks/useAuth";
import NavbarAdmin from "components/Admin/Navbar";
import PostList from "components/Admin/PostList";
import Head from "next/head";
import { useState } from "react";

export default function AdminPage() {
    const { admin, loading } = useAuth();
    const [postEditorVisible, setPostEditorVisible] = useState(false);

    return (
        <>
            <Head>
                <title>TMP | Dashboard</title>
            </Head>
            <div className={styles.admin}>
                {!loading && admin && (
                    <>
                        <NavbarAdmin
                            setPostEditorVisible={setPostEditorVisible}
                        />
                        <div className={styles.container}>
                            <EventList admin={admin} />
                            <br />
                            <PostList
                                admin={admin}
                                setPostEditorVisible={setPostEditorVisible}
                                postEditorVisible={postEditorVisible}
                            />
                        </div>
                    </>
                )}
            </div>
        </>
    );
}
