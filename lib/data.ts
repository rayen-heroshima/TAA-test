import { ESGCategory } from './types';

export const esgData: ESGCategory[] = [
  {
    id: 'Crietres_ESG',
    title: 'Crietres ESG',
    description: 'Un Guide du reporting Environnemental, Social et de Gouvernance (ESG)',
    icon: 'Users',
    color: 'bg-indigo-500',
    link:"/pages/Crietres_ESG",
    subcategories: []
  },
  {
    id: 'Directive_CSDR',
    title: 'Directive CSDR',
    description: 'Préparez-vous aux nouvelles exigences réglementaires',
    icon: 'Leaf',
    color: 'bg-emerald-500',
    link:"/pages/Normes_ESRS#NESRS",
    subcategories: [
      {
        id: 'Cross-Cutting_Standards',
        title: 'Cross-Cutting Standards',
        description: 'Strategies and initiatives to combat climate change',
        icon: 'Cloud',
        color: 'bg-amber-500',
        link:"/pages/Normes_ESRS/CrossCutting#CROSS",
        subcategories: [
          {
            id: 'Exigences_générales',
            title: 'Exigences générales',
            description: 'Understanding global climate patterns and impacts',
            icon: 'Cloud',
            link:"/pages/Normes_ESRS/CrossCutting/Exigences_generales#EG",
            color: 'bg-sky-500'
          },
          {
            id: 'Divulgations_générales',
            title: 'Divulgations générales',
            description: 'Adapting to environmental transformations',
            icon: 'RefreshCw',
            link:"/pages/Normes_ESRS/CrossCutting/Divulgations_generales#DG",
            color: 'bg-violet-500'
          }
        ]
      },
      {
        id: 'Enviromental',
        title: 'Enviromental',
        description: 'Efficient use and conservation of natural resources',
        icon: 'Recycle',
        link:"/pages/Normes_ESRS/Enviromental#comp1",
        color: 'bg-blue-500',
        
        subcategories: [
          {
            id: 'ESRS_E1',
            title: 'ESRS E1',
            description: 'Strategies and initiatives to combat climate change',
            icon: 'ThermometerSun',
            link:"/pages/Normes_ESRS/Enviromental/ESRS_E1",
            color: 'bg-amber-500'


          },
                    {
            id: 'ESRS_E2',
            title: 'ESRS E2',
            description: ' Pollution ',
            link:"/pages/Normes_ESRS/Enviromental/ESRS_E2",
            icon: 'ThermometerSun',
            color: 'bg-amber-500'


          },
                              {
            id: 'ESRS_E3',
            title: 'ESRS E3',
            description: 'Ressources aquatiques et marines',
            link:"/pages/Normes_ESRS/Enviromental/ESRS_E3",
            icon: 'ThermometerSun',
            color: 'bg-amber-500'


          },
                                        {
            id: 'ESRS_E4',
            title: 'ESRS E4',
            description: 'Biodiversité et écosystèmes',
            link:"/pages/Normes_ESRS/Enviromental/ESRS_E4",
            icon: 'ThermometerSun',
            color: 'bg-amber-500'


          },
                                                  {
            id: 'ESRS_E5',
            title: 'ESRS E5',
            description: 'Utilisation des ressources et économie circulair',
            link:"/pages/Normes_ESRS/Enviromental/ESRS_E5",
            icon: 'ThermometerSun',
            color: 'bg-amber-500'


          },
        ]
      },
      {
        id: 'Social',
        title: 'Social',
        description: 'Efficient use and conservation of natural resources',
        icon: 'Recycle',
        color: 'bg-blue-500'
      },
      {
        id: 'Governance',
        title: 'Governance',
        description: 'Efficient use and conservation of natural resources',
        icon: 'Recycle',
        color: 'bg-blue-500'
      }
    ]
  },
  {
    id: 'Directive_CSDDD',
    title: 'Directive CSDDD',
    description: 'Découvrez comment intégrer la diligence raisonnable dans votre stratégie.',
    icon: 'Users',
    color: 'bg-indigo-500',
    link:"/pages/Directive_CSDDD#DCSDDD",
    subcategories: [
      {
        id: 'diversity-inclusion',
        title: 'Diversity & Inclusion',
        description: 'Building an inclusive workplace and society',
        icon: 'Heart',
        link:"/pages/Directive_CSDDD/diversity-inclusion",
        color: 'bg-pink-500'
      },
      {
        id: 'human-rights',
        title: 'Human Rights',
        description: 'Protecting and promoting human rights globally',
        icon: 'Shield',
        link:"/pages/Directive_CSDDD/human-rights",
        color: 'bg-purple-500'
      }
    ]
  },
  {
    id: 'ODD',
    title: 'ODD (Objectifs de Développement Durable)',
    description: 'Explorez les 17 Objectifs de Développement Durable',
    icon: 'Building2',
    color: 'bg-slate-500',
    link:"/pages/ODD#ODD",
    subcategories: [
      {
        id: 'board-diversity',
        title: 'Board Diversity',
        description: 'Promoting diverse leadership and decision-making',
        icon: 'Users',
        color: 'bg-orange-500'
      },
      {
        id: 'ethics-compliance',
        title: 'Ethics & Compliance',
        description: 'Maintaining high ethical standards and compliance',
        icon: 'Scale',
        color: 'bg-red-500'
      }
    ]
  }
  ,
  {
    id: 'Principes_du_Global_Compact',
    title: 'Principes du Global Compact',
    description: 'Adoptez les 10 principes fondamentaux pour un monde meilleur',
    icon: 'Building2',
    color: 'bg-slate-500',
    link:"/pages/Principes_du_Global_Compact",
    subcategories: [
      {
        id: 'board-diversity',
        title: 'Board Diversity',
        description: 'Promoting diverse leadership and decision-making',
        icon: 'Users',
        color: 'bg-orange-500'
      },
      {
        id: 'ethics-compliance',
        title: 'Ethics & Compliance',
        description: 'Maintaining high ethical standards and compliance',
        icon: 'Scale',
        color: 'bg-red-500'
      }
    ]
  }
  ,
  {
    id: 'ISO_26000',
    title: 'ISO 26000',
    description: 'Découvrez les lignes directrices pour une responsabilité sociétale',
    icon: 'Building2',
    color: 'bg-slate-500',
    subcategories: [
      {
        id: 'board-diversity',
        title: 'Board Diversity',
        description: 'Promoting diverse leadership and decision-making',
        icon: 'Users',
        color: 'bg-orange-500'
      },
      {
        id: 'ethics-compliance',
        title: 'Ethics & Compliance',
        description: 'Maintaining high ethical standards and compliance',
        icon: 'Scale',
        color: 'bg-red-500'
      }
    ]
  }
];