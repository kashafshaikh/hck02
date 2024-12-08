import Image from "next/image";
import { LuShoppingCart } from "react-icons/lu";
export default function Featuredproduct() {
  return (
    <>
      <div className="max-w-[1321px] h-auto md:h-[461px] bg-white md:mx-auto mt-6">
        <h1 className="font-semibold text-[#272343] text-[26px] md:text-[32px] py-4">
          Featured Products
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="w-[312px] h-[377px] relative ml-2 sm:ml-4 md:ml-0">
            <Image
              src="/01 (1).jpg"
              alt="chair"
              height={312}
              width={312}
            />
            <Image
              src="/featured-product-img/Products Status.png"
              alt="chair"
              height={26}
              width={49}
              className="absolute top-4 mx-4"
            />
            <div className="flex justify-between mt-3 items-center">
              
              <div className="flex flex-col">
              <h1 className="text-[16px] hover:text-[#029FAE]">Library School Chair</h1>
              <p className="py-2 font-semibold">$20</p>
              </div>
              <div className="bg-[#029FAE] text-white rounded-lg px-3 py-3"><LuShoppingCart size={20}/></div>
            </div>
          </div>

          <div className="w-[312px] h-[377px] relative ml-2 sm:ml-4">
            <Image
              src="/02.jpg"
              alt="chair"
              height={312}
              width={312}
            />
            <Image
              src="/featured-product-img/Products Status (1).png"
              alt="chair"
              height={26}
              width={54}
              className="absolute top-4 mx-4"
            />
            <div className="flex justify-between mt-3 items-center">
              
              <div className="flex flex-col">
              <h1 className="text-[16px] hover:text-[#029FAE]">Library School Chair</h1>
              <p className="py-2 font-semibold">$20</p>
              </div>
              <div className="hover:bg-[#029FAE] bg-[#F0F2F3] text-black hover:text-white rounded-lg px-3 py-3"><LuShoppingCart size={20}/></div>
            </div>
          </div>




          <div className="w-[312px] h-[377px] relative ml-2 sm:ml-4">
            <Image
              src="/03.jpg"
              alt="chair"
              height={312}
              width={312}
            />
            <div className="flex justify-between mt-3 items-center">
              
              <div className="flex flex-col">
              <h1 className="text-[16px] hover:text-[#029FAE]">Library School Chair</h1>
              <p className="py-2 font-semibold">$20</p>
              </div>
              <div className="hover:bg-[#029FAE] bg-[#F0F2F3] text-black hover:text-white rounded-lg px-3 py-3"><LuShoppingCart size={20}/></div>
            </div>
          </div>

          <div className="w-[312px] h-[377px] relative ml-2 sm:ml-4">
            <Image
              src="/04.jpg"
              alt="chair"
              height={312}
              width={312}
            />
            <div className="flex justify-between mt-3 items-center">
              
              <div className="flex flex-col">
              <h1 className="text-[16px] hover:text-[#029FAE]">Library School Chair</h1>
              <p className="py-2 font-semibold">$20</p>
              </div>
              <div className="hover:bg-[#8dc6cb] bg-[#F0F2F3] text-black hover:text-white rounded-lg px-3 py-3"><LuShoppingCart size={20}/></div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
