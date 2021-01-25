const draggable_list = $('#draggable-list')[0]
const popularSeries = [
    'The Queen’s Gambit',
    'Emily in Paris',
    'Lucifer',
    'The Umbrella Academy',
    'Money Heist',
    'Dark Desire',
    'The Crown',
    'Friends',
    'Yo soy Betty, la fea',
    'Ratched'
];
const listItems = [];
let dragStartIndex;
createList();


function createList() {
    [...popularSeries]
    .map(function(data) {
        return {value: data, sort: Math.random()}
    })

    .sort(function(a,b) {
        return (a.sort - b.sort)
    })

    .map(function(data) {
        return data.value  
    })

    .forEach(function (series, index) {
      const listItem = document.createElement('li');
      listItem.setAttribute('data-index', index);
      listItem.innerHTML = `
        <span class="number">${index + 1}</span>
        <div class="draggable" draggable="true">
          <p class="series-name">${series}</p>
          <i class="fas fa-grip-lines"></i>
        </div>
      `;
      listItems.push(listItem);
      draggable_list.appendChild(listItem);
//         jquery part

//         const listItem = $('<li></li>').attr('data-index', index);
//         listItem.html(`
//         <span class="number">${index + 1}</span>
//         <div class="draggable" draggable="true">
//           <p class="series-name">${series}</p>
//           <i class="fas fa-grip-lines"></i>
//         </div>
//       `);
//         listItems.push(listItem)
//         $('#draggable-list').append(listItem);
//     })
// }
//  $('#draggable-list').sortable();
      addEventListeners();
    });
}

function addEventListeners() {
  const draggables = document.querySelectorAll('.draggable');
  const dragListItems = document.querySelectorAll('.draggable-list li');

  draggables.forEach(function (draggable) {
    draggable.addEventListener('dragstart', dragStart);
  });

  dragListItems.forEach(function (item) {
    item.addEventListener('dragover', dragOver);
    item.addEventListener('drop', dragDrop);
    item.addEventListener('dragenter', dragEnter);
    item.addEventListener('dragleave', dragLeave);
  });
}
function dragStart() {
  dragStartIndex = +this.closest('li').getAttribute('data-index');
}
function dragEnter() {
  this.classList.add('over');
}
function dragLeave() {
  this.classList.remove('over');
}
function dragOver(e) {
  e.preventDefault();
}
function dragDrop() {
  const dragEndIndex = +this.getAttribute('data-index');
  swapItems(dragStartIndex, dragEndIndex);
  this.classList.remove('over');
}

function swapItems(fromIndex, toIndex) {
  const itemOne = listItems[fromIndex].querySelector('.draggable');
  const itemTwo = listItems[toIndex].querySelector('.draggable');

  listItems[fromIndex].appendChild(itemTwo);
  listItems[toIndex].appendChild(itemOne);
}