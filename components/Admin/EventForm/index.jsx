import { useState, useEffect } from "react";
import { addEvent } from "firebase/client";
import EventCategoryList from "../EventCategoryList";
import UploadImages from "../UploadImages";
import styles from "./EventForm.module.scss";
import { useRouter } from "next/router";
import Loading from "components/Loading";
import { formatArrayImagesFromArticle } from "helpers";

const INITIAL_STATE = {
    title: "",
    description: "",
    category: "",
    images: "",
};
export default function EventForm({ admin, event }) {
    const [formData, setFormData] = useState(INITIAL_STATE);
    const [isSending, setIsSending] = useState(false);
    const [imagesUploaded, setImagesUploaded] = useState([]);
    const [readyForSend, setReadyForSend] = useState(false);

    const router = useRouter();

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
        if (evt.target.name === "style") {
            setFormData({
                ...formData,
                [evt.target.name]: evt.target.value,
                title: evt.target.value,
            });
        } else {
            setFormData({ ...formData, [evt.target.name]: evt.target.value });
        }
    };
    const handleSubmit = (evt) => {
        evt.preventDefault();

        setIsSending(true);
        addEvent({
            title: formData.title,
            description: formData.description,
            category: formData.category.toLowerCase(),
            images: [...imagesUploaded],
            style: formData.style.toLowerCase() || "",
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
            <h2 className={styles.title}>Crear eventos</h2>
            <form onSubmit={handleSubmit} className={styles.form}>
                <label htmlFor="title">
                    Titulo
                    <input
                        type="text"
                        name="title"
                        onChange={handleChange}
                        defaultValue={formData?.title}
                    />
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
                <EventCategoryList
                    admin={admin}
                    handleChange={handleChange}
                    categorySelected={event?.category}
                />
                {formData.category === "bodas" && (
                    <select name="style" onChange={handleChange}>
                        <option value="" selected disabled>
                            Elige un estilo...
                        </option>
                        <option value="boho">Boho Wedding Collection</option>
                        <option value="industrial">
                            industrial wedding collection
                        </option>
                        <option value="european">
                            european weddin collection
                        </option>
                    </select>
                )}
                <br />
                <UploadImages
                    imagesUploaded={imagesUploaded}
                    setImagesUploaded={setImagesUploaded}
                    imagesInArticleToEdit={
                        event &&
                        event.images &&
                        formatArrayImagesFromArticle(event.images)
                    }
                />
                <br />
                <button
                    disabled={isSending === true}
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
