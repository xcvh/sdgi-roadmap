import React from 'react';
import DepartmentLayout from './components/DepartmentLayout';

const Croatia = () => {
    const departmentData = {
        title: "Croatia Department Roadmap",
        teamMembers: [
            {
                name: "Dr. Ana Kovač",
                title: "Senior Researcher",
                position: "Program Director",
                area: "Innovation and Sustainability Center",
                areaLink: "https://example.com/isc"
            },
            {
                name: "Dr. Marko Horvat",
                title: "Research Coordinator",
                position: "Team Lead",
                area: "Environmental Studies Lab",
                areaLink: "https://example.com/esl"
            }
        ],
        roadmapOverview: `The Croatian department focuses on integrating sustainable development principles 
    into educational and research practices. Our mission is to foster innovation in sustainability 
    education while building strong partnerships with local communities and industry stakeholders.`,
        measures: [
            {
                objective: "Develop Sustainable Education Programs",
                description: "Create and implement comprehensive sustainability education programs across all academic levels",
                indicators: "Number of new programs launched, student enrollment rates, positive feedback from stakeholders",
                resources: "Educational materials, training staff, digital learning platforms",
                reporting: "Monthly program reviews, semester-end evaluations",
                responsiblePersons: "Education Program Coordinators",
                timeFrame: "18 months"
            },
            {
                objective: "Strengthen Industry Partnerships",
                description: "Establish collaborative projects with local industries to implement sustainable practices",
                indicators: "Number of partnerships formed, successful project implementations, industry feedback",
                resources: "Network building tools, project management team, communication platforms",
                reporting: "Bi-monthly partnership reviews, quarterly progress reports",
                responsiblePersons: "Industry Relations Team",
                timeFrame: "24 months"
            }
        ],
        pdfLink: "/path/to/croatia-roadmap.pdf"
    };

    return <DepartmentLayout {...departmentData} />;
};

export default Croatia;
