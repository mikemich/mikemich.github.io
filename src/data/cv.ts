// Everything about you lives here. Edit this file to update the site and the printable CV (/cv).
// Projects are separate: one Markdown file each in src/content/projects.
// Photos are separate too: drop images into src/assets/photos.

export const profile = {
  name: 'Michalis Michalopoulos',
  fullName: 'Michail Andreas Michalopoulos',
  role: 'Automotive/Electrical Engineer',
  headline: 'Electrical Engineering student · Automotive Technology · TU/e',
  location: 'Eindhoven, Netherlands',
  tagline:
    'Electrical Engineering – Automotive Technology student at TU/e, working across power electronics, embedded systems and vehicle software.',
  email: 'mike.michalo@gmail.com',
  // Shown in the CV header. Dutch recruiters look for both. Leave empty ('') to hide.
  workAuthorization: 'EU citizen, no work permit needed',
  availability: '', // TODO: e.g. 'Available 16–20 h/week from Feb 2027'
  // Leave a link empty ('') to hide its icon.
  links: {
    github: 'https://github.com/mikemich',
    linkedin: 'https://www.linkedin.com/in/mikemich',
  },
};

// Short professional summary, used at the top of the About section and the printable CV.
export const summary =
  'Electrical engineering student specialising in automotive technology, at home on both sides of the hardware/software line: from STM32 power-converter firmware and Arduino sensing to CAN bus tooling in Rust and full-stack web apps. I like understanding a system end to end, testing what I build against real measurements, and explaining clearly what was done and why.';

export const about = [
  summary,
  'Outside the lab I build my own tools, design circuits such as amplifiers, power supplies and sensors, run and maintain server hardware, and spend a lot of time behind a camera. I work comfortably in multidisciplinary teams and am fluent in English and Greek.',
];

export const goals = [
  'Finish my studies in the engineering department.',
  'Acquire the skills to become a well-rounded engineer.',
  'Develop as a professional in the engineering industry.',
  'Gain multidisciplinary experience in technical and management positions.',
];

export type TimelineItem = {
  title: string;
  org: string;
  period: string;
  details: string[];
};

export const experience: TimelineItem[] = [
  {
    title: 'Freelance Full-Stack Developer & Graphic Designer',
    org: 'Self-employed',
    period: '2018 – 2022',
    details: [
      'Designed and built websites and web apps for small companies and acquaintances.',
      'Built a Flask dashboard of Greek COVID-19 statistics and a clothing-listings marketplace.',
      'Created graphic design work for clients alongside the web projects.',
    ],
  },
  {
    title: 'Administration & Logistics',
    org: 'Family business',
    period: '2018 – present', // TODO: confirm the end date
    details: ['Supported day-to-day administration and logistics of the family business.'],
  },
];

export const education: TimelineItem[] = [
  {
    title: 'BSc Electrical Engineering – Automotive Technology',
    org: 'Eindhoven University of Technology (TU/e), Eindhoven',
    period: 'Sep 2022 – present',
    details: [
      'Design- and challenge-based projects: small-scale EV efficiency (2022), Venus exploration robots (2023), a thermal therapy device (2023), automated luggage sorting (2024) and STM32 buck-converter control (2025).',
    ],
  },
  {
    title: 'Greek Apolytirion (High School)',
    org: 'Pierce – The American College of Greece, Athens',
    period: '2019 – 2022',
    details: [
      'Focus on Physics, Chemistry and Mathematics.',
      'School robotics club: represented the school at the Panhellenic Robotics Competition, and designed a robotic hand (CAD, electronics and C++ control software).',
    ],
  },
];

export type Award = {
  title: string;
  event: string;
  date: string;
  detail: string;
  // One-line version used by the one-page CV.
  short: string;
};

export const awards: Award[] = [
  {
    title: '1st place, Beginners bracket',
    event: 'WhiteHats TrojanCTF 2026',
    date: 'May 2026',
    detail:
      '1st of 37 teams in the Beginners bracket and 5th of 63 teams overall, behind only four Advanced-bracket teams, in a day-long team Capture The Flag at TU/e organised by E.S.H.A. Trojan and WhiteHats B.V. Challenges covered web, cryptography, forensics, reverse engineering, binary exploitation, OSINT and AI.',
    short: '1st of 37 teams (Beginners) and 5th of 63 overall in a day-long team CTF at TU/e.',
  },
];

export type Certification = {
  name: string;
  issuer: string;
  date: string;
  link?: string;
};

// Completed certificates only. The section stays hidden while this list is empty.
// Planned: MathWorks Simulink Onramp, MathWorks Stateflow Onramp, Hack The Box CPTS.
export const certifications: Certification[] = [];

// Notable coursework not shown as full projects.
export const coursework = [
  'C programming: seven assignments including recursive maze pathfinding and a dynamic-memory word concordance',
  'Signals with MATLAB: Fourier series, phasors and spectral synthesis',
  'Real-time control with MATLAB/Simulink on Speedgoat target hardware',
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: 'Power electronics & control',
    items: ['DC-DC converters', 'PWM & gate drive', 'Control systems', 'Analog & digital circuits'],
  },
  {
    group: 'Simulation & analysis',
    items: ['MATLAB', 'Simulink', 'Speedgoat', 'CFD', 'Signal processing / DSP'],
  },
  {
    group: 'Embedded & automotive',
    items: ['STM32 (HAL, CubeMX)', 'Arduino', 'Raspberry Pi', 'ESP-NOW', 'CAN bus', 'SocketCAN', 'DBC', 'PWM / ADC / interrupts'],
  },
  {
    group: 'Programming',
    items: ['C', 'C++', 'Python', 'Rust', 'Go', 'TypeScript / JavaScript', 'Swift', 'Bash', 'x86 & RISC-V assembly'],
  },
  {
    group: 'Software & web',
    items: ['React', 'React Native (Expo)', 'SwiftUI', 'Electron', 'Flask', 'PyTorch', 'WebAssembly', 'Docker', 'Git & GitHub Actions', 'Nginx / Apache'],
  },
  {
    group: 'Design & tools',
    items: ['Fusion 360', 'AutoCAD', '3D printing', 'LaTeX', 'Microsoft Office'],
  },
  {
    group: 'Systems & infrastructure',
    items: ['Linux (Ubuntu, Arch, Debian, RHEL)', 'Windows Server', 'TrueNAS', 'Unraid', 'Hyper-V', 'Dell iDRAC', 'Networking'],
  },
  {
    group: 'Security',
    items: ['Capture The Flag (CTF)', 'Ethical hacking', 'Passive network analysis (libpcap)', 'TLS / OS fingerprinting', 'Hack The Box & TryHackMe training'],
  },
];

export const languages = [
  { name: 'English', level: 'Fluent' },
  { name: 'Greek', level: 'Fluent' },
];

export const interests = ['Photography', 'Music (bass guitar)', 'Electronics & circuit design', 'Server hardware & homelab'];

// Turn sections on or off.
export const features = {
  photography: true,
};
