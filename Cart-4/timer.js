var timer2 = "10:01";
var interval = setInterval(function() {


  var timer = timer2.split(':');
  //by parsing integer, I avoid all extra string processing
  var minutes = parseInt(timer[0], 10);
  var seconds = parseInt(timer[1], 10);
  --seconds;
  minutes = (seconds < 0) ? --minutes : minutes;
  if (minutes < 0) clearInterval(interval);
  seconds = (seconds < 0) ? 59 : seconds;
  seconds = (seconds < 10) ? '0' + seconds : seconds;
  minutes = (minutes < 10) ?  minutes : minutes;
  $('.countdown').html(minutes + ':' + seconds);
  timer2 = minutes + ':' + seconds;
}, 1000);

// TIMER END


 /* function opencart(){
   console.log("hello");
   if( document.getElementsByClassName("cart-container")[0].style.display="none")
   {

   document.getElementsByClassName("cart-container")[0].style.display="block";
   }
   else if(document.getElementsByClassName("cart-container")[0].style.display="block"){
    document.getElementsByClassName("cart-container")[0].style.display="none";
   }
   console.log("sucess")
 } 
 */
 const cartContainer = document.querySelector('.cart-container');
 const cartList = document.querySelector('.cart-list');
 const cartTotalValue = document.getElementById('cart-total-value');
 const cartCountInfo = document.getElementById('cart-count-info');
 const productList = document.querySelector('.product');
 let cartItemID = 1;

 eventListeners();


function eventListeners(){

  window.addEventListener('DOMContentLoaded', () => {
    //loadJSON();
    loadCart();
});

 document.getElementById('cart-btn').addEventListener('click', () => {
  cartContainer.classList.toggle('show-cart-container');
});

productList.addEventListener('click', purchaseProduct);

cartList.addEventListener('click', deleteProduct);
}

function updateCartInfo(){
  let cartInfo = findCartInfo();
  console.log(cartInfo);
  cartCountInfo.textContent = cartInfo.productCount;
  cartTotalValue.textContent = cartInfo.total;
}
updateCartInfo();



function purchaseProduct(e){
  
  if(e.target.classList.contains('cartBtn')){
    let product = e.target.parentElement.parentElement;
   // console.log(e.target);
    getProductInfo(product)
}  
}

// get product info after add to cart button click
  function getProductInfo(product){
  let productInfo = {
      id: cartItemID,
      imgSrc: product.querySelector('.productImage img').src,
      name: product.querySelector('.productTitle').textContent,
      category: product.querySelector('.productCategory').textContent,
      price: product.querySelector('.price').textContent
  }
  cartItemID++;
  //console.log(productInfo);
  addToCartList(productInfo);
  saveProductInStorage(productInfo);
}

function addToCartList(product){
  const cartItem = document.createElement('div');
  cartItem.classList.add('cart-item');
  cartItem.setAttribute('data-id', `${product.id}`);
  cartItem.innerHTML = `
      <img src = "${product.imgSrc}" alt = "product image">
      <div class = "cart-item-info">
          <h3 class = "cart-item-name">${product.name}</h3>
          <span class = "cart-item-category">${product.category}</span>
          <span class = "cart-item-price">${product.price}</span>
      </div>

      <button type = "button" class = "cart-item-del-btn">
          <i class = "fas fa-times"></i>
      </button>
  `;
  cartList.appendChild(cartItem);
}


function saveProductInStorage(item){
  let products = getProductFromStorage();
  products.push(item);
  localStorage.setItem('products', JSON.stringify(products));
  updateCartInfo();
}
function getProductFromStorage(){
  return localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : [];
  // returns empty array if there isn't any product info
}


function loadCart(){
  let products = getProductFromStorage();
  if(products.length < 1){
      cartItemID = 1; // if there is no any product in the local storage
  } else {
      cartItemID = products[products.length - 1].id;
      cartItemID++;
      // else get the id of the last product and increase it by 1
  }
  console.log(cartItemID)
  products.forEach(product => addToCartList(product));

  // calculate and update UI of cart info 
  updateCartInfo();
}

function findCartInfo(){
  let products = getProductFromStorage();
  let total = products.reduce((acc, product) => {
      let price = parseFloat(product.price.substr(1)); // removing dollar sign
      return acc += price;
  }, 0); // adding all the prices
   console.log(total)
  return{
      total: total.toFixed(2),
      productCount: products.length
  }
}
//findCartInfo();



function deleteProduct(e){
  let cartItem;
  if(e.target.tagName === "BUTTON"){
      cartItem = e.target.parentElement;
      cartItem.remove(); // this removes from the DOM only
  } else if(e.target.tagName === "I"){
      cartItem = e.target.parentElement.parentElement;
      cartItem.remove(); // this removes from the DOM only
  }
  //console.log(cartItem);

  let products = getProductFromStorage();
  let updatedProducts = products.filter(product => {
      return product.id !== parseInt(cartItem.dataset.id);
  });
 
  localStorage.setItem('products', JSON.stringify(updatedProducts)); // updating the product list after the deletion
 // console.log(products);
  //console.log(updatedProducts)
  
  updateCartInfo();
}