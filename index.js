// added an immediate executing function
function paymentMethod (){

    const stripe=stripe('pk_test_51Iq55tDcRN3IA7cEHllozwTPRlBlFDC1c9ipzOew8gHLKSBRCDxoT4lhhm3ndTJOK1zYaoZFgN5PFAHVuJvL6JSJ00siu7wyls')
    
}

let button= document.getElementById("#nav-donate");
button.addEventListener("click", paymentMethod)



