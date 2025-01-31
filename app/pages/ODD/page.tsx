"use client";
import React from "react";
import { motion } from "framer-motion";

const ODDpage = () => {
  const oddList = [
    {
      number: 1,
      title: "Éliminer la pauvreté",
      description:
        "Mettre fin à la pauvreté sous toutes ses formes et partout dans le monde",

      photo: "https://www.agenda-2030.fr/IMG/svg/odd1.svg?1614036680",
    },
    {
      number: 2,
      title: "Éliminer la faim",
      description:
        "Éliminer la faim, assurer la sécurité alimentaire et promouvoir l'agriculture durable",

      photo: "https://www.agenda-2030.fr/IMG/svg/odd2.svg?1614036681",
    },
    {
      number: 3,
      title: "Bonne santé et bien-être",
      description:
        "Permettre à tous de vivre en bonne santé et promouvoir le bien-être de tous à tout âge",

      photo: "https://www.agenda-2030.fr/IMG/svg/odd3.svg?1614036681",
    },
    {
      number: 4,
      title: "Éducation de qualité",
      description:
        "Assurer l’accès de tous à une éducation de qualité, sur un pied d’égalité",
      photo: "https://www.agenda-2030.fr/IMG/svg/odd4.svg?1614036681",
    },
    {
      number: 5,
      title: "Égalité entre les sexes",
      description:
        "Parvenir à l’égalité des sexes et autonomiser toutes les femmes et les filles",
      photo: "https://www.agenda-2030.fr/IMG/svg/odd5.svg?1614036682",
    },
    {
      number: 6,
      title: "Eau propre et assainissement",
      description:
        "Garantir l’accès de tous à l’eau et à l’assainissement et assurer une gestion durable des ressources en eau",

      photo: "https://www.agenda-2030.fr/IMG/svg/odd6.svg?1614036682",
    },
    {
      number: 7,
      title: "Énergie propre et d'un coût abordable",
      description:
        "Garantir l’accès de tous à des services énergétiques fiables, durables et modernes",

      photo: "https://www.agenda-2030.fr/IMG/svg/odd7.svg?1614036682",
    },
    {
      number: 8,
      title: "Travail décent et croissance économique",
      description:
        "Promouvoir une croissance économique soutenue, partagée et durable",

      photo: "https://www.agenda-2030.fr/IMG/svg/odd8.svg?1614036682",
    },
    {
      number: 9,
      title: "Industrie, innovation et infrastructure",
      description:
        "Bâtir une infrastructure résiliente, promouvoir une industrialisation durable",

      photo: "https://www.agenda-2030.fr/IMG/svg/odd9.svg?1614036682",
    },
    {
      number: 10,
      title: "Inégalités réduites",
      description:
        "Réduire les inégalités dans les pays et d’un pays à l’autre",

      photo: "https://www.agenda-2030.fr/IMG/svg/odd10.svg?1614036681",
    },
    {
      number: 11,
      title: "Villes et communautés durables",
      description:
        "Faire en sorte que les villes soient plus ouvertes à tous, sûres et durables",

      photo: "https://www.agenda-2030.fr/IMG/svg/odd11.svg?1614036681",
    },
    {
      number: 12,
      title: "Consommation et production responsables",
      description:
        "Établir des modes de consommation et de production durables",

      photo: "https://www.agenda-2030.fr/IMG/svg/odd12.svg?1614036681",
    },
    {
      number: 13,
      title: "Lutte contre les changements climatiques",
      description:
        "Prendre d’urgence des mesures pour lutter contre les changements climatiques",

      photo: "https://www.agenda-2030.fr/IMG/svg/odd13.svg?1614036681",
    },
    {
      number: 14,
      title: "Vie aquatique",
      description:
        "Conserver et exploiter de manière durable les océans et les mers",

      photo: "https://www.agenda-2030.fr/IMG/svg/odd14.svg?1614036681",
    },
    {
      number: 15,
      title: "Vie terrestre",
      description: "Préserver et restaurer les écosystèmes terrestres",

      photo: "https://www.agenda-2030.fr/IMG/svg/odd15.svg?1614036681",
    },
    {
      number: 16,
      title: "Paix, justice et institutions efficaces",
      description: "Promouvoir des sociétés pacifiques et inclusives",

      photo: "https://www.agenda-2030.fr/IMG/svg/odd16.svg?1614036681",
    },
    {
      number: 17,
      title: "Partenariats pour les objectifs",
      description:
        "Renforcer les moyens de mise en œuvre et revitaliser le partenariat mondial",

      photo: "https://www.agenda-2030.fr/IMG/svg/odd17.svg?1614036681",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen" id="ODD">
      <header className="bg-gradient-to-r from-red-600 to-red-800 text-white py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <h1 className="text-5xl font-bold mb-4">Agenda 2030</h1>
          <p className="text-xl opacity-80">
            17 Objectifs pour transformer notre monde
          </p>
        </div>
      </header>

      <main>
        {oddList.map((odd) => (
          <motion.div
            key={odd.number}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full flex flex-col md:flex-row items-center bg-white shadow-lg mb-4"
          >
            <div className="w-full md:w-1/3 p-8 flex justify-center items-center">
              <img
                src={odd.photo}
                alt={odd.title}
                className="max-h-64 object-contain transform hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="w-full md:w-2/3 p-8">
              <div className="flex items-center mb-4">
                <div className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center mr-4 text-2xl font-bold">
                  {odd.number}
                </div>
                <h2 className="text-3xl font-semibold text-gray-800">
                  {odd.title}
                </h2>
              </div>
              <p className="text-gray-600 mb-6 text-lg">{odd.description}</p>
              <a
                href={`https://sdgs.un.org/fr/goals/goal${odd.number}`}
                target="_blank"
                className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition duration-300"
              >
                En savoir plus
              </a>
            </div>
          </motion.div>
        ))}
      </main>
    </div>
  );
};

export default ODDpage;
