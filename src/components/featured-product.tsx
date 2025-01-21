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
