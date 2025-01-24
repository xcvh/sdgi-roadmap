import React from 'react';
import PropTypes from 'prop-types';

const TeamMember = ({ name, title, position, area, areaLink, avatar }) => {
  return (
    <div className="team-member p-4 border rounded-lg mb-4 shadow-sm flex items-start gap-4">
      {avatar && (
        <img 
          src={`./people/${avatar}`}
          alt={`${name}'s avatar`}
          className="w-20 h-20 rounded-full object-cover"
        />
      )}
      <div>
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-gray-600">{title}</p>
        <p className="text-gray-600">{position}</p>
        <p className="mt-2">
          Leads: {' '}
          <a 
            href={areaLink}
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {area}
          </a>
        </p>
      </div>
    </div>
  );
};

TeamMember.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  area: PropTypes.string.isRequired,
  areaLink: PropTypes.string.isRequired,
  avatar: PropTypes.string
};

export default TeamMember; 