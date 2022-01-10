
if (localStorage.getItem("timer2")) {
    var timer2 = localStorage.getItem("timer2")
    console.log(timer2)

}
else { var timer2 = "00:05"; }
var interval = setInterval(timer, 1000);
function timer() {
    let timecount;

    if (localStorage.getItem("flashSaleSetCount") == null) {
        timecount = 1;
        localStorage.setItem("flashSaleSetCount", timecount);
    }
    else {
        timecount = getTimeOut();
    }
    var timer = timer2.split(':');

    //by parsing integer, I avoid all extra string processing
    var minutes = parseInt(timer[0], 10);
    var seconds = parseInt(timer[1], 10);
    --seconds;
    minutes = (seconds < 0) ? --minutes : minutes;
    offerChange();
    //console.log(minutes);
    if (minutes < 0) {
        // offerChange();
        timecount++;
        changeTimeOut(timecount);
        console.log(timecount, "timecount")
        offerChange();
        if (timecount > 5) {
            clearInterval(interval)
        }
        else {
            minutes = 0;
        }
    };
    // timecount++;
    // console.log(timecount,"timecount22");
    seconds = (seconds < 0) ? 5 : seconds;
    seconds = (seconds < 10) ? '0' + seconds : seconds;
    minutes = (minutes < 10) ? minutes : minutes;
    $('.countdown').html(minutes + ':' + seconds);
    timer2 = minutes + ':' + seconds;
    //console.log(timer2)
    localStorage.setItem("timer2", timer2)
    //console.log("sett")
    //setchange();
    return;

}
function getTimeOut() {
    return localStorage.getItem("flashSaleSetCount");
}
function changeTimeOut(time) {
    let count = time;
    localStorage.setItem("flashSaleSetCount", count);

}

const set1 = document.querySelectorAll(".set1")
const totalValue = document.getElementById("cart-total-value").textContent;
//const pri=document.getElementById(totalPrice).textContent.
console.log(totalValue);
//console.log(set1)

/*function vis(){
  console.log(set1);
  console.log(set1[0]);
  
  for(x=0;x<set1.length;x++){
    
    set1[x].style.visibility="hidden";

  }
}
setTimeout(vis,5000)
*/


// first set change
function offerChange() {
    switch (getTimeOut()) {
        case '1':
            setChange1();
            break;
        case '2':
            setChange();
            break;
        case '3':
            setChange2();
            break;

        case '4':
            setChange3();
            break;
        case '5':
            setChange4();
            break;
        case '6':
            setChange5();
            break
    }
}

function setChange1() {
    const newSet = document.querySelector(".productContainer");
    console.log(newSet)

    newSet.innerHTML = `
    <div class="productCard set1">
            <div class="productImage">
                <span class="discountTag">80% off</span>
                <img src="images/product1.jpg" class="productThumb" alt="product1">
                <button class="cartBtn">add to cart</button>
            </div>
            <div class="productInfo">
                <h2 class="productCategory">men's clothing</h2>
                <div class="productTitle">Fjallraven-Foldsack No.1 Backpack</div>
                <span class="price">&#8377 500</span><span class="actualPrice">&#8377 2499</span>
                <p class="productDescription">Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday</p>
                
            </div>
        </div>
        
            <div class="productCard set1">
                <div class="productImage">
                    <span class="discountTag">80% off</span>
                    <img src="images/product2.jpg" class="productThumb" alt="product2">
                    <button class="cartBtn">add to cart</button>
                </div>
                <div class="productInfo">
                    <h2 class="productCategory">men's clothing</h2>
                    <div class="productTitle">Mens Casual Premium Slim Fit T-Shirts</div>
                    <span class="price">&#8377 140</span><span class="actualPrice">&#8377 699</span>
                    <p class="productDescription">Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.</p>
                    
                </div>
            </div>

          

                
            <div class="productCard set1">
                <div class="productImage">
                    <span class="discountTag">80% off</span>
                    <img src="images/product3.jpg" class="productThumb" alt="product3">
                    <button class="cartBtn">add to cart</button>
                </div>
                <div class="productInfo">
                    <h2 class="productCategory">men's clothing</h2>
                    <div class="productTitle">Mens Cotton Jacket</div>
                    <span class="price">&#8377 300</span><span class="actualPrice">&#8377 1499</span>
                    <p class="productDescription">great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.</p>
                    
                </div>
            </div>

            <div class="productCard set1">
                <div class="productImage">
                    <span class="discountTag">80% off</span>
                    <img src="images/product4.jpg" class="productThumb" alt="product4">
                    <button class="cartBtn">add to cart</button>
                </div>
                <div class="productInfo">
                    <h2 class="productCategory">men's clothing</h2>
                    <div class="productTitle">Mens Casual Slim Fit</div>
                    <span class="price">&#8377 224</span><span class="actualPrice">&#8377 1119</span>
                    <p class="productDescription">The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.</p>
                    
                </div>
            </div>

    `;

}

