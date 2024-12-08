import Categories from "@/components/categories";
import Featuredproduct from "@/components/featured-product";
import HotProducts from "@/components/hotProducts";
// import Ourproduct from "@/components/ourProducts";
import Section01 from "@/components/section01";


export default function Home() {
  return (
    <>
    <Section01/>
    <Featuredproduct/>
    <Categories/>
    <HotProducts/>
    {/* <Ourproduct/> */}
    </>
  )}