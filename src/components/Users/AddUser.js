import React, { useState } from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css'
import Button from '../UI/Button';


const AddUser  = props => {

    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    const addUserHandler = (event) =>{
        event.preventDefault()
        if(enteredAge < 1 || enteredUsername === undefined){
            console.log('Oh baby, please check the form')
        } else {
            console.log(enteredUsername, enteredAge)
            setEnteredAge('');
            setEnteredUsername('');
        }
    }

    const usernameChangeHandler = (e) =>{
        setEnteredUsername(e.target.value);
    }
    const ageChangeHandler = (e) =>{
        setEnteredAge(e.target.value);
    }

    return(

        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor='username'>Username</label>
                <input id="username" type="text" value={enteredUsername} onChange={usernameChangeHandler}/>
                <label htmlFor='age'>Age</label>
                <input id="age" type="number"  value={enteredAge} onChange={ageChangeHandler}/>
                <Button type='submit'>Add User</Button>
            </form>
        </Card>
    )
};

export default AddUser;