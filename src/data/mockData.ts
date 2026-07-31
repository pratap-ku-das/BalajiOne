export interface ServiceItem {
  id: string;
  title: string;
  category: 'web-mobile' | 'enterprise' | 'ai-automation' | 'cloud-devops';
  icon: string;
  shortDesc: string;
  fullDesc: string;
  features: string[];
  technologies: string[];
  deliverables: string[];
}

export interface ProductItem {
  id: string;
  title: string;
  badge: string;
  shortDesc: string;
  fullDesc: string;
  features: string[];
  technologies: string[];
  metrics: { label: string; value: string }[];
  demoUrl: string;
  gradient: string;
  imageBg: string;
}

export interface CaseStudyItem {
  id: string;
  title: string;
  client: string;
  industry: string;
  category: 'enterprise' | 'ai' | 'solar' | 'fintech' | 'edtech';
  description: string;
  challenge: string;
  solution: string;
  results: { metric: string; label: string }[];
  techStack: string[];
  image: string;
}

export interface TechCategory {
  category: string;
  items: { name: string; icon: string; description: string; tag: string }[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  content: string;
  videoThumb?: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  monthlyPriceInr: number;
  monthlyPriceUsd: number;
  annualPriceInr: number;
  annualPriceUsd: number;
  popular?: boolean;
  features: string[];
  cta: string;
}

export interface FAQItem {
  id: string;
  category: 'general' | 'tech' | 'pricing' | 'support';
  question: string;
  answer: string;
}

// ----------------------------------------------------
// Mock Data Collections (India & Global Enterprise)
// ----------------------------------------------------

export const COMPANY_INFO = {
  name: "BalajiOne",
  website: "https://balajione.dev",
  tagline: "Building Digital Solutions for the Future",
  mission: "To help Indian & global businesses grow through innovative software, AI solutions, automation, cloud technologies, and digital transformation.",
  vision: "To become one of India's leading global software and AI solution providers.",
  phone: "+91 93485 32113",
  whatsapp: "919348532113",
  contactEmail: "contact@balajione.dev",
  supportEmail: "support@balajione.dev",
  email: "contact@balajione.dev",
  address: "Plot No- 2064/719, Near Saikrupa Enclave, Dumduma, Bhubaneswar, Odisha-751019",
  secondaryAddress: "Bhubaneswar (Odisha) | BalajiOne Tech Hub",
  coordinates: "20.2514° N, 85.7891° E",
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "website-development",
    title: "Website Development",
    category: "web-mobile",
    icon: "Globe",
    shortDesc: "Ultra-fast, responsive web applications engineered with Next.js, React, and modern micro-animations.",
    fullDesc: "We design and build bespoke web portals, marketing platforms, and SaaS web applications that combine high performance with world-class user aesthetics.",
    features: ["Sub-second page load speed", "Full SEO & Schema.org integration", "Tailwind CSS & Framer Motion design system", "CMS & Headless backend setup"],
    technologies: ["React 19", "Next.js 15", "TypeScript", "TailwindCSS", "Node.js"],
    deliverables: ["Production Web Application", "Design Source Files", "CI/CD Deployment Pipeline"]
  },
  {
    id: "mobile-app-development",
    title: "Mobile App Development",
    category: "web-mobile",
    icon: "Smartphone",
    shortDesc: "Cross-platform iOS and Android mobile applications crafted for sleek performance and intuitive user experience.",
    fullDesc: "From consumer apps to enterprise field agent tools, we deliver native-feeling iOS and Android applications powered by React Native and Flutter.",
    features: ["Offline-first data sync", "Biometric authentication & push notifications", "UPI & payment gateway integration", "App Store & Play Store publishing"],
    technologies: ["Flutter", "React Native", "TypeScript", "Firebase", "GraphQL"],
    deliverables: ["iOS App Store Build", "Android APK/AAB Package", "Mobile Backend APIs"]
  },
  {
    id: "custom-software",
    title: "Custom Software Development",
    category: "enterprise",
    icon: "Code",
    shortDesc: "Tailor-made software architectures designed specifically to resolve complex enterprise workflows and operational bottlenecks.",
    fullDesc: "When off-the-shelf software falls short, BalajiOne builds robust, scale-ready custom software aligned precisely with your unique operational logic.",
    features: ["Domain-driven architecture", "Legacy application modernization", "High-throughput data processing", "Multi-tenant cloud architecture"],
    technologies: ["Node.js", "NestJS", "Python", "Java", "PostgreSQL", "Docker"],
    deliverables: ["Microservice Architecture", "Comprehensive API Docs", "Admin Control Dashboard"]
  },
  {
    id: "erp-systems",
    title: "Enterprise ERP Systems",
    category: "enterprise",
    icon: "Layers",
    shortDesc: "Comprehensive Enterprise Resource Planning systems connecting inventory, finance, GST compliance, HR, and supply chain.",
    fullDesc: "Unify every department under a single intelligent operating system with automated GST approval flows, real-time analytics, and role-based access control.",
    features: ["Inventory & Supply Chain tracking", "GST & e-Invoicing compliant financial ledger", "HR & Payroll automation with EPF/ESI", "Custom reporting engine"],
    technologies: ["NestJS", "React", "PostgreSQL", "Redis", "Docker"],
    deliverables: ["End-to-End ERP Deployment", "Role-based Access Portal", "Data Migration Engine"]
  },
  {
    id: "crm-systems",
    title: "CRM Systems",
    category: "enterprise",
    icon: "Users",
    shortDesc: "High-converting Customer Relationship Management portals tailored to streamline sales pipelines and customer journeys.",
    fullDesc: "Empower sales teams with automated lead scoring, deal pipeline management, WhatsApp & SMS integration, and revenue forecasting.",
    features: ["Visual Kanban deal pipelines", "Automated WhatsApp & Email follow-ups", "AI lead scoring & insights", "Customer support ticketing system"],
    technologies: ["Next.js", "Node.js", "MongoDB", "TailwindCSS"],
    deliverables: ["Custom CRM Platform", "Sales Funnel Dashboard", "Third-party Integrations"]
  },
  {
    id: "school-erp",
    title: "School & Campus ERP",
    category: "enterprise",
    icon: "GraduationCap",
    shortDesc: "All-in-one educational institute management software for CBSE, ICSE, and State Board schools & colleges.",
    fullDesc: "Transform educational campus management with digital attendance, online UPI fee gateways, automated report cards, library management, and real-time parent apps.",
    features: ["Online fee collection via UPI/Razorpay with instant SMS receipts", "Student & Teacher mobile apps", "Automated attendance via RFID/Biometrics", "CBSE/ICSE gradebook & report card generator"],
    technologies: ["React", "NestJS", "PostgreSQL", "Flutter"],
    deliverables: ["School Management System", "Parent-Teacher Mobile App", "Biometric Integration API"]
  },
  {
    id: "invoice-software",
    title: "Invoice & GST Billing Software",
    category: "enterprise",
    icon: "FileText",
    shortDesc: "Automated GST & E-Way bill compliant invoicing software featuring recurring billing, expense tracking, and UPI payment links.",
    fullDesc: "Simplify invoicing with automated recurring billing, GST tax calculation, Razorpay/UPI gateway webhooks, expense analytics, and tax audit trails.",
    features: ["One-click PDF GST invoice & E-Way bill generation", "Razorpay, PayTM & PhonePe integration", "Recurring subscription billing", "Automated WhatsApp payment reminder workflows"],
    technologies: ["Next.js", "TypeScript", "Node.js", "PostgreSQL"],
    deliverables: ["Billing Application", "Client Payment Gateway", "Financial Reporting Hub"]
  },
  {
    id: "solar-crm",
    title: "Solar & Renewable Energy CRM",
    category: "enterprise",
    icon: "Sun",
    shortDesc: "Specialized CRM for Indian solar EPC contractors managing lead capture, site survey reports, MNRE subsidy tracking, and installation timelines.",
    fullDesc: "Designed specifically for renewable energy businesses to calculate solar roof capacity, generate instant financial payback proposals, and coordinate field technicians.",
    features: ["Automated solar generation & payback calculator", "Proposal builder with 3D roof layout preview", "Field technician mobile dispatch app", "PM Surya Ghar & MNRE subsidy status tracker"],
    technologies: ["React", "Python", "PostgreSQL", "Google Maps API"],
    deliverables: ["Solar CRM Operating System", "Proposal PDF Generator", "Technician Mobile Portal"]
  },
  {
    id: "ai-development",
    title: "Custom AI & Machine Learning",
    category: "ai-automation",
    icon: "Cpu",
    shortDesc: "Proprietary AI models, LLM fine-tuning, predictive analytics, and computer vision built for enterprise automation.",
    fullDesc: "Harness artificial intelligence to extract actionable business insights, automate repetitive document processing, and power next-gen smart products.",
    features: ["Custom RAG (Retrieval-Augmented Generation)", "Fine-tuned domain LLMs", "Predictive churn & revenue models", "OCR document & Aadhaar/PAN data extraction"],
    technologies: ["Python", "OpenAI API", "PyTorch", "LangChain", "Pinecone Vector DB"],
    deliverables: ["Trained AI Model API", "Vector Database Pipeline", "Executive Insights Dashboard"]
  },
  {
    id: "ai-chatbots",
    title: "AI Conversational Chatbots",
    category: "ai-automation",
    icon: "Bot",
    shortDesc: "Smart multi-lingual AI conversational agents integrated with WhatsApp, Website, CRM, and Zendesk.",
    fullDesc: "Provide 24/7 customer support in English, Hindi, Tamil, Telugu, Marathi, and Gujarati. Instantly qualify inbound sales leads on WhatsApp.",
    features: ["Multi-lingual (Hindi, English, Regional) context memory", "WhatsApp Business API & Web Chat integration", "Seamless human agent handoff", "Omnichannel: Web, WhatsApp, Telegram, Email"],
    technologies: ["OpenAI GPT-4o", "LangChain", "Node.js", "WebSockets"],
    deliverables: ["Embeddable Web Chat Widget", "WhatsApp API Bot", "Bot Analytics Control Center"]
  },
  {
    id: "cloud-solutions",
    title: "Cloud Architecture & Migration",
    category: "cloud-devops",
    icon: "Cloud",
    shortDesc: "Architecting high-availability AWS, Azure, and Google Cloud infrastructure with auto-scaling and zero-downtime resilience.",
    fullDesc: "Migrate legacy workloads to modern cloud infrastructure designed for 99.99% availability, strict compliance, and optimized cloud spend.",
    features: ["Zero-downtime database migration", "Kubernetes container orchestration", "Serverless microservices", "Cost optimization & cloud audit"],
    technologies: ["AWS", "Google Cloud", "Docker", "Kubernetes", "Terraform"],
    deliverables: ["Cloud Architecture Blueprint", "Automated Terraform Scripts", "Cost Monitoring Dashboard"]
  },
  {
    id: "devops",
    title: "DevOps & CI/CD Pipelines",
    category: "cloud-devops",
    icon: "GitBranch",
    shortDesc: "Automated continuous integration and deployment pipelines for friction-free software shipping and infrastructure monitoring.",
    fullDesc: "Accelerate your release cycles with robust CI/CD pipelines, automated security scanning, containerization, and 24/7 infrastructure observability.",
    features: ["Automated testing & linting gates", "GitOps deployment with ArgoCD/GitHub Actions", "Real-time metrics with Prometheus & Grafana", "Automated database backups"],
    technologies: ["GitHub Actions", "Docker", "Kubernetes", "Prometheus", "Datadog"],
    deliverables: ["Fully Automated CI/CD Pipeline", "Grafana Monitoring Suite", "Disaster Recovery Playbook"]
  },
  {
    id: "ui-ux-design",
    title: "UI/UX & Product Design",
    category: "web-mobile",
    icon: "Palette",
    shortDesc: "Luxury, modern, pixel-perfect user interface design and interaction prototyping engineered to convert visitors into loyal customers.",
    fullDesc: "We create visual design systems, sleek dark-mode glassmorphic layouts, user research maps, and dynamic interactive prototypes.",
    features: ["Comprehensive Figma design systems", "Interactive micro-animation specs", "User persona research & wireframing", "Accessibility (WCAG 2.1 AA) compliance"],
    technologies: ["Figma", "Framer", "CSS Glassmorphism", "Space Grotesk typography"],
    deliverables: ["Full Figma UI Kit", "Design Tokens", "Interactive Prototype"]
  },
  {
    id: "api-development",
    title: "API Development & Integration",
    category: "enterprise",
    icon: "Zap",
    shortDesc: "High-performance RESTful and GraphQL APIs engineered for lightning latency, secure authentication, and third-party connectivity.",
    fullDesc: "Connect disparate software platforms, Razorpay/Stripe payment providers, ERP systems, and cloud databases with secure, documented APIs.",
    features: ["JWT & OAuth2.0 authentication", "OpenAPI (Swagger) interactive docs", "Rate limiting & DDoS protection", "Webhook event bus"],
    technologies: ["Node.js", "NestJS", "Python FastAPI", "GraphQL", "Redis"],
    deliverables: ["Swagger Interactive Documentation", "SDK Client Libraries", "API Gateway Configuration"]
  },
  {
    id: "automation",
    title: "Business Process Automation",
    category: "ai-automation",
    icon: "Workflow",
    shortDesc: "Automating repetitive business workflows, GST data entry, email sequences, and cross-platform sync to boost productivity by 10x.",
    fullDesc: "Eliminate manual data entry and human error with customized RPA (Robotic Process Automation), Zapier/Make enterprise webhooks, and automated data pipelines.",
    features: ["PDF invoice data extraction & ledger entry", "Multi-app workflow orchestrations", "Automated email parsing & response", "Real-time WhatsApp/Slack notifications"],
    technologies: ["Python", "Node.js", "OpenAI", "n8n", "PostgreSQL"],
    deliverables: ["Automated Workflow Engine", "Exception Alerting System", "ROI Analytics Dashboard"]
  },
  {
    id: "maintenance",
    title: "24/7 Software Maintenance & Security",
    category: "cloud-devops",
    icon: "ShieldCheck",
    shortDesc: "Proactive security patching, continuous performance monitoring, bug resolution, and uptime guarantees for your critical systems.",
    fullDesc: "Keep your application secure, fast, and up-to-date with our dedicated 24/7 engineering team monitor, SLAs, and regular feature enhancement sprints.",
    features: ["Strict 15-minute emergency SLA", "Automated vulnerability patching", "Monthly performance optimization sprints", "Daily cloud backup verification"],
    technologies: ["AWS CloudWatch", "Sentry", "Datadog", "GitHub Actions"],
    deliverables: ["Monthly Security Audit Report", "24/7 Emergency Support Portal", "SLA Guarantee Contract"]
  }
];

