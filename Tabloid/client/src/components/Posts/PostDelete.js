import React, { useState, useEffect, useContext } from "react";
import { PostContext } from "../../providers/PostProvider";
import { useHistory, useParams, Link } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default function DeletePostPage() {

    const { post, setPost, deletePost, getById } = useContext(PostContext);
    const { id } = useParams();
    const history = useHistory();

    useEffect(() => {
        getById(parseInt(id))

    }, [])

    const deleteThisPost = () => {
        deletePost(parseInt(id))
            .then(() => history.push("/posts"));
    }

    if (!post) {
        return null;
    }

    return (
        <>
            <main className="postContainer">
                <section className="post">
                    <h4> Delete this Post: "{post.title}"?</h4>
                    <hr />
                    <div className="row">
                        <div className="actionBtns">
                            <div className="form-group">
                                <input type="submit" onClick={deleteThisPost} value="Confirm" className="btn btn-primary" />&nbsp;&nbsp;|&nbsp;&nbsp;
                                <Link to={`/posts/details/${id}`}>
                                    Cancel
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}