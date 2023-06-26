import { Fragment, useContext } from 'react';
import {Outlet, Link} from 'react-router-dom';
import {ReactComponent as HeavenLogo} from '../../assets/crown.svg'
import './navigation.scss'
import { UserContext} from '../../context/user-context'
import { signOutUser } from '../../utils/firebase/authentication'
import CartIcon from '../../components/cart-icon/cart-icon.component'
import DropDown from '../../components/drop-down/drop-down.component'
import { CartContext } from '../../context/cart-open.context'
                                                    


const Navigation = () => {
  const { currentUser, setCurrentUser} = useContext(UserContext)
  console.log(currentUser)

  const { isCartOpen }= useContext(CartContext)
  
  
  const signOutHandler = async()=>{
    await signOutUser();
    
    setCurrentUser(null);
  }
    return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
            <HeavenLogo className="logo"/>
        </Link>
        <div className='nav-links-container'>
            <Link className='nav-link' to ='/shop'>
                SHOP
            </Link>
            {
              currentUser ?( 
                <span className='nav-link' onClick={signOutHandler} >Signout</span>
              ):            
              (<Link className='nav-link' to ='/my-account'>
              ACCOUNT
          </Link>)
            }
        <CartIcon />

        </div>

        {isCartOpen && <DropDown />}
      </div>
      <Outlet />
    </Fragment>
    )
    
  }


  export default Navigation 