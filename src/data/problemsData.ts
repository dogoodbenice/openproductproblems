// This file contains all the problem data for the application
// To add a new problem, simply add a new entry to the problemsData array
// and a corresponding entry to the problemsDetails object

// Problem card data shown on the problems listing page
export const problemsData = [
  {
    id: "market-entry-streaming",
    title: "Market Entry Strategy for Streaming Service",
    description: "Develop a market entry strategy for a new streaming service in a competitive landscape.",
    categories: ["strategy", "market-analysis"],
    difficulty: "medium",
    company: "Entertainment Co."
  },
  {
    id: "feature-prioritization-fintech",
    title: "Feature Prioritization for Fintech App",
    description: "Prioritize the next set of features for a growing fintech mobile application.",
    categories: ["product-development", "prioritization"],
    difficulty: "hard", 
    company: "Finance App"
  },
  {
    id: "metric-analysis-ecommerce",
    title: "Declining Conversion Rate Analysis",
    description: "Analyze and address a declining conversion rate on an e-commerce platform.",
    categories: ["metrics", "analytics"],
    difficulty: "medium",
    company: "E-Commerce Giant"
  },
  {
    id: "user-research-saas",
    title: "User Research Plan for SaaS Product",
    description: "Design a comprehensive user research plan for a B2B SaaS product.",
    categories: ["user-research", "planning"],
    difficulty: "easy",
    company: "SaaS Co."
  },
  {
    id: "go-to-market-hardware",
    title: "Go-to-Market Strategy for Smart Home Device",
    description: "Create a go-to-market strategy for a new smart home device.",
    categories: ["strategy", "marketing"],
    difficulty: "hard",
    company: "Tech Hardware Inc."
  },
  {
    id: "product-roadmap-social",
    title: "Quarterly Product Roadmap for Social Platform",
    description: "Develop a quarterly product roadmap for a growing social media platform.",
    categories: ["product-development", "planning"],
    difficulty: "medium",
    company: "Social Network"
  },
  {
    id: "user-feedback-analysis",
    title: "User Feedback Analysis for Mobile App",
    description: "Analyze user feedback and determine actionable improvements for a mobile app.",
    categories: ["user-research", "analytics"],
    difficulty: "easy",
    company: "Mobile App Co."
  },
  {
    id: "feature-launch-planning",
    title: "Feature Launch Planning for SaaS Tool",
    description: "Create a launch plan for a new feature in a B2B SaaS product.",
    categories: ["product-development", "planning"],
    difficulty: "easy",
    company: "Enterprise SaaS"
  },
  {
    id: "competitive-analysis-healthtech",
    title: "Competitive Analysis for HealthTech Product",
    description: "Analyze the competitive landscape for a new digital health product and recommend positioning.",
    categories: ["strategy", "market-analysis"],
    difficulty: "medium",
    company: "HealthTech Startup"
  }
];

