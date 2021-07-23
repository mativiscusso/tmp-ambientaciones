import { useState, useEffect } from "react";
import { fetchLastestPosts } from "firebase/client";
import styles from "../EventList/Table.module.scss";

export default function PostList({ admin }) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        admin &&
            fetchLastestPosts()
                .then(setPosts)
                .catch((err) => console.log(err));
    }, [admin]);

    const handleDelete = (evt) => {
        const id = evt.currentTarget.id;
        deleteDocumentOfCollection(id, "events");
    };
    const handleEdit = async (evt) => {
        const id = evt.currentTarget.id;
        const event = await getDocumentOfCollection(id, "events");
        console.log(event);
    };

    return (
        <div>
            <h2>Posteos</h2>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Titulo</th>
                        <th>Fecha</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {posts &&
                        posts.map((post, i) => (
                            <tr key={post.id}>
                                <th>{i + 1}</th>
                                <th>{post.title}</th>
                                <th>{post.createdAt}</th>
                                <th>
                                    {/* <button id={post.id} onClick={handleEdit}>
                                        Edit
                                    </button> */}

                                    <button id={post.id} onClick={handleDelete}>
                                        Eliminar
                                    </button>
                                </th>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
}
