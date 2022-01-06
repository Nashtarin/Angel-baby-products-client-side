import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React from 'react';

const CheckOutForm = ({ price }) => {
    
    const pstripe = useStripe()
    const pelements = useElements();
   
    const handleSubmit = async (e) => {
        

        if (!pstripe || !pelements) {

            return;
        }


        const card = pelements.getElement(CardElement);

        if (card == null) {
            return;
        }
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
          });
      
          if (error) {
            console.log('[error]', error);
          } else {
            console.log('[PaymentMethod]', paymentMethod);
          }
          e.preventDefault();
        };
       

    
    return (
        <div className="container my-5">
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: 'red',
                                '::placeholder': {
                                    color: 'purple',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button style={{backgroundColor:"purple",color:"white"}}type="submit" disabled={!pstripe}>
                    Pay ${price}
                </button>
            </form>
        </div>
    );
};

export default CheckOutForm;