// Detailed problem data shown on the problem detail page
export const problemsDetails = {
  "market-entry-streaming": {
    title: "Market Entry Strategy for Streaming Service",
    company: "Entertainment Co.",
    difficulty: "medium",
    categories: ["strategy", "market-analysis"],
    background: `
      A major media company is planning to launch a new streaming service in an already crowded market dominated by established players. The company has a strong catalog of original content and licenses to popular shows and movies.
      
      The executive team is struggling to identify a viable market entry strategy that will allow them to gain significant market share within 18 months. They've asked you to develop a comprehensive market entry strategy.
    `,
    keyQuestions: [
      "How should the company position its streaming service in the current market?",
      "What pricing strategy would you recommend and why?",
      "How would you approach customer acquisition and retention?",
      "What key metrics would you track to measure success?"
    ],
    data: [
      {
        title: "Market Size and Growth",
        content: "The global streaming market is valued at $50B with a projected annual growth rate of 12% over the next 5 years."
      },
      {
        title: "Competitor Analysis",
        content: "There are 5 major competitors with market shares ranging from 10% to 35%. The top 3 players control 70% of the market."
      },
      {
        title: "Customer Segments",
        content: "Research shows 5 distinct customer segments with different content preferences, price sensitivity, and viewing habits."
      },
      {
        title: "Content Library",
        content: "The company owns rights to 2,000+ hours of original content and can license an additional 10,000+ hours from partners."
      }
    ],
    resources: [
      {
        title: "Streaming Market Analysis 2024",
        url: "https://www.statista.com/statistics/420621/most-popular-video-streaming-services-worldwide/",
        type: "research"
      },
      {
        title: "Digital Entertainment Consumer Trends",
        url: "https://www.mckinsey.com/industries/technology-media-and-telecommunications/our-insights/the-future-of-digital-entertainment",
        type: "research"
      },
      {
        title: "Subscription Business Models",
        url: "https://www.bain.com/insights/subscription-business-models-are-booming/",
        type: "article"
      }
    ],
    frameworks: [
      "Porter's Five Forces",
      "SWOT Analysis",
      "Value Proposition Canvas",
      "Customer Journey Mapping"
    ],
    approach: `
      Start by analyzing the current market landscape and identifying gaps or underserved segments. Develop a clear value proposition that differentiates your service from competitors. Consider various pricing models including freemium, tiered subscriptions, or bundling options.
      
      Next, outline a content strategy that leverages your existing library while planning for strategic content acquisitions. Finally, develop a marketing and customer acquisition plan with clear KPIs and success metrics.
    `,
    solutions: [
      {
        id: "sol-1",
        title: "Market Segmentation Analysis",
        description: "Comprehensive analysis of target segments with SWOT evaluation",
        author: "Sarah Chen",
        date: "2023-09-15",
        url: "https://example.com/solution1",
        votes: 24
      },
      {
        id: "sol-2",
        title: "Pricing Strategy Deep Dive",
        description: "Comparison of freemium vs. tiered subscription models with revenue projections",
        author: "Michael Rodriguez",
        date: "2023-10-02",
        url: "https://example.com/solution2",
        votes: 18
      },
      {
        id: "sol-3",
        title: "Content Acquisition Strategy",
        description: "Framework for prioritizing original vs. licensed content based on user preferences",
        author: "Aisha Johnson",
        date: "2023-11-11",
        url: "https://example.com/solution3",
        votes: 35
      }
    ]
  },
  "feature-prioritization-fintech": {
    title: "Feature Prioritization for Fintech App",
    company: "Finance App",
    difficulty: "hard",
    categories: ["product-development", "prioritization"],
    background: `
      A fast-growing fintech startup has a mobile app with basic banking features that has gained traction with over 500,000 users. The product team has a backlog of 25+ potential features to implement in the next quarter but can only deliver 5-7 of them due to resource constraints.
      
      As the product manager, you need to develop a framework for prioritizing these features and present your recommendations to the executive team.
    `,
    keyQuestions: [
      "How would you approach prioritizing features with competing stakeholder interests?",
      "What criteria would you use to evaluate potential features?",
      "How would you balance short-term growth vs. long-term strategic objectives?",
      "How would you communicate your decisions to stakeholders?"
    ],
    data: [
      {
        title: "User Feedback",
        content: "Survey data from 10,000 users showing feature requests and satisfaction ratings for existing features."
      },
      {
        title: "Usage Metrics",
        content: "Engagement metrics, retention rates, and conversion funnel analysis for the past 6 months."
      },
      {
        title: "Development Resources",
        content: "Engineering estimates for development time and complexity for each potential feature."
      },
      {
        title: "Business Objectives",
        content: "Company goals include increasing monthly active users by 30% and revenue by 50% within 12 months."
      }
    ],
    resources: [
      {
        title: "Fintech Product Development Guide",
        url: "https://www.mckinsey.com/industries/financial-services/our-insights/fintech-product-development",
        type: "guide"
      },
      {
        title: "Mobile Banking Feature Trends",
        url: "https://www.forrester.com/blogs/10-mobile-banking-features-that-will-transform-customer-experience/",
        type: "research"
      },
      {
        title: "Fintech User Behavior Study",
        url: "https://www.jpmorgan.com/insights/payments/fintech-trends",
        type: "research"
      }
    ],
    frameworks: [
      "RICE Scoring",
      "Value vs. Effort Matrix",
      "Kano Model",
      "Weighted Scoring"
    ],
    approach: `
      Begin by gathering all relevant data points including user feedback, usage metrics, and business objectives. Define clear evaluation criteria aligned with company goals and create a scoring system for each feature.
      
      Consider using a framework like RICE (Reach, Impact, Confidence, Effort) to systematically evaluate each feature. Involve key stakeholders in the process to ensure buy-in and gather diverse perspectives.
      
      Finally, create a clear roadmap for implementation and communicate both what will be built and, importantly, what won't be built and why.
    `,
    solutions: [
      {
        id: "sol-4",
        title: "RICE Scoring Implementation",
        description: "Detailed feature prioritization using RICE framework with calculations",
        author: "Daniel Park",
        date: "2023-08-20",
        url: "https://example.com/solution4",
        votes: 42
      },
      {
        id: "sol-5",
        title: "User Feedback Analysis",
        description: "Data-driven approach to feature prioritization based on user interviews",
        author: "Emma Wilson",
        date: "2023-09-05",
        url: "https://example.com/solution5",
        votes: 31
      }
    ]
  },
  "metric-analysis-ecommerce": {
    title: "Declining Conversion Rate Analysis",
    company: "E-Commerce Giant",
    difficulty: "medium",
    categories: ["metrics", "analytics"],
    background: `
      A major e-commerce platform has noticed a concerning trend over the past quarter: their conversion rate has dropped by 15% despite traffic remaining stable. The executive team is worried about the impact on revenue and wants to understand the root causes and potential solutions.
      
      As the product manager responsible for the conversion funnel, you've been asked to analyze the situation and develop an action plan.
    `,
    keyQuestions: [
      "What are the possible causes for a declining conversion rate?",
      "How would you approach diagnosing the root causes?",
      "What data would you analyze to understand the issue?",
      "What short-term and long-term solutions would you propose?"
    ],
    data: [
      {
        title: "Traffic Metrics",
        content: "Overall traffic has remained stable, but the mix of traffic sources has changed with a 10% increase in mobile traffic and 5% decrease in desktop traffic."
      },
      {
        title: "Funnel Performance",
        content: "Cart abandonment has increased by 20%, while product page bounce rates have increased by 12%."
      },
      {
        title: "User Segments",
        content: "New visitor conversion has dropped more significantly (18%) than returning visitor conversion (8%)."
      },
      {
        title: "Market Context",
        content: "Two major competitors launched aggressive pricing campaigns during this period."
      }
    ],
    resources: [
      {
        title: "E-commerce Conversion Optimization",
        url: "https://www.shopify.com/blog/ecommerce-conversion-rate-optimization",
        type: "guide"
      },
      {
        title: "Digital Shopping Behavior Report",
        url: "https://www.nielsen.com/insights/2023/digital-shopping-behavior/",
        type: "research"
      },
      {
        title: "E-commerce Analytics Best Practices",
        url: "https://www.thinkwithgoogle.com/marketing-strategies/ecommerce/analytics/",
        type: "article"
      }
    ],
    frameworks: [
      "Conversion Funnel Analysis",
      "Cohort Analysis",
      "A/B Testing Framework",
      "User Journey Mapping"
    ],
    approach: `
      Start by segmenting the data to identify where in the funnel the biggest drop-offs are occurring and which user segments are most affected. Look for patterns or correlations with changes in the product, market, or user behavior.
      
      Conduct user research to understand qualitative factors affecting conversion. Develop hypotheses about potential causes and design experiments to test them.
      
      Create a prioritized action plan with immediate tactical fixes and longer-term strategic solutions. Implement changes in a controlled way that allows for proper measurement of impact.
    `,
    solutions: [
      {
        id: "sol-6",
        title: "Conversion Funnel Analysis",
        description: "Step-by-step breakdown of conversion issues with proposed solutions",
        author: "Jason Lee",
        date: "2023-10-18",
        url: "https://example.com/solution6",
        votes: 27
      },
      {
        id: "sol-7",
        title: "Mobile UX Optimization",
        description: "Analysis of mobile user experience issues affecting conversion",
        author: "Priya Sharma",
        date: "2023-11-02",
        url: "https://example.com/solution7",
        votes: 19
      },
      {
        id: "sol-8",
        title: "Competitive Pricing Strategy",
        description: "Price elasticity analysis in response to competitor campaigns",
        author: "Thomas Brown",
        date: "2023-12-01",
        url: "https://example.com/solution8",
        votes: 23
      }
    ]
  },
  "user-research-saas": {
    title: "User Research Plan for SaaS Product",
    company: "SaaS Co.",
    difficulty: "easy",
    categories: ["user-research", "planning"],
    background: `
      A B2B SaaS company has developed a project management tool aimed at mid-sized enterprises. The product has been in beta with a small group of companies, but before wider release, the team wants to conduct comprehensive user research to validate product-market fit and identify opportunities for improvement.
      
      As the product manager, you need to design a user research plan that will provide actionable insights to guide product development.
    `,
    keyQuestions: [
      "What research methodologies would you employ and why?",
      "How would you identify and recruit appropriate research participants?",
      "What key questions would you seek to answer through the research?",
      "How would you translate research findings into product decisions?"
    ],
    data: [
      {
        title: "Current Users",
        content: "The product has 5 beta customers with a total of 120 active users across different roles and departments."
      },
      {
        title: "Product Usage",
        content: "Analytics data showing feature usage, common workflows, and pain points from the beta period."
      },
      {
        title: "Market Analysis",
        content: "Competitive landscape analysis identifying 8 direct competitors and their unique value propositions."
      },
      {
        title: "Initial Feedback",
        content: "Preliminary feedback from beta users highlighting both positive aspects and areas for improvement."
      }
    ],
    resources: [
      {
        title: "B2B SaaS Research Methods",
        url: "https://www.productplan.com/blog/b2b-saas-user-research/",
        type: "guide"
      },
      {
        title: "Enterprise Software Adoption Study",
        url: "https://www.gartner.com/en/documents/3991664",
        type: "research"
      },
      {
        title: "SaaS Product Validation Framework",
        url: "https://www.intercom.com/blog/product-validation/",
        type: "article"
      }
    ],
    frameworks: [
      "Jobs-to-be-Done",
      "Empathy Mapping",
      "User Persona Development",
      "Customer Journey Mapping"
    ],
    approach: `
      Begin by establishing clear research objectives aligned with business goals. Design a mixed-method approach combining quantitative analysis of existing usage data with qualitative research methods such as contextual inquiry, user interviews, and usability testing.
      
      Recruit participants representing different user roles, company sizes, and usage patterns. Create a research script that probes both explicit needs and implicit motivations.
      
      Analyze findings to identify patterns and insights. Translate these insights into actionable product requirements and design improvements. Create a prioritized roadmap based on user impact and business value.
    `,
    solutions: [
      {
        id: "sol-9",
        title: "Mixed-Method Research Plan",
        description: "Comprehensive research plan combining qualitative and quantitative methods",
        author: "Rebecca Kim",
        date: "2023-09-25",
        url: "https://example.com/solution9",
        votes: 15
      },
      {
        id: "sol-10",
        title: "B2B User Persona Development",
        description: "Detailed persona creation process with actionable insights",
        author: "David Chen",
        date: "2023-10-15",
        url: "https://example.com/solution10",
        votes: 29
      }
    ]
  },
  "go-to-market-hardware": {
    title: "Go-to-Market Strategy for Smart Home Device",
    company: "Tech Hardware Inc.",
    difficulty: "hard",
    categories: ["strategy", "marketing"],
    background: `
      A consumer electronics company has developed a new smart home security device that combines AI-powered cameras, sensors, and an intuitive mobile app. The product is ready for production, but the company needs a comprehensive go-to-market strategy to successfully launch in a competitive market.
      
      As the product marketing manager, you're responsible for developing the GTM strategy for this new product line.
    `,
    keyQuestions: [
      "What channels would you use to distribute the product and why?",
      "How would you position the product against existing competitors?",
      "What pricing strategy would you recommend?",
      "How would you measure the success of your GTM strategy?"
    ],
    data: [
      {
        title: "Market Size",
        content: "The smart home security market is valued at $15B globally with a projected CAGR of 17% over the next 5 years."
      },
      {
        title: "Competitive Analysis",
        content: "Analysis of 7 major competitors including their pricing, feature sets, distribution channels, and market share."
      },
      {
        title: "Product Costs",
        content: "Manufacturing cost is $85 per unit at scale, with additional costs for software development and maintenance."
      },
      {
        title: "Target Audience",
        content: "Primary research identifying 3 key customer segments with different needs, price sensitivity, and purchasing behaviors."
      }
    ],
    resources: [
      {
        title: "Smart Home Market Report 2024",
        url: "https://www.grandviewresearch.com/industry-analysis/smart-home-market",
        type: "research"
      },
      {
        title: "Hardware Product Launch Guide",
        url: "https://www.hardwareclub.vc/hardware-product-launch-guide",
        type: "guide"
      },
      {
        title: "Consumer Tech Marketing Strategies",
        url: "https://www.mckinsey.com/industries/technology-media-and-telecommunications/our-insights/consumer-tech-marketing",
        type: "article"
      }
    ],
    frameworks: [
      "4Ps Marketing Mix",
      "Value-Based Pricing",
      "Customer Segmentation",
      "Channel Strategy Framework"
    ],
    approach: `
      Start by clearly defining your target segments and prioritizing them based on market opportunity and fit with your product. Develop a compelling value proposition for each segment that differentiates your product from competitors.
      
      Design a channel strategy that balances reach, margins, and customer experience. Consider a mix of direct-to-consumer, retail partnerships, and online marketplaces.
      
      Develop a pricing strategy that reflects the value delivered while considering competitive positioning. Create a comprehensive marketing plan with specific tactics for awareness, consideration, and conversion.
      
      Establish clear KPIs for the launch and set up analytics to track performance across channels.
    `,
    solutions: [
      {
        id: "sol-11",
        title: "Channel Strategy Blueprint",
        description: "Multi-channel go-to-market approach with ROI analysis",
        author: "Lauren Taylor",
        date: "2023-08-10",
        url: "https://example.com/solution11",
        votes: 36
      },
      {
        id: "sol-12",
        title: "Pricing Model Comparison",
        description: "Value-based pricing strategy with competitive analysis",
        author: "James Wilson",
        date: "2023-09-18",
        url: "https://example.com/solution12",
        votes: 22
      }
    ]
  },
  "product-roadmap-social": {
    title: "Quarterly Product Roadmap for Social Platform",
    company: "Social Network",
    difficulty: "medium",
    categories: ["product-development", "planning"],
    background: `
      A growing social media platform focused on creative professionals has reached 2 million monthly active users. The product team needs to develop a quarterly roadmap that balances user growth, engagement, and monetization opportunities.
      
      As the lead product manager, you need to create and present a strategic roadmap for the next quarter.
    `,
    keyQuestions: [
      "How would you approach building a quarterly roadmap?",
      "How would you balance different stakeholder priorities?",
      "What metrics would you use to evaluate potential features?",
      "How would you communicate the roadmap to different audiences?"
    ],
    data: [
      {
        title: "User Metrics",
        content: "Detailed analytics on user growth, retention, and engagement patterns across different segments."
      },
      {
        title: "Feature Requests",
        content: "Aggregated feature requests from users, customer support, and internal stakeholders with frequency and impact analysis."
      },
      {
        title: "Market Research",
        content: "Competitive analysis showing feature gaps and opportunities relative to similar platforms."
      },
      {
        title: "Business Objectives",
        content: "Company goals for the quarter including user growth targets, engagement KPIs, and revenue projections."
      }
    ],
    resources: [
      {
        title: "Social Platform Growth Strategies",
        url: "https://www.sequoiacap.com/article/social-platform-growth/",
        type: "guide"
      },
      {
        title: "Social Media User Behavior",
        url: "https://www.pewresearch.org/internet/topic/social-media/",
        type: "research"
      },
      {
        title: "Platform Monetization Models",
        url: "https://a16z.com/platform-monetization/",
        type: "article"
      }
    ],
    frameworks: [
      "Theme-Based Roadmapping",
      "ICE Scoring",
      "North Star Framework",
      "Jobs-to-be-Done"
    ],
    approach: `
      Begin by gathering inputs from all relevant stakeholders including users, customer support, sales, marketing, and executives. Identify key themes that align with business objectives and user needs.
      
      Prioritize potential initiatives using a clear framework that considers impact, confidence, and effort. Group related initiatives into themes to create a coherent story.
      
      Structure the roadmap by outcome rather than output, focusing on the problems you're solving rather than specific features. Create different versions of the roadmap for different audiences.
      
      Establish a regular cadence for reviewing and adjusting the roadmap based on new information and changing priorities.
    `,
    solutions: [
      {
        id: "sol-13",
        title: "Theme-Based Roadmapping",
        description: "Quarterly roadmap organized by strategic themes with impact metrics",
        author: "Nicole Adams",
        date: "2023-10-05",
        url: "https://example.com/solution13",
        votes: 31
      },
      {
        id: "sol-14",
        title: "Stakeholder Alignment Framework",
        description: "Process for aligning cross-functional teams on roadmap priorities",
        author: "Kevin Martin",
        date: "2023-11-20",
        url: "https://example.com/solution14",
        votes: 27
      },
      {
        id: "sol-15",
        title: "Outcome-Driven Roadmap",
        description: "North Star framework implementation for roadmap development",
        author: "Sophia Garcia",
        date: "2023-12-12",
        url: "https://example.com/solution15",
        votes: 19
      }
    ]
  },
  "user-feedback-analysis": {
    title: "User Feedback Analysis for Mobile App",
    company: "Mobile App Co.",
    difficulty: "easy",
    categories: ["user-research", "analytics"],
    background: `
      A mobile fitness tracking app has been collecting user feedback through in-app surveys, app store reviews, and support tickets for the past six months. The product team now has a large dataset of qualitative feedback but is struggling to make sense of it and identify clear patterns.
      
      As the product manager, you need to develop a framework to analyze this feedback, identify key themes, and create actionable recommendations for product improvements.
    `,
    keyQuestions: [
      "How would you approach categorizing and analyzing large volumes of qualitative feedback?",
      "What methods would you use to prioritize the insights gained from user feedback?",
      "How would you differentiate between common complaints versus critical issues?",
      "How would you translate user feedback into specific product improvements?"
    ],
    data: [
      {
        title: "Feedback Volume",
        content: "3,000+ app store reviews, 5,000+ responses to in-app surveys, and 1,200+ support tickets over six months."
      },
      {
        title: "User Segments",
        content: "User segmentation data including usage frequency, subscription tier, and user tenure with the app."
      },
      {
        title: "Engagement Metrics",
        content: "Metrics showing how feedback correlates with retention rates, usage frequency, and subscription conversion."
      },
      {
        title: "Feature Usage",
        content: "Data on which features are most used and which features are mentioned most often in feedback."
      }
    ],
    resources: [
      {
        title: "Mobile App Feedback Analysis",
        url: "https://www.appsflyer.com/blog/mobile-app-feedback-analysis/",
        type: "guide"
      },
      {
        title: "App Store Review Analysis",
        url: "https://www.sensortower.com/blog/app-store-review-analysis",
        type: "research"
      },
      {
        title: "User Feedback to Product Decisions",
        url: "https://www.productboard.com/blog/from-user-feedback-to-product-decisions/",
        type: "article"
      }
    ],
    frameworks: [
      "Affinity Mapping",
      "Sentiment Analysis",
      "Frequency vs. Impact Matrix",
      "User Needs Hierarchy"
    ],
    approach: `
      Begin by organizing the feedback into categories and subcategories, possibly using a tool like Dovetail or by manually coding the data. Look for recurring themes and pain points that appear across multiple feedback channels.
      
      Perform a quantitative analysis to identify how frequently specific issues are mentioned, and combine this with a qualitative assessment of the impact of each issue on the user experience.
      
      Correlate feedback with user segments to understand if certain issues affect specific user groups disproportionately. Finally, create a prioritized list of recommendations based on frequency, impact, and alignment with business goals.
    `,
    solutions: [
      {
        id: "sol-16",
        title: "Thematic Analysis Framework",
        description: "Methodology for categorizing and quantifying qualitative feedback",
        author: "Melissa Zhang",
        date: "2023-11-15",
        url: "https://example.com/solution16",
      },
      {
        id: "sol-17",
        title: "User Feedback Prioritization Model",
        description: "Decision matrix for turning feedback into actionable priorities",
        author: "Carlos Rodriguez",
        date: "2023-12-08",
        url: "https://example.com/solution17",
      }
    ]
  },
  "feature-launch-planning": {
    title: "Feature Launch Planning for SaaS Tool",
    company: "Enterprise SaaS",
    difficulty: "easy",
    categories: ["product-development", "planning"],
    background: `
      A B2B SaaS company has developed a new collaborative whiteboarding feature for their project management platform. The feature is now ready for release, but the team needs a comprehensive launch plan to ensure adoption and collect feedback for future iterations.
      
      As the product manager, you are responsible for planning and executing a successful feature launch that maximizes adoption among existing customers while minimizing disruption to their workflows.
    `,
    keyQuestions: [
      "How would you approach rolling out a new feature to existing customers?",
      "What communication and enablement materials would you prepare?",
      "How would you measure the success of the feature launch?",
      "What strategies would you use to drive adoption of the new feature?"
    ],
    data: [
      {
        title: "Customer Base",
        content: "2,500+ companies using the platform with varying levels of engagement and team sizes."
      },
      {
        title: "Feature Complexity",
        content: "The new feature has medium complexity with 8 core functions and integrations with existing parts of the platform."
      },
      {
        title: "Beta Results",
        content: "Feedback from 15 beta customers showing positive reactions but identifying some friction points in the user experience."
      },
      {
        title: "Customer Segments",
        content: "Segmentation data showing different customer types, usage patterns, and potential value of the new feature to each segment."
      }
    ],
    resources: [
      {
        title: "SaaS Feature Launch Guide",
        url: "https://www.productplan.com/blog/saas-feature-launch/",
        type: "guide"
      },
      {
        title: "B2B Product Adoption Study",
        url: "https://www.gartner.com/en/documents/3991664",
        type: "research"
      },
      {
        title: "Feature Rollout Best Practices",
        url: "https://www.intercom.com/blog/feature-rollout/",
        type: "article"
      }
    ],
    frameworks: [
      "Phased Rollout",
      "AIDA Marketing Framework",
      "Change Management Model",
      "Feature Adoption Metrics"
    ],
    approach: `
      Start by creating a phased rollout plan that gradually introduces the feature to different customer segments based on their likelihood to adopt and value received. Develop comprehensive documentation, tutorial videos, and webinars to educate users about the new functionality.
      
      Design an in-app announcement strategy with tooltips, guided tours, and contextual help to assist users in discovering and using the feature. Create a communication plan that includes email announcements, release notes, and account manager talking points.
      
      Set up analytics to track adoption metrics and gather feedback. Plan for quick iterations based on initial user reactions to address any usability issues or missing functionality.
    `,
    solutions: [
      {
        id: "sol-18",
        title: "Phased Rollout Strategy",
        description: "Step-by-step implementation plan for feature introduction",
        author: "Jordan Williams",
        date: "2023-10-22",
        url: "https://example.com/solution18",
      },
      {
        id: "sol-19",
        title: "Feature Adoption Measurement Framework",
        description: "Comprehensive metrics approach for tracking feature success",
        author: "Aisha Patel",
        date: "2023-11-30",
        url: "https://example.com/solution19",
      }
    ]
  },
  "competitive-analysis-healthtech": {
    title: "Competitive Analysis for HealthTech Product",
    company: "HealthTech Startup",
    difficulty: "medium",
    categories: ["strategy", "market-analysis"],
    background: `
      A healthcare technology startup is developing a new digital platform aimed at helping patients with chronic conditions manage their health more effectively. The platform will combine remote monitoring, personalized insights, and integration with healthcare providers.
      
      Before finalizing their product strategy and positioning, they need a thorough competitive analysis to understand the market landscape and identify opportunities for differentiation.
    `,
    keyQuestions: [
      "How would you approach analyzing the competitive landscape in healthtech?",
      "What dimensions would you evaluate competitors on?",
      "How would you identify opportunities for differentiation?",
      "What recommendations would you make for product positioning based on your analysis?"
    ],
    data: [
      {
        title: "Market Overview",
        content: "The digital health market for chronic condition management is growing at 18% annually and is projected to reach $30B by 2025."
      },
      {
        title: "Competitor List",
        content: "Information on 12 potential competitors ranging from established companies to early-stage startups."
      },
      {
        title: "Feature Matrix",
        content: "Preliminary comparison of key features across existing solutions including mobile apps, connected devices, and integration capabilities."
      },
      {
        title: "Customer Research",
        content: "Interviews with 25 patients and 10 healthcare providers about pain points with existing solutions."
      }
    ],
    resources: [
      {
        title: "Digital Health Market Analysis",
        url: "https://www.frost.com/research/healthcare/digital-health/",
        type: "research"
      },
      {
        title: "Healthcare Product Development",
        url: "https://www.rockhealth.com/insights/healthcare-product-development",
        type: "guide"
      },
      {
        title: "HealthTech Regulatory Guide",
        url: "https://www.fda.gov/medical-devices/digital-health-center-excellence",
        type: "article"
      }
    ],
    frameworks: [
      "Porter's Five Forces",
      "Strategic Group Mapping",
      "Jobs To Be Done",
      "Value Curve Analysis"
    ],
    approach: `
      Begin with a comprehensive mapping of the competitive landscape, categorizing competitors by size, target conditions, business model, and key features. Evaluate each competitor on dimensions including user experience, clinical integration, data capabilities, pricing, and regulatory compliance.
      
      Analyze customer pain points and unmet needs to identify gaps in the market. Look for areas where competitors are underserving specific patient segments or failing to address important aspects of chronic condition management.
      
      Create a strategic positioning that highlights your unique value proposition in relation to existing solutions. Develop recommendations for feature prioritization, pricing, and go-to-market strategy based on competitive insights.
    `,
    solutions: [
      {
        id: "sol-20",
        title: "HealthTech Competitor Analysis Framework",
        description: "Multi-dimensional mapping of digital health competitive landscape",
        author: "Michael Chen",
        date: "2023-09-28",
        url: "https://example.com/solution20",
      },
      {
        id: "sol-21",
        title: "Value Proposition Canvas for Chronic Care",
        description: "Patient-centered approach to differentiating in healthcare technology",
        author: "Sarah Johnson",
        date: "2023-10-15",
        url: "https://example.com/solution21",
      }
    ]
  }
};

// Extract all unique categories from the data
export const allCategories = [...new Set(problemsData.flatMap(problem => problem.categories))];

// Extract all unique difficulties from the data
export const allDifficulties = [...new Set(problemsData.map(problem => problem.difficulty))];

// Helper function to get the appropriate color class for a difficulty level
export const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case 'easy': return 'bg-green-100 text-green-800';
    case 'medium': return 'bg-yellow-100 text-yellow-800';
    case 'hard': return 'bg-red-100 text-red-800';
    default: return 'bg-gray-100 text-gray-800';
  }
};