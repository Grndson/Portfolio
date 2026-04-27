// This file is the single place you manage projects.
// To add a new project:
//   1. If using a local image — move it to the /public folder, then use '/filename.jpg' as img
//   2. If using an online image — paste the direct URL as img (must end in .jpg/.png/.webp)

const allProjects = [
  {
    id: 1,
    title: 'Seven Flags Real Estate',
    desc: 'Full real estate platform for a Nairobi-based agency — property listings, AirBnB furnishing services, travel packages, investment opportunities with up to 30% returns.',
    img: '/partnership1.jpg',
    url: 'https://gleeful-crepe-ff52ab.netlify.app/',
  },
  {
    id: 2,
    title: 'Job Application Tracker',
    desc: 'A full-stack web app that helps users log and monitor their job applications. Features include application status tracking, an admin dashboard, and progress reporting.',
    img: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2940&auto=format&fit=crop',
    url: 'https://job-tracker-frontend-xi-two.vercel.app/',
  },
  {
    id: 3,
    title: 'Transocean Marine Shop',
    desc: 'E-commerce storefront for a Mombasa-based marine surveying company, showcasing navigation and communication equipment including GPS units, VHF radios, gyrocompasses, and marine antennas.',
    img: '/Transocean.jpg',
    url: 'https://reliable-seahorse-e3ced6.netlify.app/',
  },
  {
    id: 4,
    title: 'House of Akoma Wellness',
    desc: 'Frontend platform for a wellness brand, designed to present health and lifestyle services with a clean, calming user experience tailored for mobile and desktop.',
    img: 'https://images.unsplash.com/photo-1600618528240-fb9fc964b853?q=80&w=2070&auto=format&fit=crop',
    url: 'https://hoa-wellness-frontend.vercel.app/',
  },
  {
    id: 5,
    title: 'RIO — Video Editor Portfolio',
    desc: 'Personal portfolio site for a video editor and motion designer, built to showcase showreels, project highlights, and creative work in a visually engaging layout.',
    img: 'https://images.unsplash.com/photo-1560785219-cc81ab373cd3?q=80&w=2070&auto=format&fit=crop',
    url: 'https://rio-portfolio-gold.vercel.app/',
  },

  // ── To add a new project: ─────────────────────────────────────────────────
  // {
  //   id: 6,
  //   title: 'My New Project',
  //   desc: 'Description of the project.',
  //   img: '/my-image.jpg',                        // local: file must be in /public
  //   img: 'https://i.imgur.com/your-image.jpg',   // OR: direct online URL
  //   url: 'https://your-project.vercel.app',
  // },
];

export default allProjects;