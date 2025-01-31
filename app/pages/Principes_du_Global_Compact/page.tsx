"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const PrinciplesPage = () => {
  const principles = [
    {
      number: 1,
      title:
        "Promouvoir et respecter la protection du droit international relatif aux droits de l'homme",
      content:
        "Le Pacte mondial des Nations Unies demande à ses membres de promouvoir et respecter les droits de l'homme (droit à l'éducation, à la liberté d'expression, à un environnement sain, etc.) dans leur sphère d'influence. Respecter les droits de l'homme signifie faire preuve de vigilance pour identifier les impacts négatifs potentiels directs ou indirects de l'organisation afin de les corriger.",
    },
    {
      number: 2,
      title:
        "Veiller à ne pas se rendre complices de violations des droits de l'homme",
      content:
        "La complicité est le fait d'être impliqué directement ou indirectement dans la violation des droits de l'homme commise par une autre société, gouvernement, individu, groupe ou autre. Ce risque de complicité peut être particulièrement élevé dans les zones à faible gouvernance, ainsi que dans les régions où l'abus des droits de l'homme est largement répandu.",
    },
    {
      number: 3,
      title:
        "Respecter la liberté d'association et reconnaître le droit de négociation collective",
      content:
        "La liberté d'association implique le respect du droit de tous les employeurs et de tous les travailleurs de constituer librement et volontairement et de rejoindre des groupes pour la promotion et la défense de leurs intérêts professionnels. Les travailleurs et les employeurs ont le droit de mettre en place, rejoindre et exécuter leurs propres organisations sans ingérence.",
    },
    {
      number: 4,
      title:
        "Contribuer à l'élimination de toutes les formes de travail forcé ou obligatoire",
      content:
        "Le travail forcé constitue une violation des droits fondamentaux de l'homme, privant les sociétés de développer des compétences et des ressources humaines. Les conséquences affectent non seulement les individus, mais aussi la société et l'économie dans son ensemble.",
    },
    {
      number: 5,
      title: "Contribuer à l'abolition effective du travail des enfants",
      content:
        "Le travail des enfants est une forme d'exploitation qui constitue une violation des droits de l'homme. Il porte atteinte au développement physique, social, mental et éducatif de l'enfant, le privant de son enfance et de sa dignité.",
    },
    {
      number: 6,
      title:
        " Contribuer à l’élimination de toute discrimination en matière d’emploi et de profession. ",
      content:
        "La discrimination dans l’emploi consiste au fait de traiter les gens différemment en raison de caractéristiques qui ne sont pas liées à leur mérite ou aux compétences inhérentes à l’emploi. Dans la législation nationale, ces caractéristiques comprennent généralement : la couleur de la peau, le sexe, la religion, l’opinion politique, l’ascendance nationale, l’origine sociale, l’âge, le handicap, l’affiliation syndicale et l’orientation sexuelle. La discrimination entraîne des tensions sociales qui peuvent perturber l’environnement commercial au sein de l’entreprise et dans la société. Une entreprise qui recourt à des pratiques discriminatoires en matière d’emploi et de profession se prive de l’accès aux talents d’un plus grand nombre de travailleurs, et donc aux aptitudes et aux compétences. La blessure et le ressentiment générés par la discrimination affecteront les performances des individus et des équipes au sein de l’entreprise. Toutefois, le principe 6 permet aux entreprises d’envisager des motifs supplémentaires où la discrimination dans l’emploi et la profession peut se produire.",
    },
    {
      number: 7,
      title:
        "Appliquer l’approche de précaution face aux problèmes touchant l’environnement.",
      content:
        "Le principe de précaution introduit par le principe 15 de la Déclaration de Rio de 1992 stipule que « Pour protéger l’environnement, des mesures de précaution doivent être largement appliquées par les États selon leurs capacités. En cas de risque de dommages graves ou irréversibles, l’absence de certitude scientifique absolue ne doit pas servir de prétexte pour remettre à plus tard l’adoption de mesures effectives visant à prévenir la dégradation de l’environnement ».",
    },
    {
      number: 8,
      title:
        "Prendre des initiatives tendant à promouvoir une plus grande responsabilité en matière d’environnement.",
      content:
        "Le chapitre 30 de l’Agenda 21 publié lors du Sommet de la Terre de Rio de 1992 énonce le rôle des entreprises et de l’industrie dans l’agenda du développement durable. La Déclaration de Rio affirme que les entreprises ont la responsabilité d’assurer que les activités au sein de leurs propres opérations ne causent pas de dommages à l’environnement. La société attend des entreprises qu’elles soient de bons acteurs de la communauté.",
    },
    {
      number: 9,
      title:
        "Favoriser la mise au point et la diffusion de technologies respectueuses de l’environnement.",
      content:
        "Les technologies respectueuses de l’environnement tel que défini dans l’Agenda 21 de la Déclaration de Rio, se doivent de protéger l’environnement, d’être moins polluantes, d’utiliser les ressources de manière durable, de recycler et traiter leurs déchets.Ces technologies qui peuvent prendre la forme d’un savoir-faire, une procédure, un produit, un service, etc., comprennent une variété de procédés de production plus propres et des solutions de prévention et de surveillance.",
    },
    {
      number: 10,
      title:
        "Agir contre la corruption sous toutes ses formes, y compris l’extorsion de fonds et les pots-de-vin.",
      content:
        "Le dixième et dernier principe du Pacte mondial des Nations Unies concerne la lutte contre la corruption. Adopté en 2004, il engage les participants à éviter la corruption, l’extorsion et d’autres formes de corruption, mais aussi à développer de manière proactive des politiques et des programmes concrets pour lutter contre la corruption en interne et au sein de leurs chaînes d’approvisionnement. Les entreprises sont également mises au défi de travailler collectivement et de rejoindre la société civile, les agences des Nations Unies et les gouvernements afin d’atteindre une économie mondiale plus transparente.Pour Transparency International, la corruption est « l’abus de pouvoir à des fins privées ». Cela peut signifier non seulement un gain financier mais également des avantages non financiers. La corruption correspond à « une offre ou la réception de tout don, prêt, frais, récompense ou autre avantage comme une incitation à faire quelque chose qui est malhonnête, illégal ou un abus de confiance, dans la conduite des affaires de l’entreprise ».Les lignes directrices de l’OCDE pour les entreprises multinationales définissent l’extorsion de la manière suivante : « La sollicitation de pots-de-vin est l’acte de demander ou d’inciter autrui à commettre un acte de corruption. Il devient extorsion lorsque cette demande est accompagnée par les menaces qui mettent en danger l’intégrité personnelle ou la vie privée de l’acteur impliqué ».La corruption met en danger la réputation d’une entreprise et accroît les risques juridiques, financiers, etc.",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen  py-16 px-6"
    >
      <div className="container mx-auto max-w-4xl">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-5xl font-bold text-center mb-16 text-[#E30613]"
        >
          Dix principes du Pacte mondial des Nations Unies
        </motion.h1>

        <Accordion type="single" collapsible className="space-y-6">
          {principles.map((principle) => (
            <motion.div
              key={principle.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <AccordionItem
                value={`item-${principle.number}`}
                className="border-2 border-red-100 rounded-xl shadow-sm"
              >
                <AccordionTrigger className="bg-white px-8 py-5 hover:bg-red-100 transition-colors rounded-t-xl ">
                  <div className="flex items-center">
                    <span className="mr-6 text-white bg-[#E30613] rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">
                      {principle.number}
                    </span>
                    <span className="text-left font-semibold text-black text-xl">
                      {principle.title}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-8 py-6 bg-white rounded-b-xl text-gray-700 leading-relaxed">
                  {principle.content}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </motion.div>
  );
};

export default PrinciplesPage;
