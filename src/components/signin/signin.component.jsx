
import { useState, useContext } from "react"
import { auth } from '../../utils/firebase/authentication'
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth, signInWithGooglePopup, signInUserWithEmailAndPassword } from '../../utils/firebase/authentication'
import FormsInput from '../Forminput/form-input.component';
import './signin.scss'
import Button from '../button/dynamic-button.component'
import '../button/button.styles.scss'
import {UserContext} from '../../context/user-context'

const defaultFormField = {
    email: '',
    password: ''
}




const SignIn = () => {
    const [formField, setFormField] = useState(defaultFormField)
    const { email, password } = formField

    const { setCurrentUser }= useContext(UserContext)




    const fillFields = (event) => {
        const { name, value } = event.target
        setFormField({ ...formField, [name]: value })
        console.log(formField)


    }

    
    const handleSubmit = async (event) => {
        event.preventDefault();

    }

    const signInWithGoogle = async () => {
        console.log('run')
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user)
        setCurrentUser(user)
            }
        

        const signInEMPASS = async () =>{
            const {user}= await signInUserWithEmailAndPassword(email, password)
            setCurrentUser(user)

        }

    try {

    }
    catch (error) {

    }





    return (
        <div className="sign-up-container">
            <h1>Already have an account</h1>
            <span>Sign in here</span>
            <form onSubmit={handleSubmit}>

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
                <div className="buttons-container">
                    <button onClick={signInEMPASS} className="button-container" >Sign in</button>
                    <button onClick={signInWithGoogle } className="button-container" >Google sign in</button>
                </div>
                
                
            </form>
            
               

        </div>
    )
    }


export default SignIn;



