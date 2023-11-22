// gitprofile.config.js

const config = {
  github: {
    username: 'AustinClinefelter3', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: '',
    twitter: 'Austin_Clinefelter',
    instagram: 'Austin_Clinefelter',
    telegram: 'Austin_Clinefelter',
    website: 'https://github.com/AustinClinefelter3/',
    email: 'Clinefeltera22@students.ecu.edu',
  },
  resume: {
    fileUrl:
      'https://studentsecuedu66932-my.sharepoint.com/:w:/r/personal/clinefeltera22_students_ecu_edu/Documents/AustinClinefelter%20resume.docx?d=w44b1b78d4bb7434082022c03eff6f488&csf=1&web=1&e=VkJa8X', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'MySQL',
    'Git',
  ],
  experiences: [
    {
      company: 'East Carolina University',
      position: 'Pirate Tech',
      from: 'September 2022',
      to: 'Present',
      companyLink: 'https://www.ecu.edu',
    },
  ],
  /* certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com'
    },
  ], */
  education: [
    {
      institution: 'East Carolina University',
      degree: 'Management Information Systems',
      from: '2022',
      to: 'Present',
    },
    {
      institution: 'Martin Community College',
      degree: 'Associate of Arts and Sciences',
      from: '2018',
      to: '2022',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'Professional Statement',
      description:
        'My Professional Statement.',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://example.com',
    },
    {
      title: 'Security Audit',
      description:
        'Response Playbook for to a Security Audit at XYZ Financial..',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://studentsecuedu66932-my.sharepoint.com/:w:/r/personal/clinefeltera22_students_ecu_edu/Documents/XYZ%20Financial%20Risk%20Assessment%202.docx?d=w835cf779c0cd42588ad5e9752bf46c72&csf=1&web=1&e=4d9qvM',
    },
        {
      title: 'Security Incident',
      description:
        'Response Playbook for to a Security Incident at XYZ Financial.',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://studentsecuedu66932-my.sharepoint.com/:w:/r/personal/clinefeltera22_students_ecu_edu/Documents/XYZ%20Financial%20Incident%20Report.docx?d=w40def3342a3344b787edf00bb01fd053&csf=1&web=1&e=qqp8zo',
    },
            {
      title: 'Linux',
      description:
        'Examples of using Linux.',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://example.com',
    },
            {
      title: 'Home Network & Heat Map',
      description:
        'My Home Network Analysis and Diagram with a Heat Map signature of my Network capabilities.',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://studentsecuedu66932-my.sharepoint.com/:v:/r/personal/clinefeltera22_students_ecu_edu/Documents/Home%20Network%20and%20Heat%20Map%20Austin%20Clinefelter.mp4?csf=1&web=1&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0RpcmVjdCJ9fQ&e=U6lcjg',
    },
            {
      title: 'Final Project Report',
      description:
        'Cakes by Becky report of Network Analysis.',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://studentsecuedu66932-my.sharepoint.com/:w:/r/personal/clinefeltera22_students_ecu_edu/Documents/Group%201%20MIS%204123%20Team%20Report%20Part%202%20Final%203.docx?d=wb204571117664baba6fcadc28d3c6185&csf=1&web=1&e=QBTnVU',
    },
            {
      title: 'Final Project Presentation',
      description:
        'Cakes by Becky Presentation of Network Analysis.',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://studentsecuedu66932-my.sharepoint.com/:p:/r/personal/clinefeltera22_students_ecu_edu/Documents/Group%201%20MIS%204123%20Team%20Presentation%20Naration%20Final.pptx?d=w8bebf3acfad44aeba16060f65ac6b70f&csf=1&web=1&e=lMXcJf',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'arifszn', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'wireframe',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,
};

export default config;
