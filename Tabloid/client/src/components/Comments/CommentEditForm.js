
import React, { useState, useEffect, useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import { CommentContext } from "../../providers/CommentProvider";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";




const CommentEditForm = () => {
    let userId = sessionStorage.userProfileId;
    console.log(userId);
    const { id } = useParams();
    const history = useHistory();

    const { editComment, comment, getCommentById } = useContext(CommentContext);
    console.log(comment);
    const [isLoading, setIsLoading] = useState(false);
    const [editedComment, setEditedComment] = useState();
    console.log(editedComment);

    useEffect(() => {
        getCommentById(id);
    }, []);

    const handleEditFieldChange = (e) => {
        const stateToChange = { ...editedComment };
        stateToChange[e.target.id] = e.target.value;
        setEditedComment(stateToChange);
    };

    useEffect(() => {
        setEditedComment(comment);
    }, [comment]);

    //Edit comment and push to details on posts.
    const editCurrentComment = (e) => {
        e.preventDefault();
        setIsLoading(true);
        editComment(editedComment);
        setIsLoading(false);
        history.push(`/comments/details/${id}`);
    };

    return (
        <>
            {comment &&
                <Form>
                    <h3> Edit Comment </h3>
                    <FormGroup>
                        <Label htmlFor="subject"><strong>Subject</strong></Label>
                        <Input className="p-2 bd-highlight justify-content-center"
                            defaultValue={comment.subject}
                            onChange={handleEditFieldChange}
                            type="text"
                            name="subject"
                            id="subject" />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="content"><strong>Comment</strong></Label>
                        <Input className="p-2 bd-highlight justify-content-center"
                            defaultValue={comment.content}
                            onChange={handleEditFieldChange}
                            type="textarea"
                            name="content"
                            id="content" />
                    </FormGroup>

                </Form>}



        </>
    );
}

export default CommentEditForm;