export const PRODUCTS_DATA: ProductItem[] = [
  {
    id: "invoice-platform",
    title: "BalajiOne Invoice & GST Cloud",
    badge: "Enterprise SaaS",
    shortDesc: "Next-generation automated billing platform supporting GST compliance, e-Invoicing, Razorpay/UPI integration, and recurring billing.",
    fullDesc: "An all-in-one financial operational hub designed for Indian startups and growing enterprises. Streamlines GST invoice generation, UPI payment links, subscription management, and real-time cash flow analytics.",
    features: [
      "Instant PDF GST invoice & E-Way bill creation with custom branding",
      "Razorpay, PayTM, PhonePe & Stripe automated webhook billing",
      "Automated GST (CGST/SGST/IGST) tax calculation",
      "Automated WhatsApp & Email payment reminders",
      "Client self-service billing portal"
    ],
    technologies: ["Next.js 15", "TypeScript", "NestJS", "PostgreSQL", "TailwindCSS"],
    metrics: [
      { label: "Invoice Processing Speed", value: "< 100ms" },
      { label: "Payment Recovery Rate", value: "+34%" },
      { label: "Active Billing Processed", value: "₹450 Cr+" }
    ],
    demoUrl: "https://balajione.dev/demo/invoice",
    gradient: "from-blue-600 to-cyan-500",
    imageBg: "rgba(37, 99, 235, 0.15)"
  },
  {
    id: "school-erp-platform",
    title: "CampusOne School & College ERP",
    badge: "EdTech Solution",
    shortDesc: "Comprehensive campus management platform connecting CBSE/ICSE schools, teachers, students, and parents into a single synchronized mobile app.",
    fullDesc: "Empower educational institutions to eliminate manual paperwork. Manages admissions, RFID attendance, online UPI fee gateways, report cards, and homework submission.",
    features: [
      "Parent mobile app with real-time bus GPS tracking",
      "Automated online fee collection via UPI with instant SMS alerts",
      "CBSE & ICSE gradebook & automated report card generator",
      "Staff payroll & biometric attendance sync",
      "Digital library & inventory management"
    ],
    technologies: ["React", "Flutter Mobile App", "Node.js", "PostgreSQL", "Redis"],
    metrics: [
      { label: "Schools & Campuses Powered", value: "150+" },
      { label: "Parent App Engagement", value: "98.7%" },
      { label: "Paper Saved Annually", value: "18 Tons" }
    ],
    demoUrl: "https://balajione.dev/demo/school",
    gradient: "from-purple-600 to-indigo-500",
    imageBg: "rgba(139, 92, 246, 0.15)"
  },
  {
    id: "solar-crm-platform",
    title: "SolarPulse Renewable Energy CRM",
    badge: "CleanTech CRM",
    shortDesc: "Dedicated CRM and lead-to-installation operating system engineered for Indian solar EPC contractors and installers.",
    fullDesc: "Accelerate solar projects from site survey to net metering. Features automated PV generation estimates, proposal generation, field crew dispatch, and PM Surya Ghar subsidy tracking.",
    features: [
      "3D roof layout & Solar PV generation simulator",
      "Instant PDF financial payback proposal generator in INR",
      "Technician mobile app for site survey photos & checklists",
      "Net-metering & PM Surya Ghar subsidy status tracking",
      "Automated lead assignment & sales pipeline map"
    ],
    technologies: ["Next.js", "Python FastApi", "Google Solar API", "PostgreSQL"],
    metrics: [
      { label: "Proposal Turnaround", value: "3 Mins" },
      { label: "Sales Conversion Lift", value: "+42%" },
      { label: "Solar Capacity Managed", value: "350 MW+" }
    ],
    demoUrl: "https://balajione.dev/demo/solarcrm",
    gradient: "from-amber-500 to-emerald-500",
    imageBg: "rgba(16, 185, 129, 0.15)"
  },
  {
    id: "ai-chatbot-engine",
    title: "CognitiveAI Enterprise Chatbot",
    badge: "GenAI Engine",
    shortDesc: "Autonomous AI chatbot trained on your company knowledge base to deliver instant multi-lingual support in Hindi, English, and regional languages.",
    fullDesc: "Turn visitors into customers with an intelligent AI chatbot that understands context, connects with your CRM database, and resolves complex technical questions 24/7 on WhatsApp.",
    features: [
      "Custom vector RAG indexing of PDFs, docs & websites",
      "Omnichannel deployment: Web, WhatsApp Business, iOS/Android",
      "Live human agent handoff with conversation context",
      "Lead capture & meeting scheduling integration",
      "Enterprise security with data encryption"
    ],
    technologies: ["OpenAI GPT-4o", "LangChain", "Pinecone", "WebSockets", "Node.js"],
    metrics: [
      { label: "Support Ticket Deflection", value: "78%" },
      { label: "Average Response Time", value: "< 1.2s" },
      { label: "Languages Supported", value: "45+" }
    ],
    demoUrl: "https://balajione.dev/demo/aichat",
    gradient: "from-cyan-500 to-blue-600",
    imageBg: "rgba(6, 182, 212, 0.15)"
  },
  {
    id: "business-dashboard",
    title: "BalajiOne Command Center Dashboard",
    badge: "Analytics Suite",
    shortDesc: "Executive BI command center providing real-time data visualization, predictive forecasting, and unified multi-system telemetry.",
    fullDesc: "Gain single-pane-of-glass visibility across sales, cloud infrastructure, financial health, and team performance with customizable glassmorphic widgets.",
    features: [
      "Real-time streaming data visualization",
      "Predictive revenue & churn forecasting AI",
      "Customizable glassmorphic widget library",
      "Automated weekly executive email summaries",
      "Role-based security & audit logging"
    ],
    technologies: ["React 19", "TailwindCSS", "Recharts", "Node.js", "Redis"],
    metrics: [
      { label: "Data Refresh Frequency", value: "Real-time" },
      { label: "Executive Decision Speed", value: "3x Faster" },
      { label: "System Telemetry Integrations", value: "100+" }
    ],
    demoUrl: "https://balajione.dev/demo/dashboard",
    gradient: "from-blue-500 to-purple-600",
    imageBg: "rgba(37, 99, 235, 0.15)"
  }
];

