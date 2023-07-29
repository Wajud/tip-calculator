const tipAmount = document.getElementById("tipTotal");
const total = document.getElementById("total")
const customPercent = document.getElementById("custom-tip");
const tipValues = document.querySelectorAll(".tip-percent-field p")

let tipPercent;

tipValues.forEach((tipValue)=>{
    tipValue.addEventListener("click", (e)=>{
        tipPercent=(parseInt(tipValue.dataset.tip))/100;
        tipValues.forEach(refreshField)
        e.target.classList.add("selected-tip");
    })
})


customPercent.addEventListener("change", ()=>{
    tipPercent = parseInt(customPercent.value)/100;
    tipValues.forEach((tipValue)=>{
                tipValue.classList.remove("selected-tip");
    })
    
})


const resetBtn = document.getElementById("reset");

resetBtn.addEventListener("click", ()=>{

        const bill = document.getElementById("bill");
        const numberOfPeopleSelector = document.getElementById("people");
        const billError = document.getElementById("bill-error");
        const peopleError = document.getElementById("people-error");
        
        //As a true reset button. Literally refreshing the calculator

        if(tipAmount.textContent !== "$0.00" && total.textContent !== "$0.00"){
    
            bill.value=""; numberOfPeopleSelector.value="";
            tipPercent=0; tipAmount.textContent = "$0.00";
            total.textContent = "$0.00";
            tipValues.forEach(refreshField)

            return
          
            }

            //End of use as reset button.
            

            //For calculating the tip

        if(bill.value ==="" || bill.value ===0){
           
            showElement(billError);
            setTimeout(()=>{
                hideElement(billError)}
                , 2000)
        
                return
        }
    
        if(numberOfPeopleSelector.value ==="" || numberOfPeopleSelector.value ===0) {
        
            showElement(peopleError);
            setTimeout(()=>{
                hideElement(peopleError)}
                , 2000)
                return
        }
    
        if(!tipPercent){
            return
        }
    
      
        tipAmountValue = tipPercent*parseInt(bill.value)/parseInt(numberOfPeopleSelector.value);
    
        tipTotalValue = (1 + tipPercent)*parseInt(bill.value)/parseInt(numberOfPeopleSelector.value);
    
        tipAmount.textContent = `$${tipAmountValue.toFixed(2)}`
        total.textContent = `$${tipTotalValue.toFixed(2)}`

    }
 
)


function showElement(element){
    element.classList.add("show");
    element.classList.remove("hide");
}

function hideElement(element){
    element.classList.remove("show");
    element.classList.add("hide");
}


function refreshField(field){
    field.classList.remove("selected-tip");
    customPercent.value="";
    customPercent.style.backgroundColor="hsl(189, 41%, 97%)";

}