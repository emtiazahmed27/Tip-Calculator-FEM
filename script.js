
//taking my necessary VAR//
const billInput=document.querySelector(".bill-input");
const tip_amount=document.querySelector("#tip-amount");
const tip_5=document.querySelector(".tip-5");
const tip_10=document.querySelector(".tip-10");
const tip_15=document.querySelector(".tip-15");
const tip_25=document.querySelector(".tip-25");
const tip_50=document.querySelector(".tip-50");
const tip_custom=document.querySelector(".tip-custom");
const reload=document.querySelector(".reset");
const number_person=document.querySelector(".people-input");
let tip_amount_total=document.querySelector("#tip-amount-total");
let total_tip=document.querySelector(".amount");
let bill,custom,num_of_person;


///tip Calculation///
tip_5.addEventListener("click", ()=>{
    total_tip.innerHTML=(bill*.05).toPrecision(3);
});
tip_10.addEventListener("click", ()=>{
    total_tip.innerHTML=(bill*.10).toPrecision(3);
 });
 tip_15.addEventListener("click", ()=>{
    total_tip.innerHTML=(bill*.15).toPrecision(3);
 });
 tip_25.addEventListener("click", ()=>{
    total_tip.innerHTML=(bill*.25).toPrecision(3);
 });
 tip_50.addEventListener("click", ()=>{
    total_tip.innerHTML=(bill*.5).toPrecision(3);
 });
 tip_custom.addEventListener("input", ()=>{
    custom=tip_custom.value;
    total_tip.innerHTML=(bill*(custom/100)).toPrecision(3);
 });
///tip Calculation///

//showing Bill input to a div "amount" (div calss)//
billInput.addEventListener("input",()=>{
    bill=billInput.value;
    tip_amount_total.innerHTML=bill;
});

//reloading to reset my values
reload.addEventListener("click",()=>{
    window.location.reload();
})