export const CASE_STUDIES: CaseStudyItem[] = [
  {
    id: "solar-epc-transformation",
    title: "Scaling Solar EPC Operations Across 50+ Indian Cities",
    client: "SunRay Green Energy Ltd",
    industry: "Solar & Renewable Energy",
    category: "solar",
    description: "SunRay needed a custom solar CRM and automated proposal generation engine to scale site surveys and proposal delivery across India.",
    challenge: "Manual site survey reports took 24-48 hours per customer, resulting in high drop-off rates and lost sales opportunities.",
    solution: "BalajiOne deployed the SolarPulse CRM with automated solar irradiance calculation and mobile site survey app, cutting proposal generation time to 3 minutes.",
    results: [
      { metric: "92%", label: "Faster Proposal Delivery" },
      { metric: "3.5x", label: "Monthly Installation Capacity" },
      { metric: "₹85 Cr", label: "New Pipeline Generated" }
    ],
    techStack: ["React", "Python", "Google Maps API", "PostgreSQL", "TailwindCSS"],
    image: "/images/product-solar.jpg"
  },
  {
    id: "ai-fintech-automation",
    title: "AI-Powered Loan Processing & Risk Assessment Engine",
    client: "Apex Financial India",
    industry: "Banking & Finance",
    category: "fintech",
    description: "Built an intelligent document processing and risk scoring AI engine that evaluates loan applications in real-time.",
    challenge: "Underwriters manually inspected 30+ pages of bank statements, GST returns, and IT returns, taking up to 3 business days per applicant.",
    solution: "Developed custom OCR & LLM pipelines to extract document metrics, verify GST compliance, and score credit risk in under 30 seconds.",
    results: [
      { metric: "< 30s", label: "Average Approval Time" },
      { metric: "99.2%", label: "OCR Data Accuracy" },
      { metric: "65%", label: "Reduction in Operational Cost" }
    ],
    techStack: ["Python", "OpenAI GPT-4", "FastAPI", "React", "Docker"],
    image: "/images/erp-systems.jpg"
  },
  {
    id: "enterprise-school-erp",
    title: "Digitizing 40+ Campuses with Unified School ERP",
    client: "Global Knowledge Academy",
    industry: "Educational Institutions",
    category: "edtech",
    description: "Unified academic operations, parent communication, and online fee processing across 45,000+ students in India.",
    challenge: "Disparate campus databases caused fee reconciliation delays and poor parent engagement.",
    solution: "Deployed CampusOne School ERP with real-time parent apps, biometric attendance, and automated Razorpay UPI payment gateways.",
    results: [
      { metric: "100%", label: "On-Time Fee Collection" },
      { metric: "45,000+", label: "Active Mobile App Users" },
      { metric: "0", label: "Manual Reconciliation Errors" }
    ],
    techStack: ["React", "NestJS", "Flutter", "PostgreSQL", "Redis"],
    image: "/images/school-erp.jpg"
  },
  {
    id: "healthcare-ai-diagnostics",
    title: "Cloud Patient Portal & Telehealth Platform",
    client: "MediCare Health India",
    industry: "Healthcare",
    category: "ai",
    description: "HIPAA-compliant telemedicine web & mobile application connecting specialists with remote patients.",
    challenge: "High clinic wait times and lack of secure remote consultation tools for post-surgery follow ups.",
    solution: "BalajiOne engineered an end-to-end encrypted video consultation platform with integrated EHR sync and automated AI symptom intake.",
    results: [
      { metric: "150K+", label: "Virtual Consultations" },
      { metric: "99.99%", label: "Platform Availability" },
      { metric: "4.9/5", label: "Patient Rating" }
    ],
    techStack: ["Next.js", "WebRTC", "Node.js", "AWS MedTech", "TailwindCSS"],
    image: "/images/cyber-security.jpg"
  }
];

