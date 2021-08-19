function updateProduct(product, price, isIncreasing) {
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
    if (isIncreasing) {
        productNumber = parseInt(productNumber) + 1;
    } else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;

    // Update total
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;

    //calculate total
    updateTotal();
};

function getInputValue(product) {
    // update total
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
    return productNumber
}

function updateTotal() {
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subtotal = phoneTotal + caseTotal;
    const tax = subtotal * (10 / 100);
    const grandTotal = subtotal + tax;
    
    //update on html
    document.getElementById('sub-total').innerText = subtotal.toFixed(2);
    document.getElementById('tax').innerText = tax.toFixed(2);
    document.getElementById('grand-total').innerText = grandTotal.toFixed(2);

}


//handle phone increase decrease event
document.getElementById('phone-plus').addEventListener('click', function () {
    updateProduct('phone', 1219, true);
});

document.getElementById('phone-minus').addEventListener('click', function () {
    updateProduct('phone', 1219, false);
});

//handle case increase decrease event
document.getElementById('case-plus').addEventListener('click', function () {
    updateProduct('case', 59, true);
});

document.getElementById('case-minus').addEventListener('click', function () {
    updateProduct('case', 59, false);
});