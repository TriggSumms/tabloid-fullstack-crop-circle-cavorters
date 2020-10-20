import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { CommentContext } from "../../providers/CommentProvider";
import { useParams } from "react-router-dom";

//
///Use History allows us to use the back button.
const CommentAddForm = () => {
    let userId = sessionStorage.userProfileId
    console.log(userId);
    const history = useHistory();
    const { postId } = useParams();
    const { addComment } = useContext(CommentContext);
    const [commentText, setCommentText] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [content, setContent] = useState("");
    const [subject, setSubject] = useState("");
    const [createDateTime, setCreateDateTime] = useState("");


    const submitForm = (e) => {
        e.preventDefault();
        addComment({ text: commentText })
            .then(() => history.push("/comments"))
            .catch((err) => alert(`Error has ocurred: ${err.message}`));
    };




    const user = JSON.parse(sessionStorage.getItem("userProfile")).id

    const submit = () => {
        if (subject === "" || content === "") {
            alert("Subject and Content Required Fields");
        } else {
            setIsLoading(true);
            const comment = {
                userProfileId: user,
                postId: parseInt(postId),
                content,
                subject,
                createDateTime

            }
            comment.createDateTime = new Date()

            addComment(comment).then((evt) => history.push(`/post/${postId}/comments`))
            setIsLoading(false);

        }
    }

    return (
        <Form>
            <h3> Add Comment </h3>
            <FormGroup>
                <Label htmlFor="subject"><strong>Subject</strong></Label>
                <Input className="p-2 bd-highlight justify-content-center"
                    onChange={e => setSubject(e.target.value)}
                    type="text"
                    name="subject"
                    id="subject"
                    required=""
                />
            </FormGroup>
            <>
                <Form onSubmit={submitForm}>
                    <FormGroup>
                        <Label for="commentText">Comment</Label>
                        <Input id="content" type="textarea" onChange={e => setContent(e.target.value)} />
                    </FormGroup>

                </Form>
                <Button className="submitComment" type="button" color="success" isLoading={isLoading} onClick={submit}>
                    {'Save Comment'}
                </Button>
            </>
        </Form>
    );
}

export default CommentAddForm;