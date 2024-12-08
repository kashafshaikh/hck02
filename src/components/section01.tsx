import Image from "next/image";

export default function Section01() {
  return (
    <>
      {/* Main Section */}
      <div className="w-full max-w-[1321px] h-auto lg:h-[680px] bg-[#F0F2F3] mx-auto grid grid-cols-1 md:grid-cols-2 rounded-bl-3xl">
        {/* Left Content */}
        <div className="px-6 md:pl-28 md:my-auto py-8 text-[#272343] font-sans font-semibold">
          <h3 className="mx-8 md:mx-0">WELCOME TO CHAIRY</h3>
          <h1 className="font-bold text-3xl md:text-[50px] my-4 leading-tight mx-8 md:mx-0">
            Best Furniture Collection For Your Interior
          </h1>
          <button className="w-full max-w-[171px] h-[52px] bg-[#029FAE] text-white rounded-lg mt-4 mx-8 md:mx-0">
            Shop Now
          </button>
        </div>

        {/* Right Image */}
        <div className="mx-auto my-auto w-full max-w-[434px] h-auto">
          <Image
            src="/Product Image.png"
            alt="chair"
            height={584}
            width={434}
          />
        </div>
      </div>

      {/* Logos Section */}
      <div className="grid grid-cols-3 h-auto md:grid-cols-7 max-w-[1321px] w-full md:h-[139px] bg-white mx-auto items-center">
        <div>
          <Image
            src="/section01-img/Logo (1).png"
            alt="zapier-logo"
            width={85}
            height={87}
            className="w-auto max-h-[87px]"
          />
        </div>
        <div>
          <Image
            src="/section01-img/Logo (2).png"
            alt="pipedrive-logo"
            width={107}
            height={109}
            className="w-auto max-h-[109px]"
          />
        </div>
        <div>
          <Image
            src="/section01-img/Logo (3).png"
            alt="cib-bank-logo"
            width={135}
            height={139}
            className="w-auto max-h-[139px]"
          />
        </div>
        <div>
          <Image
            src="/section01-img/Logo (4).png"
            alt="logo"
            width={63}
            height={65}
            className="w-auto max-h-[65px]"
          />
        </div>
        <div>
          <Image
            src="/section01-img/Logo (5).png"
            alt="logo"
            width={98}
            height={101}
            className="w-auto max-h-[101px]"
          />
        </div>
        <div>
          <Image
            src="/section01-img/Logo (6).png"
            alt="pandadoc-logo"
            width={113}
            height={115}
            className="w-auto max-h-[115px]"
          />
        </div>
        <div>
          <Image
            src="/section01-img/Logo (7).png"
            alt="logo"
            width={84}
            height={87}
            className="w-auto max-h-[87px]"
          />
        </div>
      </div>
    </>
  );
}
