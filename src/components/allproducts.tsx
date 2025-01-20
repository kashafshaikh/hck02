
// import { LuShoppingCart } from "react-icons/lu";
// import { Badge } from "@/components/ui/badge";
// import Image from "next/image";
// import Link from "next/link";

// export type Product = {
//   id: number;
//   title: string;
//   price: number;
//   image: string;
//   originalPrice?: number;
//   isNew?: boolean;
//   isSale?: boolean;
// };

// const ProductCard = ({ product }: { product: Product }) => (
//   <div key={product.id} className="group relative rounded-lg bg-white">
//     <div className="relative aspect-square overflow-hidden rounded-lg">
//       {product.isNew && (
//         <Badge className="absolute left-3 top-3 bg-emerald-500 hover:bg-emerald-600">
//           New
//         </Badge>
//       )}
//       {product.isSale && (
//         <Badge className="absolute left-3 top-3 bg-orange-500 hover:bg-orange-600">
//           Sale
//         </Badge>
//       )}
//       <Link href={`/product/${product.id}`}>
//         <Image
//           src={product.image}
//           alt={product.title}
//           height={400}
//           width={400}
//           className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
//           aria-label={`View details of ${product.title}`}
//         />
//       </Link>
//     </div>
//     <div className="mt-4 flex items-center justify-between">
//       <div>
//         <h3 className="text-sm text-[#1C1B1F]">{product.title}</h3>
//         <div className="mt-1 flex items-center gap-2">
//           <span className="text-lg font-medium text-[#1C1B1F]">
//             ${product.price}
//           </span>
//           {product.originalPrice && (
//             <span className="text-sm text-gray-500 line-through">
//               ${product.originalPrice}
//             </span>
//           )}
//         </div>
//       </div>
//       <button
//         className="rounded-lg bg-[#00B5A5] p-2 text-white transition-colors hover:bg-[#00A294]"
//         aria-label={`Add ${product.title} to cart`}
//       >
//         <LuShoppingCart size={20} className="h-5 w-5" />
//       </button>
//     </div>
//   </div>
// );

// export default function AllProduct() {
//   const products: Product[] = [
//     { id: 1, title: "Library Stool Chair", price: 20, image: "/(1).png" },
//     {
//       id: 2,
//       title: "Vintage Armchair",
//       price: 40,
//       image: "/(2).png",
//       originalPrice: 60,
//     },
//     { id: 3, title: "Ergonomic Office Chair", price: 50, image: "/(3).png" },
//     { id: 4, title: "Modern Dining Chair", price: 35, image: "/(4).png" },
//     {
//       id: 5,
//       title: "Reclining Lounge Chair",
//       price: 60,
//       image: "/(5).png",
//       isSale: true,
//     },
//     {
//       id: 6,
//       title: "Adjustable Desk Chair",
//       price: 25,
//       image: "/(6).png",
//       isNew: true,
//     },
//     { id: 7, title: "Classic Bar Stool", price: 30, image: "/(7).png" },
//     {
//       id: 8,
//       title: "Sleek High Chair",
//       price: 15,
//       image: "/about(1).jpg",
//       isSale: true,
//     },
//     { id: 9, title: "Foldable Outdoor Chair", price: 10, image: "/(6).png" },
//     {
//       id: 10,
//       title: "Leather Recliner Chair",
//       price: 150,
//       image: "/about(2).jpg",
//       isSale: true,
//       originalPrice: 200,
//     }, 
//   ];

//   return (
//     <div className="max-w-[1321px] container mx-auto px-4 py-20">
//       <h1 className="text-3xl text-center font-semibold text-[#1C1B1F] tracking-tight mb-8">
//         Our Products
//       </h1>
//       <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
//         {products.map((product) => (
//           <ProductCard key={product.id} product={product} />
//         ))}
//       </div>
//     </div>
//   );
// }



// import { LuShoppingCart } from "react-icons/lu";
// import { Badge } from "@/components/ui/badge";
// import Image from "next/image";
// import Link from "next/link";
// import { client } from "@/sanity/lib/client";

// export type Product = {
//   _id: string;
//   title: string;
//   price: number;
//   image: string;
//   originalPrice?: number;
//   isNew?: boolean;
//   isSale?: boolean;
// };

// const ProductCard = ({ product }: { product: Product }) => (
//   <div key={product._id} className="group relative rounded-lg bg-white">
//     <div className="relative aspect-square overflow-hidden rounded-lg">
//       {product.isNew && (
//         <Badge className="absolute left-3 top-3 bg-emerald-500 hover:bg-emerald-600">
//           New
//         </Badge>
//       )}
//       {product.isSale && (
//         <Badge className="absolute left-3 top-3 bg-orange-500 hover:bg-orange-600">
//           Sale
//         </Badge>
//       )}
//       <Link href={`/product/${product._id}`}>
//         <Image
//           src={product.image}
//           alt={product.title}
//           height={400}
//           width={400}
//           className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
//           aria-label={`View details of ${product.title}`}
//         />
//       </Link>
//     </div>
//     <div className="mt-4 flex items-center justify-between">
//       <div>
//         <h3 className="text-sm text-[#1C1B1F]">{product.title}</h3>
//         <div className="mt-1 flex items-center gap-2">
//           <span className="text-lg font-medium text-[#1C1B1F]">
//             ${product.price}
//           </span>
//           {product.originalPrice && (
//             <span className="text-sm text-gray-500 line-through">
//               ${product.originalPrice}
//             </span>
//           )}
//         </div>
//       </div>
//       <button
//         className="rounded-lg bg-[#00B5A5] p-2 text-white transition-colors hover:bg-[#00A294]"
//         aria-label={`Add ${product.title} to cart`}
//       >
//         <LuShoppingCart size={20} className="h-5 w-5" />
//       </button>
//     </div>
//   </div>
// );

