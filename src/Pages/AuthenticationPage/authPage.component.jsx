import React from 'react';

import './authPage.styles.scss'
import SignIn from '../../components/Sign-In/sign-in.component';
import SignUp from '../../components/Sign-up/sign-up.component';

const AuthPage = () => {
    return ( 
        <div className="sign-in-sign-up">
            <SignIn />
            <SignUp />
        </div>
     );
}
 
export default AuthPage;