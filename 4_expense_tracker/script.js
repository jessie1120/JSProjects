$('#balance')
$('#money-plus')
$('#money-minus')
$('#list')
$('#form')
$('#text')
$('#amount')

// 示範物件，之後會由我們輸入的資料取代。
const dummyTransactions = [
  { id: 1, text: 'Flower', amount: -20 },
  { id: 2, text: 'Salary', amount: 300 },
  { id: 3, text: 'Book', amount: -10 },
  { id: 4, text: 'Camera', amount: 150 }
];

let transactions = dummyTransactions;

// Add transaction
function addTransaction(e) {
    e.preventDefault();

    if($('#text').val().trim() === '' || $('#amount').val().trim() === '') {
        alert('Please add a text and amount');
    } else {
        const transaction = {
            id: generateID(),
            text: $('#text').val(),
            amount: +$('#amount').val()
        }; 
        // .push = 添加一個或多個元素至陣列的末端，並且回傳陣列的新長度。
        // https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/push
        transactions.push(transaction);

        addTransactionDOM(transaction);
        updateValues();

        $('#text').val(''); 
        $('#amount').val('');
    }
}
// Generate random ID  建立隨機ID
// 亂數產生：https://ithelp.ithome.com.tw/articles/10197904
function generateID() {
    return Math.floor(Math.random() * 1e5);
}
// Add transactions to DOM list
function addTransactionDOM(transaction) {
    // 先取正負
    const sign = transaction.amount < 0 ? '-' : '+';
    // 添加list元素
    //.appendTo方法：https://www.w3school.com.cn/jquery/manipulation_appendto.asp
    const item = $('<li></li>').appendTo('#list');
    // 先判斷正負決定添加屬性
    item.addClass(transaction.amount < 0 ? 'minus' : 'plus');
    // Math.abs() 傳回絕對值 => 這邊用意是去掉負數的減號
    item.html(`${transaction.text} <span>${sign}${Math.abs(transaction.amount)}</span> 
    <button class="delete-btn" onclick="removeTransaction(${transaction.id})">x</button>
    `);
    // .appendTo = 將內容添加至某個選取器
    // .append = 在某個選取器裡添加內容
    item.appendTo('#list'); // 相等於 $('#list').append(item);
  }

// update the balance, income and expense
function updateValues() {
    const amounts = transactions
        .map(function(transaction) {
            return transaction.amount;
        })
    // reduce()方法：累加陣列中數值
    // https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
    const total = amounts
        .reduce((function(accumulator, item) {
            return accumulator += item;    // accumulator = accumulator + item;
        }),0)
        .toFixed(2);
    // filter()方法： 經過內部函式處理後，將通過之元素回傳為新陣列
    // https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
    const income = amounts
        .filter(function(item) {
            return item > 0;
        })
        .reduce((function(accumulator, item) {
            return accumulator += item;    
        }),0) 
        .toFixed(2);
    const expense = (amounts
        .filter(function(item) {
        return item < 0;
        })
        .reduce((function(accumulator, item) {
            return accumulator += item;    
        }),0) * -1)
        .toFixed(2);   

        $('#balance').text(`$${total}`);
        $('#money-plus').text(`$${income}`);
        $('#money-minus').text(`$${expense}`);
}
// Remove transaction
function removeTransaction(id) {
    transactions = transactions
        .filter(function(transaction) {
            return transaction.id !== id;
        })
    init();
}

// Init app 初始化資料並顯示在畫面上
function init() {
    $('#list').html('');
    transactions.forEach(addTransactionDOM);
    updateValues()
}
init();

// event listener
$('#form').submit(addTransaction);