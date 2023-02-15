function btnPhoneChange(incDec, idMain){
    const inputFieldPhone = document.getElementById(idMain);
    const inputFieldString = inputFieldPhone.value;
    const inputFieldValue = parseInt(inputFieldString);
    let mainInputValue;
    if(incDec== true){
        mainInputValue = inputFieldValue + 1;
    }
    else{
        mainInputValue = inputFieldValue - 1;

    }
    
     inputFieldPhone.value = mainInputValue;
     return mainInputValue;

}
function numberOfTotalPhones(numberOfPhones){
    const amountOfTotalPhones =  numberOfPhones * 1219;

    const mobileMoney = document.getElementById('mobile-money');
    mobileMoney.innerText =  amountOfTotalPhones;
}
function numberOfTotalCases(numberOfCases){
    const amountOfTotalCases =  numberOfCases * 59;
    const caseMoney = document.getElementById('case-money');
    caseMoney.innerText =  amountOfTotalCases;
}
function subTotal(moneyTotal) {
    const currentPhoneTotal = document.getElementById(moneyTotal);
    const currentPhoneTotalString = currentPhoneTotal.innerText;
    const currentPhoneTotalValue = parseFloat(currentPhoneTotalString);

    return currentPhoneTotalValue;
}
function calculateTotalSub() {
    const mobileTotalMoney = subTotal('mobile-money');
    const caseTotalMoney = subTotal('case-money');

    const totalSubMoney = mobileTotalMoney + caseTotalMoney;

    const subTotalMoney = document.getElementById('sub-total');
    subTotalMoney.innerText = totalSubMoney;

    //calculate tax
    const tax = totalSubMoney * 0.1;
    const taxText = document.getElementById('tax-total');
    taxText.innerText = tax.toFixed(2);//rounoff function lgbe bathroooooom

    //calculate total
    const finalTotalMoney = totalSubMoney + tax;
    const finalTotalText = document.getElementById('amount-total');
    finalTotalText.innerText = finalTotalMoney;
}

