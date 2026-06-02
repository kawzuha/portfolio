// Edit this file to update portfolio content later.
export const profile = {
  name: 'Avia Hemawati',
  avatar: '/foto-profil.jpg', // Masukkan nama file yang ada di folder public
  titles: ['UI/UX Designer', 'AI Trainer/Data Annotator', 'Customer Service Representative'],
  intro:
    "I'm passionate about creating experiences that are both functional and enjoyable. My journey has taken me through UI/UX design, AI training, and customer service, giving me a unique perspective on how people interact with products and technology.",
  summary:
    "I enjoy understanding user needs, solving problems, and turning ideas into meaningful solutions. Whether I'm designing interfaces, working with data to improve AI systems, or supporting customers, my goal is always the same: to create better experiences for the people who use them. I'm always eager to learn, grow, and contribute to projects that combine creativity, technology, and human-centered thinking.",
  years: [
    { label: 'Design Experience', value: '1 year' },
    { label: 'AI Training', value: '5+ years' },
    { label: 'Customer Support', value: '4 years' }
  ]
};

export const experiences = [
  {
    id: 'uiux',
    title: 'UI/UX Designer',
    overview:
      'Designs clean, accessible, and user-friendly interfaces from early concept through polished product flows.',
    responsibilities: [
      'Designing intuitive user interfaces for web and mobile applications with a strong focus on accessibility and user-centric flows.',
      'Developing high-fidelity wireframes and interactive prototypes to visualize project requirements and user journeys.',
      'Leveraging cutting-edge AI tools to streamline UX research, content generation, and rapid prototyping workflows.',
      'Ensuring visual and functional consistency by maintaining design standards and components across different platforms.'
    ],
    skills: ['Visual Design', 'User Empathy', 'Interaction Design', 'Problem Solving'],
    tools: ['Canva (UI Mockups & Visual Design)', 'Claude (UX Research & Content Generation)', 'Gemini (Ideation & Problem Solving)', 'Codex (Code Assistance & Rapid Prototyping)']
  },
  {
    id: 'ai',
    title: 'AI Trainer/Data Annotator',
    overview:
      'Evaluates AI responses and training data with precision, consistency, and a strong sense of quality.',
    responsibilities: [
      'Conducting high-precision data annotation and labeling to improve the accuracy and performance of AI models.',
      'Rigorously evaluating AI-generated responses for relevance, factual correctness, safety, and human-like tone.',
      'Performing iterative quality reviews of training datasets to identify and mitigate potential model biases.',
      'Collaborating on prompt engineering strategies to refine how AI models interpret and respond to complex queries.'
    ],
    skills: ['Analytical Thinking', 'Attention to Detail', 'AI Evaluation', 'Clear Communication'],
    tools: ['Annotation Platforms', 'Google Sheets', 'Excel', 'Quality Guidelines']
  },
  {
    id: 'csr',
    title: 'Customer Service Representative',
    overview:
      'Supports customers through thoughtful communication, issue resolution, and a calm service experience.',
    responsibilities: [
      'Providing empathetic and efficient support for complex customer inquiries, ensuring high satisfaction and resolution rates.',
      'Investigating technical issues and managing escalations to cross-functional teams for timely problem-solving.',
      'Developing and maintaining internal support documentation to improve service consistency and knowledge sharing.',
      'Analyzing customer feedback trends to provide actionable insights for product and service quality improvements.'
    ],
    skills: ['Empathy', 'Conflict Resolution', 'Active Listening', 'Time Management'],
    tools: ['CRM Platforms', 'Email Support', 'Live Chat', 'Knowledge Bases']
  }
];

export const education = [
  {
    institution: 'Brawijaya University',
    degree: 'English Literature / Linguistics',
    year: '2014 - 2018',
    gpa: 'GPA: 3.82 / 4.00',
    achievements: 'Relevant Coursework: Semantics, Pragmatics, Phonetics, Syntax, Translation, and Interpretation.'
  }
];

export const projects = [
  {
    title: 'Today I Learned',
    description: 'A digital space for capturing everyday insights, helping users turn small discoveries into lasting knowledge and meaningful growth.',
    link: 'https://things-i-learned-today.netlify.app/'
  }
];

export const contact = [
  { label: 'Email', value: 'aviahemawati@gmail.com', href: 'mailto:aviahemawati@gmail.com' },
  { label: 'Phone', value: '+6281216436472', href: 'https://wa.me/6281216436472' },
  { label: 'Instagram', value: '@dejuniodejune', href: 'https://instagram.com/dejuniodejune' },
  { label: 'Location', value: 'Singosari, Malang', href: 'https://www.google.com/maps/place/Singosari,+Malang+Regency,+East+Java+65153/@-7.8476097,112.6687889,12z/data=!3m1!4b1!4m6!3m5!1s0x2dd62adb124cca5f:0x1c00c5eb5b5412e0!8m2!3d-7.8685356!4d112.6556213!16s%2Fg%2F11h0jtd0j?entry=ttu&g_ep=EgoyMDI2MDUyNy4wIKXMDSoASAFQAw%3D%3D' }
];
