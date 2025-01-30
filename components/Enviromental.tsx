"use client";

import { esgData } from "@/lib/data"; // Assuming this is where esgData is imported
import { HoverEffect } from "./ui/card-hover-effect";
import { useState } from "react";
import { LinkPreview } from "./ui/link-preview";
import { BreadcrumbItem, ESGCategory } from "@/lib/types";
import NormesESRS from "./NormesESRS";
import DirectiveCSDDD from "./DirectiveCSDDD";
export default function Enviromental() {
  // Accessing the first subcategory within subcategories
  const activeChildCategory = esgData?.[0]?.subcategories?.[1];
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
          path: `${breadcrumbs[0].path}/${category.id}`,
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
    <div className="max-w-7xl mx-auto space-y-12">
      {/* Display the title, description, and icon of the selected category */}
      {activeChildCategory ? (
        <div className={`p-6 rounded-lg ${activeChildCategory.color}`}>
          <h2 className="text-3xl font-bold text-center text-black">
            {activeChildCategory.title}
          </h2>

          <p className="text-gray-600 text-center mt-4">
            {activeChildCategory.description}
          </p>
          {/* If there's an icon, you can display it here */}
          {activeChildCategory.icon && (
            <div className="flex justify-center mt-4">
              <span className="text-4xl">{activeChildCategory.icon}</span>
            </div>
          )}
        </div>
      ) : (
        <p>Category not found.</p>
      )}
      {activeChildCategory?.subcategories && (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 ">
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
