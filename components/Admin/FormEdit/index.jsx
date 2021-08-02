import { useState, useEffect } from "react";
import EventCategoryList from "../EventCategoryList";
import styles from "../EventForm/EventForm.module.scss";
import stylesImage from "../UploadImages/UploadImage.module.scss";
import { useRouter } from "next/router";
import Loading from "components/Loading";
import UploadImages from "../UploadImages";
import { formatArrayImagesFromArticle } from "helpers";
import Image from "next/image";
import { setDocumentOfCollection } from "firebase/client";

export default function FormEdit({ event }) {
    const [formData, setFormData] = useState({});
    const [isSending, setIsSending] = useState(false);
    const [imagesUploaded, setImagesUploaded] = useState([]);
    const [imagesAlreadyUpload, setImagesAlreadyUpload] = useState([]);

    const router = useRouter();

    useEffect(() => {
        if (event && event.images) {
            const imagesMapped = formatArrayImagesFromArticle(event.images);
            setImagesAlreadyUpload(imagesMapped);
            setFormData({
                title: event.title,
                description: event.description,
                category: event.category,
                style: event.style || "",
            });
        }
    }, [event]);

    const handleChange = (evt) => {
        setFormData({ ...formData, [evt.target.name]: evt.target.value });
    };
    const handleSubmit = (evt) => {
        evt.preventDefault();
        setIsSending(true);
        const imagesOlder = imagesAlreadyUpload.map((img) => img.preview);
        setDocumentOfCollection(event.id, "events", {
            title: formData.title,
            description: formData.description,
            category: formData.category.toLowerCase(),
            images: [...imagesUploaded, ...imagesOlder],
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

    const handleDeleteImage = (evt) => {
        const imageToDelete = evt.currentTarget.id;
        const filtered = imagesAlreadyUpload.filter(
            (file) => file.id !== Number(imageToDelete)
        );
        setImagesAlreadyUpload(filtered);
    };

    console.log(formData);

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Editar eventos</h2>
            <form onSubmit={handleSubmit} className={styles.form}>
                <label htmlFor="title">
                    Titulo
                    <input
                        type="text"
                        name="title"
                        onChange={handleChange}
                        defaultValue={event?.title}
                    />
                </label>
                <label htmlFor="title">
                    Descripcion
                    <textarea
                        name="description"
                        cols="10"
                        rows="5"
                        onChange={handleChange}
                        defaultValue={event?.description}
                    />
                </label>
                <EventCategoryList
                    handleChange={handleChange}
                    categorySelected={event?.category}
                />
                {formData.category === "bodas" && (
                    <select name="style" onChange={handleChange}>
                        <option
                            value=""
                            selected={formData.style === ""}
                            disabled
                        >
                            Elige un estilo...
                        </option>
                        <option
                            value="boho"
                            selected={formData.style === "boho"}
                        >
                            Boho Wedding Collection
                        </option>
                        <option
                            value="industrial"
                            selected={formData.style === "industrial"}
                        >
                            industrial wedding collection
                        </option>
                        <option
                            value="european"
                            selected={formData.style === "european"}
                        >
                            european weddin collection
                        </option>
                    </select>
                )}
                <div>
                    <h3>Editar imágenes ya subidas</h3>
                    <div className={stylesImage.imagesZone}>
                        {imagesAlreadyUpload &&
                            imagesAlreadyUpload.map((image, i) => (
                                <div key={i} styles={{ position: "relative" }}>
                                    <a
                                        onClick={handleDeleteImage}
                                        id={image.id}
                                        className={stylesImage.btnDelete}
                                    >
                                        <strong>X</strong>
                                    </a>
                                    <Image
                                        src={image?.preview}
                                        alt={image?.preview}
                                        width={80}
                                        height={80}
                                    />
                                </div>
                            ))}
                    </div>
                </div>
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
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    {isSending && <Loading />}
                    Editar
                </button>
            </form>
        </div>
    );
}
