"use client";

// import { useEffect, useState } from "react";
import CartButton from "@/components/addCartButton";
// import Image from "next/image";
// import Link from "next/link";

// interface Product{
//   id: number;
//   title: string;
//   price: number;
//   image: string;
//   originalPrice?: number;
//   isNew?: boolean;
//   isSale?: boolean;
// };

// const products: Product[] = [
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
// ];

// export default function ProductDetail({
//   params,
// }: {
//   params: Promise<{ id: string }>;
// }) {
//   const [productId, setProductId] = useState<string | null>(null);
//   const [product, setProduct] = useState<Product | null>(null);
//   console.log(productId);
//   useEffect(() => {
//     const unWrap = async () => {
//       try {
//         const resolved = await params;
//         setProductId(resolved.id);

//         const foundProduct = products.find(
//           (item) => item.id === Number(resolved.id)
//         );
//         setProduct(foundProduct || null);
//       } catch (error) {
//         console.error("Error fetching in product:", error);
//         setProductId(null);
//       }
//     };

//     unWrap();
//   }, [params]);

//   if (!product) {
//     return (
//       <div className="flex items-center justify-center min-h-screen">
//         <p className="text-gray-700 text-xl font-medium">Product not found</p>
//       </div>
//     );
//   }

//   return (
//     <div className="flex items-center justify-center min-h-screen px-4">
//       <div className="grid grid-cols-1 md:flex max-w-4xl w-full">
//         {/* Image Section */}
//         <div className="w-full md:w-1/2 p-4">
//           <Image
//             src={product.image}
//             alt={product.title}
//             width={300}
//             height={500}
//             className="rounded-lg mx-auto"
//           />
//         </div>

//         {/* Product Details Section */}
//         <div className="w-full md:w-1/2 p-4">
//           <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
//           <button className="mt-4 mb-4 bg-[#007580] text-white font-semibold py-2 px-4 rounded">
//             ${product.price}
//           </button>
//           {product.originalPrice && (
//             <p className="text-sm text-gray-500 line-through mt-2">
//               Original Price: ${product.originalPrice}
//             </p>
//           )}
//           <p className="text-gray-700 mt-4">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
//             fugiat explicabo olore provident cum eveniet distinctio, perspiciatis
//             dolore provident cum eveniet error illo esse accusamus voluptatibus
//             ducimus impedit laudantium deleniti repellendus.
//           </p>

//          <div className="flex gap-3">
//          <CartButton Product={product} Text='Add to Cart'/>
//          <Link href={'/carts'}>  <CartButton Product={product} Text='Buy Now'/> </Link>
//         </div>

//           {product.isNew && (
//             <span className="text-sm text-green-600 font-medium mt-2 block">
//               New Arrival
//             </span>
//           )}
//           {product.isSale && (
//             <span className="block text-sm text-red-600 font-medium mt-2">
//               On Sale!
//             </span>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }


// ProductDetail.tsx
// import SinglePagePromotion from "@/components/SinglePagePromotion";
// import { client } from "@/sanity/lib/client";
// import Link from "next/link";
// import { BsCartDash } from "react-icons/bs"

// interface Product {
//   slug: { current: string };
//   title: string;
//   price: number;
//   priceWithoutDiscount: number;
//   badge: string;
//   color: string;
//   imageUrl: string;
//   description: string;
//   inventory: number;
// }

// const getProduct = async (slug: string): Promise<Product | null> => {
//   const products = await client.fetch(`*[_type == "products"]{
//     "slug":slug.current,
//     title,
//     price,
//     priceWithoutDiscount,
//     badge,
//     "imageUrl": image.asset->url,
//     description,
//     inventory,
//   }`);

//   const foundProduct = products.find((prod: any) => prod.slug === slug);
//   return foundProduct || null;
// };

// const ProductDetail = async ({ params }: { params: { slug: string } }) => {
//   const product = await getProduct(params.slug);

