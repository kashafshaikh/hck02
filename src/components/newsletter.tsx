
// import Image from "next/image";

// export default function Newsletter(){
//   return (
//     <div className="w-full h-auto bg-[#F0F2F3]">
//       {/* Newsletter Section */}
//       <div className="max-w-3xl mx-auto py-16 px-4 text-center space-y-6">
//         <h2 className="font-bold text-[32px] sm:text-[50px] mt-4">
//           Or Subscribe to the Newsletter
//         </h2>
//         <div className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-16">
//           {/* Email Input Section */}
//           <div className="flex flex-col items-start mt-12 sm:mt-0">
//             <span className="text-[#8F9499] text-[14px] sm:text-[16px] font-semibold mb-2 ml-3">
//               Email address...
//             </span>
//             <div className="w-[300px] sm:w-[643px] h-[2px] bg-black"></div>
//           </div>
//           {/* Submit Button Section */}
//           <div className="flex flex-col items-center mt-4 sm:mt-0">
//             <span className="text-[14px] sm:text-[16px] font-normal mb-2">
//               SUBMIT
//             </span>
//             <div className="w-[91px] h-[2px] bg-black"></div>
//           </div>
//         </div>
//       </div>

//       {/* Instagram Section */}
//       <div className="max-w-7xl mx-auto px-4 py-6 space-y-8">
//         <h2 className="text-[32px] sm:text-[50px] font-bold text-center">
//           Follow Products and Discounts on Instagram
//         </h2>
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 pb-24">
//           <div className="aspect-square relative overflow-hidden rounded-lg">
//             <Image
//               src="/(1).png"
//               alt="Instagram product 1"
//               layout="fill"
//               objectFit="cover"
//             />
//           </div>
//           <div className="aspect-square relative overflow-hidden rounded-lg">
//             <Image
//               src="/(3).png"
//               alt="Instagram product 2"
//               layout="fill"
//               objectFit="cover"
//             />
//           </div>
//           <div className="aspect-square relative overflow-hidden rounded-lg">
//             <Image
//               src="/(4).png"
//               alt="Instagram product 3"
//               layout="fill"
//               objectFit="cover"
//             />
//           </div>
//           <div className="aspect-square relative overflow-hidden rounded-lg">
//             <Image
//               src="/(5).png"
//               alt="Instagram product 4"
//               layout="fill"
//               objectFit="cover"
//             />
//           </div>
//           <div className="aspect-square relative overflow-hidden rounded-lg">
//             <Image
//               src="/(7).png"
//               alt="Instagram product 5"
//               layout="fill"
//               objectFit="cover"
//             />
//           </div>
//           <div className="aspect-square relative overflow-hidden rounded-lg">
//             <Image
//               src="/(6).png"
//               alt="Instagram product 6"
//               layout="fill"
//               objectFit="cover"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };


import { client } from "@/sanity/lib/client"

const Newsletter = async () => {

 const images = await client.fetch(`*[_type == "products" && "instagram" in tags]{
    "imageUrl": image.asset->url,
    title
    }
`)

  return (
    <div className="lg:px-20 sm:mx-10 mx-3 lg:py-20 py-10 bg-[#F0F2F3]">
        <div className="subscribe">
            <h2 className="text-center lg:text-4xl md:text-3xl text-2xl text-black font-semibold">Or Subscribe to the Newsletter</h2>
            <div className="flex justify-center flex-col sm:flex-row mx-8 sm:mx-0 my-10 lg:mt-14 mt-5 gap-7">
            <input type="text" placeholder="Email Address...." className="font-semibold  outline-none bg-inherit md:border-b-2 border-b border-black text-[#1E283280] lg:w-[620px] mx-0 sm:mx-auto p-1 lg:p-3" />
            <button className="md:border-b-2 border-b border-[#1E2832] text-[#1E2832] px-2 w-fit mx-auto md:text-base text-sm uppercase">Submit</button>
            </div>
        </div>
        <div className="products">
         <h2 className="text-center w-[300px]  md:w-auto mx-auto lg:text-4xl md:text-3xl text-2xl text-black font-semibold">Follow Products and Discounts On Instagram</h2>
        <div className="flex flex-wrap md:flex-nowrap justify-center mt-14 gap-6">
        {images.map((image : any)=>{
            return(
              <div key={image.title} className="sm:w-[200px] w-[120px] h-[120px] sm:h-[200px]">
                <img src={image.imageUrl} alt="products" />
              </div>
            )
         })}
        </div>
        </div>
    </div>
  )
}

export default Newsletter