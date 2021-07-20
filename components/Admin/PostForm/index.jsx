import { useState } from "react";
import styles from "./PostForm.module.scss";

const INITIAL_STATE = {
    title: "",
    content: "",
    image: "",
    createdAt: "",
};
export default function PostForm() {
    const [formData, setFormData] = useState(INITIAL_STATE);

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
                    Contenido
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
                    Imagen
                    <input
                        type="file"
                        name="images"
                        multiple
                        onChange={handleChangeImage}
                    />
                </label>
                <button>Crear</button>
            </form>
        </div>
    );
}
