"use client";
import { useEffect, useState } from "react";
import { LocalStorageType } from "../../components/addCartButton"
import Image from "next/image";
import Link from "next/link";

export default function Carts () {
    // local storage data store after object converting
  const [cartItem, setCartItem] = useState<LocalStorageType[]>([]);
  const [confirmOrder , setConfirmOrder] = useState<boolean>(false)

 

  // Load cart items from localStorage only once when the component mounts
  useEffect(() => {
    
  // store data from localStorage
  const dataFromLocalStorage = localStorage.getItem("carts");
    if (dataFromLocalStorage) {
      setCartItem(JSON.parse(dataFromLocalStorage));
    }
  }, []);

  // remove item from cart
  const handleRemove = (id: number) => {
    const updatedCart = cartItem.filter((item) => item.item.id !== id);
    setCartItem(updatedCart);
    localStorage.setItem("carts", JSON.stringify(updatedCart));
  };

  // Function to increase or decrease the quantity of a specific item
  const handleQuantityChange = (id: number, increment: boolean) => {
    const updatedCart = cartItem.map((item) =>
      item.item.id === id
        ? {
            ...item,
            quantity: increment
              ? item.quantity + 1
              : Math.max(1, item.quantity - 1),
          }
        : item
    );
    setCartItem(updatedCart); // Update state with the new quantities
    localStorage.setItem("carts", JSON.stringify(updatedCart)); // Save updated cart to localStorage
  };


// calculate items total
  const calculateSubtotal = () => { 
    const amount = cartItem.reduce(
      (total, item) => total + item.item.price * item.quantity,  0
    );
    return amount; 
  };
  
  // shipping cost
  const SHIPPING_COST = 120 
  // total cost
  const total = calculateSubtotal() + SHIPPING_COST;
  
  

  const OrderConfirm = ()=>{
    setConfirmOrder(true)
    localStorage.clear()
}


  return (
    <main className="h-full max-w-[1321px] mx-auto flex justify-center">
    {cartItem.length > 0 ? (
      <> 
  <section className={`h-auto w-full my-12 p-2 flex flex-col mx-auto md:px-5 ${confirmOrder ? 'hidden' : 'block'}`}>
    <table className="w-full ">
      <thead>
        <tr className="bg-[#007580]">
          <th scope="col" className="md:p-4 md:text-xl text-white ">
            Product
          </th>
          <th scope="col" className=" p-3  text-white">
            Price
          </th>
          <th scope="col" className=" p-3 text-white">
            Quantity
          </th>
          <th scope="col" className="p-3 text-white">
            Total
          </th>
        </tr>
      </thead>
          <tbody>
            {cartItem.map((item) => (
              <tr key={item.item.id} className="border-b-2 border-[#007580]">
                {/* product  */}
                <td className="flex flex-col sm:flex-row  justify-center sm:gap-6 gap-3 py-5">
                  <Image
                    src={item.item.image}
                    alt={item.item.title}
                    height={100}
                    width={150}
                    className="rounded-md"
                  />

                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-[#343434] ml-3 ">
                      {item.item.title}
                    </h3>
                    <button
                      onClick={() => handleRemove(item.item.id)}
                      className="bg-red-600 hover:bg-red-700 ml-4 text-sm my-4 rounded text-white px-3 py-2 transition duration-200"
                    >
                      Remove
                    </button>
                  </div>
                </td>
                {/* product Price  */}
                <td className="text-center font-bold">{item.item.price}</td>
                {/* product quantity  */}

                <td>
                  <div className="flex items-center sm:w-32 w-20 border border-[#007580] overflow-hidden">
                    <button
                      className="sm:px-3 px-2 font-bold w-full py-1 bg-[#007580] hover:bg-[#007580b6] text-white"
                      onClick={() => handleQuantityChange(item.item.id, false)}
                    >
                      -
                    </button>
                    <span className="sm:px-6 px-2 py-1">{item.quantity}</span>

                    <button
                      onClick={() => handleQuantityChange(item.item.id, true)}
                      className="sm:px-3 px-2 font-bold w-full py-1 bg-[#007580] hover:bg-[#007580b6]  text-white"
                    >
                      +
                    </button>
                  </div>
                </td>

                <td className="text-center font-bold">
                  {(item.item.price * item.quantity).toFixed(2)}
                </td>
              </tr>
            ))}
          
          </tbody>
          <tfoot >
          <tr>
              <td colSpan={2} className='text-end p-3'>
                SubTotal
              </td>
              <td colSpan={3} className=" text-end  p-3" > {Number(calculateSubtotal()).toFixed(2)}</td>
            </tr>

            <tr>
              <td colSpan={2} className='text-end p-3'>
              Shipping
              </td>
              <td colSpan={3} className=" text-end p-3" > {SHIPPING_COST.toFixed(2)}</td>
            </tr>
            <tr >
              <td colSpan={2} className='text-end  p-3'>
                Total
              </td>
              <td colSpan={3} className=" text-end p-3" > {total.toFixed(2)}</td>
            </tr>          
          </tfoot>
        </table>
        <button  className="bg-[#007580]  text-white hover:bg-[#007580b6] mx-auto px-6 py-2  md:px-12 md:py-3 rounded-md font-bold text-lg md:text-xl " onClick={()=> OrderConfirm()}>Confirm Order</button>
      </section>
      {confirmOrder ?
      <section className="h-screen w-full flex justify-center items-center bg-gray-100">
      <div className="max-w-md w-full p-6 bg-white shadow-lg rounded-lg text-center">
        <h1 className="text-2xl font-bold text-[#007580] mb-4">✅ Order Confirmed!</h1>
        <h2 className="text-lg text-gray-700 mb-6">
          🎉 Your order has been successfully placed. Thank you for shopping with us!
        </h2>
        <button className="bg-[#007580] text-white px-6 py-2 rounded hover:bg-[#007580b6]  transition duration-300">
          <Link href="/product">Continue Shopping</Link>
        </button>
      </div>
    </section>
    
      :''}
      </>
      )
      
        
      :(

        <section className="h-screen flex justify-center items-center ">
        <div className="text-center max-w-lg w-full  shadow-lg rounded-xl py-6 px-4 space-y-6">
          <h2 className="text-[#007580]  font-extrabold text-2xl ">
            🛒 No items in the cart
          </h2>
          <p className="text-gray-600 text-lg font-semibold">
            {`Looks like you haven't added anything yet.` }
          </p>
          <Link
            href="/product"
            className="inline-block bg-[#007580] text-white px-6 py-2 rounded hover:bg-[#007580b6]  transition duration-300 font-semibold"
          >
            Continue Shopping
          </Link>
        </div>
      </section>
      

      )}
    </main>
  );
}