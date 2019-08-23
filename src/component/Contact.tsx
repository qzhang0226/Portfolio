import React, { useState, useEffect } from 'react';
import { IFormProps, IFormState } from '../interfaces';
import { Store } from '../Store';
import { submitForm } from '../actions/Action';
import styled from 'styled-components';

export default function Contact(props: IFormProps) {
    const initialState: IFormState = {
        name: '',
        email: '',
        subject: '',
        message: '',
    }
    const [formState, setFormState] = useState(initialState);
    const {state, dispatch} = React.useContext(Store);

    const handleChange = (e: any) => {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        setFormState(inputs => ({
            ...inputs, 
            [name]: value
        }));
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();

        if(validateForm()){
            const postObj = {
                name: formState.name,
                email: formState.email,
                subject: formState.subject,
                message: formState.message,
            }
            submitForm(postObj, dispatch)
        }
    }

    const validateForm = () => {
        return true;
    }

    const { name, email, subject, message} = formState;
    return(
        state.message === "" ?
        <FormWrapper onSubmit={handleSubmit}>               
            <div className="container offset-md-3 col-md-6 offset-md-3">
                <div className="contact_header">GET IN TOUCH</div>
                <div className="row oneRow_twoInput">
                    <input 
                        name="name" 
                        type="text" 
                        placeholder="Name"
                        value={name} 
                        onChange={handleChange} />                    
                    <input 
                        name="email" 
                        type="text" 
                        className="email_input"
                        placeholder="Email"
                        value={email} 
                        onChange={handleChange} />
                </div>
                <div className="row oneRow_input">
                    <input 
                    name="subject" 
                    type="text"
                    placeholder="Subject"
                    value={subject} 
                    onChange={handleChange} />
                </div>
                <div className="row">
                    <textarea 
                    name="message"
                    value={message} 
                    onChange={handleChange}
                    placeholder="Type your message here..."/>
                </div>
                <div className="row">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </div>
        </FormWrapper>
        :
        <div>{state.message}</div>
    )
}

const FormWrapper = styled("form")`
    padding: 0 0 6.5em 0;
    .container{
        position: relative;
        height: 600px;
    }
    textarea {
        position: absolute;
        top: 282px;
        height: 255px;
        border-radius: 0;
        border-width: 0 0 1px 0;
        background-color: transparent;
        box-sizing: border-box !important;
        border-style: solid;
        border-color: rgba(0, 0, 0, 1);
        padding-top: 0.75em;
        padding-left: 12px;;
        margin: 0;
        overflow-y: auto;
        flex: 1;
        resize: none; 
        width: 100%;
    }
    .contact_header{
        font-size: 2.5em;
        margin-bottom: 1em;
        font-weight: lighter;
    }
    input{
        position: absolute;
        border-radius: 0;
        border-width: 0 0 1px 0;
        background-color: transparent;
        box-sizing: border-box !important;
        border-style: solid;
        border-color: rgba(0, 0, 0, 1);
        padding-left: 12px;
        margin: 0;
        text-overflow: ellipsis;
        flex: 1;
        width: 45%;
        text-align: left;
        height: 52px;
    }
    .email_input{
        right: 0px;
    }
    .oneRow_input input{
        top: 176px;
        width: 100%;
    }
    button{
        position: absolute;
        height: 50px;
        top: 566px;
        width: 100%;
        justify-content: center;
        background-color: rgba(0, 0, 0, 1);
        border: solid rgba(0, 0, 0, 1) 0px;
        cursor: pointer !important;
    }
`
