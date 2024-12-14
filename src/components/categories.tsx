import Image from "next/image";
export default function Categories(){
    return(
        <>
         <div className="w-full max-w-[1321px] h-auto md:h-[508px] bg-white md:mx-auto mt-6">
         <h1 className="font-semibold text-[#272343] text-[26px] md:text-[32px] py-4 ml-4 md:ml-0">
          Top Categories
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="h-[320px] w-[320px] md:h-[424px] md:w-[424px] mx-auto"><Image src="/category-img/Category (3).png" alt="category01" width={424} height={424}/></div>
            <div className="h-[320px] w-[320px] md:h-[424px] md:w-[424px] mx-auto"><Image src="/category-img/Category.png" alt="category02" width={424} height={424}/></div>
            <div className="h-[320px] w-[320px] md:h-[424px] md:w-[424px] mx-auto"><Image src="/category-img/Category (2).png" alt="category02" width={424} height={424}/></div>
        </div>
        </div>
        </>
    )
}