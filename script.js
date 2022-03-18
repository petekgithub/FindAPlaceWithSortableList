const draggable_list = document.getElementById('draggeble-list');
const check = document.getElementById('check');

const visitablePlaces = [
    'Rothenburg', //10
    'Rugen Island', //9
    'Romantic Rhine', //8
    'Cologne', //7
    'Dresden', //6
    'Lubeck', //5
    'Heidelberg', //4
    'Neuschwanstein', //3
    'Munich', //2
    'Berlin', //1
];

//store list items
const listItems = [];

let dragStartIndex;

createList();

// Insert list items into  DOM
function createList() {
    [...visitablePlaces]
        .forEach((place, index) => {
            const listItem = document.createElement('li');

            listItem.setAttribute('data-index', index);

            listItem.innerHTML = `
                <span class="number">${index + 1}</span>
                <div class="draggable" draggable="true">
                    <p class="place-name">${place}</p>
                    <i class="fas fa-grip-lines"></i>
                </div>
            `;

            listItems.push(listItem);

            draggable_list.appendChild(listItem);
        });
}