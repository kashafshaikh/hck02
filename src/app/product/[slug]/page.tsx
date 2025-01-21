"use client";

import CartButton from "@/components/addCartButton";
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