export const TECH_CATEGORIES: TechCategory[] = [
  {
    category: "Frontend Engineering",
    items: [
      { name: "React 19", icon: "Code2", description: "Modern UI library with concurrent rendering", tag: "UI Core" },
      { name: "Next.js 15", icon: "Globe", description: "Full-stack React framework with App Router & SSR", tag: "Full-Stack" },
      { name: "TypeScript", icon: "FileCode", description: "Type-safe JavaScript for enterprise scale", tag: "Language" },
      { name: "TailwindCSS", icon: "Palette", description: "Utility-first CSS styling engine", tag: "Styling" },
      { name: "Framer Motion", icon: "Sparkles", description: "Production-ready motion library for React", tag: "Animation" },
    ]
  },
  {
    category: "Backend & Cloud",
    items: [
      { name: "Node.js", icon: "Server", description: "Event-driven runtime for high-concurrency APIs", tag: "Runtime" },
      { name: "NestJS", icon: "Cpu", description: "Progressive Node.js framework for scalable backends", tag: "Architecture" },
      { name: "Python", icon: "Terminal", description: "Primary language for AI pipelines & data processing", tag: "AI/Backend" },
      { name: "Java", icon: "Coffee", description: "Robust enterprise microservices foundation", tag: "Enterprise" },
      { name: "Docker", icon: "Box", description: "Containerization for seamless environment deployment", tag: "DevOps" },
      { name: "AWS", icon: "Cloud", description: "Scalable cloud infrastructure & serverless services", tag: "Cloud Infrastructure" },
    ]
  },
  {
    category: "Artificial Intelligence & DB",
    items: [
      { name: "OpenAI GPT-4o", icon: "Bot", description: "Cutting-edge GenAI models for conversational systems", tag: "GenAI" },
      { name: "PostgreSQL", icon: "Database", description: "Advanced relational database with vector search", tag: "Relational DB" },
      { name: "MongoDB", icon: "Layers", description: "High-performance NoSQL document store", tag: "NoSQL DB" },
      { name: "Flutter", icon: "Smartphone", description: "Cross-platform native mobile app framework", tag: "Mobile" },
      { name: "GitHub Actions", icon: "GitBranch", description: "Automated CI/CD workflow automation", tag: "Automation" },
    ]
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter Growth",
    tagline: "Ideal for Indian startups & growing businesses launching modern digital products.",
    monthlyPriceInr: 16000,
    monthlyPriceUsd: 199,
    annualPriceInr: 16000,
    annualPriceUsd: 199,
    features: [
      "Custom Responsive Web Application",
      "Tailwind CSS & Modern Animation System",
      "Basic CMS / Content Management",
      "Full SEO & Schema.org Optimization",
      "Standard SSL & Security Setup",
      "2 Weeks Post-Launch Support",
      "Full Source Code Ownership"
    ],
    cta: "Start Growth Project"
  },
  {
    id: "professional",
    name: "Professional Scale",
    tagline: "Designed for expanding businesses seeking custom software, GST ERP/CRM, or mobile apps.",
    monthlyPriceInr: 40000,
    monthlyPriceUsd: 479,
    annualPriceInr: 40000,
    annualPriceUsd: 479,
    popular: true,
    features: [
      "Everything in Starter Growth",
      "Custom Software / Mobile App (iOS & Android)",
      "Dedicated RESTful / GraphQL API Engine",
      "Custom CRM or GST ERP Integration",
      "AI WhatsApp Chatbot Integration",
      "Automated CI/CD Cloud Pipeline",
      "3 Months Dedicated Engineering SLA",
      "Priority 24/7 Support Channel"
    ],
    cta: "Scale Your Project"
  },
  {
    id: "enterprise",
    name: "Enterprise Global",
    tagline: "For enterprises requiring heavy custom AI pipelines, cloud infrastructure, and 99.99% uptime.",
    monthlyPriceInr: 56000,
    monthlyPriceUsd: 679,
    annualPriceInr: 56000,
    annualPriceUsd: 679,
    features: [
      "Everything in Professional Scale",
      "Multi-tenant Enterprise Software Architecture",
      "Custom GenAI / RAG Machine Learning Pipeline",
      "Full AWS / Azure Cloud Infrastructure Setup",
      "Legacy Code Migration & System Modernization",
      "Dedicated Senior Engineering Squad in India",
      "Guaranteed 15-Minute Emergency SLA",
      "SOC2 & ISO Security Compliance Setup"
    ],
    cta: "Deploy Enterprise Project"
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "test-1",
    name: "Marcus Vance",
    role: "Chief Technology Officer",
    company: "Apex Global Financial",
    avatar: "/images/avatar-marcus.jpg",
    rating: 5,
    content: "BalajiOne delivered our AI loan scoring platform in half the time expected. Their architecture design is sleek, secure, and has processed over ₹450 Cr without a single hitch."
  },
  {
    id: "test-2",
    name: "Priya Sundaram",
    role: "VP of Digital Transformation",
    company: "SunRay Green Energy India",
    avatar: "/images/avatar-emily.jpg",
    rating: 5,
    content: "The SolarPulse CRM custom built by BalajiOne revolutionized our entire installation pipeline. Our proposal turnarounds dropped from 2 days to 3 minutes!"
  },
  {
    id: "test-3",
    name: "Dr. Rajesh Sharma",
    role: "Managing Director",
    company: "Global Knowledge Academy India",
    avatar: "/images/avatar-sarah.jpg",
    rating: 5,
    content: "CampusOne ERP transformed how our 40+ campuses operate. Parents love the real-time app and our fee collection is 100% automated via UPI now."
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: "faq-1",
    category: "general",
    question: "What services does BalajiOne specialize in?",
    answer: "BalajiOne is an Indian technology company offering custom software development, mobile apps (iOS & Android), AI & Machine Learning solutions, enterprise GST ERP/CRM systems, cloud architecture (AWS/GCP), UI/UX design, and business process automation."
  },
  {
    id: "faq-2",
    category: "general",
    question: "Where is BalajiOne located and do you serve Indian and global clients?",
    answer: "Our primary technology engineering hub is located in Bengaluru (India Tech Capital) with regional offices in Delhi NCR and Mumbai. We serve clients across India and globally with 24/7 communication in IST and global timezones."
  },
  {
    id: "faq-3",
    category: "tech",
    question: "Do I retain 100% IP (Intellectual Property) ownership of the software?",
    answer: "Yes, absolutely! Upon completion of the project and milestone payment, 100% of the source code, design assets, and intellectual property rights belong exclusively to your company under strict legal contract."
  },
  {
    id: "faq-4",
    category: "pricing",
    question: "How long does a typical software project take from start to launch?",
    answer: "Timeline depends on scope. MVP projects typically take 4 to 8 weeks, while complex enterprise ERP or AI platforms range between 8 to 16 weeks. We use agile 2-week sprints with transparent progress demos."
  },
  {
    id: "faq-5",
    category: "support",
    question: "What kind of post-launch maintenance and support do you provide?",
    answer: "We offer dedicated 24/7 SLA maintenance plans that cover security updates, server monitoring, bug fixes, automated backups, and continuous feature updates to guarantee 99.99% uptime."
  }
];

