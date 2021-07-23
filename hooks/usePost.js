import { getDocumentOfCollection } from "firebase/client";
import { useState, useEffect } from "react";

export default function usePost(postId) {
    const [post, setPost] = useState(undefined);

    useEffect(() => {
        getDocumentOfCollection(postId, "posts")
            .then(setPost)
            .catch((err) => {
                console.log(err);
            });
    }, [postId]);

    return post;
}
