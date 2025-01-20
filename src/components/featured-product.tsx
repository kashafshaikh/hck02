// import Image from "next/image";
// import { LuShoppingCart } from "react-icons/lu";
// export default function Featuredproduct() {
//   return (
//     <>
//       <div className="max-w-[1321px] h-auto md:h-[461px] bg-white md:mx-auto mt-6">
//         <h1 className="font-semibold text-[#272343] text-[26px] md:text-[32px] py-4 ml-4 md:ml-0">
//           Featured Products
//         </h1>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//           <div className="w-[312px] h-[377px] relative mx-auto">
//             <Image
//               src="/(1).png"
//               alt="chair"
//               height={312}
//               width={312}
//             />
//             <Image
//               src="/featured-product-img/Products Status.png"
//               alt="chair"
//               height={26}
//               width={49}
//               className="absolute top-4 mx-4"
//             />
//             <div className="flex justify-between mt-3 items-center">
              
//               <div className="flex flex-col">
//               <h1 className="text-[16px] hover:text-[#029FAE]">Library School Chair</h1>
//               <p className="py-2 font-semibold">$20</p>
//               </div>
//               <div className="bg-[#029FAE] text-white rounded-lg px-3 py-3"><LuShoppingCart size={20}/></div>
//             </div>
//           </div>

//           <div className="w-[312px] h-[377px] relative mx-auto">
//             <Image
//               src="/(2).png"
//               alt="chair"
//               height={312}
//               width={312}
//             />
//             <Image
//               src="/featured-product-img/Products Status (1).png"
//               alt="chair"
//               height={26}
//               width={54}
//               className="absolute top-4 mx-4"
//             />
//             <div className="flex justify-between mt-3 items-center">
              
//               <div className="flex flex-col">
//               <h1 className="text-[16px] hover:text-[#029FAE]">Library School Chair</h1>
//               <p className="py-2 font-semibold">$20</p>
//               </div>
//               <div className="hover:bg-[#029FAE] bg-[#F0F2F3] text-black hover:text-white rounded-lg px-3 py-3"><LuShoppingCart size={20}/></div>
//             </div>
//           </div>
          
//           <div className="w-[312px] h-[377px] relative mx-auto">
//             <Image
//               src="/(3).png"
//               alt="chair"
//               height={312}
//               width={312}
//             />
//             <div className="flex justify-between mt-3 items-center">
              
//               <div className="flex flex-col">
//               <h1 className="text-[16px] hover:text-[#029FAE]">Library School Chair</h1>
//               <p className="py-2 font-semibold">$20</p>
//               </div>
//               <div className="hover:bg-[#029FAE] bg-[#F0F2F3] text-black hover:text-white rounded-lg px-3 py-3"><LuShoppingCart size={20}/></div>
//             </div>
//           </div>

//           <div className="w-[312px] h-[377px] relative mx-auto">
//             <Image
//               src="/(4).png"
//               alt="chair"
//               height={312}
//               width={312}
//             />
//             <div className="flex justify-between mt-3 items-center">
              
//               <div className="flex flex-col">
//               <h1 className="text-[16px] hover:text-[#029FAE]">Library School Chair</h1>
//               <p className="py-2 font-semibold">$20</p>
//               </div>
//               <div className="hover:bg-[#8dc6cb] bg-[#F0F2F3] text-black hover:text-white rounded-lg px-3 py-3"><LuShoppingCart size={20}/></div>
//             </div>
//           </div>

//         </div>
//       </div>
//     </>
//   );
// }


// import { client } from "@/sanity/lib/client";
// import Link from "next/link";
// import { BsCartDash } from "react-icons/bs";

// const Products =[
//     {
//         id : '1',
//         img : '/fprod1.png',
//         name : 'Library Stool Chair',
//         discPrice : '$20',
//         off : 'New',
//         offColor : '#01AD5A'
//     },{
//         id : '2',
//         img : '/fprod2.png',
//         name : 'Library Stool Chair',
//         discPrice : '$20',
//         RealPrice : '$39',
//         off : 'Sales',
//         offColor : '#F5813F'
//     },{
//         id : '3',
//         img : '/fprod3.png',
//         name : 'Library Stool Chair',
//         discPrice : '$20',
//     },{
//         id : '4',
//         img : '/fprod4.png',
//         name : 'Library Stool Chair',
//         discPrice : '$20',
//     }
// ]

