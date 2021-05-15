/* Toggle between adding and removing the "responsive" class to topNav when the user clicks on the icon */
// function myFunction() {
//       var x = document.getElementById("toNav");
//       if (x.className === "toNav") {
//        x.className += " responsive";
//       } else {
//        x.className = "toNav";
//      }
//     }



// added an immediate executing function
(function paymentMethod (){
    // Takes in publishable key
    var stripe = Stripe('pk_test_51Iq55tDcRN3IA7cEHllozwTPRlBlFDC1c9ipzOew8gHLKSBRCDxoT4lhhm3ndTJOK1zYaoZFgN5PFAHVuJvL6JSJ00siu7wyls');
    var elements = stripe.elements();
    
    var checkoutButton =  document.getElementById('nav-button');
    var errorMessage = document.getElementById('error-message');

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




