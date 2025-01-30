"use client";
//import { div } from "framer-motion/client";
import { LinkPreview } from "./ui/link-preview";
import { FlipWords } from "@/components/ui/flip-words";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { esgData } from "@/lib/data";
import { useState } from "react";
import NormesESRS from "./NormesESRS";
import { HoverEffect } from "./ui/card-hover-effect";
import { motion } from "framer-motion";
import Breadcrumbs from "./Breadcrumbs";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "@/components/ui/tracing-beam";
import {
  Leaf,
  Users,
  Shield,
  Recycle,
  Battery,
  Sprout,
  Heart,
  Users2,
  Building2,
  Scale,
  LineChart,
  ShieldCheck,
} from "lucide-react";
import { BreadcrumbItem, ESGCategory } from "@/lib/types";

export default function DirectiveCSDDD() {
  const activeParentCategory = esgData[0];
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
  {
    const dummyContent = [
      {
        title: "Corporate Sustainability Due Diligence Directive (CSDDD) : ",
        description: (
          <>
            <strong>
              <TextGenerateEffect
                words={
                  "Explication : La Directive Européenne sur le Devoir de Vigilance en Matière de Durabilité CSDDD"
                }
              />
            </strong>{" "}
            <p>
              est une législation introduite par le Parlement Européen en
              février 2022. Elle impose aux entreprises européennes de
              surveiller et de gérer les impacts de leurs activités sur les
              droits de l'Homme et l'environnement. Les entreprises doivent
              s'assurer que leurs chaînes d'approvisionnement respectent ces
              normes. La directive finale a été publiée le 30 janvier 2024 et
              entrera en vigueur en 2027. Explication : La Directive Européenne
              sur le Devoir de Vigilance en Matière de Durabilité (CSDDD)
            </p>
            <p>
              <strong>Objectif </strong>: La directive CS3D établit un cadre
              horizontal d'obligations pour les entreprises ayant une
              implantation dans l'UE (qu'elles soient basées en Europe ou
              qu'elles fournissent des biens ou des services dans l'UE),
              régissant la manière dont elles traitent les impacts négatifs
              réels et potentiels sur les droits de l'homme et l'environnement
              par le biais de leurs chaînes de valeur mondiales, y compris les
              opérations des filiales et des partenaires commerciaux. En
              exigeant des entreprises qu'elles prennent en compte leurs impacts
              sur les droits de l'homme et l'environnement, la CS3D répondra à
              l'absence d'un cadre juridique harmonisé sur les obligations de
              diligence raisonnable des entreprises à travers l'Europe.
            </p>
            <p>
              <strong>Scope</strong>: Entreprises de l'UE La directive CS3D
              s'applique aux entreprises de l'UE qui remplissent l'une des
              conditions suivantes: A. Une entreprise emploie plus de 250
              personnes en moyenne et réalise un chiffre d'affaires net mondial
              €140 millions B. La société n'a pas atteint les seuils visés au
              point (A) mais est la société mère ultime d'un groupe qui emploie
              500 personnes et dont le chiffre d'affaires net mondial €150
              millions.
            </p>
            <p>
              <strong>Scope</strong>: Entreprises tierces La directive
              s'applique aux entreprises tierces qui remplissent l'une des
              conditions suivantes: A. Un chiffre d'affaires net mondial €150
              millions, à condition que 40 millions d'euros aient été générés au
              sein de l'UE. B. La société n'a pas atteint les seuils visés au
              point A, mais elle est la société mère ultime d'un groupe qui
              emploie 500 personnes et réalise un chiffre d'affaires net mondial
              €150 millions, et au moins 40 millions ont été générés dans l'UE
            </p>
          </>
        ),
        badge: (
          <>
            <LinkPreview
              componentPreview={<NormesESRS />}
              className="z-50"
              url={"/pages/Normes_ESRS"}
            >
              <h1 className="bg-red-200 text-white rounded-full  w-fit px-4 py-1 mb-4">
                <FlipWords
                  words={[
                    "Les différentes lois et normes abordées sur les droits de vigilance",
                    "Norme ESRS",
                  ]}
                />
              </h1>
            </LinkPreview>
          </>
        ),
        image:
          "https://www.netzeronews.io/wp-content/uploads/2024/08/csddd-stars-featured-1200x630-opt.jpg",
      },
      {
        title: "",
        description: (
          <>
            <p>
              <strong>
                Explication / Definition La Loi Allemande sur le Devoir de
                Vigilance (LkSG)
              </strong>
              , adoptée par l'Allemagne en 2021, exige des entreprises
              allemandes qu’elles identifient et atténuent les risques liés aux
              droits de l’Homme et à l’environnement dans leurs chaînes
              d’approvisionnement. Cette loi est entrée en vigueur le 1er
              janvier 2023. Elle s'applique principalement au secteur
              automobile, mais est également pertinente pour toutes les chaînes
              d'approvisionnement.
            </p>
            <p>
              <strong>Que réglemente-t-elle ?</strong> La loi allemande sur le
              devoir de vigilance (LkSG) est entrée en vigueur le 1er janvier
              2023. Cette loi régit les droits de l'homme et la protection de
              l'environnement dans les chaînes d'approvisionnement mondiales.
              Elle exige des entreprises allemandes qu'elles mettent en oeuvre
              des obligations de diligence définies. Ces obligations
              s'appliquent au domaine d'activité de l'entreprise, aux actions de
              ses partenaires contractuels et autres fournisseurs indirects.
            </p>
            <p>
              <strong>À qui s'applique-t-il ?</strong> À partir de janvier 2023,
              la LkSG est applicable à toute entreprise employant au moins 3 000
              personnes. À partir de 2024, elle concerne les entreprises
              allemandes employant au moins 1 000 personnes. Les entreprises
              auxquelles la loi s'applique doivent identifier, évaluer et
              hiérarchiser les risques dans leurs chaînes d'approvisionnement.
              En fonction des résultats, elles doivent publier une déclaration
              de politique générale et prendre des mesures pour prévenir ou
              minimiser les violations des droits de l'homme et les dommages
              causés à l'environnement.
            </p>
            <p>
              <strong>Quels sont les droits renforcés ?</strong> La loi LkSG
              bénéficie aux personnes qui font partie des chaînes
              d'approvisionnement, aux entreprises et aux consommateurs. La loi
              sur la chaîne d'approvisionnement contient une liste exhaustive de
              onze conventions sur les droits de l'homme internationalement
              reconnues, à savoir: - Protection contre le travail des enfants,
              le travail forcé et la discrimination - Santé et sécurité au
              travail - Protection contre les violations de l'environnement
            </p>
            <p>
              <strong>Implications</strong> légales Si les entreprises ne
              respectent pas leurs obligations légales, des amendes
              administratives peuvent être imposées. Celles-ci peuvent s'élever
              jusqu'à 8 millions d'euros ou jusqu'à 2 % du chiffre d'affaires
              annuel mondial.
            </p>
          </>
        ),
        badge: (
          <>
            <h2 className="bg-red-200 text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
              Loi Allemande sur le Devoir de Vigilance (LkSG)
            </h2>
          </>
        ),
        image:
          "https://minurso.unmissions.org/sites/default/files/styles/full_width_image/public/field/image/ndg.jpeg?itok=OuW3L44e",
      },
    ];
    return (
      <TracingBeam className="px-1">
        <div className=" mx-auto antialiased pt-4 relative" id="DCSDDD">
          <br />
          <br />
          <br />
          <br />
          <br />
          {dummyContent.map((item, index) => (
            <div key={`content-${index}`} className="mb-10">
              {item.badge}

              {item.title}
              <div className="text-sm  prose prose-sm dark:prose-invert">
                {item?.image && (
                  <Image
                    src={item.image}
                    alt="blog thumbnail"
                    height="1000"
                    width="1000"
                    className="rounded-lg mb-10 object-cover"
                  />
                )}

                {item.description}
              </div>
            </div>
          ))}
        </div>
      </TracingBeam>
    );
  }
}
