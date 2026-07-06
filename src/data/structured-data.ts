import {
  curriculumProfile,
  principalFormation,
  conferenceProceedings,
  journalArticles,
} from "./curriculum";

const SITE_URL = "https://www.drjoaopedrocastro.com.br";

const authorsToPersonArray = (authorsString: string) =>
  authorsString
    .split(",")
    .map((a) => a.trim())
    .filter(Boolean)
    .map((name) => ({ "@type": "Person" as const, name }));

export const personSchema = {
  "@context": "https://schema.org",
  "@type": ["Person", "Physician"],
  name: "Dr. João Pedro Castro Martins Farias",
  alternateName: [
    "Dr. João Pedro Castro",
    curriculumProfile.citationShort,
    curriculumProfile.citationFull,
  ],
  givenName: "João Pedro",
  familyName: "Castro Martins Farias",
  jobTitle: ["Médico Psiquiatra", "Médico Psicogeriatra"],
  medicalSpecialty: ["Psychiatry", "Geriatric Psychiatry"],
  url: `${SITE_URL}/curriculo`,
  image: `${SITE_URL}/og-image.jpg`,
  sameAs: [curriculumProfile.lattesUrl, curriculumProfile.instagram],
  identifier: [
    {
      "@type": "PropertyValue",
      propertyID: "CRM",
      value: curriculumProfile.crm,
    },
    {
      "@type": "PropertyValue",
      propertyID: "RQE Psiquiatria",
      value: curriculumProfile.rqePsiquiatria,
    },
    {
      "@type": "PropertyValue",
      propertyID: "RQE Psicogeriatria",
      value: curriculumProfile.rqePsicogeriatria,
    },
    {
      "@type": "PropertyValue",
      propertyID: "Lattes ID",
      value: curriculumProfile.lattesId,
    },
  ],
  alumniOf: [
    {
      "@type": "EducationalOrganization",
      name: "Universidade Federal de Minas Gerais (UFMG)",
    },
    {
      "@type": "MedicalOrganization",
      name: "Hospital Municipal Odilon Behrens",
    },
    {
      "@type": "MedicalOrganization",
      name: "Hospital das Clínicas da UFMG/Ebserh",
    },
  ],
  worksFor: [
    {
      "@type": "MedicalOrganization",
      name: "Consultório Dr. João Pedro Castro",
      address: {
        "@type": "PostalAddress",
        streetAddress: curriculumProfile.officeAddress.streetAddress,
        addressLocality: curriculumProfile.officeAddress.city,
        addressRegion: curriculumProfile.officeAddress.state,
        addressCountry: curriculumProfile.officeAddress.country,
      },
    },
    {
      "@type": "MedicalOrganization",
      name: "Clínica Mangabeiras",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Belo Horizonte",
        addressRegion: "MG",
        addressCountry: "BR",
      },
    },
  ],
  workLocation: {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      streetAddress: curriculumProfile.officeAddress.streetAddress,
      addressLocality: curriculumProfile.officeAddress.city,
      addressRegion: curriculumProfile.officeAddress.state,
      addressCountry: curriculumProfile.officeAddress.country,
    },
  },
  telephone: "+55-31-99131-5958",
  knowsLanguage: ["pt-BR", "en", "es"],
  hasCredential: [
    ...principalFormation.map((f) => ({
      "@type": "EducationalOccupationalCredential",
      name: f.title,
      credentialCategory: "degree",
      recognizedBy: { "@type": "Organization", name: f.institution },
    })),
    {
      "@type": "EducationalOccupationalCredential",
      name: "Fellowship em Estimulação Magnética Transcraniana",
      credentialCategory: "Fellowship",
      recognizedBy: {
        "@type": "Organization",
        name: "UFMG e Clínica Mangabeiras",
      },
    },
    {
      "@type": "EducationalOccupationalCredential",
      name: "Pós-graduação Lato Sensu em Terapia Cognitivo-Comportamental",
      credentialCategory: "degree",
      recognizedBy: {
        "@type": "Organization",
        name: "Centro Universitário União das Américas",
      },
    },
  ],
};

const posterPaper = conferenceProceedings[0];
const journalPaper = journalArticles[0];

export const scholarlyArticleSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "ScholarlyArticle",
    headline: posterPaper.title,
    author: authorsToPersonArray(posterPaper.authors),
    datePublished: String(posterPaper.year),
    isPartOf: {
      "@type": "PublicationVolume",
      volumeNumber: "36",
      isPartOf: {
        "@type": "Periodical",
        name: "International Psychogeriatrics",
        publisher: {
          "@type": "Organization",
          name: "Cambridge University Press",
        },
      },
    },
    pageStart: "91",
    about: {
      "@type": "MedicalCondition",
      name: "Treatment Resistant Depression",
    },
    inLanguage: "en",
  },
  {
    "@context": "https://schema.org",
    "@type": "ScholarlyArticle",
    headline: journalPaper.title,
    author: authorsToPersonArray(journalPaper.authors),
    datePublished: String(journalPaper.year),
    isPartOf: {
      "@type": "Periodical",
      name: journalPaper.journal,
    },
    inLanguage: "pt-BR",
  },
];
