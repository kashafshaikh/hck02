"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import CartButton from "@/components/addCartButton";
import Link from "next/link";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  originalPrice?: number;
  isNew?: boolean;
  isSale?: boolean;
}

export default function ProductDetail({ params }: { params: { id: string } }) {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        // API se product fetch kar rahe hain based on params.id
        const res = await fetch(`/api/product-item`);
        const products = await res.json();

        // Product ID se match kar ke product find karna
        const foundProduct = products.find((product: Product) => product.id === Number(params.id));
        if (foundProduct) {
          setProduct(foundProduct);
        } else {
          setProduct(null);
        }
      } catch (error) {
        console.error("Error fetching product:", error);
        setProduct(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [params.id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div className="flex items-center justify-center min-h-screen px-4 mx-auto">
    <div className="grid grid-cols-1 md:flex max-w-4xl w-full">
      {/* Image Section */}
      <div className="w-full md:w-1/2 p-4">
        <Image
          src={product.image}
          alt={product.title}
          width={300}
          height={500}
          className="rounded-lg mx-auto"
        />
      </div>

      {/* Product Details Section */}
      <div className="w-full md:w-1/2 p-4">
        <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
        <button className="mt-4 mb-4 bg-[#007580] text-white font-semibold py-2 px-4 rounded">
          ${product.price}
        </button>
        {product.originalPrice && (
          <p className="text-sm text-gray-500 line-through mt-2">
            Original Price: ${product.originalPrice}
          </p>
        )}
        <p className="text-gray-700 mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          fugiat explicabo olore provident cum eveniet distinctio, perspiciatis
          dolore provident cum eveniet error illo esse accusamus voluptatibus
          ducimus impedit laudantium deleniti repellendus.
        </p>
        {/* <button className="mt-4 bg-[#007580] text-white font-semibold py-2 px-4 rounded">
          Add To Cart
        </button> */}

        <div className="flex gap-3">
         <CartButton Product={product} Text='Add to Cart'/>
         <Link href={'/carts'}>  <CartButton Product={product} Text='Buy Now'/> </Link>
        </div>

        {product.isNew && (
          <span className="text-sm text-green-600 font-medium mt-2 block">
            New Arrival
          </span>
        )}
        {product.isSale && (
          <span className="block text-sm text-red-600 font-medium mt-2">
            On Sale!
          </span>
        )}
      </div>
    </div>
  </div>
);
}

