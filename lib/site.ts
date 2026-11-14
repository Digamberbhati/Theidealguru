export type Mode = "Online" | "Offline" | "Online & Offline";
export type Category =
  | "Education"
  | "Counselling"
  | "Careers"
  | "Events"
  | "Wellness";

export interface Service {
  slug: string;
  title: string;
  description: string;
  category: Category;
  mode: Mode;
  icon: string;
}

export interface ServiceGroupData {
  category: Category;
  title: string;
  intro: string;
  href: string;
}

export interface LegalSectionData {
  heading: string;
  paragraphs?: readonly string[];
  bullets?: readonly string[];
}

export interface LegalPageData {
  title: string;
  lastUpdated: string;
  intro: string;
  sections: readonly LegalSectionData[];
  contactHeading: string;
  contactText: string;
  contactLinkLabel: string;
}

export const site = {
  name: "TheIdealGuru",
  tagline: "One Platform, Multiple Opportunities, Unlimited Growth.",
  subtitle: "Empowering education, skills, careers and well-being.",
  vision:
    "To provide a comprehensive digital platform that connects students, parents, teachers and professionals with quality education, career opportunities, counselling, skill development and wellness services through both online and offline modes.",
  email: "ankit@theideolguru.com",
  address: "Company address- 410, Ganesh Nagar part II,East Delhi -110092",
  siteUrl: "https://theidealguru.example",
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about/" },
    { label: "Services", href: "/services/" },
    { label: "Learning", href: "/learning/" },
    { label: "Careers", href: "/careers/" },
    { label: "Wellness", href: "/wellness/" },
    { label: "Events", href: "/events/" },
    { label: "Contact", href: "/contact/" },
  ],
  legalLinks: [
    { label: "Privacy Policy", href: "/privacy/" },
    { label: "Terms of Service", href: "/terms/" },
  ],
  footerVisionLabel: "Our vision",
  footerLinksLabel: "Quick links",
  footerLegalLabel: "Legal",
  contactLabel: "Contact",
  emailUs: "Email us",
  contactUs: "Contact us",
  copyEmail: "Copy email",
  copiedEmail: "Email copied",
  skipLink: "Skip to content",
  exploreServices: "Explore services",
  openMenu: "Open navigation menu",
  closeMenu: "Close navigation menu",
  copyright: "© 2026 TheIdealGuru. All rights reserved.",
  hero: {
    homeTitle: "Learn, grow and succeed.",
    homeDescription:
      "Education, skills, careers and well-being, online and offline, all in one place.",
    aboutTitle: "About TheIdealGuru",
    aboutDescription:
      "A digital platform bringing education, counselling, careers and wellness together through online and offline modes.",
    servicesTitle: "Our services",
    servicesDescription:
      "Explore education, counselling, careers, events and wellness in one place.",
    learningTitle: "Learning for every stage",
    learningDescription:
      "Guiding students and parents to the right stage of learning, from foundational school education to higher degrees and competitive milestones.",
    careersTitle: "Find the right career path.",
    careersDescription:
      "Explore personalised counselling, practical work experience and job placement support.",
    wellnessTitle: "Wellness for mind and body.",
    wellnessDescription:
      "Creating space for mental peace, emotional balance and personal well-being alongside academic and career growth.",
    eventsTitle: "Events and educational activities.",
    eventsDescription:
      "Explore moments of learning, recognition and community connection.",
    contactTitle: "Contact us",
    contactDescription: "We’d love to hear from you.",
  },
  home: {
    exploreServices: "Explore services",
    whoWeHelp: "Who we help",
    audiences: ["Students", "Parents", "Teachers", "Professionals"],
    serviceAreas: "Our service areas",
    communityTitle: "Real people, real events, real growth",
    viewEvents: "View events",
    whyTitle: "Why choose us",
    reasons: [
      {
        title: "Everything under one platform",
        text: "Access education, career counselling, skill courses and wellness sessions in a single unified space.",
      },
      {
        title: "Online and offline modes",
        text: "Choose the learning and guidance mode that fits your schedule, location and personal preferences.",
      },
      {
        title: "Guidance for the whole family and school community",
        text: "Holistic support tailored for students, parents, educators and working professionals alike.",
      },
      {
        title: "Practical career focus",
        text: "Connecting structured learning and counselling directly to internship opportunities and placement support.",
      },
    ],
  },
  about: {
    whoTitle: "Who we are",
    whoText:
      "TheIdealGuru is a digital platform bringing education, counselling, careers and wellness together through online and offline modes.",
    visionTitle: "Our vision",
    connectTitle: "Who we connect",
    connect: [
      {
        title: "Students",
        text: "Access structured learning, exam preparation, talent opportunities and holistic mentoring.",
      },
      {
        title: "Parents",
        text: "Receive dependable guidance to support your family’s academic decisions and personal growth.",
      },
      {
        title: "Teachers",
        text: "Connect with modern pedagogical resources, community events and collaborative activities.",
      },
      {
        title: "Professionals",
        text: "Explore upskilling certificates, career transitions, internships and wellness sessions.",
      },
    ],
    differenceTitle: "What makes us different",
    differences: [
      "Online + offline modes",
      "A full learning journey from school to career",
      "Support for mind and body",
      "One place for the whole family",
    ],
    photoCaption: "Moments from our events.",
  },
  serviceGroups: [
    {
      category: "Education",
      title: "Education & learning",
      intro: "Comprehensive academic instruction, language mastery, and test preparation for every milestone.",
      href: "/learning/",
    },
    {
      category: "Counselling",
      title: "Counselling",
      intro: "Empathetic, expert-led guidance for informed educational choices and career pathways.",
      href: "/careers/",
    },
    {
      category: "Careers",
      title: "Careers",
      intro: "Bridging foundational knowledge with hands-on internships and dedicated job placement support.",
      href: "/careers/",
    },
    {
      category: "Events",
      title: "Events",
      intro: "Engaging educational workshops, academic competitions, felicitations and community activities.",
      href: "/events/",
    },
    {
      category: "Wellness",
      title: "Wellness",
      intro: "Guided sessions for mental peace, yoga, meditation and stress management.",
      href: "/wellness/",
    },
  ] satisfies ServiceGroupData[],
  servicesIntro: {
    education:
      "From foundational school subjects and language mastery to competitive exam coaching and university admissions.",
    counselling:
      "Informed, personalised guidance for choosing educational pathways and specialised medical careers.",
    careers:
      "Hands-on work experience, industry internships, and active placement assistance.",
    events:
      "Interactive forums, academic challenges, and community gatherings that celebrate achievement.",
    wellness:
      "Mindfulness, yoga, and healing practices supporting academic and professional stamina.",
    notSure:
      "Not sure where to start? Contact us and we’ll point you to the right service.",
  },
  services: [
    {
      slug: "english-language-learning",
      title: "English Language Learning",
      description: "Develop English language proficiency, fluency and communication skills for everyday and academic growth.",
      category: "Education",
      mode: "Online & Offline",
      icon: "Languages",
    },
    {
      slug: "school-education-learning",
      title: "School Education & Learning",
      description: "Structured academic tutoring and curriculum support across core school subjects.",
      category: "Education",
      mode: "Online & Offline",
      icon: "BookOpen",
    },
    {
      slug: "college-education-guidance",
      title: "College Education & Guidance",
      description: "Academic mentoring, course selection guidance and degree pathway planning for undergraduates.",
      category: "Education",
      mode: "Online & Offline",
      icon: "GraduationCap",
    },
    {
      slug: "university-admissions-guidance",
      title: "University Admissions & Guidance",
      description: "Application consultation, profile building and university admissions advisory.",
      category: "Education",
      mode: "Online & Offline",
      icon: "School",
    },
    {
      slug: "certificate-courses",
      title: "Certificate Courses",
      description: "Short-term certified skill-building courses tailored to practical competency needs.",
      category: "Education",
      mode: "Online & Offline",
      icon: "BadgeCheck",
    },
    {
      slug: "competitive-exam-coaching",
      title: "Competitive Exam Coaching",
      description: "Targeted coaching, test strategies and conceptual revision for competitive entrance exams.",
      category: "Education",
      mode: "Online & Offline",
      icon: "Target",
    },
    {
      slug: "talent-hunt-examinations",
      title: "Talent Hunt Examinations",
      description: "Diagnostic examinations to identify, nurture and recognise emerging student talent.",
      category: "Education",
      mode: "Online & Offline",
      icon: "Trophy",
    },
    {
      slug: "career-counselling",
      title: "Career Counselling",
      description: "Personalised career profiling, aptitude alignment and actionable career pathway guidance.",
      category: "Counselling",
      mode: "Online & Offline",
      icon: "Compass",
    },
    {
      slug: "medical-counselling",
      title: "Medical Counselling",
      description:
        "Guidance and support for medical education and career opportunities.",
      category: "Counselling",
      mode: "Online & Offline",
      icon: "HeartPulse",
    },
    {
      slug: "internship-opportunities",
      title: "Internship Opportunities",
      description: "Practical work opportunities and hands-on projects to develop real-world workplace skills.",
      category: "Careers",
      mode: "Online & Offline",
      icon: "BriefcaseBusiness",
    },
    {
      slug: "job-placement-assistance",
      title: "Job & Placement Assistance",
      description: "Resume coaching, mock interviews and dedicated placement support connecting candidates with jobs.",
      category: "Careers",
      mode: "Online & Offline",
      icon: "Handshake",
    },
    {
      slug: "events-educational-activities",
      title: "Events & Educational Activities",
      description: "Academic seminars, student felicitation events, competitions and interactive educational initiatives.",
      category: "Events",
      mode: "Online & Offline",
      icon: "CalendarDays",
    },
    {
      slug: "yoga-meditation-sessions",
      title: "Yoga & Meditation Sessions",
      description: "Guided physical fitness, meditation and breathing routines to nurture peace and well-being.",
      category: "Wellness",
      mode: "Online & Offline",
      icon: "Flower2",
    },
    {
      slug: "healing-mental-wellness-sessions",
      title: "Healing & Mental Wellness Sessions",
      description: "Supportive sessions dedicated to emotional balance, stress reduction and personal growth.",
      category: "Wellness",
      mode: "Online & Offline",
      icon: "Sparkles",
    },
  ] satisfies Service[],
  learning: {
    journeyTitle: "Learning journey",
    journey: [
      "School",
      "College",
      "University",
      "Competitive exams",
      "Certificates",
    ],
    detailTitle: "Services at each stage",
    helpsLabel: "How it helps",
    details: [
      {
        slug: "english-language-learning",
        helps: "Builds essential language confidence and written/spoken fluency applicable to every stage of life.",
      },
      {
        slug: "school-education-learning",
        helps: "Strengthens academic foundations, clarifies core concepts and assists with regular school curriculum.",
      },
      {
        slug: "college-education-guidance",
        helps: "Assists students in navigating higher secondary and collegiate subject choices with clarity.",
      },
      {
        slug: "university-admissions-guidance",
        helps: "Simplifies institutional entrance criteria, application documentation and admission procedures.",
      },
      {
        slug: "certificate-courses",
        helps: "Equips learners with industry-aligned technical and practical credentials to boost employability.",
      },
      {
        slug: "competitive-exam-coaching",
        helps: "Provides focused mock testing, time management drills and rigorous conceptual mastery.",
      },
      {
        slug: "talent-hunt-examinations",
        helps: "Provides a structured stage to test problem-solving capabilities and earn peer recognition.",
      },
    ],
    talentDetails: "Details of upcoming examinations: [PLACEHOLDER]",
    teachersTitle: "For teachers and schools",
    teachersText:
      "Teachers and educational institutions can collaborate with TheIdealGuru to access curriculum guidance, host joint educational activities, and support students with holistic development programs.",
    cta: "Talk to us about your learning goals.",
  },
  careers: {
    counsellingTitle: "Personalised counselling",
    counsellingIntro: "Structured guidance to help you navigate academic choices and specialised careers with clarity.",
    pathTitle: "Your career progression",
    steps: ["Seek guidance", "Learn", "Intern", "Get placed"],
    practicalTitle: "Practical experience & placement support",
    internshipText:
      "Gain real-world experience, develop professional etiquette, and build a competitive portfolio through curated internship opportunities.",
    placementText:
      "Receive interview preparation, resume refinement, and placement assistance designed to connect you with the right job openings.",
    cta: "Take the next step in your career.",
  },
  wellness: {
    introTitle: "Supporting success from within",
    introText:
      "Academic performance and career achievements thrive on a balanced mind and body. Incorporating regular mindfulness, meditation, and physical well-being fosters clarity, emotional stamina, and lasting resilience.",
    featuresTitle: "Our wellness sessions",
    benefitsTitle: "Who benefits",
    benefits: [
      "Students under exam stress",
      "Professionals under work pressure",
      "Parents",
      "Teachers",
      "Anyone seeking balance",
    ],
    disclaimer:
      "Our wellness sessions support personal growth and well-being and are not a substitute for professional medical or emergency care.",
    cta: "Begin your wellness journey.",
    visualLabel: "Abstract warm ombre shapes representing mindfulness and balance",
  },
  events: {
    highlightsTitle: "Event highlights",
    intro:
      "Our events bring people together for learning, recognition and community connection.",
    highlights: [
      {
        title: "Learning together",
        text: "Students, families and educators connect through shared educational activities.",
      },
      {
        title: "Recognising achievement",
        text: "Felicitation moments celebrate the efforts and contributions of participants.",
      },
      {
        title: "Community connection",
        text: "Presentations and shared experiences bring people together.",
      },
    ],
    galleryTitle: "Moments from our events",
    cta: "Want to take part in or host an event? Contact us.",
    photos: [
      {
        src: "/images/felicitation.jpg",
        alt: "A participant is felicitated during a community event.",
        caption: "A moment of felicitation",
      },
      {
        src: "/images/magazine-launch.jpg",
        alt: "A group gathers on stage during a magazine launch.",
        caption: "A magazine launch",
      },
      {
        src: "/images/children-honoured.jpg",
        alt: "Young participants are honoured at an event.",
        caption: "Young participants honoured",
      },
      {
        src: "/images/plaque-presentation.jpg",
        alt: "A plaque is presented during a community event.",
        caption: "A plaque presentation",
      },
      {
        src: "/images/event-community-gathering.jpg",
        alt: "A group gathers on stage, with a participant holding a plaque.",
        caption: "A community gathering",
      },
      {
        src: "/images/event-stage-presentation.jpg",
        alt: "A guest speaks from a stage while participants gather nearby.",
        caption: "A stage presentation",
      },
    ],
  },
  contact: {
    emailTitle: "Email",
    addressTitle: "Address",
    howTitle: "How to reach us",
    howText:
      "Email us your name, the service you’re interested in, and your preferred mode (online or offline), and our team will get back to you.",
    emailSubject: "Enquiry about TheIdealGuru",
    prefilledMailto: "mailto:ankit@theideolguru.com?subject=Enquiry%20about%20TheIdealGuru",
    sendEnquiry: "Email us about an enquiry",
    directions: "Get directions",
    servicesTitle: "Services at a glance",
    mapTitle: "Map placeholder for TheIdealGuru",
    mapLabel: "Map showing the location placeholder for TheIdealGuru",
    mapQuery: "410, Ganesh Nagar part II, East Delhi -110092",
    socials: [
      { name: "LinkedIn", href: "#", icon: "Linkedin" },
      { name: "Twitter", href: "#", icon: "Twitter" },
      { name: "Instagram", href: "#", icon: "Instagram" },
      { name: "YouTube", href: "#", icon: "Youtube" },
    ],
  },
  privacyPolicy: {
    title: "Privacy Policy",
    lastUpdated: "Last updated: November 2026",
    intro:
      "TheIdealGuru (“we”, “us”, or “our”) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and protect your personal information when you use our website and services.",
    sections: [
      {
        heading: "Information We Collect",
        bullets: [
          "Name, email address, phone number, and other details you provide when you contact us about our programs.",
          "Basic usage data such as pages visited and device information.",
        ],
      },
      {
        heading: "How We Use Your Information",
        bullets: [
          "To respond to your queries and provide career guidance, internship, and placement support.",
          "To improve our website and services.",
          "To send important updates related to our programs (only if you have agreed).",
        ],
      },
      {
        heading: "Data Protection",
        paragraphs: [
          "We take reasonable measures to protect your personal information. We do not sell or rent your data to third parties.",
        ],
      },
      {
        heading: "Your Rights",
        paragraphs: [
          "You can request access, correction, or deletion of your personal data by contacting us.",
        ],
      },
    ],
    contactHeading: "Contact Us",
    contactText:
      "If you have any questions about this Privacy Policy, please contact us through the",
    contactLinkLabel: "Contact page.",
  } satisfies LegalPageData,
  termsOfService: {
    title: "Terms of Service",
    lastUpdated: "Last updated: November 2026",
    intro:
      "Welcome to TheIdealGuru. By using our website and services, you agree to the following terms:",
    sections: [
      {
        heading: "1. Services",
        paragraphs: [
          "We provide education, skill development, career guidance, internship opportunities, and placement support. All services are subject to availability and our internal policies.",
        ],
      },
      {
        heading: "2. User Responsibilities",
        paragraphs: [
          "You agree to provide accurate information and use our services only for lawful purposes.",
        ],
      },
      {
        heading: "3. Intellectual Property",
        paragraphs: [
          "All content on this website (text, images, logos, etc.) belongs to TheIdealGuru and may not be copied or used without permission.",
        ],
      },
      {
        heading: "4. Limitation of Liability",
        paragraphs: [
          "While we strive to provide quality guidance and support, we do not guarantee any specific job or internship outcome.",
        ],
      },
      {
        heading: "5. Changes to Terms",
        paragraphs: [
          "We may update these terms from time to time. Continued use of the website means you accept the updated terms.",
        ],
      },
    ],
    contactHeading: "Contact",
    contactText:
      "For any questions regarding these Terms, please reach out to us through the",
    contactLinkLabel: "Contact page.",
  } satisfies LegalPageData,
} as const;

export function servicesFor(category: Category): Service[] {
  return site.services.filter((service) => service.category === category);
}

export function serviceBySlug(slug: string): Service {
  const service = site.services.find((item) => item.slug === slug);
  if (!service) {
    throw new Error(`Unknown service slug: ${slug}`);
  }
  return service;
}

export function categoryId(category: Category): string {
  return category.toLowerCase();
}

export function contactHref(): string {
  return `/contact/`;
}
