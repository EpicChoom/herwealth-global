export interface AcademyLevel {
  name: string;
  topics: string[];
}

export interface AcademyTrack {
  slug: string;
  title: string;
  shortDescription: string;
  icon: string;
  ctaLabel: string;
  order: number;
  levels: AcademyLevel[];
}

export const academyTracks: AcademyTrack[] = [
  {
    slug: "investing-financial-literacy",
    title: "Investing & Financial Literacy",
    shortDescription:
      "Learn how money works, understand the stock market, develop financial confidence, and explore investing through beginner-friendly lessons and real-world examples.",
    icon: "📈",
    ctaLabel: "Explore Investing",
    order: 1,
    levels: [
      {
        name: "Level 1: Foundations",
        topics: [
          "What is investing?",
          "Why financial literacy matters",
          "Stocks, ETFs, mutual funds, and bonds",
          "Risk and reward",
          "Compound interest",
          "Saving vs. investing",
          "How the stock market works",
          "Basic investing vocabulary",
          "Long-term investing mindset",
          "Beginner investing myths",
        ],
      },
      {
        name: "Level 2: Building Knowledge",
        topics: [
          "Reading stock charts",
          "Understanding market trends",
          "Company research basics",
          "Diversification",
          "Index funds and ETFs",
          "Financial statements introduction",
          "Personal finance habits",
          "Budgeting and saving",
          "Inflation and interest rates",
          "Long-term wealth-building",
        ],
      },
      {
        name: "Level 3: Application and Strategy",
        topics: [
          "Fundamental analysis",
          "Market psychology",
          "Economic indicators",
          "Portfolio strategy",
          "Ethical investing",
          "Sector comparison",
          "Risk management",
          "Case studies of major companies",
          "Investing mistakes to avoid",
          "Building a sample portfolio",
        ],
      },
    ],
  },
  {
    slug: "entrepreneurship",
    title: "Entrepreneurship",
    shortDescription:
      "Develop business ideas, learn branding and marketing basics, practice pitching, and build the mindset needed to create solutions and lead with innovation.",
    icon: "💡",
    ctaLabel: "Explore Entrepreneurship",
    order: 2,
    levels: [
      {
        name: "Level 1: Business Foundations",
        topics: [
          "What is entrepreneurship?",
          "Identifying problems",
          "Turning ideas into solutions",
          "Creativity and innovation",
          "Business vocabulary",
          "Understanding customers",
          "Introduction to branding",
          "Social media presence",
          "Simple business models",
          "Entrepreneurial mindset",
        ],
      },
      {
        name: "Level 2: Building a Brand",
        topics: [
          "Branding and identity",
          "Marketing basics",
          "Customer research",
          "Pitching ideas",
          "Networking",
          "Budgeting basics",
          "Audience building",
          "Social media strategy",
          "Product vs. service businesses",
          "Building confidence as a founder",
        ],
      },
      {
        name: "Level 3: Real-World Entrepreneurship",
        topics: [
          "Business planning",
          "Startup case studies",
          "Leadership in business",
          "Scaling ideas",
          "Partnerships",
          "Business ethics",
          "Pitch deck development",
          "Funding basics",
          "Market positioning",
          "Launching a student-led project",
        ],
      },
    ],
  },
  {
    slug: "leadership-confidence",
    title: "Leadership & Confidence",
    shortDescription:
      "Strengthen communication, public speaking, confidence, teamwork, professionalism, and leadership skills in a supportive environment.",
    icon: "🌟",
    ctaLabel: "Explore Leadership",
    order: 3,
    levels: [
      {
        name: "Level 1: Confidence Building",
        topics: [
          "Self-confidence",
          "Goal setting",
          "Time management",
          "Communication basics",
          "Collaboration",
          "Growth mindset",
          "Professional etiquette",
          "Introduction to public speaking",
          "Overcoming nervousness",
          "Finding your voice",
        ],
      },
      {
        name: "Level 2: Public Speaking & Influence",
        topics: [
          "Speech structure",
          "Presenting ideas clearly",
          "Debate and respectful discussion",
          "Networking",
          "Team leadership",
          "Active listening",
          "Personal branding",
          "Leading small groups",
          "Interview skills",
          "Confidence under pressure",
        ],
      },
      {
        name: "Level 3: Advanced Leadership",
        topics: [
          "Diplomacy",
          "Conflict resolution",
          "Event leadership",
          "Mentorship",
          "Strategic communication",
          "Leading workshops",
          "Managing teams",
          "Civic engagement",
          "Real-world impact projects",
          "Building a leadership legacy",
        ],
      },
    ],
  },
];
