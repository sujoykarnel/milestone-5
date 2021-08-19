// deposit button click
document.getElementById('deposit-button').addEventListener('click', function () {
    // get new deposit value to amount
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmount = parseFloat(depositInput.value);

    // get total deposit inner text to amount
    const totalDepositText = document.getElementById('total-deposit');
    const totalDepositAmount = parseFloat(totalDepositText.innerText);

    // get total deposit amount to inner text
    totalDepositText.innerText = totalDepositAmount + newDepositAmount;

    //clear deposit input field
    depositInput.value = '';

    // get current balance inner text to amount
    const currentBalanceText = document.getElementById('current-balance');
    const currentBalanceAmount = parseFloat(currentBalanceText.innerText);

    // get current balance amount to inner text by added new deposit amount
    currentBalanceText.innerText = currentBalanceAmount + newDepositAmount;

});

// withdraw button click
document.getElementById('withdraw-button').addEventListener('click', function () {
    // get new withdraw value to amount
    const withdrawInput = document.getElementById('withdraw-input');
    const newWithdrawAmount = parseFloat(withdrawInput.value);

    // get total withdraw inner text to amount
    const totalWithdrawText = document.getElementById('total-withdraw');
    const totalWithdrawAmount = parseFloat(totalWithdrawText.innerText);

    // get total withdraw amount to inner text
    totalWithdrawText.innerText = totalWithdrawAmount + newWithdrawAmount;

    //clear withdraw input field
    withdrawInput.value = '';

    // get current balance inner text to amount
    const currentBalanceText = document.getElementById('current-balance');
    const currentBalanceAmount = parseFloat(currentBalanceText.innerText);

    // get current balance amount to inner text by subtracted new withdraw amount
    currentBalanceText.innerText = currentBalanceAmount - newWithdrawAmount;
});