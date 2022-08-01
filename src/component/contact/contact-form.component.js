import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import './contact-form.style.scss'

function ContactForm() {
    return (
        <div className="contact">
            <h1 className='title'>
                Contact Us
            </h1>
            <span>
                Messasge 
            </span>
            <form className='sign-in-form'>
                <FormInput  label='Name'/>
                <FormInput  label='Description'/>
                
                <div className='buttons'>
                    <CustomButton>
                        SUBMIT
                    </CustomButton>                     
                </div>
            </form>
        </div>
    );
}

export default ContactForm;
