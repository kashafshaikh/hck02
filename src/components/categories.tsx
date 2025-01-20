// import Image from "next/image";
// export default function Categories(){
//     return(
//         <>
//          <div className="w-full max-w-[1321px] h-auto md:h-[508px] bg-white md:mx-auto mt-6">
//          <h1 className="font-semibold text-[#272343] text-[26px] md:text-[32px] py-4 ml-4 md:ml-0">
//           Top Categories
//         </h1>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//             <div className="h-[320px] w-[320px] md:h-[424px] md:w-[424px] mx-auto"><Image src="/category-img/Category (3).png" alt="category01" width={424} height={424}/></div>
//             <div className="h-[320px] w-[320px] md:h-[424px] md:w-[424px] mx-auto"><Image src="/category-img/Category.png" alt="category02" width={424} height={424}/></div>
//             <div className="h-[320px] w-[320px] md:h-[424px] md:w-[424px] mx-auto"><Image src="/category-img/Category (2).png" alt="category02" width={424} height={424}/></div>
//         </div>
//         </div>
//         </>
//     )
// }


"use client"
import Image from "next/image"
import { useEffect, useState } from "react"
import {client} from "../sanity/lib/client"

interface Category {
  title: string
  imageUrl: string
}

export default function Categories() {
  const [categories, setCategories] = useState<Category[]>([])  // State for categories

  useEffect(() => {
    const fetchCategories = async () => {
      const query = `*[_type == "categories"]{
        title,
        "imageUrl": image.asset->url
      }`
      const data: Category[] = await client.fetch(query)  // Fetch data from Sanity
      setCategories(data)  // Store data in state
    }

    fetchCategories()
  }, [])

  return (
    <div className="w-full max-w-[1321px] h-auto md:h-[508px] bg-white md:mx-auto mt-6">
      <h1 className="font-semibold text-[#272343] text-[26px] md:text-[32px] py-4 ml-4 md:ml-0">
        Top Categories
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {categories.length > 0 ? (
          categories.map((category: Category, index: number) => (  // Explicitly defining type
            <div key={index} className="h-[320px] w-[320px] md:h-[424px] md:w-[424px] mx-auto">
              <Image src={category.imageUrl} alt={category.title} width={424} height={424} />
              <h3 className="text-center font-medium text-lg mt-2">{category.title}</h3>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">Loading categories...</p>
        )}
      </div>
    </div>
  )
}

