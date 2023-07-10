import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import './payment-form.styles.scss'



const PaymentForm = () =>{
    const stripe = useStripe()
    const elements = useElements();

    const paymentHandler = async(e) =>{
        e.preventDefault()
        console.log('reached')

        if(!stripe || !elements){
            return;
        }

        const response = await fetch('/.netlify/functions/create-payment-intent',{
            method:'post',
            headers:{
            'Content-Type':'application/json'
            },
            body:JSON.stringify({ amount:1000 })

        }).then(res=>res.json())
        
        const {paymentIntent:{client_secret}} = response
        console.log(client_secret)

        const paymentResult = await stripe.confirmCardPayment(client_secret,{
            payment_method:{
                card:elements.getElement(CardElement),
                billing_details:{
                    name:'vaibhav porwal'
                    
                }
            }
        })

        if(paymentResult.error){
            alert(paymentResult.error)
        }
        if(paymentResult.paymentIntent.status === 'succeeded'){
            alert('payment successful')
        }

        
    }

    return(
    <div className='card-container' >
        
        <div className='card-details' >
            <h2>Credit card payment  </h2>
            <CardElement className='card' />
            <button className="btn" onClick={paymentHandler}>Pay NOW</button>
        </div>
        
        

    </div>
)}


export default PaymentForm;