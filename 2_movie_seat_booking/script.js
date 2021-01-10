const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

populateUI();

let ticketPrice = +movieSelect.value; // +號轉換‘字串‘型別為’數字‘
// ticketPrice不能用const宣告因為value會改變，改用let(變數會重新指定value的情況)

// copy selected seats into array
// map through array
// return a new array indexes

// Save selected movie index and price
function setMovieData(movieIndex, moviePrice) {
  localStorage.setItem('selectedMovieIndex', movieIndex);
  localStorage.setItem('selectedMoviePrice', moviePrice);
}

// Update total and count
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll('.row .seat.selected');
  // 選擇row底下含有seat.selected的物件 => 這邊會取得nodelist(node的集合)
  const seatsIndex = [...selectedSeats].map(function(seat) {
    return [...seats].indexOf(seat);
  });
  // ...將selectedSeats這個nodelist中'所有'的值複製到這。
  // map()會處理陣列中每個元素，最後回傳出一個新的陣列
  // indexOf()會判斷陣列中是否包含某個值，判斷的方式為「由左而右」，如果有包含就回傳這個值在陣列中的索引值(第幾個)

  localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

  const selectedSeatsCount = selectedSeats.length;
// length屬性可用來判斷元素的數目 => 這裡是取得nodelist內元素的數量

  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;
}

// Get data from localstorage and populate UI
function populateUI() {
  const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));

  if (selectedSeats !== null && selectedSeats.length > 0) {
    seats.forEach((seat, index) => {
      if (selectedSeats.indexOf(index) > -1) {
        seat.classList.add('selected');
      }
    });
  }

  const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');

  if (selectedMovieIndex !== null) {
    movieSelect.selectedIndex = selectedMovieIndex;
  }
}

// 電影選擇事件 Movie select event
movieSelect.addEventListener('change', e => {
  ticketPrice = +e.target.value;
  setMovieData(e.target.selectedIndex, e.target.value);
  updateSelectedCount();
});

// 座位選擇事件Seat click event
container.addEventListener('click', e => {
  if (
    e.target.classList.contains('seat') &&
    !e.target.classList.contains('occupied') //選擇點擊時class含有seats的DOM，不選擇含有occupied的
  ) {
    e.target.classList.toggle('selected'); // toggle:用來增加屬性，若已有屬性則消失

    updateSelectedCount();
  }
});

// Initial count and total set
updateSelectedCount();