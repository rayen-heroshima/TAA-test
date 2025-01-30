"use client";
//import { div } from "framer-motion/client";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

import { esgData } from "@/lib/data";
import { useState } from "react";
import { HoverEffect } from "./ui/card-hover-effect";

import Breadcrumbs from "./Breadcrumbs";
import { BreadcrumbItem, ESGCategory } from "@/lib/types";

export default function NormesESRS() {
  const activeParentCategory = esgData[1];
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

  const handleSubCardClick = (
    parentCategory: ESGCategory,
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
  /*const activeParentCategory = activeCategory
    ? findCategory(esgData, activeCategory)
    : null;*/
  const activeSubParentCategory = activeSubCategory
    ? findCategory(activeParentCategory?.subcategories || [], activeSubCategory)
    : null;
  return (
    <div className="flex flex-col items-center justify-center  px-4">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
        Normes européennes de reporting ESG
      </h2>

      <div className="article-content flex flex-col lg:flex-row gap-8 items-center justify-center w-full">
        {/* Image Section */}
        <div className="flex-shrink-0 w-full lg:w-1/2 h-[550px] rounded-lg overflow-hidden">
          <img
            src="https://av.sc.com/corp-en/nr/content/images/CSDR-Timeline.jpg"
            alt="TAA Conference"
            className="object-cover w-full h-full"
            width={891}
            height={585}
          />
        </div>

        {/* Text Section */}
        <div className="flex-grow w-full  text-center lg:text-left">
          <h2 className="text-3xl font-bold mb-6">
            <TextGenerateEffect
              words={"European Sustainability Reporting Standards"}
            />
          </h2>
          <p className="text-red-600 mb-4">(ESRS)</p>
          <p className="text-gray-600 mb-4">
            Depuis janvier 2024, les normes européennes de reporting sur le
            développement durable (ESRS) fixent le cadre du reporting sur le
            développement durable en Europe.
          </p>
          <p className="text-gray-600 mb-4">
            Ce changement s&apos;accompagne de la directive CSRD (Corporate
            Sustainability Reporting Directive) qui met en application les 12
            premières ESRS européennes, visant à normaliser et à améliorer la
            transparence des rapports environnementaux, sociaux et de
            gouvernance (ESG) à travers le continent.
          </p>
          <p className="text-gray-600 mb-4">
            De nouvelles normes européennes pour plus de durabilité
            environnementale. Alors qu'aujourd'hui, en Europe, seules les
            sociétés de plus de 500 salariés sont tenues de présenter un rapport
            extra-financier, le scope des entreprises soumises à cette
            obligation va s’élargir dès 2024. Poussée par l’urgence climatique
            et motivée par volonté de flécher les flux financiers vers des
            activités plus durables, la Commission européenne a en effet adopté
            la directive CSRD. Cet ensemble de mesures ambitieuses et complètes
            a pour vocation de renforcer l’engagement des entreprises en faveur
            d’activités enracinées dans le développement durable.
          </p>
        </div>
      </div>

      {/* Subcategories Grid Section */}
      {activeParentCategory?.subcategories && (
        <div className="w-7xl mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-7xl">
            {activeParentCategory.subcategories.map((subCategory) => (
              <HoverEffect
                key={subCategory.id}
                category={subCategory}
                onClick={() =>
                  handleSubCardClick(activeParentCategory, subCategory)
                }
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
