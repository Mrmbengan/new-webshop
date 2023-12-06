import { useState } from 'react'
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import './sign-up-form.styles.scss';



const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const { displayName, email, password, confirmPassword } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if(password !== confirmPassword){
            alert("Passwords do not match");
            return;
        }

        try{
            const { user } = await createAuthUserWithEmailAndPassword(email, password);

            await createUserDocumentFromAuth(user, { displayName });
            setFormFields(defaultFormFields);
        } catch(error){
            console.log('error creating user', error.message);
        }
        
    }
 
    const handleChange = (event) => {
        const {name, value } = event.target;

        setFormFields({...formFields, [name]: value});

    };

  return (
    <div className='sign-up-container'>
        <h2>dont have an account?</h2>
        <span>
            Sign up with your email and password
        </span>
        <form onSubmit={handleSubmit}>
            <FormInput 
                label="Display Name"
                type="text" 
                required 
                onChange={handleChange} 
                name='displayName' 
                value={displayName} 
            />
            <FormInput 
                label="Email"
                type="email" 
                required 
                onChange={handleChange} 
                name="email" 
                value={email} 
            />
            <FormInput
                label="Password" 
                type="password" 
                required 
                onChange={handleChange} 
                name="password" 
                value={password} 
            />
            <FormInput
                label="Confirm Password"  
                type="password" 
                required 
                onChange={handleChange} 
                name="confirmPassword" 
                value={confirmPassword} 
            />

            <Button type="submit">Sign up</Button>
    
            
            <p>By signing up, you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.</p>
            <p>Need help? <a href="#">Contact us</a></p>
            
        </form>
    </div>
  )
}

export default SignUpForm