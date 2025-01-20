// "use client"
// import { useEffect, useState } from "react"
// import Image from "next/image"
// import { client } from "../sanity/lib/client"

// interface Product {
//   title: string
//   imageUrl: string
//   price: number
//   description: string
//   inventory: number
// }


// export default function CategoryProducts({ selectedCategory }: { selectedCategory: string }) {
//   const [products, setProducts] = useState<Product[]>([])

//   useEffect(() => {
//     const categoryMap: Record<string, string> = {
//       category1: "26fd7176-3c4d-40fc-a73a-3b85a9b5e15f",
//       category2: "407a8583-6203-4f61-becf-8e8b4c5461b6",
//       category3: "b5710116-09af-4d0e-aa9a-dcd02fe919a9"
//     }

//     const fetchProducts = async () => {
//       const categoryRef = categoryMap[selectedCategory]
//       const query = `*[_type == "products" && category._ref == "${categoryRef}"]{
//         title,
//         "imageUrl": image.asset->url,
//         price,
//         description,
//         inventory
//       }`
//       const data = await client.fetch(query)
//       setProducts(data)
//     }

//     fetchProducts()
//   }, [selectedCategory])

//   return (
//     <div className="mt-6">
//       <h2 className="text-center text-[24px] font-semibold">Products in {selectedCategory}</h2>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
//         {products.map((product, index) => (
//           <div key={index} className="border p-4 rounded-lg shadow-md">
//             <Image src={product.imageUrl} alt={product.title} width={300} height={300} className="mx-auto" />
//             <h2 className="text-center font-medium text-lg mt-2">{product.title}</h2>
//             <p className="text-center text-gray-700">${product.price}</p>
//             <p className="text-sm text-gray-500 mt-1">{product.description}</p>
//             <p className="text-sm text-gray-600">Inventory: {product.inventory}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }
