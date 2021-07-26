/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { uploadMultipleImages } from "firebase/client";
import styles from "./UploadImage.module.scss";
import Loading from "components/Loading";

export default function UploadImage({ imagesUploaded, setImagesUploaded }) {
    const [files, setFiles] = useState([]);
    const [loading, setLoading] = useState(false);

    const onFileChange = (e) => {
        for (let i = 0; i < e.target.files.length; i++) {
            const newFile = e.target.files[i];
            newFile["id"] = Math.random().toString();
            newFile["preview"] = URL.createObjectURL(e.target.files[i]);
            /*I want know width and height to image to upload */
            const img = new Image();
            img.src = newFile["preview"];
            img.onload = () => {
                newFile["width"] = img.width;
                newFile["height"] = img.height;
            };
            setFiles((prevState) => [...prevState, newFile]);
            console.log(newFile);
        }
    };
    console.log(files);

    const onUploadSubmission = async (evt) => {
        setLoading(true);
        evt.preventDefault();
        try {
            const images = await uploadMultipleImages(files);
            console.log(images);
            setImagesUploaded(images);
            setLoading(false);
        } catch (error) {
            console.error(error);
        }
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
                        <div key={i} styles={{ position: "relative" }}>
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
                                style={{ width: 40 }}
                            />
                        </div>
                    ))}
            </div>

            <button
                onClick={onUploadSubmission}
                disabled={files.length <= 0 || imagesUploaded.length >= 1}
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                {loading && <Loading />}
                Subir imágenes
            </button>
        </>
    );
}
