import React from 'react';
import DepartmentLayout from '../components/DepartmentLayout';
const bojana = "/people/bojana.jpg";
const nena_roncevic = "/people/nena_roncevic.jpg";
const nena_vukelic = "/people/nena_vukelic.jpeg";
const iva = "/people/iva.jpeg";

const Croatia = () => {
  const departmentData = {
    title: "University of Rijeka Department Roadmap",
    language: "Croatian",
    countryCode: "hr",
    countryName: "croatia",
    universityName: "University of Rijeka",
    departmentName: "Department of Education",
    introduction: `The Department of Education at the Faculty of Humanities and Social Sciences, University of Rijeka, has existed since 1953, operating under various names and institutional structures, including the Institute for Industrial Pedagogy, the Department for Industrial Pedagogy, the Institute for Pedagogy, and currently, the Department of Education. The department currently employs seventeen (17) staff members, including fifteen (15) academic personnel, comprising tenured professors, associate and assistant professors, postdoctoral researchers, and PhD students, as well as two (2) administrative staff members. Additionally, the department collaborates with a network of professionals serving as external associates.

The Department of Education offers comprehensive undergraduate, graduate, and postgraduate study programmes in pedagogy, with the graduate and postgraduate ones available in both full-time and part-time formats. It also delivers an advanced master's programme for school principals and plays a key role in the master's programme for initial teacher education. Furthermore, the department provides a range of lifelong learning programmes to support continuous professional development of diverse learners. These programs are designed to equip students with theoretical knowledge and practical skills, preparing them for diverse roles in formal and non-formal educational settings.

The curriculum across all study programmes emphasizes contemporary educational theories, innovative and engaged teaching and learning approaches, diverse research methodologies, and the development of critical thinking skills. The goal is to cultivate socially responsible professionals capable of addressing modern educational challenges in both institutional and non-institutional contexts. Additionally, the department actively promotes cross-institutional, cross-sectoral, and interdisciplinary collaboration, providing students with opportunities to engage in research projects, community-based initiatives, volunteering, and internships. These experiences enhance students' academic, professional, and transversal competencies, equipping them with the expertise needed for impactful contributions to the field of education.`,
    socialLinks: [
      {
        title: "DEPTofEDU web - ENG",
        url: "#"
      },
      {
        title: "DEPTofEDU web - CRO",
        url: "#"
      },
      {
        title: "DEPTofEDU - Facebook Page",
        url: "#"
      }
    ],
    teamMembers: [
      {
        name: "Prof. dr. Bojana Ćulum Ilić",
        avatar: bojana,
        title: "Full Professor",
        position: "Head of PhD Study Programme",
        area: "Department of Education",
        areaLink: "https://uniri.hr/en/home/"
      },
      {
        name: "Prof. dr. Nena Rončević",
        avatar: nena_roncevic,
        title: "Full Professor",
        position: "Head of Chair for Special Pedagogies",
        area: "Department of Education",
        areaLink: "https://uniri.hr/en/home/"
      },
      {
        name: "Asst. prof. dr. Nena Vukelić",
        avatar: nena_vukelic,
        title: "Assistant Professor",
        position: "Deputy Head of Department & Faculty Board for Quality Assurance",
        area: "Department of Education",
        areaLink: "https://uniri.hr/en/home/"
      },
      {
        name: "Asst. prof. dr. Iva Bucherber",
        avatar: iva,
        title: "Assistant Professor",
        position: "Head of Department",
        area: "Department of Education",
        areaLink: "https://uniri.hr/en/home/"
      }
    ],
    roadmapOverview: `The Department of Education at the University of Rijeka is committed to integrating sustainable development goals (SDGs) into its educational programs and practices. Our roadmap outlines strategic initiatives to enhance sustainability awareness, promote innovative teaching methods, and foster collaboration across institutional boundaries. Through targeted measures and continuous assessment, we aim to create lasting impact in educational sustainability.`,
    measures: [
      {
        title: "SDG Integration in Teaching and Learning",
        objective: "To enhance the integration of SDGs across all educational programs",
        description: "Develop and implement comprehensive guidelines for incorporating SDGs into course curricula, teaching methods, and assessment practices.",
        indicators: "Number of courses with integrated SDGs, student feedback on SDG content, assessment results",
        resources: "Teaching materials, training resources, faculty expertise",
        reporting: "Semester-based evaluation reports",
        responsiblePersons: "Department Head and Program Coordinators",
        timeFrame: "2025-2026 Academic Year"
      }
    ],
    pdfLink: "./pdfs/SDG-iLevel_WP6_UNIRi Departamental Roadmap_EN.pdf",
    pdfTranslationLink: "./pdfs/SDG-iLevel_WP6_6M UNIRi Departamental Roadmap_Final_21 Jan 2025.pdf"
  };

  return <DepartmentLayout {...departmentData} />;
};

export default Croatia;
