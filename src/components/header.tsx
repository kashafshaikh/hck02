import Link from "next/link";
import { FaBars } from "react-icons/fa";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Header() {
  return (
    <>
      <div className="bg-white w-full h-[74px] flex justify-between items-center max-w-screen-4xl px-4 md:px-56 lg:px-[135px] font-sans font-semibold text-[#636270] border border-b-[1px] border-b-gray-300">
        <ul className="hidden md:block">
          <li className="space-x-8 text-lg">
            <Link href="/" className="hover:text-[#007580]">
              Home
            </Link>
            <Link href="/product" className="hover:text-[#007580]">
              Shop
            </Link>
            <Link href="/product" className="hover:text-[#007580]">
              Product
            </Link>
            <Link href="/faqs" className="hover:text-[#007580]">
              Pages
            </Link>
            <Link href="/about" className="hover:text-[#007580]">
              About
            </Link>
          </li>
        </ul>

           <div className="text-lg">
         <Link href="/contact"> <span className=" text-[#636270] hover:text-[#007580]">
            Contact:
          </span>
            
          </Link>
          <span className=" text-[#272343]">
            (808) 555-0111
          </span>
        </div>

        <Sheet>
          <SheetTrigger className="md:hidden">
            <FaBars size={18}/>
          </SheetTrigger>
          <SheetContent>
            <ul>
              <li className="my-8 flex flex-col font-sans font-semibold text-[#272343]">
                <Link href="/" className="hover:text-[#007580] my-3">
                  Home
                </Link>
                <Link href="/product" className="hover:text-[#007580] my-3">
                  Shop
                </Link>
                <Link href="/product" className="hover:text-[#007580] my-3">
                  Product
                </Link>
                <Link href="/faqs" className="hover:text-[#007580] my-3">
                  Pages
                </Link>
                <Link href="/about" className="hover:text-[#007580] my-3">
                  About
                </Link>
              </li>
            </ul>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}
