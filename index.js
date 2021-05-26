// const donateBtn = document.getElementById('donate');
// function donateBtn(event){
    
//     console.log(donate);
// }
// donateBt();
document.querySelector("button").addEventListener('click', 
function(event){
    event.currentTarget.setAttribute("disabled", true);
},{
    once:true
}
);
    






