import * as React from 'react';
import { Store } from '../Store';
import { IFormProps, IFormState } from '../interfaces';
import styled from 'styled-components';

class Contact extends React.Component<IFormProps, IFormState> {
    constructor(props: IFormProps){
        super(props);

        this.state = {
            name: '',
            email: '',
            subject: '',
            textarea: '',
            postObj: {}
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    private handleChange(e: any) {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    private handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();

        if(this.validateForm()){
            this.setState({
                postObj: {
                    name: this.state.name,
                    email: this.state.email,
                    subject: this.state.subject,
                    message: this.state.message,
                }
            })
        }
    }

    private validateForm(): boolean {
        return true;
    }

    public render() {
        return(
            <FormWrapper onSubmit={this.handleSubmit}>               
                <div className="container offset-md-3 col-md-6 offset-md-3">
                    <div className="contact_header">GET IN TOUCH</div>
                    <div className="row oneRow_twoInput">
                        <input 
                            name="name" 
                            type="text" 
                            placeholder="Name"
                            value={this.state.name} 
                            onChange={this.handleChange} />                    
                        <input 
                            name="email" 
                            type="text" 
                            className="email_input"
                            placeholder="Email"
                            value={this.state.email} 
                            onChange={this.handleChange} />
                    </div>
                    <div className="row oneRow_input">
                        <input 
                        name="subject" 
                        type="text"
                        placeholder="Subject"
                        value={this.state.subject} 
                        onChange={this.handleChange} />
                    </div>
                    <div className="row">
                        <textarea 
                        name="textarea"
                        value={this.state.textarea} 
                        onChange={this.handleChange}
                        placeholder="Type your message here..."/>
                    </div>
                    <div className="row">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </div>
            </FormWrapper>
        )
    }
}

export default Contact;

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
