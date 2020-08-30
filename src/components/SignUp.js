import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { makeUser } from '../actions/actions'
import styled from 'styled-components'

const SignUpForm = styled.div`
    width: 800px;
    margin: 0 auto;
    padding: 40px 0;
    border-radius: 10px;
    background: #6ed36e;
    display: flex;
    flex-direction: column;
    form {
        display: flex;
        flex-direction: column;
        align-items: center;  
        input {
            width: 70%;
            margin: 0 15%;
        }      
        button {
        width: 150px; 
        margin: 20px 0 0 0;
        }
        a button {
            margin-bottom: 20px;
        }
    }
`;

const SignUp = (props) => {
    const { push } = useHistory()
    const [formData, setFormData] = useState({
        "username": "", 
        "password": ""
    })

    const handleChange = e => {
        console.log(formData.username)
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    
    const handleSubmit = e => {
        e.preventDefault();

        if(formData.username && formData.password){            
            props.makeUser(formData)
            return push('/')
        }

        return setFormData({
            username: "",
            password: ""
        })
    }
    
    return(
        <SignUpForm>
            <form onSubmit={handleSubmit} >
                <legend>Input New Username and Create a Password</legend>
                <label htmlFor='username' />Enter Username: 
                <input
                    type='text'
                    name="username"
                    id='username'
                    placeholder='Please Enter Your Email'
                    value={formData.username}
                    onChange={handleChange}
                />
                <label htmlFor='password' />Enter Password: 
                <input
                    type='password'
                    name="password"
                    id='password'
                    placeholder='Please Create a Password'
                    value={formData.password}
                    onChange={handleChange}
                />
                <button type='submit'>Submit</button>
                {props.isPosting ? <p style={{color: 'red'}} >Signing Up...</p> : null}
                {props.error ? <p style={{color: 'red'}} >unsuccessful post</p> : null}
            </form>
        </SignUpForm>
    )
}

const mapStateToProps = state => {
    return {
        ...state,
        isPosting: state.isPosting,
        error: state.error
    }
}

export default connect(mapStateToProps, { makeUser })(SignUp)