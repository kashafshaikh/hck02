import React from "react";
import Image from "next/image";
import { CiHeart } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";

export default function Cart(){
  return (
    <div className="max-w-[1321px] mx-auto px-4 py-8 font-sans">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h2 className="text-[22px] font-medium pl-3 mb-6">Bag</h2>

          <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md mb-4">
            <div className="flex items-center space-x-4">
              <div className="w-24 h-24 bg-orange-200 rounded">
                <Image src="/(3).png" alt="." width={150} height={150} />
              </div>
              <div className="font-medium">
                <h3 className="text-[16px] text-[#272343] mb-4">
                  Library Stool Chair
                </h3>
                <p className="text-[16px] text-[#757575] mb-3 font-normal">
                  Ashen Slate/Cobalt Bliss
                </p>
                <div className="flex space-x-12 mb-3">
                  <p className="text-[15px] font-normal text-[#757575]">
                    Size: L
                  </p>
                  <p className="text-[15px] font-normal text-[#757575]">
                    Quantity: 1
                  </p>
                </div>
                <div className="flex gap-3 mt-3">
                  <CiHeart size={20}/>
                  <RiDeleteBin6Line size={20}/>
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <p className="text-[16px] font-medium text-[#111111]">MRP: </p>
              <p className="text-[16px] font-medium text-[#111111]">$99</p>
            </div>
          </div>

          <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md mb-4">
            <div className="flex items-center space-x-4">
              <div className="w-24 h-24 bg-gray-300 rounded">
                <Image src="/(5).png" alt="." width={150} height={150} />
              </div>
              <div className="font-medium">
                <h3 className="text-[16px] font-medium text-[#272343] mb-4">
                  Library Stool Chair
                </h3>
                <p className="text-[15px] font-normal text-[#757575] mb-3">
                  Ashen Slate/Cobalt Bliss
                </p>
                <div className="flex space-x-12 mb-3">
                  <p className="text-[15px] font-normal text-[#757575]">
                    Size: L
                  </p>
                  <p className="text-[15px] font-normal text-[#757575]">
                    Quantity: 1
                  </p>
                </div>
                <div className="flex gap-3 mt-3">
                  <CiHeart size={20}/>
                  <RiDeleteBin6Line size={20}/>
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <p className="text-[16px] font-medium text-[#111111]">MRP: </p>
              <p className="text-[16px] font-medium text-[#111111]">$99</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-3xl mb-6 font-semibold">Summary</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between mb-4">
              <p className="text-lg font-medium">Subtotal</p>
              <p className="text-lg font-semibold">$198.00</p>
            </div>
            <div className="flex justify-between mb-4">
              <p className="text-lg font-medium">Estimated Delivery & Handling</p>
              <p className="text-lg font-semibold ">Free</p>
            </div>
            <hr className="mb-4" />
            <div className="flex justify-between mb-6">
              <p className="text-xl font-bold">Total</p>
              <p className="text-xl font-bold">$198.00</p>
            </div>
            <button className="w-[334.67px] h-[60px] rounded-full text-white bg-[#029FAE] font-medium">
              Member Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};