function setChange() {
    const newSet = document.querySelector(".productContainer");
    console.log(newSet)

    newSet.innerHTML = `
  <div class="productCard">
      <div class="productImage">
          <img src="images/product5.jpg" class="productThumb" alt="product5">
          <button class="cartBtn">add to cart</button>
      </div>
      <div class="productInfo">
           <h2 class="productCategory">jewelery</h2> 
          <div class="productTitle">John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain
              Bracelet</div>
          <span class="price">&#8377 1499</span>
          <p class="productDescription">The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.</p>

      </div>
  </div>

   <div class="productCard">
      <div class="productImage">
          <img src="images/product6.jpg" class="productThumb" alt="product6">
          <button class="cartBtn">add to cart</button>
      </div>
      <div class="productInfo">
          <h2 class="productCategory">jewelery</h2> 
          <div class="productTitle">Solid Gold Petite Micropave</div>
          <span class="price">&#8377 1699</span>
          <p class="productDescription">The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.</p> 

      </div>
  </div>

  <div class="productCard">
      <div class="productImage">
          <img src="images/product7.jpg" class="productThumb" alt="product7">
          <button class="cartBtn">add to cart</button>
      </div>
      <div class="productInfo">
          <h2 class="productCategory">jewelery</h2> 
          <div class="productTitle">White Gold Plated Princess</div>
          <span class="price">&#8377 999</span>
          <p class="productDescription">The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.</p> 
      </div>
  </div>

  <div class="productCard">
      <div class="productImage">
          <img src="images/product8.jpg" class="productThumb" alt="product8">
          <button class="cartBtn">add to cart</button>
      </div>
      <div class="productInfo">
           <h2 class="productCategory">jewelery</h2>
          <div class="productTitle">Pierced Owl Rose Gold Plated Stainless Steel Double</div>
          <span class="price">&#8377 1099</span>
          <p class="productDescription">The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.</p>
      </div>
  </div> 
    `;

}
//setTimeout(setChange,5000) ; 

// second set change

function setChange2() {
    const newSet = document.querySelector(".productContainer");
    console.log(newSet)

    newSet.innerHTML = `
  <div class="productCard">
  <div class="productImage">
      <img src="images/product9.jpg" class="productThumb" alt="product9">
      <button class="cartBtn">add to cart</button>
  </div>
  <div class="productInfo">
      <h2 class="productCategory">electronics</h2>
      <div class="productTitle">WD 2TB Elements Portable External Hard Drive - USB 3.0</div>

      <div class="ratings">
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star-half-o checked"></span>
          <span class="fa fa-star-o checked"></span>
      </div>
      <span class="price">&#8377 6499</span>
      <p class="productDescription">The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.</p> 
  </div>
</div>

<div class="productCard">
  <div class="productImage">
      <img src="images/product10.jpg" class="productThumb" alt="product10">
      <button class="cartBtn">add to cart</button>
  </div>
  <div class="productInfo">
      <h2 class="productCategory">electronics</h2> 
      <div class="productTitle">SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s</div>

      <div class="ratings">
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star-o checked"></span>
          <span class="fa fa-star-o checked"></span>
      </div>
      <span class="price">&#8377 1099</span>
      <p class="productDescription">The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.</p> 
  </div>
</div>
<div class="productCard">
  <div class="productImage">
      <img src="images/product11.jpg" class="productThumb" alt="product11">
      <button class="cartBtn">add to cart</button>
  </div>
  <div class="productInfo">
      <h2 class="productCategory">electronics</h2>
      <div class="productTitle">Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA
          III 2.5</div>

      <div class="ratings">
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star-half-o checked"></span>
      </div>
      <span class="price">&#8377 1099</span>
      <p class="productDescription">The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.</p>
  </div>
</div>
<div class="productCard">
  <div class="productImage">
      <img src="images/product12.jpg" class="productThumb" alt="product12">
      <button class="cartBtn">add to cart</button>
  </div>
  <div class="productInfo">
      <h2 class="productCategory">electronics</h2> 
      <div class="productTitle">WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard
          Drive</div>

      <div class="ratings">
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star-half-o checked"></span>
      </div>
      <span class="price">&#8377 1149</span>
      <p class="productDescription">The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.</p>
  </div>
</div>
    `;

}
//setTimeout(setChange2,10000);



