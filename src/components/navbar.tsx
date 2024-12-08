import { AiOutlineExclamationCircle } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { LuShoppingCart } from "react-icons/lu";
import Image from "next/image";
export default function Navbar() {
    return (
        <>
            {/*Section 01 Topheader */}
            <div className="w-full h-[45px] bg-[#272343] text-gray-200 flex flex-wrap justify-between items-center px-4 md:px-56 lg:px-[135px]">

                {/* Left Section */}
                <div className="w-full text-center md:w-auto md:text-left">
                    <h1 className="text-sm whitespace-nowrap">
                        ✓ Free Shipping On All Orders Over $50
                    </h1>
                </div>

                {/* Right Section */}
                <div className="flex flex-wrap justify-center md:justify-end items-center space-x-6 text-sm mt-2 md:mt-0 w-full md:w-auto md:text-right">
                    <div className="flex items-center space-x-1">
                        <span>Eng</span>
                        <IoIosArrowDown />
                    </div>
                    <div>FAQs</div>
                    <div className="flex items-center space-x-1">
                        <AiOutlineExclamationCircle size={16} />
                        <span>Need Help</span>
                    </div>
                </div>
            </div>

            {/* Section 02 Logo and Cart */}
            <div className="w-full h-[84px] bg-[#F0F2F3] flex justify-between items-center px-4 md:px-56 lg:px-[135px]">
                 <div className="w-[150px] h-[80px] md:w-auto md:h-auto flex items-center">
                    <Image src="/Logo.png" alt="logo" height={40} width={166}/>
                 </div>
                 <div className=" bg-white w-[120px] h-[44px] relative rounded-lg flex items-center justify-center gap-3">
                    <div><LuShoppingCart size={20}/></div>
                    <p className="text-[#272343] font-sans font-semibold">Cart</p>
                    <div className="bg-[#007580] w-[20px] h-[20px] rounded-full text-white text-xs flex justify-center items-center">2</div>
                 </div>
            </div>
        </>
    );
}
