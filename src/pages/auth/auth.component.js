import SignIn from '../../component/sign-in/sign-in.component';
import SignUp from '../../component/sign-up/sign-up.component';
import './auth.style.scss'

function AuthPage(){
    return (
        <div className="sign-in-and-sign-up">
            <SignUp/>
            <SignIn/>
        
        </div>
      );  
}

export default AuthPage;
