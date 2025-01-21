"use client";

import Image from "next/image";
import { LocalStorageType } from "../../components/addCartButton";
import { CiHeart } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Carts() {
  const [cartItem, setCartItem] = useState<LocalStorageType[]>([]);
  const [confirmOrder, setConfirmOrder] = useState<boolean>(false);

  useEffect(() => {
    const dataFromLocalStorage = localStorage.getItem("carts");
    if (dataFromLocalStorage) {
      try {
        setCartItem(JSON.parse(dataFromLocalStorage));
      } catch (error) {
        console.error("Error parsing local storage data:", error);
      }
    }
  }, []);

  const handleQuantityChange = (id: number, increment: boolean) => {
    console.log("Changing quantity for ID:", id);
  
    const updatedCart = cartItem.map((item) => {
      if (item.item._id === id) {
        if (increment) {
          if (item.quantity >= item.item.inventory) {
            alert(
              "Out of Stock!\nOops! You've reached the maximum stock available for this item."
            );
            return item; // Stock limit reached, no change in quantity
          }
  
          return {
            ...item,
            quantity: item.quantity + 1,
            item: {
              ...item.item,
              inventory: item.item.inventory - 1, // Reduce stock when quantity increases
            },
          };
        } else {
          if (item.quantity > 1) {
            return {
              ...item,
              quantity: item.quantity - 1,
              item: {
                ...item.item,
                inventory: item.item.inventory + 1, // Increase stock when quantity decreases
              },
            };
          }
        }
      }
      return item;
    });
  
    setCartItem(updatedCart);
    localStorage.setItem("carts", JSON.stringify(updatedCart));
  };

  const handleRemove = (id: number) => {
    const updatedCart = cartItem.filter((item) => item.item._id !== id);
    setCartItem(updatedCart);
    localStorage.setItem("carts", JSON.stringify(updatedCart));
  };

  const calculateSubtotal = () => {
    return cartItem.reduce(
      (total, item) => total + item.item.price * item.quantity,
      0
    );
  };

      // shipping cost
      const SHIPPING_COST = 120
      // total cost
      const total = calculateSubtotal() + SHIPPING_COST;

  const OrderConfirm = () => {
    setConfirmOrder(true);
    localStorage.clear();
  };

  if (cartItem.length === 0 && !confirmOrder) {
    return (
      <section className="h-screen flex justify-center items-center">
        <div className="text-center max-w-lg w-full shadow-lg rounded-xl py-6 px-4 space-y-6">
          <h2 className="text-[#007580] font-extrabold text-2xl">
            🛒 No items in the cart
          </h2>
          <p className="text-gray-600 text-lg font-semibold">
            Looks like you have not added anything yet.
          </p>
          <Link
            href="/product"
            className="inline-block bg-[#007580] text-white px-6 py-2 rounded hover:bg-[#007580b6] transition duration-300 font-semibold"
          >
            Continue Shopping
          </Link>
        </div>
      </section>
    );
  }
  return (
    <div className="max-w-[1321px] mx-auto px-4 py-8 font-sans">
      {!confirmOrder && ( // Yeh condition cart aur summary ko sirf tab dikhayegi jab confirmOrder false ho
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-[22px] font-medium pl-3 mb-6">Bag</h2>
            {cartItem.map((item, index) => (
              <div
                key={item.item._id || index}
                className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md mb-4"
              >
                <div className="flex items-center space-x-4">
                  <Image
                    src={item.item.imageUrl}
                    alt={item.item.title}
                    width={150}
                    height={150}
                    className="w-24 h-24 bg-orange-200 rounded"
                  />



                  <div className="font-medium">
                    <h3 className="text-[16px] text-[#272343] mb-4">
                      {item.item.title}
                    </h3>
                    <div className="flex flex-col sm:flex-row sm:space-x-8 mb-3">
                      <p className="text-[15px] mb-3 sm:mb-0 font-normal text-[#757575]">
                        Quantity:
                      </p>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() =>
                            handleQuantityChange(item.item._id, false)
                          }
                          className="w-6 h-6 flex items-center justify-center rounded bg-gray-300 text-gray-700"
                        >
                          -
                        </button>
                        <p className="text-[15px] font-normal text-[#757575]">
                          {item.quantity}
                        </p>
                        <button
                          onClick={() =>
                            handleQuantityChange(item.item._id, true)
                          }
                          className="w-6 h-6 flex items-center justify-center rounded bg-gray-300 text-gray-700"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="flex gap-3 mt-3">
                      <CiHeart size={20} />
                      <RiDeleteBin6Line
                        size={20}
                        onClick={() => handleRemove(item.item._id)}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex gap-3 absolute md:relative right-3">
                  <p className="text-[16px] font-medium text-[#111111]">MRP:</p>
                  <p className="text-[16px] font-medium text-[#111111]">
                    $ {(item.item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
             ))}
          </div>  
  
          <div>
            <h2 className="text-3xl mb-6 font-semibold">Summary</h2>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-between mb-4">
                <p className="text-lg font-medium">Subtotal</p>
                <p className="text-lg font-semibold">
                  $ {Number(calculateSubtotal()).toFixed(2)}
                </p>
              </div>
              <div className="flex justify-between mb-4">
                <p className="text-lg font-medium">
                  Estimated Delivery & Handling
                </p>
                <p className="text-lg font-semibold">
                $ {SHIPPING_COST.toFixed(2)}
                </p>
                   </div>
              
              <hr className="mb-4" />
              <div className="flex justify-between mb-6">
                <p className="text-xl font-bold">Total</p>
                <p className="text-xl font-bold">
                  {/* $ {calculateSubtotal().toFixed(2)} */}
                  $ {total.toFixed(2)}
                </p>
              </div>
              <button
                className="w-[180px] h-[45px] md:w-[334.67px] md:h-[60px] rounded-full text-white bg-[#029FAE] font-medium"
                onClick={() => OrderConfirm()}
              >
                Confirm Order
              </button>
            </div>
          </div>
        </div>
      )}
  
      {confirmOrder && ( // Yeh section tab dikhayega jab confirmOrder true ho
        <section className="h-screen w-full flex justify-center items-center bg-gray-100">
          <div className="max-w-md w-full p-6 bg-white shadow-lg rounded-lg text-center">
            <h1 className="text-2xl font-bold text-[#007580] mb-4">
              ✅ Order Confirmed!
            </h1>
            <h2 className="text-lg text-gray-700 mb-6">
              🎉 Your order has been successfully placed. Thank you for shopping
              with us!
            </h2>
            <button className="bg-[#007580] text-white px-6 py-2 rounded hover:bg-[#007580b6] transition duration-300">
              <Link href="/product">Continue Shopping</Link>
            </button>
          </div>
        </section>
      )}
    </div>
  );
}