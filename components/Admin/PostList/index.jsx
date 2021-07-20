import { useState, useEffect } from "react";
import { fetchLastestPosts } from "../../../firebase/client";

export default function PostList({ admin }) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        admin &&
            fetchLastestPosts()
                .then(setPosts)
                .catch((err) => console.log(err));
    }, [admin]);

    return (
        <div>
            <h2>Posts</h2>
            {posts && posts.map((post) => <p key={post.id}>{post.title}</p>)}
        </div>
    );
}
