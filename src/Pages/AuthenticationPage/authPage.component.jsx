import React from 'react';

import './authPage.styles.scss'
import SignIn from '../../components/Sign-In/sign-in.component';

const AuthPage = () => {
    return ( 
        <div className="sign-in-sign-up">
            <SignIn />
        </div>
     );
}
 
export default AuthPage;