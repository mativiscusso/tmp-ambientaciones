import { useState, useEffect } from "react";
import {
    deleteDocumentOfCollection,
    fetchLastestPosts,
    getDocumentOfCollection,
} from "firebase/client";
import styles from "../EventList/Table.module.scss";
import DeleteIcon from "components/Icons/Delete";
import Tooltip from "components/Tooltip";
import Loading from "components/Loading";
import { useRouter } from "next/router";

export default function PostList({ admin }) {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const router = useRouter();

    useEffect(() => {
        setIsLoading(true);
        fetchLastestPosts()
            .then((result) => {
                setPosts(result);
                setIsLoading(false);
            })
            .catch((err) => console.log(err));
    }, []);

    const handleDelete = (evt) => {
        const id = evt.currentTarget.id;
        deleteDocumentOfCollection(id, "posts");
        router.reload();
    };
    const handleEdit = async (evt) => {
        const id = evt.currentTarget.id;
        const event = await getDocumentOfCollection(id, "posts");
        console.log(event);
    };

    /* Implement function to format date in spanish */
    const formatDate = (date) => {
        const d = new Date(date);
        const months = [
            "Enero",
            "Febrero",
            "Marzo",
            "Abril",
            "Mayo",
            "Junio",
            "Julio",
            "Agosto",
            "Septiembre",
            "Octubre",
            "Noviembre",
            "Diciembre",
        ];
        const day = d.getDate();
        const month = months[d.getMonth()];
        const year = d.getFullYear();
        return `${day} - ${month} - ${year}`;
    };

    return (
        <div className={styles.tableWrapper}>
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
                {isLoading && <Loading />}

                <tbody>
                    {posts &&
                        posts.map((post, i) => (
                            <tr key={post.id}>
                                <th>{i + 1}</th>
                                <th>{post.title}</th>
                                <th>{formatDate(post.createdAt)}</th>
                                <th>
                                    {/* <button id={post.id} onClick={handleEdit}>
                                        Edit
                                    </button> */}

                                    <button id={post.id} onClick={handleDelete}>
                                        <Tooltip text="Eliminar">
                                            <DeleteIcon />
                                        </Tooltip>
                                    </button>
                                </th>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
}
