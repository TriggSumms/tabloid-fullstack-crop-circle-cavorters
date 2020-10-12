import React, { useContext, useEffect, useState } from "react";
import { PostContext } from "../../providers/PostProvider";
import { Card, CardBody } from "reactstrap";
import { useParams } from "react-router-dom";

export default function PostDetail() {
    const { post, getById } = useContext(PostContext);
    const { id } = useParams();
    console.log("post:", post, "id:", id);

    useEffect(() => {
        getById(id)

    }, []);

    // we need the if statement to return true on the first render.
    // so we must include !post.userProfile because react will not let us
    // ask for the property of an undefined object
    if (!post || !post.userProfile) {
        return null
    }
    return (

        <>
            <Card className="m-4">
                <CardBody>
                    <h2>{post.title}</h2>
                    <p>{post.userProfile.displayName}</p>
                    <p>{post.imageLocation}</p>
                    <p>{post.categoryId}</p>

                    <p>{post.content}</p>
                    <p>{post.publishDateTime}</p>
                </CardBody>
            </Card>

        </>
    )
}