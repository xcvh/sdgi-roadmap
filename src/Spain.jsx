import React from 'react';
import DepartmentLayout from './components/DepartmentLayout';

const Spain = () => {
  const departmentData = {
    title: "Spain Department Roadmap",
    teamMembers: [
      {
        name: "Dr. Maria Garcia",
        title: "Lead Researcher",
        position: "Department Head",
        area: "Sustainable Development Lab",
        areaLink: "https://example.com/sdlab"
      },
      // Add more team members as needed
    ],
    roadmapOverview: `Our department is committed to advancing sustainable development through innovative research 
    and practical applications. We focus on creating scalable solutions that address key environmental and social 
    challenges while promoting economic growth.`,
    measures: [
      {
        objective: "Enhance Research Impact",
        description: "Implement a systematic approach to measure and increase the impact of our research initiatives",
        indicators: "Citation metrics, industry adoption rates, policy influence",
        resources: "Research analytics tools, dedicated research staff",
        reporting: "Quarterly progress reviews with stakeholders",
        responsiblePersons: "Research Team Leaders",
        timeFrame: "12 months"
      },
      // Add more measures as needed
    ],
    pdfLink: "/path/to/spain-roadmap.pdf"
  };

  return <DepartmentLayout {...departmentData} />;
};

export default Spain;
