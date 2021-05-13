// added an immediate executing function
(function paymentMethod (){
    // Takes in publishable key
    const stripe = stripe('pk_test_51Iq55tDcRN3IA7cEHllozwTPRlBlFDC1c9ipzOew8gHLKSBRCDxoT4lhhm3ndTJOK1zYaoZFgN5PFAHVuJvL6JSJ00siu7wyls');
    
    const checkoutButton =  document.getElementById('nav-button');
    const errorMessage = document.getElementById('error-message');

    // Add an event listener for the button
checkoutButton.addEventListener('click',()=>{
    // the function calls stripe
    stripe.redirectTocheckout({
        // Items represents what the user will be contributing/charged
        items:[{price: 'price_1Iq5BODcRN3IA7cEskqYfcvZ', quantity: 1}],
        // notify the user their donation was successful
        successUrl: `${window.location.origin}`/success.html,
        // if they cancel, they are redirected to the original page.
        cancelUrl: window.location.origin,
    })
    .then(result => {
        if(result.error){
            errorMessage.textContent = result.error.message;
        }
    });
});
})();




