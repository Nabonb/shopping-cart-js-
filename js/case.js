document.getElementById('btn-case-inc').addEventListener('click',function(){
    const numberOfCases = btnPhoneChange(true,'inp-case');
    numberOfTotalCases(numberOfCases);
    calculateTotalSub();
});

document.getElementById('btn-case-dec').addEventListener('click',function(){
    const numberOfCases = btnPhoneChange(false,'inp-case');
    numberOfTotalCases(numberOfCases);
    calculateTotalSub();
});


