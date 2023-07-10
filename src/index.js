import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import {BrowserRouter} from 'react-router-dom';
import App from './App';

import reportWebVitals from './reportWebVitals';
import { UserProvider } from './context/user-context';
import { CategoryProvider } from './context/category.context';
import {CartProvider} from './context/cart-open.context'
import { Elements } from '@stripe/react-stripe-js'
import {stripePromise} from './utils/stripe/stripe'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <CategoryProvider>
          <CartProvider>
            <Elements stripe={stripePromise} >
              <App />
            </Elements>
          </CartProvider>
        </CategoryProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
