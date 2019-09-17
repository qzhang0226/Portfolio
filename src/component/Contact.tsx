import React, { useState } from 'react';
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
        error: false,
    }
    const [formState, setFormState] = useState(initialState);
    const {state, dispatch} = React.useContext(Store);

    const validEmailInputChars = (e: any) => {
        const allowedChars = /[0-9a-zA-Z-,.@_-]+/g;
        if (!allowedChars.test(e.key)) {
          e.preventDefault();
        }
    }

    const handleChange = (e: any) => {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        setFormState(inputs => ({
            ...inputs, 
            [name]: value,
            error: value.length === 0 ? false : true
        }));
        var email: any = document.getElementById("email");
        if(!email.value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)){
            email.setCustomValidity("Please enter a valid E-mail address!");
        } else {
            email.setCustomValidity("")
        }
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
        if(!formState.error){
            return false;
        } else {
            return true;
        }
    }

    const { name, email, subject, message} = formState;
    return(
        state.message === "" ?
        <FormWrapper onSubmit={handleSubmit}>               
            <div className="container offset-md-2 col-md-8 offset-md-2 col-sm-12">
                <div className="contact_header">GET IN TOUCH</div>
                <div className="row oneRow_twoInput">
                    <div className="col-sm-12">
                        <input 
                            name="name" 
                            type="text" 
                            placeholder="Name"
                            value={name} 
                            required
                            onChange={handleChange} 
                        />  
                    </div>  
                    <div className="col-sm-12">               
                        <input 
                            id="email"
                            name="email" 
                            type="email" 
                            className="email_input"
                            placeholder="Email"
                            value={email} 
                            required
                            onChange={handleChange} 
                            onKeyPress={(e: any) => validEmailInputChars(e)}
                        />
                    </div>
                </div>
                <div className="row oneRow_input">
                    <div className="col-sm-12">
                        <input 
                            name="subject" 
                            type="text"
                            placeholder="Subject"
                            value={subject} 
                            required
                            onChange={handleChange} 
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <textarea 
                            name="message"
                            value={message} 
                            onChange={handleChange}
                            required
                            placeholder="Type your message here..."
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </div>
            </div>
        </FormWrapper>
        :
        <ThankUWrapper>{state.message}</ThankUWrapper>
    )
}

const FormWrapper = styled("form")`
    margin: 100px 0;
    height: auto;
    .container{
        height: auto;
    }
    .col-sm-12{
        margin-top: 15px;
    }
    textarea {
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
        width: 100%;
        text-align: left;
        height: 52px;
    }
    input:focus{
        outline: none;
    }
    textarea:focus{
        outline: none;
    }
    input:hover{
        
    }
    .email_input{
        right: 0px;
    }
    .oneRow_input input{
        top: 176px;
        width: 100%;
    }
    button{
        height: 50px;
        top: 566px;
        width: 100%;
        justify-content: center;
        background-color: rgba(0, 0, 0, 1);
        border: solid rgba(0, 0, 0, 1) 0px;
        cursor: pointer !important;
    }
    .btn:hover{
        background-color: rgba(0, 0, 0, 0.6); 
        border-color: rgba(0, 0, 0, 1);
    }
    .btn-primary:focus, .btn-primary:not(:disabled):not(.disabled):active:focus{
        box-shadow: none;
    }
    .btn-primary:not(:disabled):not(.disabled):active{
        background-color: rgba(0,0,0,0.2);
        border-color: rgba(0,0,0,0);
    }
`
const ThankUWrapper = styled("div")`
    height: 300px;
    text-align: center;
    padding: 120px 0;
    font-size: 2.5em;
`
