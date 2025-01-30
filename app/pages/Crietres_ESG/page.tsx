"use client";
import React, { useState } from "react";
import { ChevronDown, Leaf, Users, Building2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type CriteriaSectionProps = {
  title: string;
  icon: React.ReactNode;
  items: { code: string; text: string }[];
  color: string;
  isOpen: boolean;
  onToggle: () => void;
};

const CriteriaSection: React.FC<CriteriaSectionProps> = ({
  title,
  icon,
  items,
  color,
  isOpen,
  onToggle,
}) => {
  return (
    <div className="flex-1 rounded-lg">
      <button
        onClick={onToggle}
        className={`w-full p-4 flex items-center justify-between ${color} text-white transition-all duration-300 hover:opacity-90`}
      >
        <div className="flex items-center gap-3 rounded-lg">
          {icon}
          <h3 className="text-xl font-semibold ">{title}</h3>
        </div>
        <ChevronDown
          className={`transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="p-4 space-y-3 flex-1 bg-white rounded-lg shadow-lg overflow-hidden"
            style={{ overflow: "hidden" }}
          >
            {items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-2"
              >
                <span className="font-semibold text-gray-700 min-w-[30px]">
                  {item.code}
                </span>
                <p className="text-gray-600">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const CrietresESG: React.FC = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const sections = [
    {
      key: "environmental",
      title: "Environmental (E)",
      icon: <Leaf size={24} />,
      items: [
        { code: "E1", text: "Le bilan climatique : Emission de CO2, Bilan carbone, Empreinte carbone" },
        { code: "E2", text: "L'efficacité énergétique : Consommation énergétique" },
        { code: "E3", text: "La pollution : L'utilisation/la pollution de l'eau, La gestion des déchets" },
        { code: "E4", text: "Economie circulaire" },
        { code: "E5", text: "Impact sur la biodiversité, Reforestation" },
      ],
      color: "bg-[#22c55e]",
    },
    {
      key: "social",
      title: "Social (S)",
      icon: <Users size={24} />,
      items: [
        { code: "S1", text: "Condition de travail : Santé et sécurité au travail" },
        { code: "S2", text: "Condition de travail : Égalité des salaires" },
        { code: "S3", text: "Condition de travail : Formation des employés" },
        { code: "S4", text: "Condition de travail : Respect des normes règlementaires en matière de travail" },
        { code: "S5", text: "Diversité et inclusion : Intégration de la femme, Intégration des personnes à mobilité réduite et en situation d'handicape, Intégration des jeunes" },
        { code: "S6", text: "Engagement communautaire et engagement sur les communautés locales, Programmes de bénévolat" },
        { code: "S7", text: "Dialogue sociale : Relation avec les syndicats et représentants du personnel" },
      ],
      color: "bg-[#3b82f6]",
    },
    {
      key: "governance",
      title: "Governance (G)",
      icon: <Building2 size={24} />,
      items: [
        { code: "G1", text: "La vision, la stratégie et la gouvernance de la démarche de RSE" },
        { code: "G2", text: "Démarche éthique, Politique anti-corruption et éthique des affaires, Devoir de diligence, Lutte contre la corruption" },
        { code: "G3", text: "Relation avec les clients et les consommateurs" },
        { code: "G4", text: "Transparence : Rémunération des dirigeants Financière" },
        { code: "G5", text: "Gouvernance : Indépendance du conseil d'administration" },
        { code: "G6", text: "Féminisation de la direction, Droits des actionnaires" },
      ],
      color: "bg-[#ef4444]",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-bold text-center mb-16 text-[#E30613]"
      >
        Critères ESG
      </motion.h1>

      {/* Added Paragraph */}
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-lg text-gray-700 mb-8 text-center"
      >
        Les critères ESG (Environnementaux, Sociaux et de Gouvernance) sélectionnés ont été définis en fonction des thématiques les plus pertinentes pour le secteur automobile. Ce choix a été réalisé afin de garantir une approche adaptée aux enjeux spécifiques de l’industrie. Ces critères ont été validés lors d’ateliers de travail réunissant des représentants d’entreprises du secteur, permettant ainsi d’assurer leur pertinence et leur alignement avec les pratiques et attentes du marché. Cette démarche collaborative renforce la crédibilité et l’applicabilité des critères ESG dans le cadre des stratégies de durabilité des entreprises automobiles.
      </motion.p>

      <div className="flex flex-wrap gap-6 justify-center">
        {sections.map(({ key, title, icon, items, color }) => (
          <CriteriaSection
            key={key}
            title={title}
            icon={icon}
            items={items}
            color={color}
            isOpen={openSection === key}
            onToggle={() => setOpenSection(openSection === key ? null : key)}
          />
        ))}
      </div>
    </div>
  );
};

export default CrietresESG;
