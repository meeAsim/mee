export interface CaseStudy {
  id: number;
  title: string;
  category: string;
  description: string;
  background: string;
  problem: string;
  execution: string;
  result: string[];
  keyOutcome: string;
  gradient: string;
  image: string;
  tags: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "Kathmandu Fashion Brand Digital Growth",
    category: "E-Commerce Marketing",
    description:
      "Scaling a Kathmandu-based clothing brand through social media marketing and conversion-focused e-commerce improvements.",

    background:
      "A small fashion brand based in Kathmandu had built a loyal offline customer base through its boutique store. However, the brand struggled to scale its online presence despite having a Shopify website and active social media accounts. The business wanted to expand nationwide and reach younger digital-first consumers across Nepal.",

    problem:
      "The brand faced low website traffic, weak social media engagement, and poor conversion rates. Paid advertisements were inconsistent and lacked audience targeting, resulting in high marketing costs and minimal return on investment.",

    execution:
      "We redesigned product pages to improve conversions, created targeted Meta and TikTok advertising campaigns, collaborated with Nepali fashion influencers, and implemented performance tracking for ad optimization.",

    result: [
      "Website traffic increased by 300% within 4 months",
      "Instagram followers grew from 3,000 to over 40,000",
      "Conversion rate improved from 1.2% to 3.8%",
      "Customer acquisition cost decreased by 45%"
    ],

    keyOutcome:
      "Revenue increased by 350% within four months of campaign launch.",
    gradient: "from-purple-600/80 to-indigo-900/80",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",

    tags: ["Shopify", "Meta Ads", "TikTok Ads", "Influencer Marketing"]
  },

  {
    id: 2,
    title: "Pokhara Adventure Tourism Booking Growth",
    category: "Tourism Marketing",
    description:
      "Driving international and domestic bookings for a Pokhara-based adventure tourism company.",

    background:
      "A tourism agency in Pokhara offered services including paragliding, trekking, rafting, and guided mountain expeditions. The company relied heavily on travel agents and referrals, limiting its ability to reach travelers planning trips online.",

    problem:
      "The agency had minimal digital visibility, outdated website design, and low search rankings for key travel-related keywords.",

    execution:
      "We redesigned the company website, optimized SEO targeting trekking and adventure tourism searches, and launched Google Ads campaigns targeting international travelers researching Nepal.",

    result: [
      "Organic search traffic increased by 280%",
      "Direct website bookings doubled within 5 months",
      "Average booking value increased by 35%",
      "Bounce rate reduced from 68% to 41%"
    ],

    keyOutcome:
      "Online bookings increased by 120% while reducing reliance on travel agents.",
    
    gradient: "from-blue-600/80 to-cyan-900/80",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80",

    tags: ["SEO", "Google Ads", "Tourism Marketing", "Web Design"]
  },

  {
    id: 3,
    title: "Kathmandu Restaurant Chain Online Orders",
    category: "Local Business Marketing",
    description:
      "Improving digital visibility and online ordering for a multi-location restaurant chain in Kathmandu.",

    background:
      "A growing restaurant chain with several outlets across Kathmandu relied primarily on dine-in customers and food delivery platforms such as Foodmandu and Pathao Food.",

    problem:
      "The business had limited direct customer engagement online and depended heavily on third-party delivery platforms, which reduced profit margins.",

    execution:
      "We optimized Google Business listings, launched Instagram and Facebook ad campaigns, and promoted exclusive offers encouraging customers to order directly from the restaurant website.",

    result: [
      "Online orders increased by 220%",
      "Google Business profile views increased by 180%",
      "Instagram engagement increased by 300%",
      "Direct website orders grew by 95%"
    ],

    keyOutcome:
      "Monthly revenue increased by 70% while reducing dependency on delivery platforms.",
    gradient: "from-teal-600/80 to-emerald-900/80",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    tags: ["Local SEO", "Facebook Ads", "Instagram Marketing", "Google Business"]
  },

  {
    id: 4,
    title: "Nepali EdTech Platform Nationwide Adoption",
    category: "Education Technology",
    description:
      "Growing a Nepali online learning platform targeting +2 and bachelor level students.",

    background:
      "A Nepali edtech startup launched an online learning platform offering video courses for entrance exams, board exams, and university-level subjects.",

    problem:
      "Despite quality course content, awareness of the platform was limited mostly to Kathmandu Valley.",

    execution:
      "We launched targeted YouTube and Facebook ad campaigns for students, collaborated with Nepali educational YouTubers, and optimized landing pages for course enrollment.",

    result: [
      "25,000+ new student registrations in 3 months",
      "YouTube ad campaigns achieved a 6.2% click-through rate",
      "Average cost per student acquisition reduced by 38%",
      "Course completion rate increased by 40%"
    ],

    keyOutcome:
      "Platform became one of the fastest-growing online learning platforms among Nepali students.",
    gradient: "from-orange-500/80 to-red-900/80",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
    tags: ["YouTube Ads", "Facebook Ads", "EdTech Marketing", "Influencer Marketing"]
  },

  {
    id: 5,
    title: "NGO Child Education Awareness Campaign",
    category: "NGO Social Impact Campaign",
    description:
      "Digital awareness campaign promoting education access for children in rural Nepal.",

    background:
      "A Nepali NGO working in rural education aimed to increase awareness about school enrollment and access to education in remote communities.",

    problem:
      "Many families in rural regions were unaware of available educational programs and scholarships.",

    execution:
      "We developed storytelling-based social media campaigns, produced short documentary-style videos, and ran Facebook awareness campaigns targeting urban donors and volunteers.",

    result: [
      "Campaign reached over 1.5 million people across Nepal",
      "Volunteer registrations increased by 120%",
      "Online donations increased by 85%",
      "Over 300 children enrolled in partner schools"
    ],

    keyOutcome:
      "Expanded education access for hundreds of children in rural communities.",
    gradient: "from-green-500/80 to-teal-900/80",
    image: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=800&q=80",
    tags: ["NGO Campaign", "Facebook Awareness Ads", "Video Storytelling"]
  },

  {
    id: 6,
    title: "INGO Health Awareness Campaign in Nepal",
    category: "INGO Public Health Campaign",
    description:
      "Digital health awareness campaign conducted with an international NGO to promote maternal healthcare.",

    background:
      "An international NGO working in Nepal sought to raise awareness about maternal healthcare services available to women in rural communities.",

    problem:
      "Many women in rural areas lacked information about prenatal care and safe delivery practices.",

    execution:
      "We developed culturally relevant social media campaigns, radio-supported digital content, and targeted awareness ads in multiple Nepali languages.",

    result: [
      "Campaign reached over 2 million people nationwide",
      "Community health program participation increased by 70%",
      "Maternal healthcare hotline inquiries increased by 150%",
      "Thousands of women received prenatal checkups through partner clinics"
    ],

    keyOutcome:
      "Significant increase in maternal health awareness across rural communities.",
    gradient: "from-sky-500/80 to-blue-900/80",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
    tags: ["INGO Campaign", "Public Health Awareness", "Social Outreach"]
  }
];