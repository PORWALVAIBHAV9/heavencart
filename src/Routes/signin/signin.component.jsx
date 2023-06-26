
import './account.styles.scss'
import SignUp from '../../components/signup/signup-form.component'
import SignIn from '../../components/signin/signin.component'






const SignInGoogle =() =>{
    return(
        <div className='account-container'>
            <div>
                < SignIn />
            </div>
            <div>
                < SignUp />
                
            </div>

        </div>

        
        
        
            
    )
}

export default SignInGoogle ;