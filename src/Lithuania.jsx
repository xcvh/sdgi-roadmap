import React from 'react';
import DepartmentLayout from './components/DepartmentLayout';

const Lithuania = () => {
  const departmentData = {
    title: "Lithuania Department Roadmap",
    universityName: "Kaunas University of Technology",
    departmentName: "EDU_Lab Center for Excellence in Teaching and Learning",
    teamMembers: [
      {
        name: "Assoc. prof. dr. Asta Daunorienė",
        avatar: "asta.jpeg",
        title: "Head of Center",
        position: "Head of Center",
        area: "EDU_Lab Center for Excellence in Teaching and Learning",
        areaLink: "https://en.ktu.edu/scientist/asta.daunoriene/"
      },
      {
        name: "Assoc. prof. dr. Vaida Jonaitienė",
        avatar: "vaida.jpg",
        title: "Coordinator",
        position: "Coordinator",
        area: "EDU_Lab Center",
        areaLink: "https://en.ktu.edu/scientist/vaida.jonaitiene/"
      },
      {
        name: "Assoc. prof. dr. Jurgita Barynienė",
        avatar: "jurgita.jpg",
        title: "Project Manager",
        position: "Project Manager for Academic Competence Development",
        area: "EDU_Lab Center for Excellence in Teaching and Learning",
        areaLink: "https://en.ktu.edu/scientist/jurgita.baryniene/"
      },
      {
        name: "Prof. dr. Eglė Staniškienė",
        avatar: "egle.jpeg",
        title: "Research Group Member",
        position: "Researcher",
        area: "Sustainable Development Research Group, School of Economics and Business",
        areaLink: "https://en.ktu.edu/scientist/egle.staniskiene/"
      },
      {
        name: "Prof. dr. Živilė Stankevičiūtė",
        avatar: "zivile.jpg",
        title: "Research Group Member", 
        position: "Researcher",
        area: "Sustainable Development Research Group, School of Economics and Business",
        areaLink: "https://en.ktu.edu/scientist/zivile.stankeviciute/"
      }
    ],
    roadmapOverview: `The roadmap, led by the EDU_Lab Centre of Excellence in Learning and Teaching, focuses on embedding the Sustainable Development Goals (SDGs) in education. EDU_Lab fosters a culture of innovation at Kaunas University of Technology, encouraging educators to adapt teaching practices, adopt student-centred methods and explore modern approaches to learning. 

Initiatives include a teacher training programme to strengthen the integration of the SDGs into curricula, a knowledge-sharing platform to streamline access to SDG resources and foster collaboration, targeted training for novice teachers to integrate the SDGs into their teaching practices, and an SDG-focused faculty award to recognise innovative efforts. These actions aim to promote sustainability in education, while fostering institutional collaboration and pedagogical excellence. 

Timeframe for implementation: (12 months from 2025 03 01 to 2026 03 01)`,
    measures: [
      {
        title: "Implementation of the SDGs in Teaching Teacher Training Programme",
        objective: "To increase the competence of teachers in integrating the principles of the SDGs into their teaching practice",
        description: "Launch a training programme (4 academic hours) focusing on the integration of the SDGs into the course. Use available resources to provide workshops, curriculum design support and peer mentorship for faculty and use materials developed by the project (Workshop Study Pack and Mooc).",
        indicators: "Number of teachers trained and participating in satisfaction surveys. Integration of SDG content into curricula after training (new assignments, integration of SDG-related topics).",
        resources: "Training facilities, qualified trainers, materials for curriculum development.",
        reporting: "Annual evaluation of the effectiveness of the training programme and the application of SDG content in the courses.",
        responsiblePersons: "Assoc. prof. dr. Asta Daunorienė, Head of Centre, EDU_Lab Centre for Excellence in Teaching and Learning",
        timeFrame: "2025 03 01 – 2025 06 01"
      },
      {
        title: "Development of Academic Information System that Integrates the SDG Theme into Didactic Support for Teachers",
        objective: "To support lecturers in finding structured didactic material/information more quickly and efficiently, which can be used in the context of the course to integrate the SDGs.",
        description: "Develop didactic materials related to the SDGs. Integrate an additional plugin into the AIS didactic support. Introduce the new plugin in the Teachers' Café. Encourage teachers and researchers to share best practices in integrating the SDGs into their work.",
        indicators: "Number of active participants from different departments. Number of teachers participating in the Teachers' Café. Number of personal enquiries, consultations.",
        resources: "Development of digital platform, facilitators, promotion of materials.",
        reporting: "Annual review of use of AIS platform SDG didactic support.",
        responsiblePersons: "Assoc. prof. dr. Asta Daunorienė, Head of Centre, EDU_Lab Centre for Excellence in Teaching and Learning",
        timeFrame: "2025 06 01 – 2025 09 01"
      },
      {
        title: "SDG Integration into Beginner Teacher Programme",
        objective: "To train beginner teachers in practical strategies for integrating the SDGs into the curriculum.",
        description: "Develop training materials to train beginner teachers on how to integrate the SDGs into course content. Provide case studies and examples of how to approach the SDGs in different subjects. Facilitate peer discussions to exchange ideas among beginner teachers.",
        indicators: "Number of teachers trained and feedback from participants. Increase in SDG-aligned content in course syllabi.",
        resources: "Training facilitators, training materials and facilities.",
        reporting: "Development of actual plans for implementation of the SDGs by beginner teachers.",
        responsiblePersons: "Assoc. prof. dr. Asta Daunorienė, Head of Centre, EDU_Lab Centre for Excellence in Teaching and Learning",
        timeFrame: "2025 09 01 – 2025 12 01"
      },
      {
        title: "Establish an SDG Faculty Award on Excellence in Teaching and Learning",
        objective: "To motivate and recognise staff contributions to the Sustainable Development Goals by celebrating their achievements and innovations.",
        description: "Create award categories such as \"Innovative SDG Integration in Teaching\". Announce and award winners annually at a KTU study innovation day. Publicise winners' achievements through university channels to encourage wider adoption (use visibility booster https://booster.aceeu.eu/).",
        indicators: "Number of award applicants and nominees. Engagement metrics from internal and external publications on SDG efforts.",
        resources: "Funding for awards, event organisation, communication materials.",
        reporting: "Annual review to measure the impact of the awards on SDG engagement and adjust award categories as needed.",
        responsiblePersons: "Assoc. prof. dr. Asta Daunorienė, Head of Centre, EDU_Lab Centre for Excellence in Teaching and Learning",
        timeFrame: "2025 12 01 – 2026 03 01"
      }
    ],
    pdfLink: "/path/to/lithuania-roadmap.pdf"
  };

  return <DepartmentLayout {...departmentData} />;
};

export default Lithuania;
