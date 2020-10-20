import React, { useState, useContext } from "react";
import { UserProfileContext } from "./UserProfileProvider";

export const PostContext = React.createContext();

export const PostProvider = (props) => {
  const apiUrl = "/api/post";
  const { getToken } = useContext(UserProfileContext);

  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState({});
  const [searchedPost, setSearchedPost] = useState({});

  const getAllPosts = () => {
    getToken().then((token) =>
      fetch(apiUrl, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then(resp => resp.json())
        .then(setPosts));
  };

  const getById = (id) => {
    getToken().then((token) =>
      fetch(`/api/post/${id}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`
        }
      })).then((resp) => resp.json())
      .then(setPost);
  };

  const addPost = (post) => {
    return getToken().then((token) =>
      fetch("/api/post", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(post)
      }).then(resp => {
        if (resp.ok) {
          return resp.json();

        }
        throw new Error("Unauthorized");
      }))
  };

  const updatePost = (id, post) => {
    return getToken().then((token) =>
      fetch(`/api/post/edit/${id}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(post)
      }))
  };

  const deletePost = (id) =>
    getToken().then((token) =>
      fetch(`/api/post/delete/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        },

      }))

      // const searchforEmPostTags = (criterion) => {
      //   fetch(`/api/post/search?q=${criterion}`)
      //     .then(resp => resp.json())
      //     .then(setSearchedPost);
      // };

      const searchforEmPostTags = (criterion) => {
      getToken().then((token) => 
        fetch(`/api/post/search?q=${criterion}`))
          .then(resp => resp.json())
          .then(setPosts);
      };


  return (
    <PostContext.Provider value={{
      post, posts, getAllPosts, getById, addPost, updatePost, deletePost, setPost, searchforEmPostTags
    }}>
      {props.children}
    </PostContext.Provider>
  );

}