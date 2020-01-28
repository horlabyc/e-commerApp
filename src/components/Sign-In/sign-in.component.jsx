import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../Form-Input/form-input.component';
import CustomButton from '../Custom-Button/custom-button.component';
import { signInWithGoogle } from '../../Firebase/firebase.util';

class SignIn extends React.Component {
    constructor(){
        super();
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault()
        this.setState({ email: '', password: ''});
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState( {[name]:value});
    }
    render() { 
        const { email, password } = this.state;
        return ( 
            <div className="signin">
                <h2 className="title">I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form autoComplete="off"> 
                    <FormInput 
                    name="email" 
                    type="email"
                    required
                    handleChange = {this.handleChange} 
                    label="Email"
                    value={email}/>
                    <FormInput 
                    name="password" 
                    type="password"
                    handleChange = {this.handleChange}  
                    required 
                    label="Password"
                    value={password}/>
                    <div className="buttons">
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton isGoogleSignIn onClick = {() => signInWithGoogle }>Sign In with Google</CustomButton>
                    </div>
                </form>
            </div>
         );
    }
}
 
export default SignIn;