// const FeaturedProduct = async () => {

//  const Products = await client.fetch(`*[_type == "products" && "featured" in tags] {
//   "slug":slug.current,
//   title,
//   price,
//   priceWithoutDiscount,
//   badge,
//   "imageUrl": image.asset->url,
// }
// `);
//   return (
//     <div className='lg:mx-20 sm:mx-10 mx-3 mb-10 lg:mb-36'>
//     <div>
//         <h2 className='text-[#272343] lg:text-[32px] text-2xl md:text-left text-center tracking-normal font-semibold '>Featured Product</h2>
//         <div className="products flex md:flex-nowrap justify-center flex-wrap mt-5 gap-3 xl:gap-5">
//             {Products.map((prod: any) => {           
//              return (           
//             <div className=' cursor-pointer'key={prod.slug}>
//              <div className="img relative">
//              <Link href={`/product/${prod.slug}`}> 
//               <img src={prod.imageUrl} alt={prod.title} className="w-[300px] h-[300px] hover:brightness-90 rounded-md object-cover" />
//               </Link>
//                {prod.color && (
//                <span
//                className="absolute top-4 left-4 rounded-lg text-sm px-3 py-1"
//                style={{ backgroundColor: prod.color, color: "white" }}
//               >
//               {prod.badge}
//               </span>
//               )}
//             </div>
//             <div className="flex items-center justify-between mt-3">
//             <div className="text gap-[10px]">
//               <h4 className="text-[#272343]">{prod.title}</h4>
//               <div>
//                 <span className="text-[#272343] text-[18px] font-medium">${prod.price}</span>
//                 {prod.priceWithoutDiscount && (
//                   <del className="ml-1 text-[#9A9CAA]">${prod.priceWithoutDiscount}</del>
//                 )}
//               </div>
//             </div>
//             <div className="cart px-3 py-2 bg-[#F0F2F3] hover:bg-[#029FAE] text-[#272343] hover:text-white rounded-lg">
//             <Link href="/carts"><BsCartDash  className="size-6"/></Link>
//             </div>
//             </div>
//            </div>
//             )
//             })}
//         </div>
//     </div>
//     </div>
//   )
// }

// export default FeaturedProduct


"use client"; // Next.js 13+ ke liye zaroori hai agar aap useEffect use karein

import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import { BsCartDash } from "react-icons/bs";

const FeaturedProduct = () => {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await client.fetch(`*[_type == "products" && "featured" in tags] {
        "slug": slug.current,
        title,
        price,
        priceWithoutDiscount,
        badge,
        "imageUrl": image.asset->url
      }`);
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <div className='lg:mx-20 sm:mx-10 mb-10 lg:mb-36 mx-3'>
      <div>
        <h2 className='text-[#272343] lg:text-[32px] text-2xl md:text-left text-center tracking-normal font-semibold '>
          Featured Product
        </h2>
        <div className="products flex md:flex-nowrap justify-center flex-wrap mt-5 gap-3 xl:gap-5">
          {products.map((prod) => (
            <div className='cursor-pointer' key={prod.slug}>
              <div className="img relative">
                <Link href={`/product/${prod.slug}`}>
                  <img src={prod.imageUrl} alt={prod.title} className="w-[300px] h-[300px] hover:brightness-90 rounded-md object-cover" />
                </Link>
                {prod.badge && (
                  <span className="absolute top-4 left-4 rounded-lg text-sm px-3 py-1" style={{ backgroundColor: prod.badge.color, color: "white" }}>
                    {prod.badge.text}
                  </span>
                )}
              </div>
              <div className="flex items-center justify-between mt-3">
                <div className="text gap-[10px]">
                  <h4 className="text-[#272343]">{prod.title}</h4>
                  <div>
                    <span className="text-[#272343] text-[18px] font-medium">${prod.price}</span>
                    {prod.priceWithoutDiscount && <del className="ml-1 text-[#9A9CAA]">${prod.priceWithoutDiscount}</del>}
                  </div>
                </div>
                <div className="cart px-3 py-2 bg-[#F0F2F3] hover:bg-[#029FAE] text-[#272343] hover:text-white rounded-lg">
                  <Link href="/carts">
                    <BsCartDash className="size-6" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProduct;
