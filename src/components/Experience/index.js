import React from 'react';

import Company from './company';

// Maybe combine companies and use last title
const Jobs = [
  {
    Business: 'Localeur',
    Title: 'Director of Engineering',
    Start: 'June 2016',
    End: 'January 2018',
    Description: ''
  },
  {
    Business: 'Localeur',
    Title: 'Founding Engineer',
    Start: 'January 2015',
    End: 'June 2016',
    Description: ''
  },
  {
    Business: 'Mutual Mobile',
    Title: 'Senior Web Developer',
    Start: 'November 2014',
    End: 'January 2015',
    Description: ''
  },
  {
    Business: 'Mutual Mobile',
    Title: 'Staff Web Developer',
    Start: 'November 2012',
    End: 'November 2014',
    Description: ''
  },
  {
    Business: 'Certain Affinity',
    Title: 'Web Developer',
    Start: 'November 2011',
    End: 'November 2012',
    Description: ''
  },
  {
    Business: 'CSID (Formerly CSIdentity)',
    Title: 'Technology Specialist',
    Start: 'December 2006',
    End: 'February 2011',
    Description: ''
  }
];

const Experience = () => (
  <div id="experience" className="background-alt">
    <h2 className="heading">Experience</h2>
    <div id="experience-timeline">
      {
        Jobs.map((item, index) => <Company {...item} key={index}/>)
      }
    </div>
  </div>
);

export default Experience;