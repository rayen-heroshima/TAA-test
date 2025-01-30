"use client";
import React from "react";
import Cross from "@/components/Cross";
import NormesESRS from "@/components/NormesESRS";
import Image from "next/image";
const Exigences_generales = () => {
  return (
    <div>
      <NormesESRS />
      <Cross />

      <div
        className="text-gray-600 text-center mt-4 max-w-7xl mx-auto pt-11"
        id="EG"
      >
        <div className="space-y-6">
          <Image
            src="https://white-tillet.com/wp-content/uploads/exigences_RDM_DDM-002-1397x540.jpg"
            alt="ESRS 1 Exigences Générales"
            width={1200} // Set the width of the image (adjust as needed)
            height={630} // Set the height of the image (adjust as needed)
            className="w-full rounded-lg shadow-lg my-8 hover:scale-105 transition-transform duration-300"
          />
          <p className="text-xl leading-relaxed font-light">
            ESRS 1 n’est pas juste une norme—c’est le fondement d’une
            communication transparente et responsable. Elle établit les
            principes généraux pour présenter des informations conformes aux
            normes ESRS, sans imposer d’exigences spécifiques. En d’autres
            termes, c’est la boussole qui guide les entreprises vers une
            reporting durable et crédible.
          </p>
          <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-lg my-8 border-l-4 border-indigo-500">
            <h3 className="text-2xl font-bold text-indigo-700 mb-4">
              Ce que vous devez savoir sur ESRS 1 :
            </h3>
            <ul className="list-none space-y-3">
              <li className="flex items-start">
                <span className="text-indigo-500 mr-2">🧭</span>
                <span className="flex-1">
                  Une feuille de route pour aligner vos rapports avec les normes
                  ESRS.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-500 mr-2">📊</span>
                <span className="flex-1">
                  Pas d’exigences spécifiques—mais des principes solides pour
                  garantir la cohérence et la comparabilité.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-500 mr-2">🌍</span>
                <span className="flex-1">
                  Un pas de plus vers la transparence et la responsabilité
                  environnementale, sociale et de gouvernance (ESG).
                </span>
              </li>
            </ul>
          </div>
          <p className="text-lg leading-relaxed font-light">
            ESRS 1 est bien plus qu’un cadre technique—c’est un engagement
            envers l’intégrité et la clarté. En adoptant ces principes, les
            entreprises ne se contentent pas de suivre les règles ; elles
            montrent la voie vers un avenir durable et responsable.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Exigences_generales;