//   if (!product) {
//     return <p>Product not found!</p>;
//   }
//   return (
//    <main>
//       <div>
//       <div className="flex md:flex-row flex-col mt-5 gap-10 lg:p-10 p-3 sm:mx-10 mx-3 lg:mx-20">
//       <div className="md:w-1/2 mx-auto">
//         <img
//           src={product.imageUrl}
//           alt={product.title}
//           className="rounded-2xl object-cover w-[260px] h-[260px] hover:drop-shadow-xl sm:w-full sm:h-full"
//         />
//       </div>
//       <div className="md:w-1/2 flex flex-col mx-5 lg:mx-14">
//         <div className="lg:pb-10 pb-5 border-b border-[#D9D9D9] ">
//         <h2 className="lg:text-6xl text-2xl md:text-4xl text-[#272343] font-bold mb-4 md:mb-7">{product.title}</h2>
//         <span className="w-fit rounded-3xl md:text-base text-sm px-2 md:px-3.5 py-2 text-white bg-[#029FAE]">${product.price}.00 USD</span>
//         </div>
//         <div className="mt-6">
//           <p className="text-[#272343]/60 tracking-wide text-sm md:text-lg">{product.description}</p>
//           <button className="w-fit rounded-lg md:mt-5 mt-2 md:px-4 px-2 items-center md:gap-3 gap-1 py-2 md:py-3 text-white bg-[#029FAE] flex">
//             <BsCartDash className="size-5"/> <Link href="/cart">Add To Cart</Link>
//           </button>
//         </div>
//       </div>
//     </div>
//      <SinglePagePromotion />
//       </div>
//     </main>
//   );
// };
// export default ProductDetail


import SinglePagePromotion from "@/components/SinglePagePromotion";
import { client } from "@/sanity/lib/client";
import Link from "next/link";

export interface Product {
  _id: number;
  slug: { current: string };
  title: string;
  price: number;
  priceWithoutDiscount: number;
  badge: string;
  color: string;
  imageUrl: string;
  description: string;
  inventory: number;
  isSale?: boolean;
  isNew?: boolean;
}

const getProduct = async (slug: string): Promise<Product | null> => {
  const products = await client.fetch(`*[_type == "products"]{
    _id,
    "slug":slug.current,
    title,
    price,
    priceWithoutDiscount,
    badge,
    "imageUrl": image.asset->url,
    description,
    inventory,
  }`);

  const foundProduct = products.find((prod: any) => prod.slug === slug);
  return foundProduct || null;
};

const ProductDetail = async ({ params }: { params: { slug: string } }) => {
  const product = await getProduct(params.slug);

  if (!product) {
    return <p>Product not found!</p>;
  }

  return (
    <main>
      <div>
        <div className="flex md:flex-row flex-col mt-5 gap-10 lg:p-10 p-3 sm:mx-10 mx-3 lg:mx-20">
          <div className="md:w-1/2 mx-auto">
            <img
              src={product.imageUrl}
              alt={product.title}
              className="rounded-2xl object-cover w-[260px] h-[260px] hover:drop-shadow-xl sm:w-full sm:h-full"
            />
          </div>
          <div className="md:w-1/2 flex flex-col mx-5 lg:mx-14">
            <div className="lg:pb-10 pb-5 border-b border-[#D9D9D9]">
              <h2 className="lg:text-6xl text-2xl md:text-4xl text-[#272343] font-bold mb-4 md:mb-7">{product.title}</h2>

              {/* Price Display */}
              <div className="flex items-center gap-3">
                <span className="w-fit rounded-3xl md:text-base text-sm px-2 md:px-3.5 py-2 text-white bg-[#029FAE]">
                  ${product.price}.00 USD
                </span>
                {product.priceWithoutDiscount && product.priceWithoutDiscount !== product.price && (
                  <span className="text-sm text-gray-500 line-through">${product.priceWithoutDiscount}.00 USD</span>
                )}
              </div>

              {/* Badge or Sale/Arrival Message */}
              {product.isNew && (
                <span className="mt-2 inline-block text-sm text-green-600 font-medium bg-green-100 rounded-full px-3 py-1">
                  New Arrival
                </span>
              )}
              {product.isSale && (
                <span className="mt-2 inline-block text-sm text-red-600 font-medium bg-red-100 rounded-full px-3 py-1">
                  On Sale!
                </span>
              )}
            </div>

            <div className="mt-6">
              <p className="text-[#272343]/60 tracking-wide text-sm md:text-lg">{product.description}</p>

              {/* Inventory Display */}
              <div className="mt-4">
                <p className="text-sm text-gray-600">Stock: {product.inventory} items available</p>
              </div>

              {/* Add To Cart Button */}
              {/* <button className="w-fit rounded-lg md:mt-5 mt-2 md:px-4 px-2 items-center md:gap-3 gap-1 py-2 md:py-3 text-white bg-[#029FAE] flex">
                <BsCartDash className="size-5" /> <Link href="/cart">Add To Cart</Link>
              </button> */}

          <div className="flex gap-3">
          <CartButton Product={product} Text='Add to Cart'/>
          <Link href={'/carts'}>  <CartButton Product={product} Text='Buy Now'/> </Link>
         </div>
            </div>
          </div>
        </div>
        <SinglePagePromotion />
      </div>
    </main>
  );
};

export default ProductDetail;
