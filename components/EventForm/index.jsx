import { useState, useEffect } from "react";
import { addEvent, uploadImage } from "../../firebase/client";
import styles from "./EventForm.module.scss";

const INITIAL_STATE = {
    title: "",
    description: "",
    category: "",
    images: "",
};
export default function EventForm() {
    const [formData, setFormData] = useState(INITIAL_STATE);
    const [isSending, setIsSending] = useState(false);
    const [task, setTask] = useState(null);
    const [imgStoraged, setImgStoraged] = useState(null);

    useEffect(() => {
        if (task) {
            const onProgress = () => {};
            const onError = () => {};
            const OnComplete = () => {
                console.log("Completed");
                task.snapshot.ref
                    .getDownloadURL()
                    .then(setImgStoraged)
                    .catch((err) => {
                        console.log(err);
                    });
            };
            task.on("state_changed", onProgress, onError, OnComplete);
        }
    }, [task]);

    const handleChangeImage = (e) => {
        const file = e.target.files[0];
        console.log(file);
        const task = uploadImage(file);
        setTask(task);
    };

    const handleChange = (evt) => {
        setFormData({ ...formData, [evt.target.name]: evt.target.value });
    };
    const handleSubmit = (evt) => {
        evt.preventDefault();
        setIsSending(true);
        addEvent({
            title: formData.title,
            description: formData.description,
            category: formData.category,
            images: imgStoraged,
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
            <h3>Crear eventos</h3>
            <form onSubmit={handleSubmit} className={styles.form}>
                <label htmlFor="title">
                    Titulo
                    <input type="text" name="title" onChange={handleChange} />
                </label>
                <label htmlFor="title">
                    Descripcion
                    <textarea
                        name="description"
                        cols="30"
                        rows="10"
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor="title">
                    Categoria
                    <select
                        name="category"
                        onChange={handleChange}
                        defaultValue="choice"
                    >
                        <option selected disabled value="choice">
                            Seleccione una categoria...
                        </option>
                        <option value="bodas">Bodas</option>
                        <option value="1">Bodas</option>
                        <option value="2">Bodas</option>
                        <option value="3">Bodas</option>
                    </select>
                </label>
                <label htmlFor="title">
                    Imagenes
                    <input
                        type="file"
                        name="images"
                        multiple
                        onChange={handleChangeImage}
                    />
                    {imgStoraged && <small>{imgStoraged}</small>}
                </label>
                <button disabled={isSending === true}>Crear</button>
            </form>
        </div>
    );
}
