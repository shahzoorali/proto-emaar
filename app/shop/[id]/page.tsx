import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ShoppingCart, Check, ShieldCheck, Truck, Gift } from "lucide-react";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  const complementary = products
    .filter((item) => item.id !== id && item.category === product.category)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-br from-tour-surface via-white to-tour-cloud py-14">
      <div className="max-w-7xl mx-auto px-6 space-y-10">
        <Link
          href="/shop"
          className="inline-flex items-center gap-2 font-heading tracking-[0.2em] text-xs uppercase text-tour-muted hover:text-tour-navy-900 transition"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Shop
        </Link>

        <section className="card-elevated overflow-hidden border border-tour-cloud/70 bg-white">
          <div className="grid gap-10 p-8 lg:grid-cols-[1.3fr_1fr]">
            {/* Gallery */}
            <div className="space-y-4">
              <div className="grid gap-4 lg:grid-cols-[2fr_1fr]">
                <div className="relative h-[26rem] rounded-3xl overflow-hidden shadow-lg">
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    className="object-cover"
                    priority
                  />
                  {product.badge && (
                    <span className="absolute top-4 left-4 rounded-full bg-tour-navy-900 px-4 py-1 font-heading text-[0.6rem] uppercase tracking-[0.3em] text-white">
                      {product.badge}
                    </span>
                  )}
                </div>
                <div className="grid gap-3">
                  {product.images.slice(1, 4).map((image, index) => (
                    <div key={index} className="relative h-40 rounded-3xl overflow-hidden border border-tour-cloud/80">
                      <Image src={image} alt={`${product.name} alternate ${index + 1}`} fill className="object-cover" />
                    </div>
                  ))}
                </div>
              </div>

              {product.images.length > 4 && (
                <div className="grid grid-cols-4 gap-3">
                  {product.images.slice(4).map((image, index) => (
                    <div key={index} className="relative h-28 rounded-2xl overflow-hidden border border-tour-cloud/60">
                      <Image src={image} alt={`${product.name} gallery ${index + 4}`} fill className="object-cover" />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Details */}
            <div className="space-y-6">
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.24em] text-tour-muted">{product.brand}</p>
                <h1 className="font-heading text-4xl tracking-[0.12em] text-tour-navy-900 leading-tight">
                  {product.name}
                </h1>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                {product.salePrice ? (
                  <>
                    <span className="text-4xl font-heading tracking-[0.12em] text-tour-green">
                      ₹{product.salePrice.toLocaleString()}
                    </span>
                    <span className="text-xl text-tour-muted line-through">
                      ₹{product.price.toLocaleString()}
                    </span>
                    <span className="rounded-full bg-tour-green/10 px-3 py-1 text-xs font-semibold text-tour-green">
                      Save {Math.round(((product.price - product.salePrice) / product.price) * 100)}%
                    </span>
                  </>
                ) : (
                  <span className="text-4xl font-heading tracking-[0.12em] text-tour-navy-900">
                    ₹{product.price.toLocaleString()}
                  </span>
                )}
              </div>

              <div className="space-y-4 text-sm text-tour-muted/90">
                <p>{product.description}</p>
                <div className="flex items-center gap-2 text-tour-green">
                  <Check className="h-4 w-4" />
                  <span className="font-semibold uppercase tracking-[0.2em] text-xs">
                    {product.availability}
                  </span>
                </div>
              </div>

              {product.specs.length > 0 && (
                <div className="space-y-3 rounded-3xl bg-tour-cloud px-6 py-5 border border-tour-cloud/70">
                  <h2 className="font-heading text-sm uppercase tracking-[0.2em] text-tour-muted">
                    Tour Specifications
                  </h2>
                  <ul className="grid grid-cols-1 gap-2 text-sm text-tour-muted/90">
                    {product.specs.map((spec, index) => (
                      <li key={index} className="flex gap-2">
                        <span className="text-tour-green">▹</span>
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="space-y-3 rounded-3xl border border-tour-cloud/70 px-6 py-5">
                <h3 className="font-heading text-sm uppercase tracking-[0.2em] text-tour-muted">
                  Player Services
                </h3>
                <div className="grid gap-3 text-sm text-tour-muted/90">
                  <p className="flex items-center gap-2">
                    <Truck className="h-4 w-4 text-tour-green" /> Complimentary same-day delivery within Hyderabad
                  </p>
                  <p className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-tour-green" />
                    Authentic manufacturer warranty & on-site fitting support
                  </p>
                  <p className="flex items-center gap-2">
                    <Gift className="h-4 w-4 text-tour-green" />
                    Player hospitality lounge pickup with concierge assistance
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <button className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-tour-navy-900 px-6 py-3 font-heading tracking-[0.24em] text-xs uppercase text-white hover:bg-tour-green transition">
                  <ShoppingCart className="h-5 w-5" />
                  Add to Cart
                </button>
                <button className="inline-flex items-center justify-center rounded-full border border-tour-navy-900 px-6 py-3 font-heading tracking-[0.2em] text-xs uppercase text-tour-navy-900 hover:bg-tour-navy-900 hover:text-white transition">
                  Reserve for Pickup
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Complementary */}
        {complementary.length > 0 && (
          <section className="card-elevated bg-white border border-tour-cloud/70 px-8 py-10 space-y-6">
            <header className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-tour-muted">
                  Pair With
                </p>
                <h2 className="font-heading text-3xl tracking-[0.1em] text-tour-navy-900">
                  Recommended Companions
                </h2>
              </div>
              <Link
                href="/shop"
                className="inline-flex items-center rounded-full border border-tour-navy-900 px-6 py-3 font-heading tracking-[0.2em] text-xs uppercase text-tour-navy-900 hover:bg-tour-navy-900 hover:text-white transition"
              >
                Explore Full Collection
              </Link>
            </header>
            <div className="grid gap-6 md:grid-cols-3">
              {complementary.map((item) => (
                <ProductCard key={item.id} product={item} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

