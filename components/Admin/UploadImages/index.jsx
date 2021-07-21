/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { uploadMultipleImages } from "firebase/client";
import styles from "./UploadImage.module.scss";

export default function UploadImage({ imagesUploaded, setImagesUploaded }) {
    const [files, setFiles] = useState([]);

    const onFileChange = (e) => {
        for (let i = 0; i < e.target.files.length; i++) {
            const newFile = e.target.files[i];
            newFile["id"] = Math.random().toString();
            newFile["preview"] = URL.createObjectURL(e.target.files[i]);
            setFiles((prevState) => [...prevState, newFile]);
        }
    };

    const onUploadSubmission = async (evt) => {
        evt.preventDefault();
        const images = await uploadMultipleImages(files);
        setImagesUploaded(images);
    };

    const handleDeleteImage = (evt) => {
        const imageToDelete = evt.currentTarget.id;
        setFiles((prevState) =>
            prevState.filter((file) => file.id !== imageToDelete)
        );
    };

    return (
        <>
            <label htmlFor="input-file" className={styles.inputLabel}>
                Elegir imágenes para subir
            </label>
            <input
                type="file"
                id="input-file"
                multiple
                onChange={onFileChange}
                style={{ visibility: "hidden" }}
            />
            <div className={styles.imagesZone}>
                {files.length > 0 &&
                    files.map((img, i) => (
                        <div key={i} styles={{position:"relative"}}>
                            <a
                                onClick={handleDeleteImage}
                                id={img.id}
                                className={styles.btnDelete}
                            >
                                <strong>X</strong>
                            </a>
                            <img
                                src={img.preview}
                                alt={img.name}
                                width={50}
                                height={50}
                            />
                        </div>
                    ))}
            </div>

            <button
                onClick={onUploadSubmission}
                disabled={files.length <= 0 || imagesUploaded.length >= 1}
            >
                Upload
            </button>
        </>
    );
}
