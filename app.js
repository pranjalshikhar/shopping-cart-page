var productAmount = document.getElementById('product_total_amt');
var shippingCharge = document.getElementById('shipping_charge')
var totalCartAmount = document.getElementById('total_cart_amt');

var discountCode = document.getElementById('discount_code1');


const decreaseNumber = (incdec, itemprice) => {
    var itemval = document.getElementById(incdec);
    var itemprice = document.getElementById(itemprice);
    // console.log(itemval.value);

    if (itemval.value <= 0) {
        itemval.value = 0;
    } else {
        itemval.value = parseInt(itemval.value) - 1;
        itemval.style.background = '#fff';
        itemval.style.color = '#000';
        itemprice.innerHTML = parseInt(itemprice.innerHTML) - 250;
        productAmount.innerHTML = parseInt(productAmount.innerHTML) - 250;
        totalCartAmount.innerHTML = parseInt(productAmount.innerHTML) + parseInt(shippingCharge.innerHTML);
    }
}

const increaseNumber = (incdec, itemprice) => {
    var itemval = document.getElementById(incdec);
    var itemprice = document.getElementById(itemprice);
    // console.log(itemval.value);

    if (itemval.value >= 5) {
        itemval.value = 5;
        alert('Maximum 5 allowed!');
        itemval.style.background = 'red';
        itemval.style.color = '#fff';
    } else {
        itemval.value = parseInt(itemval.value) + 1;
        itemprice.innerHTML = parseInt(itemprice.innerHTML) + 250;
        productAmount.innerHTML = parseInt(productAmount.innerHTML) + 250;
        totalCartAmount.innerHTML = parseInt(productAmount.innerHTML) + parseInt(shippingCharge.innerHTML);
    }
}

const discount_code = (btn) => {
    let totalCurrAmt = parseInt(totalCartAmount.innerHTML);
    let errorThrow = document.getElementById('error_trw');
    let count = 0;
    if (discountCode.value === 'AWESOME') {
        let newTotal = totalCurrAmt - 30;
        ++count;
        totalCartAmount.innerHTML = newTotal;
        errorThrow.innerHTML = "CODE APPLIED";
        if (count === 1) {
            document.getElementById('disountBtn').disabled = true;
            // discountButton.disabled = true;
        }
    } else {
        errorThrow.innerHTML = "INVALID CODE";
    }
}