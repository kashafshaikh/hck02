
"use client";
import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa"; // Magnifying glass icon

interface Product {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
}

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "";

const SearchBar = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `https://${projectId}.api.sanity.io/v2021-10-21/data/query/${dataset}?query=*[_type == "products"]{_id,title,slug}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await response.json();
        setProducts(data.result || []);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value.toLowerCase();
    setSearchTerm(query);

    if (query.length > 0) {
      setShowDropdown(true);
      const filtered = products.filter((product: Product) =>
        product.title.toLowerCase().includes(query)
      );
      setFilteredProducts(filtered);
    } else {
      setShowDropdown(false);
    }
  };

  return (
    <div className="max-w-[1321px] mx-auto">
    <div className="relative w-72 ml-6 md:ml-0">
      <div className="relative">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleSearch}
          onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
          className="border border-gray-300 p-2 w-full rounded-lg pl-10 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
        />
        <FaSearch className="absolute left-3 top-3 text-gray-500" />
      </div>

      {showDropdown && (
        <ul className="absolute w-full bg-white border border-gray-300 mt-1 max-h-40 overflow-auto rounded-lg shadow-lg z-10">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <li
                key={product._id}
                className="p-2 hover:bg-blue-500 hover:text-white cursor-pointer transition duration-200"
              >
                <a href={`/product/${product.slug.current}`}>{product.title}</a>
              </li>
            ))
          ) : (
            <li className="p-2 text-gray-500 text-center">No product found</li>
          )}
        </ul>
      )}
    </div>
    </div>
  );
};

export default SearchBar;
