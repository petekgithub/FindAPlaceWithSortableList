const draggable_list = document.getElementById('draggable-list');
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
        .map(a => ({ value: a, sort: Math.random() }))
        .sort((a,b) =>a.sort - b.sort)
        .map(a => a.value)
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


        addEventListeners();

}

function dragStart() {
   // console.log('Event: ', 'dragstart');
   dragStartIndex = +this.closest('li').getAttribute('data-index');
}

function dragEnter() {
   // console.log('Event: ', 'dragenter');
   this.classList.add('over');
}

function dragLeave() {
  //  console.log('Event: ', 'dragleave');
  this.classList.remove('over');

}

function dragOver(e) {
  //  console.log('Event: ', 'dragover');
  e.preventDefault();
}

function dragDrop() {
  //  console.log('Event: ', 'drop');
  const dragEndIndex = +this.getAttribute('data-index');
  swapItems(dragStartIndex, dragEndIndex);

  this.classList.remove('over');
}

function swapItems(fromIndex,toIndex) {
    const itemOne = listItems[fromIndex].querySelector('.draggable');
    const itemTwo = listItems[toIndex].querySelector('.draggable');

    listItems[fromIndex].appendChild(itemTwo);
    listItems[toIndex].appendChild(itemOne);

}


function addEventListeners() {
    const draggables = document.querySelectorAll('.draggable');
    const dragListItem = document.querySelectorAll('.draggable-list li');

    draggables.forEach(draggable => {
        draggable.addEventListener('dragstart',dragStart)
    })

    dragListItem.forEach(item => {
        item.addEventListener('dragover',dragOver);
        item.addEventListener('drop',dragDrop);
        item.addEventListener('dragenter',dragEnter);
        item.addEventListener('dragleave',dragLeave);

    })

}