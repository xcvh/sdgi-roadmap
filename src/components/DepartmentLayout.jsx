import React from 'react';
import PropTypes from 'prop-types';
import TeamSection from './TeamSection';
import RoadmapOverview from './RoadmapOverview';
import MeasuresSection from './MeasuresSection';

const DepartmentLayout = ({ 
  title,
  universityName,
  departmentName,
  teamMembers,
  roadmapOverview,
  measures,
  pdfLink 
}) => {
  return (
    <div className="department-container p-6">
      <div className="mb-8">
        <h2 className="text-xl text-gray-600 mb-2">{universityName}</h2>
        <h3 className="text-2xl font-semibold mb-2">{departmentName}</h3>
        <h1 className="text-3xl font-bold">{title}</h1>
      </div>
      
      <TeamSection members={teamMembers} />
      
      <RoadmapOverview overview={roadmapOverview} />
      
      <MeasuresSection measures={measures} />
      
      <div className="mt-8">
        <a 
          href={pdfLink}
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download Roadmap PDF
        </a>
      </div>
    </div>
  );
};

DepartmentLayout.propTypes = {
  title: PropTypes.string.isRequired,
  universityName: PropTypes.string.isRequired,
  departmentName: PropTypes.string.isRequired,
  teamMembers: PropTypes.arrayOf(PropTypes.object).isRequired,
  roadmapOverview: PropTypes.string.isRequired,
  measures: PropTypes.arrayOf(PropTypes.object).isRequired,
  pdfLink: PropTypes.string.isRequired
};

export default DepartmentLayout; 