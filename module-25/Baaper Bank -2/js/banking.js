function getInputToAmount(inputField) {
    const inputValue = document.getElementById(inputField);
    const newAmount = parseFloat(inputValue.value);
    inputValue.value = '';
    return newAmount;
};

function updateTotalAmount(totalFieldID, inputAmount) {
    const totalText = document.getElementById(totalFieldID);
    const totalAmount = parseFloat(totalText.innerText);
    totalText.innerText = totalAmount + inputAmount;
};

function getCurrentBalance() {
    const currentBalanceText = document.getElementById('current-balance');
    const currentBalanceAmount = parseFloat(currentBalanceText.innerText);
    return currentBalanceAmount;
};

function updateBalance(inputAmount, isAdd) {
    const currentBalanceText = document.getElementById('current-balance');
    const currentBalanceAmount = getCurrentBalance();
    if (isAdd == true) {
        currentBalanceText.innerText = currentBalanceAmount + inputAmount;
    } else {
        currentBalanceText.innerText = currentBalanceAmount - inputAmount;
    }
};
// deposit button click
document.getElementById('deposit-button').addEventListener('click', function () {
    const newDepositAmount = getInputToAmount('deposit-input');
    if (newDepositAmount > 0) {
        updateTotalAmount('total-deposit', newDepositAmount);
        updateBalance(newDepositAmount, true);
    } else {
        alert('Please check your inputted deposit amount.')
    }
});

// withdraw button click
document.getElementById('withdraw-button').addEventListener('click', function () {
    const newWithdrawAmount = getInputToAmount('withdraw-input');
    const currentBalance = getCurrentBalance();
    if (newWithdrawAmount > 0 && newWithdrawAmount < currentBalance) {
        updateTotalAmount('total-withdraw', newWithdrawAmount);
        updateBalance(newWithdrawAmount, false);
    } else {
        alert('Please check your inputted withdraw amount.')
    }
});