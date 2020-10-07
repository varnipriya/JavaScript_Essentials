let products = [
    {
      id: 1,
      name: "One Plus 8",
      feature: "6GB 128GB",
      color: "Sea Green",
      price: 48999,
      originalamt:"55000",
      image: "Picture1.webp",
      description: "2 Years Warranty",
    },
    {
      id: 2,
      name: "One Plus 7",
      feature: "6GB 128GB",
      color: "Mirror Black",
      price: 35999,
      originalamt:"40000",
      image: "Picture2.webp",
      description: "1 Year Warranty",
    },
  
    {
      id: 3,
      name: "One Plus 6T",
      feature: "8GB 128GB",
      color: "Mirror Black",
      price: 38999,
      originalamt:"42000",
      image: "Picture3.jpg",
      description: "2 years Warranty",
    },
  
    {
      id: 4,
      name: "IPhone 8plus",
      feature: "6GB 128GB",
      color: "Black",
      price: 49999,
      originalamt:"58000",
      image: "Picture4.png",
      description: "1 year warranty",
    },
  
    {
      id: 5,
      name: "Iphone 7plus",
      feature: "4GB 64GB",
      color: "Matte Black",
      price: 29999,
      originalamt:"32000",
      image: "Picture5.webp",
      description: "2 years warranty",
    },
  
    {
      id: 6,
      name: "Iphone 6",
      feature: "4GB 32GB",
      color: "Grey",
      price: 26999,
      originalamt:"30000",
      image: "Picture6.jpg",
      description: "1 year warranty",
    },
    {
        id: 7,
        name: "Samsung S20",
        feature: "4GB 32GB",
        color: "Pink",
        price: 74999,
        originalamt:"80000",
        image: "Picture7.webp",
        description: "2 year warranty",
      },
      {
        id: 8,
        name: "Samsung A50",
        feature: "8GB 256GB",
        color: "Blue",
        price: 21999,
        originalamt:"25000",
        image: "Picture8.jpg",
        description: "2 year warranty",
      },
      {
        id: 9,
        name: "Samsung A50s",
        feature: "6GB 32GB",
        color: "Black",
        price: 25999,        
        originalamt:"30000",
        image: "Picture9.jpg",
        description: "1 year warranty",
      },
      {
        id: 10,
        name: "RedMI 8",
        feature: "4GB 32GB",
        color: "Mirror Violet",
        price: 19999,        
        originalamt:"22000",
        image: "Picture10.jpg",
        description: "1.5 year warranty",
      },
      {
        id: 11,
        name: "RedMI 7",
        feature: "4GB 64GB",
        color: "Black",
        price: 14999,        
        originalamt:"20000",
        image: "Picture11.webp",
        description: "1 year warranty",
      },
      {
        id: 12,
        name: "RedMI 6",
        feature: "4GB 128GB",
        color: "Gold Pink",
        price: 22999,        
        originalamt:"26000",
        image: "Picture12.webp",
        description: "10 Months warranty",
      },
  ];
  
  cart = [];
  
  function displayProducts(productsData, who = "productwrapper") {
    let productsString = "";
  
    productsData.forEach(function (product, index) {
      let { id, name, image, color, description, price,feature,originalamt } = product;
  
      if (who == "productwrapper") {
        productsString += ` <div class="product">
          <div class="prodimg">
            <img src="${image}" width="100%" />
          </div>
          <h3>${name}</h3>
          <p>Price : ${price}$ <del>${originalamt}</del></p>
          <p>Feature : ${feature}</p>
          <p>Color : ${color}</p>
          <p>${description}</p>
          <p>
            <button onclick="addToCart(${id})">Add to Cart</button>
          </p>
        </div>`;
      } else if (who == "cart") {
        productsString += ` <div class="product">
          <div class="prodimg">
            <img src="${image}" width="100%" />
          </div>
          <h3>${name}</h3>
          <p>Price : ${price}$<del>${originalamt}</del></p>
          <p>Feature : ${feature}</p>
          <p>Color : ${color}</p>
          <p>${description}</p>
          <p>
            <button class="button" onclick="removeFromCart(${id})">Remove from Cart</button>
          </p>
        </div>`;
       let a= document.getElementById("countproducts");
       a=count;
      }
    });
  
    document.getElementById(who).innerHTML = productsString;
  }
  
  displayProducts(products);
  
  function searchProduct(searchValue) {
    let searchedProducts = products.filter(function (product, index) {
      let searchString =
        product.name + " " + product.color + " " + product.description;
  
      return searchString.toUpperCase().indexOf(searchValue.toUpperCase()) != -1;
    });
  
    displayProducts(searchedProducts);
  }
  
  // this is a function to get a product based on id from a particular array
  // @param 1 the array u want to get products from
  // @param 2 the id u want to search
  
  function getProductByID(productArray, id) {
    return productArray.find(function (product) {
      return product.id == id;
    });
  }
  
  let count=0;
  function addToCart(id) {
    // getting the product
    let pro = getProductByID(products, id);
  
    //   putting in cart
    let a=cart.includes(pro);
    if(a==false)
    {
    cart.push(pro);
    count+=1;//console.log(count);
    document.getElementById("count").innerText=count;
     //a.value=count;
    }  
    else{
        alert("The Product is already in the Cart! Please check")
    }
    displayProducts(cart, "cart");
  }
  
  function removeFromCart(id) {
    // getting the index based on id
    let index = cart.findIndex(function (product) {
      return product.id == id;
    });
  
    //   removing from cart based on index
    cart.splice(index, 1);
    count-=1;
    console.log(count);
    document.getElementById("count").innerText=count;
    displayProducts(cart, "cart");
  }
function filterprice()
{
    let max=document.getElementById("max1").value;
    let min=document.getElementById("min1").value;
    let a=products.filter(function(ele)
    {
        if(ele.price>=min && ele.price<=max)
         return ele.price;
    });
    displayProducts(a);

}