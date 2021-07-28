import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./PostForm.module.scss";
import UploadImages from "../UploadImages";
import { addPost } from "firebase/client";
import { useRouter } from "next/router";
import Loading from "components/Loading";

const INITIAL_STATE = {
    title: "",
    content: "",
    image: "",
    createdAt: "",
};
export default function PostForm() {
    const [formData, setFormData] = useState(INITIAL_STATE);
    const [isSending, setIsSending] = useState(false);
    const [imagesUploaded, setImagesUploaded] = useState([]);
    const [readyForSend, setReadyForSend] = useState(false);

    const router = useRouter();

    useEffect(() => {
        const { title, content } = formData;
        if (
            title.length > 2 &&
            content.length > 5 &&
            imagesUploaded.length > 0
        ) {
            setReadyForSend(true);
        }
    }, [formData, imagesUploaded]);

    const handleChange = (evt) => {
        setFormData({ ...formData, [evt.target.name]: evt.target.value });
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        setIsSending(true);
        addPost({
            title: formData.title,
            content: formData.content,
            images: [...imagesUploaded],
            slug: formData.title.toLowerCase().replace(/\s/g, "-"),
        })
            .then((result) => {
                setIsSending(false);
                router.push("/admin");
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Crear Posteos</h2>
            <form onSubmit={handleSubmit} className={styles.form}>
                <label htmlFor="title">
                    Título
                    <input type="text" name="title" onChange={handleChange} />
                </label>
                <label htmlFor="content">
                    Contenido
                    <textarea
                        name="content"
                        cols="30"
                        rows="10"
                        onChange={handleChange}
                    />
                </label>
                <UploadImages
                    imagesUploaded={imagesUploaded}
                    setImagesUploaded={setImagesUploaded}
                />
                <br />
                <button
                    disabled={!readyForSend || isSending}
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    {isSending && <Loading />}
                    Crear
                </button>
            </form>
        </div>
    );
}
