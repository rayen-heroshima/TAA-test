"use client";
import Image from "next/image";
import React from "react";
import Cross from "@/components/Cross";
import NormesESRS from "@/components/NormesESRS";

const Divulgations_generales = () => {
  return (
    <div>
      <NormesESRS />
      <Cross />
      <div
        className="max-w-5xl mx-auto p-6 bg-white rounded-2xl shadow-lg space-y-6 pt-20"
        id="DG"
      >
        <Image
          src="https://fastercapital.com/fr/i-fr/Demystification-des-declarations-de-divulgation--un-guide-des-consommateurs--Comprendre-l-importance-des-declarations-de-divulgation.webp"
          alt="ESRS 2 - Divulgations générales"
          width={800}
          height={400}
          className="rounded-xl"
        />
        <h1 className="text-3xl font-bold text-gray-900">
          ESRS 2 - Divulgations générales
        </h1>
        <p className="text-gray-700 leading-relaxed">
          ESRS 2 spécifie les informations essentielles à divulguer, quelle que
          soit la question de durabilité examinée.
        </p>
      </div>
    </div>
  );
};
export default Divulgations_generales;
