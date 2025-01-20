// import Image from "next/image";

// export default function HotProduct() {
//   return (
//     <>
//     <header className="max-w-[1321px] container mx-auto px-4 md:px-0 py-12 lg:py-16">
//       <div className="relative grid grid-cols-1 gap-8 md:grid-cols-[auto_1fr]">
//      {/* vertical text */}
//         <div
//           className="hidden text-3xl font-medium tracking-widest text-zinc-900 md:block pt-6"
//           style={{
//             writingMode: "vertical-lr",
//             textOrientation: "sideways",
//             transform: "rotate(180deg)",
//           }}
//         >
//           EXPLORE NEW AND POPULAR STYLES
//         </div>

//         {/* Mobile text version */}
//         <div className="text-xl font-medium tracking-wider text-zinc-900 md:hidden">
//           EXPLORE NEW AND POPULAR STYLES
//         </div>

//         {/* Images section */}
//         <div className="flex flex-col md:flex-row items-center gap-8">
//           {/* Orange chair (left side) */}
//           <div className="w-full md:w-[48%]">
//             <Image
//               src="/hotProducts-img/item-category 1.png"
//               alt="Orange modern chair"
//               className="h-full w-full object-cover"
//               width={500}
//               height={500}
//               priority
//             />
//           </div>

//           {/* Other chairs (right side) */}
//           <div className="grid grid-cols-2 gap-4 w-full md:w-[60%] lg:w-[48%]">
//             <div className="aspect-square">
//               <Image
//                 src="/hotProducts-img/card.png"
//                 alt="White tufted chair"
//                 className="h-full w-full object-cover"
//                 width={500}
//                 height={500}
//               />
//             </div>
//             <div className="aspect-square">
//               <Image
//                 src="/hotProducts-img/card.png"
//                 alt="Gray upholstered chair"
//                 className="h-full w-full object-cover"
//                 width={500}
//                 height={500}
//               />
//             </div>
//             <div className="aspect-square">
//               <Image
//                 src="/hotProducts-img/card (1).png"
//                 alt="Vintage white chair"
//                 className="h-full w-full object-cover"
//                 width={500}
//                 height={500}
//               />
//             </div>
//             <div className="aspect-square">
//               <Image
//                 src="/hotProducts-img/card (2).png"
//                 alt="Vintage white chair duplicate"
//                 className="h-full w-full object-cover"
//                 width={500}
//                 height={500}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//     </>
//   );
// }



// import { client } from '@/sanity/lib/client'
// import React from 'react'
// import Image from 'next/image'

// const HotProducts = async () => {
//   const gallery = await client.fetch(`*[_type == "products" && "gallery" in tags] {
//     title,
//     "imageUrl": image.asset->url
//   }`)
//   const seat = await client.fetch(`*[_type == "products" && title == "Citrus Edge"] {
//     title,
//     "imageUrl": image.asset->url
//   }`)

//   return (
//     <header className="max-w-[1321px] container mx-auto px-4 md:px-0 py-12 lg:py-16">
//       <div className="relative grid grid-cols-1 gap-8 md:grid-cols-[auto_1fr]">
//         {/* vertical text */}
//         <div
//           className="hidden text-3xl font-medium tracking-widest text-zinc-900 md:block pt-6"
//           style={{
//             writingMode: "vertical-lr",
//             textOrientation: "sideways",
//             transform: "rotate(180deg)",
//           }}
//         >
//           EXPLORE NEW AND POPULAR STYLES
//         </div>

//         {/* Mobile text version */}
//         <div className="text-xl font-medium tracking-wider text-zinc-900 md:hidden">
//           EXPLORE NEW AND POPULAR STYLES
//         </div>

//         {/* Images section */}
//         <div className="flex flex-col md:flex-row items-center gap-8">
//           {/* Citrus Edge (left side) */}
//           <div className="w-full md:w-[48%]">
//             <Image
//               src={seat[0]?.imageUrl || '/placeholder.png'}
//               alt={seat[0]?.title || 'Placeholder'}
//               className="h-full w-full object-cover"
//               width={500}
//               height={500}
//               priority
//             />
//           </div>

//           {/* Other products (right side) */}
//           <div className="grid grid-cols-2 gap-4 w-full md:w-[60%] lg:w-[48%]">
//             {gallery.map((prod: any, index: number) => (
//               <div className="aspect-square" key={index}>
//                 <Image
//                   src={prod.imageUrl || '/placeholder.png'}
//                   alt={prod.title || 'Placeholder'}
//                   className="h-full w-full object-cover"
//                   width={500}
//                   height={500}
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </header>
//   )
// }

// export default HotProducts



"use client";

import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import Image from "next/image";

const HotProducts = () => {
  const [gallery, setGallery] = useState<any[]>([]);
  const [seat, setSeat] = useState<any[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const galleryData = await client.fetch(`*[_type == "products" && "gallery" in tags] 
  | order(_createdAt desc) [0...4] {
    title,
    "imageUrl": image.asset->url,
  }`);
      const seatData = await client.fetch(`*[_type == "products" && title == "Citrus Edge"] {
        title,
        "imageUrl": image.asset->url
      }`);

      setGallery(galleryData);
      setSeat(seatData);
    };

    fetchProducts();
  }, []);

  return (
    <header className="max-w-[1321px] container mx-auto px-4 md:px-0 py-12 lg:py-16">
      <div className="relative grid grid-cols-1 gap-8 md:grid-cols-[auto_1fr]">
        {/* vertical text */}
        <div
          className="hidden text-3xl font-medium tracking-widest text-zinc-900 md:block pt-6"
          style={{
            writingMode: "vertical-lr",
            textOrientation: "sideways",
            transform: "rotate(180deg)",
          }}
        >
          EXPLORE NEW AND POPULAR STYLES
        </div>

        {/* Mobile text version */}
        <div className="text-xl font-medium tracking-wider text-zinc-900 md:hidden">
          EXPLORE NEW AND POPULAR STYLES
        </div>

        {/* Images section */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Citrus Edge (left side) */}
          <div className="w-full md:w-[48%]">
            <Image
              src={seat[0]?.imageUrl || "/placeholder.png"}
              alt={seat[0]?.title || "Placeholder"}
              className="h-full w-full object-cover"
              width={500}
              height={500}
              priority
            />
          </div>

          {/* Other products (right side) */}
          <div className="grid grid-cols-2 gap-4 w-full md:w-[60%] lg:w-[48%]">
            {gallery.map((prod: any, index: number) => (
              <div className="aspect-square" key={index}>
                <Image
                  src={prod.imageUrl || "/placeholder.png"}
                  alt={prod.title || "Placeholder"}
                  className="h-full w-full object-cover"
                  width={500}
                  height={500}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default HotProducts;
