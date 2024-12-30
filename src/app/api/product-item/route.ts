import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json([
    { id: 1, title: "Library Stool Chair", price: 20, image: "/(1).png" },
    {
      id: 2,
      title: "Vintage Armchair",
      price: 40,
      image: "/(2).png",
      originalPrice: 60,
    },
    { id: 3, title: "Ergonomic Office Chair", price: 50, image: "/(3).png" },
    { id: 4, title: "Modern Dining Chair", price: 35, image: "/(4).png" },
    {
      id: 5,
      title: "Reclining Lounge Chair",
      price: 60,
      image: "/(5).png",
      isSale: true,
    },
    {
      id: 6,
      title: "Adjustable Desk Chair",
      price: 25,
      image: "/(6).png",
      isNew: true,
    },
    { id: 7, title: "Classic Bar Stool", price: 30, image: "/(7).png" },
    {
      id: 8,
      title: "Sleek High Chair",
      price: 15,
      image: "/about(1).jpg",
      isSale: true,
    },
    { id: 9, title: "Foldable Outdoor Chair", price: 10, image: "/(6).png" },
    {
      id: 10,
      title: "Leather Recliner Chair",
      price: 150,
      image: "/about(2).jpg",
      isSale: true,
      originalPrice: 200,
    },
  ]);
}
