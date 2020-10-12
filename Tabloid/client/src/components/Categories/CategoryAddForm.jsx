import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { CategoryContext } from "../providers/CategoryProvider";

export default function CategoryAddForm() {
    const history = useHistory();
    const { addCategory } = useContext(CategoryContext);
    const [categoryText, setCategoryText] = useState();

    const submitForm = (e) => {
        e.preventDefault();
        addCategory({ text: categoryText })
            .then(() => history.push("/"))
            .catch((err) => alert(`An error ocurred: ${err.message}`));
    };

    return (
        <Form onSubmit={submitForm}>
            <FormGroup>
                <Label for="categoryText">Category</Label>
                <Input id="categoryText" type="textarea" onChange={e => setCategoryText(e.target.value)} />
            </FormGroup>
            <FormGroup>
                <Button>Save</Button>
            </FormGroup>
        </Form>
    );
}