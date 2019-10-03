import React from 'react';

import StripeCheckOut from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey = "pk_test_dRD9eHU9o1zZZvjUYl03ib4r00e0wgG56y";

	const onToken = token => {
		console.log(token);
		alert('Payment Sucessful');
	}

	return(
		<StripeCheckOut 
			label = 'Pay Now'
			name = 'CRWN Clothing Ltd.'
			billingAddress
			shippingAddress
			image = 'https://svgshare.com/i/CUz.svg'
			description = {`Your total is $${price}`}
			amount = { priceForStripe }
			token = { onToken }
			stripeKey = { publishableKey  }
		/>
	);
}

export default StripeCheckoutButton;