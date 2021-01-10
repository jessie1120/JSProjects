const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seats:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

let ticketPrice = +movieSelect.value; //  +號轉換‘字串‘型別為’數字‘
//ticketPrice不能用const宣告因為value會改變，改用let(變數會重新指定value的情況)

//Update Total and Count
function updateSelectedCount(){
  const selectedSeats = document.querySelectorAll('.row .seat.selected'); //選擇row底下含有seat.selected的物件 => 這邊會取得nodelist(node的集合)
  const selectedSeatsCount = selectedSeats.length; //length屬性可用來判斷元素的數目 => 這裡是取得nodelist內元素的數量
  count.innertext = selectedSeatsCount
  total.innertext = selectedSeatsCount * ticketPrice
}

// 電影選擇事件 Movie select event

movieSelect.addEventListener('change' e => {
  ticketPrice = +e.target.value;
  updateSelectedCount();
});

// 座位選擇事件 Seat select event
container.addEventListener('click', e => {
      //選擇點擊時class含有seats的DOM，不選擇含有occupied的
    if(e.target.classList.contains('seats') && !e.target.classList.contains('occupied')  
    ) {
    }
    e.target.classList.toggle('selected') // toggle:用來增加屬性，若已有屬性則消失
      updateSelectedCount();
})
