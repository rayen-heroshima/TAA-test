"use client";

import { esgData } from "@/lib/data"; // Assuming this is where esgData is imported
import { HoverEffect } from "./ui/card-hover-effect";
import { useState } from "react";
import { LinkPreview } from "./ui/link-preview";
import { BreadcrumbItem, ESGCategory } from "@/lib/types";
import { FlipWords } from "@/components/ui/flip-words";
import NormesESRS from "./NormesESRS";
import Image from "next/image";
import DirectiveCSDDD from "./DirectiveCSDDD";
export default function Cross() {
  // Accessing the first subcategory within subcategories
  const activeChildCategory = esgData?.[1]?.subcategories?.[0];
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
  const handleSubCardClick = (
    //parentCategory: ESGCategory,
    category: ESGCategory
  ) => {
    if (activeSubCategory === category.id) {
      setActiveSubCategory(null);
      setActiveNestedCategory(null);
      setBreadcrumbs(breadcrumbs.slice(0, 1));
    } else {
      setActiveSubCategory(category.id);
      setActiveNestedCategory(null);
      setBreadcrumbs([
        ...breadcrumbs.slice(0, 1),
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
    <div className="max-w-7xl mx-auto pt-11 space-y-12" id="CROSS">
      {/* Display the title, description, and icon of the selected category */}
      {activeChildCategory ? (
        <div className={`p-6 rounded-lg ${activeChildCategory.color}`}>
          <LinkPreview
            componentPreview={<DirectiveCSDDD />}
            className="z-50"
            url={"/pages/Directive_CSDDD"}
          >
            <h2 className="text-3xl font-bold text-center text-black">
              {
                <FlipWords
                  words={[activeChildCategory.title, "Directive CSDDD"]}
                />
              }
            </h2>
          </LinkPreview>
          <div className="text-gray-600 text-center mt-4">
            {activeChildCategory.description}
            <div className="space-y-6">
              <Image
                src="https://ecoprism.com/assets/img/blog/Blog-32.webp"
                alt="Climate Change Impact on Businesses"
                width={1200} // Set the width of the image (adjust as needed)
                height={630} // Set the height of the image (adjust as needed)
                className="w-full rounded-lg shadow-lg my-8 hover:scale-105 transition-transform duration-300"
              />
              <p className="text-xl leading-relaxed font-light">
                Climate change isn’t just a buzzword—it’s a seismic shift
                reshaping the business landscape. From boardrooms to supply
                chains, companies are grappling with the dual reality of their
                role in the crisis and its impact on their future. The question
                is no longer *if* businesses should act, but *how* they can lead
                the charge in a world racing against time.
              </p>
              <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg my-8 border-l-4 border-teal-500">
                <h3 className="text-2xl font-bold text-teal-700 mb-4">
                  Where Climate Change Hits Hardest: Business Impact Areas
                </h3>
                <ul className="list-none space-y-3">
                  <li className="flex items-start">
                    <span className="text-teal-500 mr-2">⚡</span>
                    <span className="flex-1">
                      Supply chain chaos from extreme weather—think hurricanes,
                      floods, and wildfires.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-500 mr-2">🌱</span>
                    <span className="flex-1">
                      Consumers are voting with their wallets, demanding
                      eco-friendly and sustainable products.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-500 mr-2">📜</span>
                    <span className="flex-1">
                      Navigating the maze of regulations and carbon
                      pricing—compliance is no longer optional.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-500 mr-2">💧</span>
                    <span className="flex-1">
                      Resource scarcity driving up costs—water, energy, and raw
                      materials are becoming precious commodities.
                    </span>
                  </li>
                </ul>
              </div>
              <p className="text-lg leading-relaxed font-light">
                The trailblazers? They’re not just adapting—they’re innovating.
                From setting science-based emissions targets to building
                climate-resilient operations, forward-thinking companies are
                turning challenges into opportunities. The future belongs to
                those who act today.
              </p>
            </div>
          </div>
          {/* If there's an icon, you can display it here {activeChildCategory.icon && (
            <div className="flex justify-center mt-4">
              <span className="text-4xl">{activeChildCategory.icon}</span>
            </div>
          )} */}
        </div>
      ) : (
        <p>Category not found.</p>
      )}
      {activeChildCategory?.subcategories && (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 mx-auto">
            {activeChildCategory.subcategories.map((subCategory) => (
              <HoverEffect
                key={subCategory.id}
                category={subCategory}
                onClick={() => handleSubCardClick(subCategory)}
                isActive={activeSubCategory === subCategory.id}
                isSubCard
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
