function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputText = inputField.value;
    const inputValue = parseFloat(inputText);

    //clear input field 
    inputField.value = '';
    return inputValue;
};

function updateTotalField(totalFieldId, amount) {
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const totalValue = parseFloat(totalText);
    totalElement.innerText = totalValue + amount;

}

function getCurrentBalance() {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const balanceTotalValue = parseFloat(balanceTotalText);
    return balanceTotalValue;
}

function updateBalance(amount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');

    // const balanceTotalText = balanceTotal.innerText;
    // const balanceTotalValue = parseFloat(balanceTotalText);
    const balanceTotalValue = getCurrentBalance();
    if (isAdd == true) {
        balanceTotal.innerText = balanceTotalValue + amount;
    }
    else {
        balanceTotal.innerText = balanceTotalValue - amount;
    }
};

//handle deposit button

document.getElementById('deposit-btn').addEventListener('click', function () {

    const depositAmount = getInputValue('deposit-amount');
    if (depositAmount > 0) {
        updateTotalField('deposit-total', depositAmount);
        updateBalance(depositAmount, true);
    }

    // const depositInput = document.getElementById('deposit-amount');
    // const depositAmountText = depositInput.value;

    // const depositAmount = parseFloat(depositAmountText);


    //ger current deposit

    // const depositTotal = document.getElementById('deposit-total');
    // const depositTotalText = depositTotal.innerText;
    // const previousDepositAmount = parseFloat(depositTotalText);
    // depositTotal.innerText = previousDepositAmount + depositAmount;


    //update balance amount

    // const balanceAmount = document.getElementById('balance-total');
    // const balanceAmountText = balanceAmount.innerText;
    // const previousBalanceTotal = parseFloat(balanceAmountText);
    // balanceAmount.innerText = previousBalanceTotal + depositAmount;

    //clear withdraw text
    // depositInput.value = '';

});

// handle withdraw button

document.getElementById('withdraw-btn').addEventListener('click', function () {

    const withdrawAmount = getInputValue('withdraw-amount');
    const currentBalance = getCurrentBalance();
    if (withdrawAmount > 0 && withdrawAmount < currentBalance) {
        updateTotalField('withdraw-total', withdrawAmount);
        updateBalance(withdrawAmount, false);
    }

    // const withdrawInput = document.getElementById('withdraw-amount');
    // const withdrawAmountText = withdrawInput.value;

    // const withdrawAmount = parseFloat(withdrawAmountText);




    //update withdraw total

    // const withdrawTotal = document.getElementById('withdraw-total');
    // const withdrawAmountTotalText = withdrawTotal.innerText;
    // const withdrawAmountTotal = parseFloat(withdrawAmountTotalText);
    // withdrawTotal.innerText = withdrawAmount + withdrawAmountTotal;



    //total balnce after withdraw

    // const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(balanceTotalText);
    // balanceTotal.innerText = previousBalanceTotal - withdrawAmount;




    //clear withdraw field
    // withdrawInput.value = '';
});