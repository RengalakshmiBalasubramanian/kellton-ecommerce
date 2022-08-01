import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import './sign-in.style.scss'

function SignIn() {
    return (
        <div className="sign-in">
            <h2 className='title'>
                I have an account
            </h2>
            <span>
                Sign In with email and password
            </span>
            <form className='sign-in-form'>
                <FormInput  label='Email'/>
                <FormInput label='Password'/>
                <div className='buttons'>
                    <CustomButton>
                        SIGN IN
                    </CustomButton>
                     <br/>                       
                    <CustomButton>
                        SIGN IN with Google
                    </CustomButton>
                </div>
            </form>
        </div>
    );
}

export default SignIn;
