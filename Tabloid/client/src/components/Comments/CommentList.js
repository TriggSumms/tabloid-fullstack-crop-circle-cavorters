import React, { useContext, useEffect } from "react";
import { CommentContext } from "../../providers/CommentProvider";
import { ListGroup, ListGroupItem } from "reactstrap";
import { useParams, Link } from "react-router-dom";
import { Button, } from "reactstrap";
import { PostContext } from "../../providers/PostProvider";
import Comment from "./Comment";
import { useHistory } from "react-router-dom";

export default function CommentList() {
    const { comments, getAllCommentsByPostId } = useContext(CommentContext);
    const { post, getPost } = useContext(PostContext)
    const { id } = useParams();
    const { history } = useHistory();

    useEffect(() => {
        getAllCommentsByPostId(id);
        //getPost(id);
    }, []);
    console.log("id", id);



    return (
        <>
            <section>
                <div>
                    <h1>Comments</h1>
                    <Link to={`comments/add`}><Button color="primary">Add New Comment</Button></Link>
                </div>

                <h4>Subject</h4>
                <p>{comments && comments.subject}</p>

                <h6>Comment</h6>
                <p>{comments && comments.content}</p>
                <Button onClick={() => history.push(`/posts/`)}>
                    Back To Posts
            </Button>
                {comments.map(c => {

                    return <Comment key={c.id} comment={c} />
                })}
            </section>




        </>
    );
};