// Third set change

function setChange3() {
    const newSet = document.querySelector(".productContainer");
    console.log(newSet)

    newSet.innerHTML = `
  <div class="productCard">
                    <div class="productImage">
                        <img src="images/product13.jpg" class="productThumb" alt="product13">
                        <button class="cartBtn">add to cart</button>
                    </div>
                    <div class="productInfo">
                         <h2 class="productCategory">electronics</h2>
                        <div class="productTitle">Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin</div>

                        <div class="ratings">
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star-o checked"></span>
                            <span class="fa fa-star-o checked"></span>
                        </div>
                        <span class="price">&#8377 599</span>
                         <p class="productDescription">The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.</p> 
                    </div>
                </div>
                <div class="productCard">
                    <div class="productImage">
                        <img src="images/product14.jpg" class="productThumb" alt="product14">
                        <button class="cartBtn">add to cart</button>
                    </div>
                    <div class="productInfo">
                         <h2 class="productCategory">electronics</h2>
                        <div class="productTitle">Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor</div>

                        <div class="ratings">
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star-o checked"></span>
                            <span class="fa fa-star-o checked"></span>
                            <span class="fa fa-star-o checked"></span>
                        </div>
                        <span class="price">&#8377 999</span>
                       <p class="productDescription">The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.</p> 
                    </div>
                </div>
                <div class="productCard">
                <div class="productImage">
                    <img src="images/product15.jpg" class="productThumb" alt="product15">
                    <button class="cartBtn">add to cart</button>
                </div>
                <div class="productInfo">
                    <h2 class="productCategory">women's clothing</h2>
                    <div class="productTitle">BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats</div>

                    <div class="ratings">
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star-half-o checked"></span>
                        <span class="fa fa-star-o checked"></span>
                        <span class="fa fa-star-o checked"></span>
                    </div>
                    <span class="price">&#8377 5699</span>
                    <p class="productDescription">The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.</p> 
                </div>
            </div>

            <div class="productCard">
                <div class="productImage">
                    <img src="images/product16.jpg" class="productThumb" alt="product16">
                    <button class="cartBtn">add to cart</button>
                </div>
                <div class="productInfo">
                    <h2 class="productCategory">women's clothing</h2> 
                    <div class="productTitle">Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket
                    </div>

                    <div class="ratings">
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star-o checked"></span>
                        <span class="fa fa-star-o checked"></span>
                    </div>
                    <span class="price">&#8377 2995</span>
                    <p class="productDescription">The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.</p>
                </div>
            </div>

  `;

}
//setTimeout(setChange3,15000);



//  Fourth set change

