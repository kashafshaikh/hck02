"use client";
import { Product } from "../app/product/[slug]/page";

// create interface for props type
interface ButtonProps {
  Product: Product;
  Text: string;
}

// create interface for send data to localstorage
export interface LocalStorageType {
  item: Product;
  quantity: number;
}

export default function CartButton({ Product, Text }: ButtonProps) {
  // item quantity
  const quantity = 1;
  
  // create object and pass two entity for send data to local storage
  const items: LocalStorageType = {
    item: Product,
    quantity: quantity,
  };


  // create a function call when we want to add item in cart and buy
  const addToCart = (product: LocalStorageType) => {
    //  cheack already exist data in local storage
    const existingCart = localStorage.getItem("carts");
    // if data is already in localstorage so convert data json to object if data is not in localstorage so create empty array
    const carts = existingCart ? JSON.parse(existingCart) : [];

    // Check if the item already exists in the cart using optional chaining
    const existingItem = carts.find(
      (cartItem: LocalStorageType) => cartItem.item?._id === product.item._id
    );

    if (existingItem) {
      // If the item exists, increase its quantity
      existingItem.quantity += product.quantity;
    } else {
      // If the item doesn't exist, add the new item to the cart
      carts.push(product);
     
    }

    // Save updated cart to localStorage
    localStorage.setItem("carts", JSON.stringify(carts));
    console.log(carts); // Check the updated 
  };

  return (
    <>
      <button
        className="mt-4 bg-[#029FAE] text-white font-semibold py-2 px-4 rounded-3xl"
        onClick={() =>  addToCart(items) } >
        {Text}
      </button>
    </>
  );
}
