import React, { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostContext } from "../../providers/PostProvider";
import { Link } from "react-router-dom";


export default function PostList() {
  const { posts, getAllPosts } = useContext(PostContext);
  // const [post, setPost] = useState({});
  const userProfile = JSON.parse(sessionStorage.getItem("userProfile"))

  useEffect(() => {
    getAllPosts();
  }, []);


  return (
    <section>
      <div class="postCard">
        <div className="postHeader">
          <h1>Posts</h1>
          <p>
            <Link class="btn btn-secondary" to="/posts/add">New Post</Link>
          </p>
          <p>
            <Link class="btn btn-success" to={`/posts/myposts/${userProfile.id}`}>My Posts</Link>
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

              </tr>
            </thead>
            {posts.map(p =>
              <Post key={p.id} post={p} />
            )}
          </table>
        </div>
      </div>
    </section>

  );
}