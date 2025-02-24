import Categories from "@/components/categories";
import Featuredproduct from "@/components/featured-product";
import HotProducts from "@/components/hotProducts";
import OurProduct from "@/components/ourProducts";
import Section01 from "@/components/section01";
import { Suspense } from "react";

// export default function Home() {
//   return (
//     <>
//     <Section01/>
//     <Featuredproduct/>
//     <Categories/>
//     <HotProducts/>
//     <OurProduct/>
//     </>
//   )}


export default function Home() {
  return (
    <>
      <Suspense>
        <Section01 />
      </Suspense>
      <Suspense>
        <Featuredproduct />
      </Suspense>
      <Suspense>
        <Categories />
      </Suspense>
      <Suspense>
        <HotProducts />
      </Suspense>
      <Suspense>
        <OurProduct />
      </Suspense>
    </>
  );
}
