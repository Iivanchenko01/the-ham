document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.breaking_news_item');

items.forEach(item => {
    item.addEventListener('mouseover', () => {

      item.querySelector('.item_data').style.backgroundColor = '#18CFAB';
      item.querySelector('.item_descr').style.color = '#18CFAB';
      item.querySelector('.item_descr').style.paddingLeft = '2px';
    
    });
    item.addEventListener('mouseout', () => {

        item.querySelector('.item_data').style.backgroundColor = '';
        item.querySelector('.item_descr').style.color = '';
        item.querySelector('.item_descr').style.paddingright = '';
      });
    });
  });