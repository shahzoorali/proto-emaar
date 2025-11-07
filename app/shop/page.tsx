"use client";

import { useState } from "react";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

const categories = [
  "All",
  "Clubs",
  "Golf Balls",
  "Shoes",
  "Men's",
  "Women's",
  "Tech",
  "Gear",
];

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch =
      searchTerm === "" ||
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-tour-surface via-white to-tour-cloud py-14">
      <div className="max-w-7xl mx-auto px-6 space-y-10">
        {/* Hero */}
        <section className="relative overflow-hidden rounded-3xl border border-tour-gold/30 bg-gradient-to-br from-[#f4d688] via-[#d9a441] to-[#b27f2b] text-tour-navy-900 shadow-[0_30px_60px_rgba(178,127,43,0.28)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.35),_transparent_55%)]" />
          <div className="relative flex flex-col lg:flex-row gap-12 p-10">
            <div className="space-y-5 lg:w-1/2">
              <span className="headline-pill bg-tour-navy-900/80 text-white border border-white/20">
                Tournament Shop
              </span>
              <h1 className="font-heading text-4xl md:text-5xl tracking-[0.14em] leading-tight">
                Championship Gear & Apparel
              </h1>
              <p className="text-base leading-relaxed text-tour-navy-900/85">
                Discover exclusive Hyderabad Open merchandise, pro-level equipment, and curated apparel
                selected for tour professionals. Reserve online and pick up at the Emaar Boulder Hills
                Tournament Village.
              </p>
              <div className="rounded-2xl border border-white/50 bg-white/70 px-6 py-4 backdrop-blur-sm text-sm text-tour-navy-900/85">
                <p>
                  <strong>Pro Shop Hours:</strong> Feb 10 - Feb 14 • 07:00 AM – 08:00 PM
                </p>
                <p className="mt-1">Player Concierge • Level 1, Championship Pavilion</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#featured"
                  className="inline-flex items-center rounded-full bg-tour-navy-900 px-6 py-3 font-heading tracking-[0.2em] text-xs uppercase text-white hover:bg-tour-green transition"
                >
                  Shop Featured
                </a>
                <button className="inline-flex items-center rounded-full border border-tour-navy-900 px-6 py-3 font-heading tracking-[0.2em] text-xs uppercase text-tour-navy-900 hover:bg-tour-navy-900 hover:text-white transition">
                  Book Fitting
                </button>
              </div>
            </div>
            <div className="relative lg:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=900&h=600&fit=crop"
                alt="Golf equipment display"
                className="h-full w-full rounded-2xl object-cover shadow-2xl"
              />
              <div className="absolute bottom-6 left-6 rounded-2xl bg-white/85 px-5 py-4 shadow-lg">
                <p className="font-heading text-sm tracking-[0.18em] uppercase text-tour-muted">New Arrival</p>
                <p className="text-lg font-semibold text-tour-navy-900">2025 TaylorMade Tour Staff Bag</p>
                <p className="text-sm text-tour-muted/80">Limited edition Hyderabad Open design.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="card-elevated bg-white border border-tour-cloud/70 px-8 py-8 space-y-6">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end">
            <div className="flex-1">
              <label className="block text-sm font-semibold text-tour-navy-900 mb-2">
                Search Products
              </label>
              <input
                type="text"
                placeholder="Search by name, brand, or description..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-2xl border border-tour-cloud px-4 py-3 text-tour-navy-900 shadow-sm focus:border-tour-navy-900 focus:ring-2 focus:ring-tour-green/40 transition"
              />
            </div>
            <div className="lg:w-56">
              <label className="block text-sm font-semibold text-tour-navy-900 mb-2">
                Category
              </label>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => {
                  const isActive = selectedCategory === category;
                  return (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-full text-xs font-heading tracking-[0.18em] uppercase transition ${
                        isActive
                          ? "bg-tour-navy-900 text-white shadow-lg"
                          : "bg-tour-cloud text-tour-muted hover:bg-tour-navy-900 hover:text-white"
                      }`}
                    >
                      {category}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Collections */}
        <section id="featured" className="card-elevated bg-white border border-tour-cloud/70 px-8 py-10 space-y-6">
          <header className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-tour-muted">Featured Collections</p>
              <h2 className="font-heading text-3xl tracking-[0.1em] text-tour-navy-900">
                Tour-Ready Essentials
              </h2>
            </div>
            <a
              href="#grid"
              className="inline-flex items-center rounded-full border border-tour-navy-900 px-6 py-3 font-heading tracking-[0.2em] text-xs uppercase text-tour-navy-900 hover:bg-tour-navy-900 hover:text-white transition"
            >
              View All
            </a>
          </header>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {filteredProducts.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* Product Grid */}
        <section id="grid" className="space-y-6">
          <header className="flex items-baseline justify-between">
            <h3 className="font-heading text-2xl tracking-[0.1em] text-tour-navy-900">
              All Products
            </h3>
            <p className="text-sm text-tour-muted/80">{filteredProducts.length} items</p>
          </header>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="card-elevated bg-white border border-tour-cloud/70 px-8 py-12 text-center">
              <p className="text-tour-muted/90">
                No products found matching your search and filter criteria. Try removing some filters
                or check back soon for new arrivals.
              </p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

