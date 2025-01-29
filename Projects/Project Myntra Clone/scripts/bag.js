
let bagItemObjects;
onLoad();
function onLoad(){
  loadBagItemObjects();
  displayBagItems();
}
function loadBagItemObjects(){
  console.log(bagItems);

  bagItems.map(itemId => {
    for(let i = 0; i < items; i++){
      if(itemId == items[i].id){
        return items[i];
      }
    }
  });
  console.log(bagItemObjects);
}

function displayBagItems(){
  

  let ContainerElement = document.querySelector('.bag-items-container');
  let innerHTML = '';
  bagItemObjects.forEach(bagItem  => {
    innerHTML += generateItemHTML(bagItem);
    
  });
    containerElement.innerHTML = innerHTML ;
}

function generateItemHTML(items){
  return `<div class="bag-item-container">
  <div class="item-left-part">
    <img class="bag-item-img" src="../${items.image}">
  </div>
  <div class="item-right-part">
    <div class="company">${items.company}</div>
    <div class="item-name">${items.item_name}</div>
    <div class="price-container">
      <span class="current-price">Rs ${items.current_price}</span>
      <span class="original-price">Rs ${items.original_price}</span>
      <span class="discount-percentage">(${items.discount_percentage}% OFF)</span>
    </div>
    <div class="return-period">
      <span class="return-period-days">${items.return_period} days</span> return available
    </div>
    <div class="delivery-details">
      Delivery by
      <span class="delivery-details-days">${items.delivery_date}</span>
    </div>
  </div>

  <div class="remove-from-cart">X</div>
</div>`

}