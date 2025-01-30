"use client";
import React from "react";

export interface Article {
  title: string;
  img: string;
  content: React.ReactNode;
}

export const articleData: Record<string, Article> = {
  Directive_CSDR: {
    title: "Normes européennes de reporting ESG",
    img: "https://images.unsplash.com/photo-1553413077-190dd305871c",
    content: (
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              <center>European Sustainability Reporting Standards </center>
              <p className="text-red-600 mb-4">
                <center>(ESRS)</center>
              </p>
            </h2>
            <p className="text-gray-600 mb-4">
              <center>
                Depuis janvier 2024, les normes européennes de reporting sur le
                développement durable (ESRS) fixent le cadre du reporting sur le
                développement durable en Europe.
              </center>
            </p>
            <p className="text-gray-600 mb-4">
              <center>
                Ce changement s&apos;accompagne de la directive CSRD (Corporate
                Sustainability Reporting Directive) qui met en application les
                12 premières ESRS européennes, visant à normaliser et à
                améliorer la transparence des rapports environnementaux, sociaux
                et de gouvernance (ESG) à travers le continent.
              </center>
            </p>
          </div>
        </div>
      </div>
    ),
  },
  "Cross-Cutting_Standards": {
    title: "Understanding Climate Change Impact",
    img: "",
    content: (
      <div className="space-y-6">
        <p className="text-xl leading-relaxed">
          Climate change represents one of the most significant challenges
          facing businesses today. Companies must understand both their
          contribution to climate change and how it affects their operations,
          supply chains, and stakeholders.
        </p>
        <div className="bg-blue-50 p-6 rounded-lg my-8">
          <h3 className="text-xl font-semibold text-blue-800 mb-4">
            Business Impact Areas
          </h3>
          <ul className="list-disc list-inside space-y-2 text-blue-900">
            <li>Supply chain disruptions due to extreme weather events</li>
            <li>Changing consumer preferences for sustainable products</li>
            <li>Regulatory compliance and carbon pricing</li>
            <li>Resource scarcity and cost implications</li>
          </ul>
        </div>
        <p className="text-lg leading-relaxed">
          Leading organizations are setting science-based targets for emissions
          reduction, investing in climate resilience, and developing innovative
          solutions to address this global challenge.
        </p>
      </div>
    ),
  },
  Enviromental: {
    title: "Enviromental",
    img: "",
    content: (
      <div className="space-y-6">
        <p className="text-xl leading-relaxed">test</p>
        <div className="bg-blue-50 p-6 rounded-lg my-8">
          <h3 className="text-xl font-semibold text-blue-800 mb-4">
            Business Impact Areas
          </h3>
          <ul className="list-disc list-inside space-y-2 text-blue-900">
            <li>ESRS E1 - Changement climatique</li>
            <li>ESRS E2 - Pollution </li>
            <li>ESRS E3 - Ressources aquatiques et marines</li>
            <li>ESRS E4 - Biodiversité et écosystèmes</li>
            <li>ESRS E5 - Utilisation des ressources et économie circulair</li>
          </ul>
        </div>
        <p className="text-lg leading-relaxed">test</p>
      </div>
    ),
  },
  Exigences_générales: {
    title: "Global Climate Systems and Patterns",
    img: "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?auto=format&fit=crop&w=1200",
    content: (
      <div className="space-y-6">
        <p className="text-xl leading-relaxed">
          Understanding global climate systems is crucial for predicting and
          adapting to environmental changes. The Earth&apos;s climate is a
          complex network of interconnected systems, including atmospheric
          circulation, ocean currents, and land-atmosphere interactions.
        </p>
        <div className="bg-sky-50 p-6 rounded-lg my-8">
          <h3 className="text-xl font-semibold text-sky-800 mb-4">
            Key Climate Components
          </h3>
          <ul className="list-disc list-inside space-y-2 text-sky-900">
            <li>Atmospheric circulation patterns</li>
            <li>Ocean current systems</li>
            <li>Global temperature distribution</li>
            <li>Precipitation patterns and water cycle</li>
          </ul>
        </div>
      </div>
    ),
  },
  Divulgations_générales: {
    title: "Environmental Transformation and Adaptation",
    img: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200",
    content: (
      <div className="space-y-6">
        <p className="text-xl leading-relaxed">
          Environmental transformation is occurring at an unprecedented rate,
          requiring adaptive strategies from both natural systems and human
          societies. Understanding these changes is crucial for developing
          effective response measures.
        </p>
        <div className="bg-violet-50 p-6 rounded-lg my-8">
          <h3 className="text-xl font-semibold text-violet-800 mb-4">
            Adaptation Strategies
          </h3>
          <ul className="list-disc list-inside space-y-2 text-violet-900">
            <li>Ecosystem resilience building</li>
            <li>Infrastructure adaptation</li>
            <li>Community preparedness</li>
            <li>Resource management evolution</li>
          </ul>
        </div>
      </div>
    ),
  },
  social: {
    title: "Social Responsibility in Business",
    img: "",
    content: (
      <div className="space-y-6">
        <p className="text-xl leading-relaxed">
          Social responsibility encompasses how businesses manage their
          relationships with employees, suppliers, customers, and communities.
          It&apos;s about creating positive social impact while maintaining
          ethical business practices.
        </p>
        <div className="bg-indigo-50 p-6 rounded-lg my-8">
          <h3 className="text-xl font-semibold text-indigo-800 mb-4">
            Social Impact Areas
          </h3>
          <ul className="list-disc list-inside space-y-2 text-indigo-900">
            <li>Employee well-being and development</li>
            <li>Community engagement and philanthropy</li>
            <li>Diversity, equity, and inclusion initiatives</li>
            <li>Ethical supply chain practices</li>
          </ul>
        </div>
        <p className="text-lg leading-relaxed">
          Companies are focusing on workplace safety, fair labor practices,
          community engagement, and social innovation. The goal is to create
          shared value that benefits both the business and society.
        </p>
      </div>
    ),
  },
  governance: {
    title: "Corporate Governance Excellence",
    img: "",
    content: (
      <div className="space-y-6">
        <p className="text-xl leading-relaxed">
          Strong corporate governance is fundamental to building trust and
          ensuring long-term success. It encompasses the systems and processes
          by which companies are directed and controlled.
        </p>
        <div className="bg-slate-50 p-6 rounded-lg my-8">
          <h3 className="text-xl font-semibold text-slate-800 mb-4">
            Governance Framework
          </h3>
          <ul className="list-disc list-inside space-y-2 text-slate-900">
            <li>Board structure and independence</li>
            <li>Risk management and compliance</li>
            <li>Shareholder rights and engagement</li>
            <li>Executive compensation and accountability</li>
          </ul>
        </div>
        <p className="text-lg leading-relaxed">
          Key aspects include board composition, executive compensation,
          shareholder rights, and transparency in reporting. Good governance
          helps companies make better decisions and manage risks effectively.
        </p>
      </div>
    ),
  },
  Directive_CSDDD: {
    title: "(CSDDD - Corporate Sustainability Due Diligence Directive)",
    img: "https://images.unsplash.com/photo-1553413077-190dd305871c",
    content: (
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              <center>European Sustainability Reporting Standards </center>
              <p className="text-red-600 mb-4">
                <center>(ESRS)</center>
              </p>
            </h2>
            <p className="text-gray-600 mb-4">
              <center>
                Depuis janvier 2024, les normes européennes de reporting sur le
                développement durable (ESRS) fixent le cadre du reporting sur le
                développement durable en Europe.
              </center>
            </p>
            <p className="text-gray-600 mb-4">
              <center>
                Ce changement s&apos;accompagne de la directive CSRD (Corporate
                Sustainability Reporting Directive) qui met en application les
                12 premières ESRS européennes, visant à normaliser et à
                améliorer la transparence des rapports environnementaux, sociaux
                et de gouvernance (ESG) à travers le continent.
              </center>
            </p>
          </div>
        </div>
      </div>
    ),
  },
};
