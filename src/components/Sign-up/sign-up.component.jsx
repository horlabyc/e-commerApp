import React from 'react';

import FormInput from '../Form-Input/form-input.component';
import CustomButton from '../Custom-Button/custom-button.component';

import { auth, createUserProfileDocument } from '../../Firebase/firebase.util';

import './sign-up.style.scss';

class SignUp extends React.Component{
    constructor(){
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const { displayName, email, password, confirmPassword} = this.state;
        if(password !== confirmPassword) {
            alert(`Password don't match`);
            return
        }
        try {
            const user = await auth.createUserWithEmailAndPassword(email, password);
            console.log(user);
            await createUserProfileDocument(user.user, { displayName });
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        } catch(error) {
            console.error(error.message)
        }
    }

    handleChange = (event) => {
        const { value, name} = event.target;
        this.setState({
            [name]: value 
        })
    }

    render() {
        const { displayName, email, password, confirmPassword} = this.state;
        return (
            <div className="sign-up">
                <h2 className="title">I already have an account</h2>
                <span>Sign up with your email and password</span>
                <form className="sign-up-form">
                    <FormInput
                    type="text"
                    name="displayName"
                    value={displayName}
                    handleChange={this.handleChange}
                    label="Display Name"
                    autoComplete="no"
                    required></FormInput>
                    <FormInput
                    type="email"
                    name="email"
                    value={email}
                    handleChange={this.handleChange}
                    label="Email"
                    autoComplete="no"
                    required></FormInput>
                    <FormInput
                    type="password"
                    name="password"
                    value={password}
                    handleChange={this.handleChange}
                    label="Password"
                    autoComplete="no"
                    required></FormInput>
                    <FormInput
                    type="password"
                    name="confirmPassword"
                    value={confirmPassword}
                    handleChange={this.handleChange}
                    label="Confirm Password"
                    autoComplete="no"
                    required></FormInput>
                    <CustomButton type="submit" onClick={this.handleSubmit}>SIGN Up</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp;