import { useState } from "react";
import { uploadMultipleImages } from "../../../firebase/client";

export default function UploadImage({ imagesUploaded, setImagesUploaded }) {
    const [files, setFiles] = useState([]);

    const onFileChange = (e) => {
        for (let i = 0; i < e.target.files.length; i++) {
            const newFile = e.target.files[i];
            newFile["id"] = Math.random();
            setFiles((prevState) => [...prevState, newFile]);
        }
    };

    const onUploadSubmission = async (evt) => {
        evt.preventDefault();
        const images = await uploadMultipleImages(files);
        setImagesUploaded(images);
    };

    return (
        <>
            <label>
                Select Files
                <input type="file" multiple onChange={onFileChange} />
            </label>

            <button
                onClick={onUploadSubmission}
                disabled={files.length <= 0 || imagesUploaded.length >= 1}
            >
                Upload
            </button>
        </>
    );
}
