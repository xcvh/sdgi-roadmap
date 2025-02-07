import React from 'react';
import DepartmentLayout from './components/DepartmentLayout';
const bojana = "/people/bojana.jpg";
const nena_roncevic = "/people/nena_roncevic.jpg";
const nena_vukelic = "/people/nena_vukelic.jpeg";
const iva = "/people/iva.jpeg";

const Croatia = () => {
  const departmentData = {
    title: "University of Rijeka Department Roadmap",
    language: "Croatian",
    universityName: "University of Rijeka",
    departmentName: "Department of Education",
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
    roadmapOverview: `The roadmap developed by the SDG-iLevel project team from the Department of Education (University of Rijeka, Faculty of Humanities and Social Sciences), aims to integrate the Sustainable Development Goals (SDGs) across all academic pillars - teaching, research, management, and community engagement. Anchored within the Department of Education, the roadmap's activities primarily focus on measures targeting academics and students affiliated with the department.

In addition to the core development team, an extended group of colleagues from the Department, Faculty, and University will contribute their expertise to specific measures. The roadmap outlines six initiatives spanning teaching and learning, research, community engagement, and management, while also incorporating measures related to promoting SDG related contributions generated at the departmental level. These actions are designed to advance sustainability in higher education and foster an SDG-focused educational, research, and institutional culture. Moreover, they aim to enhance collaboration both within the institution and with non-academic actors in the local community.

Timeframe for implementation: 12 months from March 2025 till March 2026.`,
    "measures": [
      {
        "title": "Sustainability-Focused Curriculum Review (Pedagogy Programme)",
        "objective": "Integrate SDG principles and content into pedagogy study programme",
        "description": "Map existing courses to SDGs, redesign courses, encourage community-engaged teaching approaches",
        "indicators": "Number of redesigned courses, new assignments, and teachers using community-engaged approaches",
        "resources": "Study programme elaborates, collaborative efforts of department teachers",
        "reporting": "Integration of SDG content, departmental meetings",
        "responsiblePersons": "Nena Rončević",
        "timeFrame": "March 2025 - June 2026"
      },
      {
        "title": "Build Long-Term Community Partnerships",
        "objective": "Develop partnerships with education-related organizations",
        "description": "Create database of collaborators, engage with local schools, NGOs, and institutions, develop community-engaged learning programs",
        "indicators": "Database of partnerships, number of community actors, establishment of external advisory body",
        "resources": "List of current departmental collaborators, staff engagement",
        "reporting": "Departmental meetings, meetings with external partners",
        "responsiblePersons": "Bojana Ćulum Ilić",
        "timeFrame": "March 2025 - March 2026"
      },
      {
        "title": "SDGs in Final Thesis and Dissertations",
        "objective": "Integrate SDG-related research topics across bachelor, master, and PhD levels",
        "description": "Map existing research topics, redesign or introduce SDG-related topics, encourage community-engaged research",
        "indicators": "Number of SDG-related research topics, teacher contributions, student thesis",
        "resources": "Departmental database of thesis research topics",
        "reporting": "Departmental and program council meetings",
        "responsiblePersons": "Nena Vukelić & Bojana Ćulum Ilić",
        "timeFrame": "March 2025 - September 2025"
      },
      {
        "title": "Cross-Departmental SDG Knowledge-Sharing Platforms",
        "objective": "Establish interdepartmental SDG collaboration",
        "description": "Create interdepartmental SDG task force, develop collaborative frameworks, share best practices",
        "indicators": "Establishment of task force, number of participants, shared practices",
        "resources": "Office space, faculty web and social networks",
        "reporting": "Task force meetings, online information sharing",
        "responsiblePersons": "Bojana Ćulum Ilić & extended team member",
        "timeFrame": "March 2025 - March 2026"
      },
      {
        "title": "Foster SDG Awareness and Understanding",
        "objective": "Promote SDG awareness among students",
        "description": "Organize workshops, develop educational materials, integrate SDG awareness into student orientation",
        "indicators": "Number of training sessions, new orientation program",
        "resources": "Human resources, funding, educational materials",
        "reporting": "Departmental meetings, student and collaborator evaluations",
        "responsiblePersons": "Bojana Ćulum Ilić & extended team",
        "timeFrame": "March 2025 - March 2026"
      },
      {
        "title": "Featuring Academics' SDG Contributions",
        "objective": "Recognize and celebrate SDG contributions",
        "description": "Develop visual identity, create storytelling template, share contributions on social media",
        "indicators": "Number of contributions, Facebook posts, page visitors",
        "resources": "Visual identity, template, faculty social networks",
        "reporting": "Facebook page analytics, departmental meetings",
        "responsiblePersons": "Nena Vukelić & Bojana Ćulum Ilić",
        "timeFrame": "March 2025 - March 2026"
      }
    ],
    pdfLink: "./pdfs/SDG-iLevel_WP6_UNIRi Departamental Roadmap_EN.pdf",
    pdfTranslationLink: "./pdfs/SDG-iLevel_WP6_6M UNIRi Departamental Roadmap_Final_21 Jan 2025.pdf"
  };

  return <DepartmentLayout {...departmentData} />;
};

export default Croatia;
