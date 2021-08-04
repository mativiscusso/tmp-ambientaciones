import { useState, useEffect } from "react";
import {
    addNewPost,
    deleteDocumentOfCollection,
    fetchLastestPosts,
} from "firebase/client";
import styles from "../EventList/Table.module.scss";
import Loading from "components/Loading";
import { useRouter } from "next/router";
import BlogPosts from "components/Admin/RichText/BlogPosts";
import BlogPostEditor from "../RichText/BlogPostEditor";

export default function PostList({ postEditorVisible, setPostEditorVisible }) {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [editPostData, setEditPostData] = useState(null);

    const router = useRouter();

    useEffect(() => {
        setIsLoading(true);
        fetchLastestPosts()
            .then((result) => {
                console.log(result);
                setPosts(result);
                setIsLoading(false);
            })
            .catch((err) => console.log(err));
    }, []);

    const handleDelete = async (data) => {
        await deleteDocumentOfCollection(data.id, "posts");
        router.reload();
    };

    const handleEditPost = (data) => {
        setEditPostData(data);
        setPostEditorVisible(true);
    };

    const handleUpsertPost = (blogPost) => {
        addNewPost(blogPost)
            .then(() => {
                router.reload();
            })
            .catch((err) => {
                console.log(err);
            });
    };
    const handleCloseEditor = () => {
        setEditPostData(null);
        setPostEditorVisible(false);
    };

    return (
        <div className={styles.tableWrapper}>
            <h2>Posteos</h2>
            <button onClick={() => setPostEditorVisible(true)}>
                Crear Post
            </button>
            {posts && (
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
                        {posts && (
                            <BlogPosts
                                data={posts}
                                handleEditPost={handleEditPost}
                                handleDeletePost={handleDelete}
                            />
                        )}
                    </tbody>
                </table>
            )}
            <BlogPostEditor
                visible={postEditorVisible}
                editPostData={editPostData}
                onComplete={handleUpsertPost}
                onClose={handleCloseEditor}
            />
        </div>
    );
}
