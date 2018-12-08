import cloverLogo from '../media/clover_primary_gray_rgb.png';
import ctctLogo from '../media/constant_contact_logo.png';
import itsLogo from '../media/its_logo.png';
import dibsLogo from '../media/1stdibs_logo.png'

export default {
  currentEmployment: {
    company: 'Clover',
    logo: cloverLogo,
    website: 'https://www.clover.com/',
    title: 'Web Engineer',
    dates: 'October 2018 - present',
    overview: 'Build and maintain scalable front-end applications using Typescript and React.js',
    bullets: []
  },
  previousEmployment: [
    {
      company: 'Constant Contact',
      logo: ctctLogo,
      website: 'https://www.constantcontact.com/',
      title: 'Software Engineer',
      dates: 'July 2016 - September 2018',
      overview: 'Build and maintain scalable full stack web applications using Java and JavaScript',
      bullets: [
        'Improved and maintained the front-end of a customer-facing WYSIWYG email editor.',
        'Aided in the development and architecture of a feature enabling customers to A/B test their email marketing campaigns.',
        'Developed a service to validate Swagger API documentation against the company’s REST API standards.'
      ]
    },
    {
      company: 'RIT ITS',
      logo: itsLogo,
      website: 'https://www.rit.edu/its/',
      title: 'Web Application Developer',
      dates: 'August 2015 - July 2016',
      overview: 'Develop and maintian internal tools to streamline workflows of an IT support organization',
      bullets: [
        'Build and maintain a web application for training of new technicians, allowing for additional metrics and insight into the training process.',
        'Performed a major refactor of an aging ticketing and asset management application in order to decrease future maintainence costs.'
      ]
    },
    {
      company: '1stdibs.com',
      logo: dibsLogo,
      website: 'https://www.1stdibs.com',
      title: 'Front-End Engineer Intern',
      dates: 'June 2015 - August 2016',
      overview: '',
      bullets: [
        'Developed critical front-end elements, providing updated UI and functionality around eCommerce item management.',
        'Created Python scripts to dynamically control Jenkins jobs and plugins to ensure code coverage.'
      ]
    }
  ]
}
