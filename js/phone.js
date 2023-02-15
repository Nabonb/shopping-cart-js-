document.getElementById('btn-phone-inc').addEventListener('click', function () {
    const numberOfPhones = btnPhoneChange(true, 'inp-phone');
    numberOfTotalPhones(numberOfPhones);
    calculateTotalSub();
});

document.getElementById('btn-phone-dec').addEventListener('click', function () {
    const numberOfPhones = btnPhoneChange(false, 'inp-phone');
    numberOfTotalPhones(numberOfPhones);
    calculateTotalSub();
});