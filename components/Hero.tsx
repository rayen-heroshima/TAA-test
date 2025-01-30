//import { div } from "framer-motion/client";
"use client";
import { ArrowRight } from "lucide-react";
import { esgData } from "@/lib/data";
import { useState } from "react";
import { HoverEffect } from "./ui/card-hover-effect";
import Breadcrumbs from "./Breadcrumbs";
import { BreadcrumbItem, ESGCategory } from "@/lib/types";
export default function Hero() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeSubCategory, setActiveSubCategory] = useState<string | null>(
    null
  );
  const [activeNestedCategory, setActiveNestedCategory] = useState<
    string | null
  >(null);
  const [breadcrumbs, setBreadcrumbs] = useState<BreadcrumbItem[]>([]);
  const handleCardClick = (category: ESGCategory) => {
    if (activeCategory === category.id) {
      setActiveCategory(null);
      setActiveSubCategory(null);
      setActiveNestedCategory(null);
      setBreadcrumbs([]);
    } else {
      setActiveCategory(category.id);
      setActiveSubCategory(null);
      setActiveNestedCategory(null);
      setBreadcrumbs([
        {
          id: category.id,
          title: category.title,
          path: `/${category.id}`,
        },
      ]);
    }
  };
  const handleNavigate = (path: string) => {
    if (path === "/") {
      setActiveCategory(null);
      setActiveSubCategory(null);
      setActiveNestedCategory(null);
      setBreadcrumbs([]);
      return;
    }

    const segments = path.split("/").filter(Boolean);
    const newBreadcrumbs: BreadcrumbItem[] = [];
    let currentPath = "";

    // Reset states based on the clicked breadcrumb level
    if (segments.length === 1) {
      setActiveSubCategory(null);
      setActiveNestedCategory(null);
    } else if (segments.length === 2) {
      setActiveNestedCategory(null);
    }

    // Build new breadcrumbs up to the clicked level
    for (let i = 0; i < segments.length; i++) {
      const segment = segments[i];
      currentPath += `/${segment}`;
      const category = findCategory(esgData, segment);

      if (category) {
        newBreadcrumbs.push({
          id: category.id,
          title: category.title,
          path: currentPath,
        });

        if (i === 0) setActiveCategory(category.id);
        else if (i === 1) setActiveSubCategory(category.id);
        else if (i === 2) setActiveNestedCategory(category.id);
      }
    }

    setBreadcrumbs(newBreadcrumbs);
  };
  const findCategory = (
    categories: ESGCategory[],
    id: string
  ): ESGCategory | undefined => {
    for (const category of categories) {
      if (category.id === id) return category;
      if (category.subcategories) {
        const found = findCategory(category.subcategories, id);
        if (found) return found;
      }
    }
  };
  const activeParentCategory = activeCategory
    ? findCategory(esgData, activeCategory)
    : null;
  const activeSubParentCategory = activeSubCategory
    ? findCategory(activeParentCategory?.subcategories || [], activeSubCategory)
    : null;
  return (
    <div className=" mx-auto space-y-12 ">
      <Breadcrumbs items={breadcrumbs} onNavigate={handleNavigate} />

      <section className="relative min-h-[600px] flex items-center overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://scontent.ftun16-1.fna.fbcdn.net/v/t1.6435-9/116671579_904348180058762_7725684902901648280_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=PsB42zbFtNYQ7kNvgHfw9yY&_nc_zt=23&_nc_ht=scontent.ftun16-1.fna&_nc_gid=AsJzcf8HyOdbZrH1-kB8tCR&oh=00_AYDTw5-D9xRHLQxYufGfbyTkZwLbOoilZJ1RvZVyjA1A2A&oe=67C10DC3')`,
        }}
      >
        <div className="absolute inset-0 bg-black/40" /> {/* Dark overlay */}
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-6 lg:px-8">
        <div className="max-w-3xl space-y-8">
          {/* Main heading with gradient text */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            
            <span className="bg-gradient-to-r from-red-700 to-red-500 text-transparent bg-clip-text">
              Un Engagement ESG pour un Secteur Automobile Durable
            </span>
          </h1>

          {/* Subtitle with blur backdrop */}
          <div className="inline-block backdrop-blur-sm bg-white/10 px-6 py-3 rounded-lg">
            <p className="text-xl text-white font-medium">
              Concepts Clés ESG
            </p>
          </div>

          {/* CTA Button */}
          <button
            onClick={() => window.location.href = '/#start'}
            className="group flex items-center gap-2 bg-red-700 hover:bg-red-800 text-white px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Plus de details
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute right-0 top-0 w-72 h-72 bg-gradient-to-bl from-red-700/20 to-transparent rounded-full blur-3xl" />
      <div className="absolute left-0 bottom-0 w-96 h-96 bg-gradient-to-tr from-gray-900/30 to-transparent rounded-full blur-3xl" />
    </section>

      <div className="container mx-auto" id="start">
        <br />
        <br />
        <br />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6  p-0 ">
          {esgData.map((category) => (
            <HoverEffect
              key={category.id}
              category={category}
              onClick={() => handleCardClick(category)}
              isActive={activeCategory === category.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
