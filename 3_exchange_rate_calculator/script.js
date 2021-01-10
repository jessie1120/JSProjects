function calculate() {
    const currency_one = $('#currency-one').val();
    const currency_two = $('#currency-two').val();

    fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
    // 
    .then(function(res) {
        return res.json();
    })
    .then(function(data) {
        const rate = data.rates[currency_two];
        $('#rate').text(`1 ${currency_one} = ${rate} ${currency_two}`);

        $('#amount-two').val(($('#amount-one').val() * rate).toFixed(4)); 
    });
}
// Eventlistener
$('#currency-one').change(function() { 
    calculate(); 
});
$('#currency-two').change(function() {
    calculate();
});
$('#amout-one').change(function() {
    calculate();
});
$('#amout-two').change(function() {
    calculate();
});
$('#swap').click(function() {
    const temp = $('#currency-one').val();
    $('#currency-one').val($('#currency-two').val());
    $('#currency-two').val(temp);
    calculate();
})
calculate();