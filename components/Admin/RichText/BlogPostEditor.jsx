import { useState, useEffect } from "react";

import Editor from "./Editor";

export default function BlogPostEditor({
    visible,
    onClose,
    onComplete,
    editPostData,
}) {
    const [postName, setPostName] = useState("");
    const [editorData, setEditorData] = useState(null);

    useEffect(() => {
        if (editPostData && postName !== editPostData.title) {
            setPostName(editPostData.title);
        }
    }, [editPostData, postName]);

    if (!visible) return null;

    const handleSubmit = () => {
        if (editPostData) {
            onComplete({
                id: editPostData.id,
                title: postName,
                data: editorData,
            });
            handleClose();
        } else if (postName && editorData) {
            onComplete({ title: postName, data: editorData });
            handleClose();
        }
    };

    const handleClose = () => {
        setPostName("");
        onClose();
    };

    return (
        <div className="blog-post-editor__wrap">
            <div className="blog-post-editor__container">
                <h1 className="text-center">
                    {`${
                        editPostData ? "Editar" : "Crear"
                    } posteos para nuestro blog`}
                </h1>

                <h1
                    className="blog-post-editor__close-button"
                    onClick={handleClose}
                >
                    X
                </h1>

                <div className="blog-post-editor__title-container">
                    <div className="blog-post-editor__title-text">
                        Título del post:
                    </div>

                    <input
                        className="blog-post-editor__title-input"
                        value={postName}
                        onChange={({ target }) => setPostName(target.value)}
                    />
                </div>

                <div className="blog-post-editor__editor-container">
                    <Editor
                        onChange={setEditorData}
                        initialState={editPostData && editPostData.data}
                    />
                </div>

                <div className="text-center">
                    <button
                        className="blog-post-editor__button"
                        onClick={handleSubmit}
                    >
                        {`${editPostData ? "Editar" : "Crear"}`}
                    </button>
                </div>
            </div>
        </div>
    );
}
