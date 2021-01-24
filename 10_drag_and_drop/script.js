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
createList();

function createList() {
    [...popularSeries]
    .forEach(function (series, index) {
        const listItem = $('<li></li>').attr('data-index', index);
        listItem.html(`
        <span class="number">${index + 1}</span>
        <div class="draggable" draggable="true">
          <p class="series-name">${series}</p>
          <i class="fas fa-grip-lines"></i>
        </div>
      `);
        $('#draggable-list').append(listItem);
    })
}