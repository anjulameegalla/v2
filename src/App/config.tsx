import { Email, GitHub, LinkedIn, Resume } from 'icons';
import { Config } from 'types';

export const config: Config = {
  name: {
    display: 'Anjula Meegalla',
  },
  title: {
    display: 'Cybersecurity Intern',
  },
  buttons: [
    {
      name: 'linked-in',
      display: 'LinkedIn',
      ariaLabel: 'LinkedIn profile (opens in new window)',
      icon: <LinkedIn />,
      href: 'https://www.linkedin.com/in/anjula-meegalla/',
    },
    {
      name: 'github',
      display: 'GitHub',
      ariaLabel: 'GitHub profile (opens in new window)',
      icon: <GitHub />,
      href: 'https://github.com/anjulameegalla/',
    },

    {
      name: 'resume',
      display: 'Resume',
      ariaLabel: 'Resume in Google Drive (opens in new window)',
      icon: <Resume />,
      href: 'https://drive.google.com/file/d/1aMO_uZouvsLqLCOomBOwtzV-yicsVruh/view',
    },
    {
      name: 'email',
      display: 'Email',
      ariaLabel: 'Email contact (opens in new window)',
      icon: <Email />,
      href: 'mailto:anjulameegalla@gmail.com',
    },
  ],
};