// export default function AllProduct({ products }: { products: Product[] }) {
//   if (!products || products.length === 0) {
//     return <div className="text-center py-10">No products found</div>;
//   }

//   return (
//     <div className="max-w-[1321px] container mx-auto px-4 py-20">
//       <h1 className="text-3xl text-center font-semibold text-[#1C1B1F] tracking-tight mb-8">
//         Our Products
//       </h1>
//       <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
//         {products.map((product) => (
//           <ProductCard key={product._id} product={product} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export async function getStaticProps() {
//   const query = `*[_type == "products"]{
//     _id,
//     title,
//     price,
//     "image": image.asset->url,
//     originalPrice,
//     isNew,
//     isSale
//   }`;

//   const products = await client.fetch(query);

//   return {
//     props: {
//       products: products || [], // Ensure products is always an array
//     },
//     revalidate: 60, // Revalidate after 60 seconds
//   };
// }


// import { client } from "@/sanity/lib/client"
// import Link from "next/link"
// import { BsCartDash } from "react-icons/bs"

// const AllProduct = async () => {

// const products = await client.fetch(`*[_type == "products"]{       
//   "slug":slug.current,
//   title,
//   price,
//   priceWithoutDiscount,
//   badge,
//   "imageUrl": image.asset->url, }`)
 
//    // Repeat products to make the length 16 if there are less than 16
//  const repeatedProducts = [...products, ...products.slice(0, 16 - products.length)];

//   return (
//     <div className='lg:mx-20 mx-3 sm:mx-10 mb-40'>
//     <div>
//         <h2 className='text-[#272343] lg:text-[32px] text-2xl mt-6  tracking-normal font-semibold text-center'>All Products</h2>
//         <div className="products flex flex-wrap justify-center lg:mt-10 mt-3 gap-5 gap-y-20 lg:gap-y-28">
//           {repeatedProducts.map((prod:any)=>{
//            return(
            
//             <div className='w-[280px] h-[280px]' key={prod.slug}>
//            <div className="img relative">
//            <Link href={`/product/${prod.slug}`}>
//               <img src={prod.imageUrl} alt={prod.title} className="w-full h-full object-cover rounded-xl cursor-pointer" /></Link>
//                {prod.color && (
//                  <span
//                  className="absolute top-4 left-4 rounded-lg text-sm px-3 py-1"
//                  style={{ backgroundColor: prod.color, color: "white" }}
//                 >
//                 {prod.badge}
//               </span>
//               )}
//           </div>
//           <div className="flex items-center justify-between mt-3">
//             <div className="text gap-[10px]">
//                 <h4 className="text-[#272343]">{prod.title}</h4>
//                 <div>
//                     <span className="text-[#272343] text-[18px] font-medium">{prod.price}</span>
//                     <del className="ml-1 text-[#9A9CAA]">{prod.priceWithoutDiscount}</del>
//                 </div>
//             </div>
//             <div className="cart px-3 py-2 bg-[#F0F2F3] hover:bg-[#029FAE] text-[#272343] hover:text-white rounded-lg">
//               <BsCartDash  className="size-6"/>
//             </div>
//           </div>
//          </div>          
//           ) })}
//         </div>
//     </div>
//     </div>
//   )
// }

// export default AllProduct


"use client"; // Mark this as a client-side component

import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import { BsCartDash } from "react-icons/bs";

const AllProduct = () => {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await client.fetch(`*[_type == "products"]{
        "slug":slug.current,
        title,
        price,
        priceWithoutDiscount,
        badge,
        "imageUrl": image.asset->url,
      }`);
      
      // Repeat products to make the length 16 if there are less than 16
      const repeatedProducts = [...data, ...data.slice(0, 16 - data.length)];
      setProducts(repeatedProducts);
    };

    fetchData();
  }, []);

  return (
    <div className='lg:mx-20 mx-3 sm:mx-10 mb-40'>
      <div>
        <h2 className='text-[#272343] lg:text-[32px] text-2xl mt-6  tracking-normal font-semibold text-center'>
          All Products
        </h2>
        <div className="products flex flex-wrap justify-center lg:mt-10 mt-3 gap-5 gap-y-20 lg:gap-y-28">
          {products.map((prod: any) => {
            return (
              <div className='w-[280px] h-[280px]' key={prod.slug}>
                <div className="img relative">
                  <Link href={`/product/${prod.slug}`}>
                    <img
                      src={prod.imageUrl}
                      alt={prod.title}
                      className="w-full h-full object-cover rounded-xl cursor-pointer"
                    />
                  </Link>
                  {prod.color && (
                    <span
                      className="absolute top-4 left-4 rounded-lg text-sm px-3 py-1"
                      style={{ backgroundColor: prod.color, color: "white" }}
                    >
                      {prod.badge}
                    </span>
                  )}
                </div>
                <div className="flex items-center justify-between mt-3">
                  <div className="text gap-[10px]">
                    <h4 className="text-[#272343]">{prod.title}</h4>
                    <div>
                      <span className="text-[#272343] text-[18px] font-medium">
                        {prod.price}
                      </span>
                      <del className="ml-1 text-[#9A9CAA]">
                        {prod.priceWithoutDiscount}
                      </del>
                    </div>
                  </div>
                  <div className="cart px-3 py-2 bg-[#F0F2F3] hover:bg-[#029FAE] text-[#272343] hover:text-white rounded-lg">
                    <BsCartDash className="size-6" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AllProduct;
