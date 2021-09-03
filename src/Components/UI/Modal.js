import React from 'react';

import Button from './Button';
import Card from './Card';

import classes from './Modal.module.css';

const Modal = (props) => {
    return (
        <div>
            <div className={classes.backdrop}></div>
            <Card className={classes.modal}>
                <header className={classes.header}><h2>{props.title}</h2></header>
                <div className={classes.content}>{props.message}</div>
                <footer className={classes.actions}><Button title={props.actionText} action={props.actionFn} className={props.className}></Button></footer>
            </Card>
        </div>
    );
}

export default Modal;