import { useState, useEffect } from "react";
import { addEvent } from "firebase/client";
import EventCategoryList from "../EventCategoryList";
import UploadImages from "../UploadImages";
import styles from "./EventForm.module.scss";
import Image from "next/image";

const INITIAL_STATE = {
    title: "",
    description: "",
    category: "",
    images: "",
};
export default function EventForm({ admin }) {
    const [formData, setFormData] = useState(INITIAL_STATE);
    const [isSending, setIsSending] = useState(false);
    const [imagesUploaded, setImagesUploaded] = useState([]);
    const [readyForSend, setReadyForSend] = useState(false);

    useEffect(() => {
        const { title, category } = formData;
        if (
            title.length > 2 &&
            category.length > 2 &&
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
        addEvent({
            title: formData.title,
            description: formData.description,
            category: formData.category.toLowerCase(),
            images: [...imagesUploaded],
        })
            .then((result) => {
                setIsSending(false);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div>
            <h2>Crear eventos</h2>
            <form onSubmit={handleSubmit} className={styles.form}>
                <label htmlFor="title">
                    Titulo
                    <input type="text" name="title" onChange={handleChange} />
                </label>
                <label htmlFor="title">
                    Descripcion
                    <textarea
                        name="description"
                        cols="10"
                        rows="5"
                        onChange={handleChange}
                    />
                </label>
                <EventCategoryList admin={admin} handleChange={handleChange} />

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
                <button disabled={isSending === true || !readyForSend}>
                    Crear
                </button>
            </form>
        </div>
    );
}
