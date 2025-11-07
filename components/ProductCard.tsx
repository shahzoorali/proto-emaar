import Link from "next/link";
import Image from "next/image";
import { Product } from "@/data/products";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group card-elevated overflow-hidden transition-all duration-300 hover:-translate-y-1">
      <Link href={`/shop/${product.id}`}>
        <div className="relative h-64 w-full overflow-hidden bg-tour-cloud">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
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
          <p className="uppercase tracking-[0.24em] text-xs text-tour-muted">{product.brand}</p>
          <h3 className="font-heading text-base tracking-[0.16em] text-tour-navy-900 mt-2 group-hover:text-tour-green transition line-clamp-2">
            {product.name}
          </h3>
          <div className="flex items-center gap-2 mt-3">
            {product.salePrice ? (
              <>
                <span className="text-xl font-semibold text-tour-green">
                  ₹{product.salePrice.toLocaleString()}
                </span>
                <span className="text-sm text-tour-muted line-through">
                  ₹{product.price.toLocaleString()}
                </span>
              </>
            ) : (
              <span className="text-xl font-semibold text-tour-navy-900">
                ₹{product.price.toLocaleString()}
              </span>
            )}
          </div>
          <p className="text-xs text-tour-muted mt-3 line-clamp-3">{product.description}</p>
        </div>
      </Link>
      <div className="px-4 pb-5">
        <button className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-tour-navy-900 px-6 py-2 font-heading tracking-[0.18em] text-xs uppercase text-white hover:bg-tour-green transition">
          <ShoppingCart className="w-4 h-4" />
          Add to Cart
        </button>
      </div>
    </div>
  );
}