function setChange4() {
    const newSet = document.querySelector(".productContainer");
    console.log(newSet)

    newSet.innerHTML = `
  <div class="productCard">
  <div class="productImage">
      <img src="images/product17.jpg" class="productThumb" alt="product17">
      <button class="cartBtn">add to cart</button>
  </div>
  <div class="productInfo">
      <h2 class="productCategory">women's clothing</h2>
      <div class="productTitle">Rain Jacket Women Windbreaker Striped Climbing Raincoats</div>

      <div class="ratings">
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star-half-o checked"></span>
          <span class="fa fa-star-o checked"></span>
      </div>
      <span class="price">&#8377 3999</span>
      <p class="productDescription">The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.</p> 
  </div>
</div>

<div class="productCard">
  <div class="productImage">
      <img src="images/product18.jpg" class="productThumb" alt="product18">
      <button class="cartBtn">add to cart</button>
  </div>
  <div class="productInfo">
      <h2 class="productCategory">women's clothing</h2> 
      <div class="productTitle">MBJ Women's Solid Short Sleeve Boat Neck V</div>

      <div class="ratings">
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star-half-o checked"></span>
      </div>
      <span class="price">&#8377 9085</span>
      <p class="productDescription">The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.</p>
  </div>
</div>

<div class="productCard">
  <div class="productImage">
      <img src="images/product19.jpg" class="productThumb" alt="product19">
      <button class="cartBtn">add to cart</button>
  </div>
  <div class="productInfo">
      <h2 class="productCategory">women's clothing</h2>
      <div class="productTitle">Opna Women's Short Sleeve Moisture</div>

      <div class="ratings">
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star-half-o checked"></span>
      </div>
      <span class="price">&#8377 1795</span>
      <p class="productDescription">The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.</p> 
  </div>
</div>
<div class="productCard">
  <div class="productImage">
      <img src="images/product20.jpg" class="productThumb" alt="product20">
      <button class="cartBtn">add to cart</button>
  </div>
  <div class="productInfo">
      <h2 class="productCategory">women's clothing</h2>
      <div class="productTitle">DANVOUY Womens T Shirt Casual Cotton Short</div>


      <div class="ratings">
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star-half-o checked"></span>
          <span class="fa fa-star-o checked"></span>
      </div>
      <span class="price">&#8377 1299</span>
      <p class="productDescription">The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.</p> 
  </div>
</div>
  `;

}
//setTimeout(setChange4,20000);

//setTimeout("showSet1",5000)
function setChange5() {
    const newSet = document.querySelector(".productContainer");
    console.log(newSet)



    newSet.innerHTML = `<div class="dealsOver" id="dealsOver">
                        <h1 class="headDeal" id="headDeal"> DEALS OVER </h1>

                        </div>
    `;

}


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


function eventListeners() {

    addEventListener('DOMContentLoaded', () => {
        //loadJSON();
        loadCart();
    });

    document.getElementById('cart-btn').addEventListener('click', () => {
        cartContainer.classList.toggle('show-cart-container');
    });

    productList.addEventListener('click', purchaseProduct);

    cartList.addEventListener('click', deleteProduct);
}

function updateCartInfo() {
    let cartInfo = findCartInfo();
    //console.log(cartInfo);
    cartCountInfo.textContent = cartInfo.productCount;
    cartTotalValue.textContent = cartInfo.total;
    toCheckout();
}
updateCartInfo();



function purchaseProduct(e) {

    if (e.target.classList.contains('cartBtn')) {
        let product = e.target.parentElement.parentElement;
        //console.log(e.target);
        getProductInfo(product)
    }
}

// get product info after add to cart button click
function getProductInfo(product) {
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

function addToCartList(product) {
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


function saveProductInStorage(item) {
    let products = getProductFromStorage();
    products.push(item);
    localStorage.setItem('products', JSON.stringify(products));
    updateCartInfo();
}
function getProductFromStorage() {
    return localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : [];
    // returns empty array if there isn't any product info
}


function loadCart() {
    let products = getProductFromStorage();
    if (products.length < 1) {
        cartItemID = 1; // if there is no any product in the local storage
    } else {
        cartItemID = products[products.length - 1].id;
        cartItemID++;
        // else get the id of the last product and increase it by 1
    }
    //console.log(cartItemID)
    products.forEach(product => addToCartList(product));

    // calculate and update UI of cart info 
    updateCartInfo();
}

function findCartInfo() {
    let products = getProductFromStorage();
    let total = products.reduce((acc, product) => {
        let price = parseFloat(product.price.substr(1)); // removing dollar sign
        return acc += price;
    }, 0); // adding all the prices
    //console.log(total)
    return {
        total: total.toFixed(2),
        productCount: products.length
    }
}
//findCartInfo();



function deleteProduct(e) {
    let cartItem;
    if (e.target.tagName === "BUTTON") {
        cartItem = e.target.parentElement;
        cartItem.remove(); // this removes from the DOM only
    } else if (e.target.tagName === "I") {
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

function toCheckout() {
    const totalCart = document.getElementById("cart-total-value").textContent;
    localStorage.setItem("totalPrice", totalCart);
    return;
}
