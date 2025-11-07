import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";
import { ArrowLeft, ShoppingCart, Check } from "lucide-react";

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <Link
          href="/shop"
          className="inline-flex items-center gap-2 text-[#00a859] hover:underline mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Shop
        </Link>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            {/* Images */}
            <div>
              <div className="relative h-96 w-full rounded-lg overflow-hidden mb-4">
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              {product.images.length > 1 && (
                <div className="grid grid-cols-4 gap-2">
                  {product.images.slice(1).map((image, index) => (
                    <div key={index} className="relative h-20 rounded overflow-hidden">
                      <Image src={image} alt={`${product.name} ${index + 2}`} fill className="object-cover" />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Details */}
            <div>
              {product.badge && (
                <span
                  className={`inline-block px-3 py-1 rounded-full text-sm font-bold text-white mb-4 ${
                    product.badge === "NEW"
                      ? "bg-[#00a859]"
                      : product.badge === "SALE"
                        ? "bg-red-600"
                        : "bg-[#0a2540]"
                  }`}
                >
                  {product.badge}
                </span>
              )}
              <p className="text-sm text-gray-500 uppercase mb-2">{product.brand}</p>
              <h1 className="text-3xl md:text-4xl font-bold text-[#0a2540] mb-4">
                {product.name}
              </h1>

              <div className="flex items-center gap-4 mb-6">
                {product.salePrice ? (
                  <>
                    <span className="text-3xl font-bold text-[#00a859]">
                      ₹{product.salePrice.toLocaleString()}
                    </span>
                    <span className="text-xl text-gray-400 line-through">
                      ₹{product.price.toLocaleString()}
                    </span>
                    <span className="text-sm font-semibold text-red-600">
                      Save {Math.round(((product.price - product.salePrice) / product.price) * 100)}%
                    </span>
                  </>
                ) : (
                  <span className="text-3xl font-bold text-[#0a2540]">
                    ₹{product.price.toLocaleString()}
                  </span>
                )}
              </div>

              <div className="mb-6">
                <p className="text-gray-700 mb-4">{product.description}</p>
                <div className="flex items-center gap-2 text-green-600 mb-4">
                  <Check className="w-5 h-5" />
                  <span className="font-semibold">{product.availability}</span>
                </div>
              </div>

              {product.specs.length > 0 && (
                <div className="mb-6">
                  <h2 className="text-xl font-bold text-[#0a2540] mb-3">Specifications</h2>
                  <ul className="space-y-2">
                    {product.specs.map((spec, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-[#00a859] mt-1">•</span>
                        <span className="text-gray-700">{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="flex gap-4">
                <button className="flex-1 bg-[#0a2540] text-white py-3 rounded-lg font-semibold hover:bg-[#00a859] transition flex items-center justify-center gap-2">
                  <ShoppingCart className="w-5 h-5" />
                  Add to Cart
                </button>
                <button className="px-6 py-3 border-2 border-[#0a2540] text-[#0a2540] rounded-lg font-semibold hover:bg-[#0a2540] hover:text-white transition">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

