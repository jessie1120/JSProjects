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
    <button class="delete-btn">x</button> 
    `);
    // .appendTo = 將內容添加至某個選取器
    // .append = 在某個選取器裡添加內容
    item.appendTo('#list'); // 相等於 $('#list').append(item);
  }

// Init app 初始化資料並顯示在畫面上
function init() {
    $('#list').html('');
    transactions.forEach(addTransactionDOM);
}
init(); 
