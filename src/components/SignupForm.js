import FormField from './FormField';
import './SignupForm.css';
import CoolButton from './CoolButton';

export default function SignupForm() {
    return (
        <div className='signup-form'>
            <form>
                <FormField label="Name" type="text" placeholder="Alex Smith"/>
                <FormField label="Email" type="email" placeholder="Alex.Smith@gmail.com"/>
                <FormField label="password" type="password" placeholder="Enter your password"/>
                <CoolButton isPrimary isLarge isRounded>Submit</CoolButton>
            </form>

        </div>
    )
}