import React, { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostContext } from "../../providers/PostProvider";
import { UserProfileContext } from "../../providers/UserProfileProvider";
import { Link } from "react-router-dom";



export default function UserSpecificPosts() {
    const { posts, getAllPostsByUser } = useContext(PostContext);
    const { userProfile } = useContext(UserProfileContext);
    const [user, setUser] = useState([]);


    useEffect(() => {
        getAllPostsByUser(JSON.parse(userProfile).id);
    }, []);

    console.log("userProfile:", JSON.parse(userProfile));


    return (
        <section>
            <div class="postCard">
                <div className="postHeader">
                    <h1>Posts</h1>
                    <p>
                        <Link class="btn btn-primary" to="/posts/add">New Post</Link>
                    </p>
                </div>
                <div className="post-container">
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th>
                                    Title
                </th>
                                <th>
                                    Posted by
                </th>
                                <th>
                                    Category
                </th>
                                <th>
                                    Publish Date
                </th>
                                <th></th>
                            </tr>
                        </thead>
                        {posts.map(p =>
                            <Post key={p.id} post={p} user={user} />
                        )}

                    </table>
                </div>

            </div>
        </section>

    );

}