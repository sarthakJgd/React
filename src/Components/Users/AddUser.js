import React, { useState } from "react";

import Button from "../UI/Button";
import Modal from "../UI/Modal";
import Card from "./../UI/Card";

import classes from "./AddUser.module.css";

const AddUser = (props) => {
    const [username, setUsername] = useState('');
    const [age, setAge] = useState('');
    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();
        if (username.trim().length === 0 || age.trim().length === 0) {
            setError({
                title: "Invalid Parameters",
                message: "Please enter valid values for Name and age(Non-empty values)."
            });
            return;
        }
        if (+age < 1) {
            setError({
                title: "Invalid Age",
                message: "Please enter valid values for age( > 1)."
            })
            return;
        }
        props.onAddUser({ name: username, age: age, id: Math.random().toString() });
        setUsername('');
        setAge('');
    }

    const undoError = () => {
        setError(null);
    };

    const usernameChangeHandler = (event) => {
        setUsername(event.target.value)
    };
    const ageChangeHandler = (event) => {
        setAge(event.target.value)
    };

    return (
        <div>
            {error && <Modal title={error.title} message={error.message} actionText="Okay" actionFn={undoError} className={classes.button}></Modal>}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" value={username} onChange={usernameChangeHandler} />

                    <label htmlFor="age">Age (Years)</label>
                    <input type="number" name="age" value={age} onChange={ageChangeHandler} />
                    <Button type="submit" title="Add User" className={classes.button} />
                </form>
            </Card>
        </div>
    );
}

export default AddUser;