export const WHY_CHOOSE_US = [
  { icon: "Zap", title: "Fast Delivery", description: "Agile 2-week sprint cycles ensuring rapid time-to-market without compromising code quality." },
  { icon: "MessageSquare", title: "Transparent Communication", description: "Daily Slack & WhatsApp updates, weekly demo calls, and real-time Jira / GitHub progress tracking." },
  { icon: "Scaling", title: "Scalable Architecture", description: "Cloud-native microservices designed from day one to handle millions of requests smoothly." },
  { icon: "Shield", title: "Security First", description: "SOC2 compliant standards, end-to-end data encryption, and vulnerability testing built in." },
  { icon: "Tag", title: "Competitive Pricing", description: "World-class engineering talent delivering maximum ROI with transparent pricing in INR & USD." },
  { icon: "Cpu", title: "Latest Technologies", description: "Leveraging React 19, Next.js 15, GenAI, and modern cloud stacks for long-term tech relevance." },
  { icon: "Clock", title: "24×7 Support", description: "Dedicated support team on standby with guaranteed emergency SLA response times in IST." },
  { icon: "Target", title: "Business Focused", description: "We don't just write code; we design solutions aligned with your revenue and growth goals." },
  { icon: "Award", title: "Global Standards", description: "Trusted by Indian enterprises, startups, and institutions across 15+ countries." }
];

export const PROCESS_STEPS = [
  { step: "01", title: "Discovery & Strategy", description: "We dive deep into your business goals, target audience, technical requirements, and project scope." },
  { step: "02", title: "Architecture & Planning", description: "Designing database schemas, API specs, cloud topology, and technical milestones for predictable delivery." },
  { step: "03", title: "UI/UX Design & Prototyping", description: "Creating pixel-perfect glassmorphic design systems, wireframes, and interactive Figma prototypes." },
  { step: "04", title: "Agile Engineering", description: "Writing clean, scalable code in 2-week sprints with automated unit testing and continuous integration." },
  { step: "05", title: "Quality Assurance & Security", description: "Rigorous automated testing, security vulnerability scans, cross-device QA, and load testing." },
  { step: "06", title: "Cloud Deployment", description: "Zero-downtime deployment to AWS/Google Cloud with CDN optimization, SSL, and monitoring setup." },
  { step: "07", title: "24/7 Growth & Support", description: "Post-launch monitoring, performance analytics, continuous enhancements, and 24/7 SLA maintenance." }
];
