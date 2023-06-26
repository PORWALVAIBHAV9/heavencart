
import { useState, useContext } from "react"
import { auth } from '../../utils/firebase/authentication'
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/authentication'
import FormsInput  from '../Forminput/form-input.component';
import './signup.scss'
import Button from '../button/dynamic-button.component'
import {UserContext} from '../../context/user-context'
const defaultFormField = {
    displayName: '',
    email: '',
    password: '',
    confirm_password: ''
}




const SignUp = () => {
    const [formField, setFormField] = useState(defaultFormField)
    const { displayName, email, password, confirm_password } = formField

    const {setCurrentUser}= useContext(UserContext)

    const fillFields = (event) => {
        const { name, value } = event.target
        setFormField({ ...formField, [name]: value })
        console.log(formField)


    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password !== confirm_password) {
            alert('password do not match')
            return;
        }


        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            console.log(user)
            

            await createUserDocumentFromAuth(user, { displayName })
            setCurrentUser(user)
        }
        catch (error) {
            return error
        }




    }





    return (
        <div className="sign-up-container">
            <h1>Don't have an account</h1>
            <span>Signup here</span>
            <form onSubmit={handleSubmit}>
                < FormsInput 
                label="Display name"
                type="text"
                onChange={fillFields}
                name="displayName"
                required 
                value={displayName}
                />

                
                < FormsInput 
                label="Email"
                type="email" 
                onChange={fillFields} 
                name="email" 
                required 
                value={email}
                />

                < FormsInput 
                label="Password"
                type="password" 
                onChange={fillFields} 
                name="password" 
                required 
                value={password}
                />

                < FormsInput 
                label="Confirm password"
                type="password" 
                onChange={fillFields} 
                name="confirm_password" 
                required 
                value={confirm_password}
                />

                <Button type='submit' button_name='Sign up'>Submit</Button>
            </form>

        </div>
    )
};

export default SignUp