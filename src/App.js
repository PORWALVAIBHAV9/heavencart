
import { Routes, Route, Outlet } from 'react-router-dom';
import Home from './Routes/home'
import Navigation from './Routes/navigation/navigation.component'
import SignIn from './Routes/signin/signin.component'
import SignInGoogle from './Routes/signin/signin.component';
import Shop from './components/shop/shop.component'
import CheckOut from './Routes/checkout-page/checkout-page.component'

const App = () => {


  return (
    <Routes>
      <Route path="/" element={< Navigation />} >
        <Route index element={< Home />} />
        <Route path='/my-account' element={< SignInGoogle />} />
        <Route path='/shop/*' element={< Shop />} />
        <Route path='/checkout' element={<CheckOut/>}/>
      </Route>
    </Routes>


  )

};

export default App;
