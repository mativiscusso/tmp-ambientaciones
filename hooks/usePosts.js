import { fetchLastestPosts } from "firebase/client";
import { useState, useEffect } from "react";

export default function usePosts() {
    const [posts, setPosts] = useState(undefined);

    useEffect(() => {
        fetchLastestPosts()
            .then(setPosts)
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return posts;
}
