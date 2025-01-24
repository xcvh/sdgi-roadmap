import React from 'react';
import PropTypes from 'prop-types';

const Measure = ({
  title,
  objective,
  description,
  indicators,
  resources,
  reporting,
  responsiblePersons,
  timeFrame
}) => {
  return (
    <div className="measure p-6 border rounded-lg mb-6 shadow-sm">
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <h3 className="text-xl font-bold mb-4">{objective}</h3>
      
      <div className="space-y-4">
        <div>
          <h4 className="font-semibold text-gray-700">Description of Actions</h4>
          <p className="mt-1">{description}</p>
        </div>

        <div>
          <h4 className="font-semibold text-gray-700">Indicators of Success</h4>
          <p className="mt-1">{indicators}</p>
        </div>

        <div>
          <h4 className="font-semibold text-gray-700">Resources Required</h4>
          <p className="mt-1">{resources}</p>
        </div>

        <div>
          <h4 className="font-semibold text-gray-700">Reporting and Review</h4>
          <p className="mt-1">{reporting}</p>
        </div>

        <div>
          <h4 className="font-semibold text-gray-700">Responsible Person(s)</h4>
          <p className="mt-1">{responsiblePersons}</p>
        </div>

        <div>
          <h4 className="font-semibold text-gray-700">Time Frame</h4>
          <p className="mt-1">{timeFrame}</p>
        </div>
      </div>
    </div>
  );
};

Measure.propTypes = {
  title: PropTypes.string.isRequired,
  objective: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  indicators: PropTypes.string.isRequired,
  resources: PropTypes.string.isRequired,
  reporting: PropTypes.string.isRequired,
  responsiblePersons: PropTypes.string.isRequired,
  timeFrame: PropTypes.string.isRequired
};

export default Measure; 