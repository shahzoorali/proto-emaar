import Link from "next/link";
import Image from "next/image";
import { Product } from "@/data/products";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300">
      <Link href={`/shop/${product.id}`}>
        <div className="relative h-64 w-full overflow-hidden bg-gray-100">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
          />
          {product.badge && (
            <div
              className={`absolute top-2 right-2 px-3 py-1 rounded-full text-xs font-bold text-white ${
                product.badge === "NEW"
                  ? "bg-[#00a859]"
                  : product.badge === "SALE"
                    ? "bg-red-600"
                    : "bg-[#0a2540]"
              }`}
            >
              {product.badge}
            </div>
          )}
        </div>
        <div className="p-4">
          <p className="text-xs text-gray-500 uppercase">{product.brand}</p>
          <h3 className="text-lg font-bold text-[#0a2540] mt-1 group-hover:text-[#00a859] transition line-clamp-2">
            {product.name}
          </h3>
          <div className="flex items-center gap-2 mt-2">
            {product.salePrice ? (
              <>
                <span className="text-xl font-bold text-[#00a859]">
                  ₹{product.salePrice.toLocaleString()}
                </span>
                <span className="text-sm text-gray-400 line-through">
                  ₹{product.price.toLocaleString()}
                </span>
              </>
            ) : (
              <span className="text-xl font-bold text-[#0a2540]">
                ₹{product.price.toLocaleString()}
              </span>
            )}
          </div>
          <p className="text-xs text-gray-500 mt-2 line-clamp-2">{product.description}</p>
        </div>
      </Link>
      <div className="px-4 pb-4">
        <button className="w-full bg-[#0a2540] text-white py-2 rounded-lg hover:bg-[#00a859] transition flex items-center justify-center gap-2">
          <ShoppingCart className="w-4 h-4" />
          Add to Cart
        </button>
      </div>
    </div>
  );
}

