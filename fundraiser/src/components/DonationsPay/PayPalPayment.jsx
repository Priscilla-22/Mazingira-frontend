//components/DonationsPay/PayPalPayment.jsx
import React from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

function PayPalPayment({ defaultAmount = 0, onSuccess, onCancel }) {
  const paypalOptions = {
    'client-id': 'ARJKA_kyUZQ2rbZXuQ3Rv4D5LCh-sno6t8tIhcWPij5RRnTaaE9UA7QH4kKZ2WczLy4U5ruLNSkBGmcE', 
    currency: 'USD',
  };

  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: defaultAmount, 
          },
        },
      ],
    });
  };

  const onApprove = (data, actions) => {
    return actions.order.capture().then(function (details) {
      onSuccess(details, data);
    });
  };

  return (
    <PayPalScriptProvider options={paypalOptions}>
          <PayPalButtons
              className='rounded-xl mx-auto '
        createOrder={createOrder}
        onApprove={onApprove}
        onCancel={onCancel}
      />
    </PayPalScriptProvider>
  );
}

export default PayPalPayment;

