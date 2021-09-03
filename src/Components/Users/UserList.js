import React from 'react';

import Card from './../UI/Card';

import classes from './UserList.module.css';

const UserList = (props) => {
    return (
        <Card className={classes.list}>
            <h2>Users List</h2>
            {props.users.length > 0 ? <ul className={classes.listParent}>
                {props.users.map((user) => (
                    <li key={user.id} className={classes.listItems}>{user.name}({user.age} years old)</li>
                ))}
            </ul> : <p>No Users added.</p>}
        </Card>
    )
}

export default UserList;