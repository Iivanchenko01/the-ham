const list = document.querySelector('.our_amazing_work_list');
const items = document.querySelectorAll('.image_item');
const listItems = document.querySelectorAll('.our_amazing_work_tab');

function filter() {
  list.addEventListener('click', (event) => {
    const targetId = event.target.dataset.id;
    const target = event.target;

    if (target.classList.contains('our_amazing_work_tab')) {
      listItems.forEach((listItem) => listItem.classList.remove('active'));
      target.classList.add('active');
    }

    if (targetId === 'all') {
      items.forEach((item) => {
        item.style.display = 'block';
      });
    } else {
      getItems(targetId);
    }
  });
}

function getItems(className) {
  items.forEach((item) => {
    if (item.classList.contains(className)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}

filter();