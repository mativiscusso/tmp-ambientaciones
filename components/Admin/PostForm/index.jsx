import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./PostForm.module.scss";
import UploadImages from "../UploadImages";

const INITIAL_STATE = {
    title: "",
    content: "",
    image: "",
    createdAt: "",
};
export default function PostForm() {
    const [formData, setFormData] = useState(INITIAL_STATE);
    const [imagesUploaded, setImagesUploaded] = useState([]);
    const [readyForSend, setReadyForSend] = useState(false);

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

    const handleChangeImage = (e) => {
        const file = e.target.files[0];
        console.log(file);
        const task = uploadImage(file);
        setTask(task);
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
    };
    return (
        <div>
            <h3>Crear Posteos</h3>
            <form onSubmit={handleSubmit} className={styles.form}>
                <label htmlFor="title">
                    Título
                    <input type="text" name="title" onChange={handleChange} />
                </label>
                <label htmlFor="description">
                    Contenido
                    <textarea
                        name="description"
                        cols="30"
                        rows="10"
                        onChange={handleChange}
                    />
                </label>

                <UploadImages
                    imagesUploaded={imagesUploaded}
                    setImagesUploaded={setImagesUploaded}
                />
                <div
                    style={{
                        display: "flex",
                        padding: "1rem 0",
                        justifyContent: "space-between",
                    }}
                >
                    {imagesUploaded.length > 0 &&
                        imagesUploaded.map((img, i) => (
                            <Image
                                src={img}
                                alt="Imagen del evento por subir"
                                width={50}
                                height={50}
                                key={i}
                            />
                        ))}
                </div>
                <button disabled={!readyForSend}>Crear</button>
            </form>
        </div>
    );
}
