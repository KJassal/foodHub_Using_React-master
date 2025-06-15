import React, { createContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import exampleImage from "C:/Users/admin/Desktop/project1/src/products/images/cardimg/bakery/1.jpg";
import exampleImage1 from "C:/Users/admin/Desktop/project1/src/products/images/cardimg/bakery/2.jpg";
import exampleImage2 from "C:/Users/admin/Desktop/project1/src/products/images/cardimg/bakery/3.jpg";
import exampleImage3 from "C:/Users/admin/Desktop/project1/src/products/images/cardimg/bakery/4.jpg";
import exampleImage4 from "C:/Users/admin/Desktop/project1/src/products/images/cardimg/bakery/5.jpg";
import exampleImage5 from "C:/Users/admin/Desktop/project1/src/products/images/cardimg/bakery/6.jpg";
import exampleImage6 from "C:/Users/admin/Desktop/project1/src/products/images/cardimg/bakery/7.jpg";
import exampleImage7 from "C:/Users/admin/Desktop/project1/src/products/images/cardimg/bakery/8.jpg";
import exampleImage8 from "C:/Users/admin/Desktop/project1/src/products/images/cardimg/bakery/9.jpg";



export const cartContext = createContext();

export default function BakreyCard() {
  const [product, setproduct] = useState(null);
  const [quantity,setquantity] = useState(0)
  const [cart,setcart] = useState([])

  // Product data with correct image references
  const productData = [
    {
      id: 1,
      name: "California Roll",
      category: "Veg Roll",
      brand: "samsung",
      price: "Rs : 299 only",
      stock: 20,
      quantities:quantity,
      img: exampleImage,
      description:
        "Delicious California Rolls made fresh daily! Enjoy the perfect blend of crab, avocado, cucumber, and sushi rice wrapped in seaweed. Order now for a taste of sushi perfection delivered straight to your door",
    },
    {
      id: 2,
      name: "Egg Roll",
      category: "Non Veg Roll",
      brand: "samsung",
      price: "Rs 99 only",
      stock: 20,
      quantities:quantity,
      img: exampleImage1,
      description:
        "Delicious and freshly made egg rolls with the perfect blend of spices, available for delivery or pickup. Satisfy your cravings with our crispy, mouthwatering rolls, made with quality ingredients and packed with flavor. Order now for a quick, tasty snack",
    },
    {
      id: 3,
      name: "Paneer Tikka Roll",
      category: "Veg Roll",
      brand: "samsung",
      price: "Rs 159 only",
      stock: 20,
      quantities:quantity,
      img: exampleImage3,
      description:
        "Delicious, freshly made Paneer Tikka Rolls packed with flavorful marinated paneer, crisp veggies, and a dash of tangy sauces. Perfect for a quick, wholesome meal on the go",
    },
    {
      id: 4,
      name: "Chicken Roll",
      category: "Non Veg Roll",
      brand: "samsung",
      price: "Rs 99 only",
      stock: 20,
      quantities:quantity,
      img: exampleImage4,
      description:
        "Delicious, freshly-made chicken rolls packed with tender, flavorful chicken and a blend of spices. Perfect for a quick bite or a satisfying meal on the go",
    },
    {
      id: 5,
      name: "Spicy Tuna Roll",
      category: "Non Veg Roll",
      brand: "samsung",
      price: "Rs 299 only",
      stock: 20,
      quantities:quantity,
      img: exampleImage5,
      description:
        "Experience the bold flavors of our Spicy Tuna Roll! Fresh, premium tuna paired with a kick of zesty spice, wrapped in perfectly seasoned rice and crisp seaweed. Satisfy your sushi cravings with this delicious blend of heat and freshness in every bite",
    },
    {
      id: 6,
      name: "Spider Roll",
      category: "Non Veg Roll",
      brand: "samsung",
      price: "Rs 299 only",
      stock: 20,
      quantities:quantity,
      img: exampleImage6,
      description:
        "Indulge in our mouth-watering Spider Roll, made with crispy soft-shell crab, fresh cucumber, and creamy avocado, all wrapped in a perfect sushi roll. A delicious fusion of textures and flavors, ideal for sushi lovers",
    },
    {
      id: 7,
      name: "Veg Roll",
      category: "Veg Roll",
      brand: "samsung",
      price: "Rs 60 only",
      stock: 20,
      quantities:quantity,
      img: exampleImage7,
      description:
        "Delicious homemade veg rolls, packed with fresh vegetables and flavorful spices, perfect for a quick snack or a light meal. Order now for fast delivery and enjoy the taste of health and flavor",
    },
    {
      id: 8,
      name: "Wrap Roll",
      category: "Veg Roll",
      brand: "samsung",
      price: "Rs 199 only",
      stock: 20,
      quantities:quantity,
      img: exampleImage8,
      description:
        "Delicious, fresh, and made-to-order, our Wrap Rolls bring you a fusion of flavors wrapped in soft, warm bread. Perfect for a quick snack or a wholesome meal, our rolls are packed with fresh ingredients, savory sauces, and your choice of fillings. Experience a burst of taste with every bite",
    },
  ];

  const handleAddToCart = (product) => {
    setcart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
  
      if (existingItem) {
        // If item already exists, increase quantity
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // If item is new, add it with quantity 1
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  
    alert("Successfully added to cart");
    console.log(cart);
  };


  return (
    <cartContext.Provider value={cart}>
    <>
      <div className="head-roll">
        <p>Delicious Bakery products For You All Try It Now</p>
      </div>
      <div className="container-card">
        {productData.map((data) => (
          <Card key={data.id} className="cards">
            <Card.Img variant="top" src={data.img} alt={data.productName} />
            <Card.Body>
              <Card.Title>{data.name}</Card.Title>
              <Card.Text>{data.description}</Card.Text>
              <Card.Text><span>Stock : </span>{data.stock}</Card.Text>
              <Card.Text><button onClick={()=>{
                if(quantity>=0 && quantity<data.stock){
                  setquantity(quantity+1)
                }else{
                  setquantity(0)
                }
                
              }}>+</button><span>{data.quantities}</span><button onClick={()=>{
                if(quantity>0){
                  setquantity(quantity-1)
                }
                else{                                 
                  setquantity(data.stock)
                }
              }}>-</button></Card.Text>
              <Card.Text>{data.price}</Card.Text>
              <div className="btns">
                <Button variant="primary">Buy Now</Button>
                <Button variant="primary" onClick={()=>{
                  handleAddToCart(data)
                }}>Add To Cart</Button>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
    </cartContext.Provider>
  );
}
