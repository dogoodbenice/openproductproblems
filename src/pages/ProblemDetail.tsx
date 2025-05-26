import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ChevronLeft, ChevronRight, BookOpen, Database, Link as LinkIcon, ExternalLink, MessageSquare, User, FileText, PlusCircle, ChevronDown, ChevronUp, AlertTriangle } from 'lucide-react';
import { problemsData, problemsDetails, getDifficultyColor } from '../data/problemsData';
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from '../components/ui/table';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';

const getFrameworkContext = (framework: string): string => {
  const contexts: { [key: string]: string } = {
    "RICE": "A prioritization framework that scores features based on Reach (number of users affected), Impact (how much it matters), Confidence (how sure we are), and Effort (time/resources needed)",
    "MoSCoW": "A prioritization method that categorizes requirements into Must-have (critical), Should-have (important), Could-have (nice-to-have), and Won't-have (out of scope) features",
    "KPI": "Key Performance Indicators help measure success by tracking specific metrics that align with business objectives and product goals",
    "AARRR": "The Pirate Metrics framework tracks user journey through Acquisition (getting users), Activation (first value), Retention (coming back), Revenue (paying), and Referral (bringing others)",
    "ICE": "A scoring framework that evaluates ideas based on Impact (potential value), Confidence (certainty), and Ease (simplicity) of implementation",
    "OKR": "Objectives and Key Results framework helps set clear goals (Objectives) and measurable outcomes (Key Results) to track progress and success",
    "SWOT": "A strategic analysis tool that evaluates Strengths, Weaknesses, Opportunities, and Threats to inform decision-making",
    "5 Whys": "A root cause analysis technique that asks 'why' five times to uncover the underlying problem rather than just symptoms",
    "User Story": "A format for describing features from the user's perspective: 'As a [user], I want to [action] so that [benefit]'",
    "A/B Testing": "A method to compare two versions of a feature to determine which performs better based on user behavior and metrics",
    "Cost-Benefit": "An analysis framework that compares the costs and benefits of a decision to determine its financial viability",
    "ROI": "Return on Investment analysis helps evaluate the financial return relative to the investment made in a feature or project",
    "MVP": "Minimum Viable Product defines the smallest set of features needed to deliver value and test assumptions with real users",
    "User Journey": "A visualization of the user's path through your product, showing touchpoints, emotions, and pain points",
    "Competitive Analysis": "A framework for evaluating competitors' strengths, weaknesses, and market position to inform strategy",
    "Market Research": "A systematic approach to gathering information about target users, market size, and industry trends",
    "Data Analysis": "The process of examining data to identify patterns, trends, and insights that inform product decisions",
    "User Research": "Methods to understand user needs, behaviors, and pain points through interviews, surveys, and observation",
    "Prototyping": "Creating early versions of features to test ideas, gather feedback, and iterate before full development",
    "Usability Testing": "Evaluating how easily users can complete tasks and achieve their goals with your product",
    "Feature Prioritization": "A systematic approach to ranking features based on value, effort, and strategic alignment",
    "Product Strategy": "A high-level plan that defines your product's vision, goals, and path to success",
    "Roadmapping": "Planning and visualizing the development timeline and sequence of features and improvements",
    "Stakeholder Management": "Identifying and managing relationships with key people who influence or are affected by your product",
    "Risk Assessment": "Evaluating potential risks and their impact to develop mitigation strategies",
    "Resource Allocation": "Optimizing the distribution of time, budget, and team resources across projects",
    "Timeline Planning": "Creating detailed schedules and milestones for product development and launches",
    "Budget Planning": "Estimating and managing costs for development, marketing, and other product activities",
    "Team Collaboration": "Fostering effective communication and coordination between cross-functional team members",
    "Documentation": "Creating and maintaining clear documentation of features, processes, and decisions",
    "Quality Assurance": "Ensuring product quality through testing, monitoring, and continuous improvement",
    "Performance Metrics": "Tracking and analyzing key metrics to measure product success and identify areas for improvement",
    "Customer Feedback": "Gathering and analyzing user feedback to inform product decisions and improvements",
    "Market Validation": "Testing product-market fit through user research, surveys, and early adoption metrics",
    "Launch Planning": "Developing comprehensive plans for product launches, including marketing and support strategies",
    "Growth Strategy": "Planning and executing initiatives to increase user base, engagement, and revenue",
    "Pricing Strategy": "Developing pricing models and strategies based on value, market, and business goals",
    "Distribution Strategy": "Planning how to deliver and make your product accessible to target users",
    "Brand Strategy": "Defining and maintaining consistent brand identity, messaging, and positioning",
    "Communication Plan": "Developing strategies for effective communication with users, stakeholders, and team members",
    "Porter's Five Forces": "A framework for analyzing industry competition through five forces: threat of new entrants, bargaining power of suppliers, bargaining power of buyers, threat of substitute products, and industry rivalry",
    "Value Proposition Canvas": "A tool for designing and testing value propositions by mapping customer profiles and value maps to identify fit and gaps",
    "Customer Journey Mapping": "A visualization of the customer's experience with your product, showing touchpoints, emotions, and pain points throughout their interaction",
    "Value vs. Effort Matrix": "A prioritization tool that plots features on a matrix based on their value to users/business and the effort required to implement them",
    "Kano Model": "A framework for categorizing features based on their impact on customer satisfaction: must-be, one-dimensional, and delighters",
    "Weighted Scoring": "A prioritization method that assigns weights to different criteria and scores features based on how well they meet each criterion",
    "Conversion Funnel Analysis": "A framework for analyzing user progression through different stages of engagement, from awareness to conversion",
    "Cohort Analysis": "A method for analyzing user behavior by grouping users based on shared characteristics or experiences",
    "Jobs-to-be-Done": "A framework for understanding customer needs by focusing on the jobs they're trying to get done rather than just features",
    "Empathy Mapping": "A tool for developing a deep understanding of users by mapping their thoughts, feelings, actions, and pain points",
    "User Persona Development": "Creating detailed profiles of target users based on research to guide product decisions",
    "Affinity Mapping": "A technique for organizing qualitative data into groups based on relationships and patterns",
    "Sentiment Analysis": "A method for analyzing user feedback and comments to understand emotional responses and attitudes",
    "Frequency vs. Impact Matrix": "A tool for prioritizing issues based on how often they occur and their impact on users",
    "User Needs Hierarchy": "A framework for organizing user needs from basic functional requirements to emotional and aspirational needs",
    "Phased Rollout": "A strategy for gradually introducing features to different user segments to manage risk and gather feedback",
    "AIDA Marketing Framework": "A model for understanding the stages of customer engagement: Attention, Interest, Desire, and Action",
    "Change Management Model": "A framework for managing organizational change and user adoption of new features",
    "Feature Adoption Metrics": "Key indicators for measuring how successfully users are adopting and using new features",
    "Strategic Group Mapping": "A tool for analyzing competitors by grouping them based on similar strategies and characteristics",
    "Value Curve Analysis": "A framework for comparing your product's value proposition against competitors across key factors"
  };
  return contexts[framework] || "A framework for product management decision-making";
};

const getFrameworkLink = (framework: string): string => {
  const links: { [key: string]: string } = {
    "RICE": "https://www.intercom.com/blog/rice-simple-prioritization-for-product-managers/",
    "MoSCoW": "https://www.productplan.com/glossary/moscow-prioritization/",
    "KPI": "https://www.productplan.com/glossary/key-performance-indicator-kpi/",
    "AARRR": "https://www.productplan.com/glossary/pirate-metrics-aarrr/",
    "ICE": "https://www.productplan.com/glossary/ice-scoring/",
    "OKR": "https://www.productplan.com/glossary/objectives-and-key-results-okr/",
    "SWOT": "https://www.productplan.com/glossary/swot-analysis/",
    "5 Whys": "https://www.productplan.com/glossary/five-whys/",
    "User Story": "https://www.productplan.com/glossary/user-story/",
    "A/B Testing": "https://www.productplan.com/glossary/ab-testing/",
    "Cost-Benefit": "https://www.productplan.com/glossary/cost-benefit-analysis/",
    "ROI": "https://www.productplan.com/glossary/return-on-investment-roi/",
    "MVP": "https://www.productplan.com/glossary/minimum-viable-product-mvp/",
    "User Journey": "https://www.productplan.com/glossary/user-journey-map/",
    "Competitive Analysis": "https://www.productplan.com/glossary/competitive-analysis/",
    "Market Research": "https://www.productplan.com/glossary/market-research/",
    "Data Analysis": "https://www.productplan.com/glossary/data-analysis/",
    "User Research": "https://www.productplan.com/glossary/user-research/",
    "Prototyping": "https://www.productplan.com/glossary/prototype/",
    "Usability Testing": "https://www.productplan.com/glossary/usability-testing/",
    "Feature Prioritization": "https://www.productplan.com/glossary/feature-prioritization/",
    "Product Strategy": "https://www.productplan.com/glossary/product-strategy/",
    "Roadmapping": "https://www.productplan.com/glossary/product-roadmap/",
    "Stakeholder Management": "https://www.productplan.com/glossary/stakeholder-management/",
    "Risk Assessment": "https://www.productplan.com/glossary/risk-assessment/",
    "Resource Allocation": "https://www.productplan.com/glossary/resource-allocation/",
    "Timeline Planning": "https://www.productplan.com/glossary/timeline/",
    "Budget Planning": "https://www.productplan.com/glossary/budget-planning/",
    "Team Collaboration": "https://www.productplan.com/glossary/team-collaboration/",
    "Documentation": "https://www.productplan.com/glossary/product-documentation/",
    "Quality Assurance": "https://www.productplan.com/glossary/quality-assurance/",
    "Performance Metrics": "https://www.productplan.com/glossary/performance-metrics/",
    "Customer Feedback": "https://www.productplan.com/glossary/customer-feedback/",
    "Market Validation": "https://www.productplan.com/glossary/market-validation/",
    "Launch Planning": "https://www.productplan.com/glossary/product-launch/",
    "Growth Strategy": "https://www.productplan.com/glossary/growth-strategy/",
    "Pricing Strategy": "https://www.productplan.com/glossary/pricing-strategy/",
    "Distribution Strategy": "https://www.productplan.com/glossary/distribution-strategy/",
    "Brand Strategy": "https://www.productplan.com/glossary/brand-strategy/",
    "Communication Plan": "https://www.productplan.com/glossary/communication-plan/",
    "Porter's Five Forces": "https://www.mindtools.com/pages/article/newTMC_08.htm",
    "Value Proposition Canvas": "https://www.strategyzer.com/canvas/value-proposition-canvas",
    "Customer Journey Mapping": "https://www.productplan.com/glossary/customer-journey-map/",
    "Value vs. Effort Matrix": "https://www.productplan.com/glossary/value-vs-effort-matrix/",
    "Kano Model": "https://www.productplan.com/glossary/kano-model/",
    "Weighted Scoring": "https://www.productplan.com/glossary/weighted-scoring/",
    "Conversion Funnel Analysis": "https://www.productplan.com/glossary/conversion-funnel/",
    "Cohort Analysis": "https://www.productplan.com/glossary/cohort-analysis/",
    "Jobs-to-be-Done": "https://www.productplan.com/glossary/jobs-to-be-done/",
    "Empathy Mapping": "https://www.productplan.com/glossary/empathy-map/",
    "User Persona Development": "https://www.productplan.com/glossary/user-persona/",
    "Affinity Mapping": "https://www.productplan.com/glossary/affinity-mapping/",
    "Sentiment Analysis": "https://www.productplan.com/glossary/sentiment-analysis/",
    "Frequency vs. Impact Matrix": "https://www.productplan.com/glossary/impact-effort-matrix/",
    "User Needs Hierarchy": "https://www.productplan.com/glossary/user-needs/",
    "Phased Rollout": "https://www.productplan.com/glossary/phased-rollout/",
    "AIDA Marketing Framework": "https://www.productplan.com/glossary/aida-marketing-framework/",
    "Change Management Model": "https://www.productplan.com/glossary/change-management/",
    "Feature Adoption Metrics": "https://www.productplan.com/glossary/feature-adoption/",
    "Strategic Group Mapping": "https://www.productplan.com/glossary/strategic-group-mapping/",
    "Value Curve Analysis": "https://www.productplan.com/glossary/value-curve-analysis/"
  };
  return links[framework] || "https://www.productplan.com/glossary/";
};

// List of problem IDs that should show the video context
const VIDEO_PROBLEM_IDS = ['problem-1', 'problem-2', 'problem-3', 'problem-4'];
// List of problem IDs that should show the video context in the approach section
const APPROACH_VIDEO_PROBLEM_IDS = ['problem-2', 'problem-4']; // Example: adjust as needed

const ProblemDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [isApproachExpanded, setIsApproachExpanded] = useState(false);
  
  if (!id || !problemsDetails[id as keyof typeof problemsDetails]) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Problem Not Found</h1>
          <Link to="/problems" className="button-primary">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Problems
          </Link>
        </div>
      </div>
    );
  }
  
  const problem = problemsDetails[id as keyof typeof problemsDetails];
  
  // Find the current problem index to enable next/prev navigation
  const currentIndex = problemsData.findIndex(p => p.id === id);
  const prevProblem = currentIndex > 0 ? problemsData[currentIndex - 1] : null;
  const nextProblem = currentIndex < problemsData.length - 1 ? problemsData[currentIndex + 1] : null;
  
  // Check if solutions exist for this problem
  const hasSolutions = problem.solutions && problem.solutions.length > 0;
  
  // Example: placeholder video URL for approach section
  const approachVideoUrl = "https://www.w3schools.com/html/mov_bbb.mp4";
  const approachVideoPoster = "https://placehold.co/480x270?text=Approach+Video";

  return (
    <div className="min-h-screen bg-background pb-20 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-30">
        <div className="container py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-xl font-bold">Open Product Problems</Link>
            <Link to="/problems" className="flex items-center text-sm text-muted-foreground hover:text-foreground">
              <ArrowLeft className="mr-1 h-4 w-4" />
              Back to Problems
            </Link>
          </div>
        </div>
      </header>
      
      {/* Problem Header */}
      <section className="border-b">
        <div className="container py-12">
          <div className="max-w-3xl mx-auto">
            <div className="mb-4">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${getDifficultyColor(problem.difficulty)}`}>
                  {problem.difficulty.charAt(0).toUpperCase() + problem.difficulty.slice(1)}
                </span>
                {problem.categories.map(category => (
                  <span key={category} className="tag">
                    {category.replace('-', ' ')}
                  </span>
                ))}
                <span className="tag">{problem.company}</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold">{problem.title}</h1>
            </div>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <main className="container py-8 flex-grow">
        {/* Background Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Background</h2>
          <div className="glass-card rounded-xl p-6">
            {/* Show video only for selected problems */}
            {VIDEO_PROBLEM_IDS.includes(id) && (
              <div className="mb-4 flex justify-center">
                <div className="w-full max-w-md aspect-video bg-muted rounded-lg overflow-hidden flex items-center justify-center">
                  <video
                    controls
                    poster="https://placehold.co/480x270?text=Video+Context"
                    className="w-full h-full object-cover"
                  >
                    <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            )}
            {VIDEO_PROBLEM_IDS.includes(id) && (
              <div className="text-xs text-muted-foreground mt-2 text-center mb-2">
                (Video context coming soon)
              </div>
            )}
            <p className="whitespace-pre-line">{problem.background}</p>
          </div>
        </section>
        
        {/* Key Questions */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Key Questions</h2>
          <div className="glass-card rounded-xl p-6">
            <ul className="space-y-2">
              {problem.keyQuestions.map((question, index) => (
                <li key={index} className="flex">
                  <span className="font-bold text-primary mr-2">{index + 1}.</span>
                  <span>{question}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
        
        {/* Data */}
        <section className="mb-12">
          <div className="flex items-center mb-4">
            <Database className="h-5 w-5 mr-2 text-primary" />
            <h2 className="text-2xl font-bold">Available Data</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {problem.data.map((item, index) => (
              <div key={index} className="glass-card rounded-xl p-6">
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.content}</p>
              </div>
            ))}
          </div>
        </section>
        
        {/* Resources */}
        <section className="mb-12">
          <div className="flex items-center mb-4">
            <BookOpen className="h-5 w-5 mr-2 text-primary" />
            <h2 className="text-2xl font-bold">Recommended Resources</h2>
          </div>
          <div className="glass-card rounded-xl p-6">
            <ul className="space-y-4">
              {problem.resources.map((resource, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-primary/10 text-primary mr-3 flex-shrink-0 mt-0.5">
                    <LinkIcon className="h-3 w-3" />
                  </span>
                  <div>
                    <a href={resource.url} className="font-medium hover:text-primary flex items-center" target="_blank" rel="noopener noreferrer">
                      {resource.title}
                      <ExternalLink className="h-3 w-3 ml-1" />
                    </a>
                    <span className="text-xs text-muted-foreground capitalize">{resource.type}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
        
        {/* Community Solutions */}
        <section className="mb-12">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="flex items-center">
                <MessageSquare className="h-5 w-5 mr-2 text-primary" />
                Community Solutions
              </CardTitle>
              <Link to="/share-solution" className="button-secondary">
                Share Your Solution
              </Link>
            </CardHeader>
            <CardContent>
              {hasSolutions ? (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Solution</TableHead>
                      <TableHead>Author</TableHead>
                      <TableHead className="text-right">Link</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {problem.solutions.map((solution) => (
                      <TableRow key={solution.id} className="cursor-pointer hover:bg-muted/60">
                        <TableCell className="py-4">
                          <div className="font-medium mb-1">{solution.title}</div>
                          <div className="text-sm text-muted-foreground flex items-center">
                            <MessageSquare className="h-3 w-3 mr-1" />
                            {solution.description}
                          </div>
                          <div className="text-xs text-muted-foreground mt-1">
                            <span>{new Date(solution.date).toLocaleDateString()}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center">
                            <User className="h-4 w-4 mr-1.5 text-muted-foreground" />
                            <a 
                              href={solution.author_url || 'https://example.com'} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="hover:text-primary hover:underline"
                            >
                              {solution.author}
                            </a>
                          </div>
                        </TableCell>
                        <TableCell className="text-right">
                          <a href={solution.url} target="_blank" rel="noopener noreferrer">
                            <Button variant="outline" size="sm">
                              View
                              <ExternalLink className="ml-1 h-3 w-3" />
                            </Button>
                          </a>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              ) : (
                <div className="text-center py-8">
                  <p className="text-muted-foreground">No community solutions yet!</p>
                  <p className="text-sm mt-2 mb-4">Be the first to contribute a solution to this problem.</p>
                  <Link to="/share-solution" className="button-primary">
                    Share Your Solution
                  </Link>
                </div>
              )}
            </CardContent>
          </Card>
        </section>
        
        {/* Suggested Frameworks */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="h-5 w-5 mr-2 text-primary" />
                Suggested Frameworks
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Framework</TableHead>
                    <TableHead>Context</TableHead>
                    <TableHead className="text-right">Learn More</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {problem.frameworks.map((framework) => (
                    <TableRow key={framework} className="hover:bg-muted/60">
                      <TableCell className="py-4">
                        <div className="font-medium">{framework}</div>
                      </TableCell>
                      <TableCell>
                        <div className="text-sm text-muted-foreground">
                          {getFrameworkContext(framework)}
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <a
                          href={getFrameworkLink(framework)}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button variant="outline" size="sm">
                            View
                            <ExternalLink className="ml-1 h-3 w-3" />
                          </Button>
                        </a>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </section>
        
        {/* Suggested Approach */}
        <section className="mb-12">
          <Card className="overflow-hidden">
            <button
              onClick={() => setIsApproachExpanded(!isApproachExpanded)}
              className="w-full flex items-center justify-between px-6 py-4 bg-primary/10 hover:bg-primary/20 transition-colors cursor-pointer border-b"
              aria-expanded={isApproachExpanded}
              aria-controls="suggested-approach-panel"
              type="button"
            >
              <span className="flex items-center gap-2 text-lg font-semibold text-primary">
                <FileText className="h-5 w-5" />
                Suggested Approach
                <span className="ml-3 flex items-center text-xs font-medium text-orange-600 bg-orange-100 px-2 py-1 rounded">
                  <AlertTriangle className="h-4 w-4 mr-1" />
                  Spoiler: Click to reveal
                </span>
              </span>
              {isApproachExpanded ? (
                <ChevronUp className="h-5 w-5 text-primary" />
              ) : (
                <ChevronDown className="h-5 w-5 text-primary" />
              )}
            </button>
            <div
              id="suggested-approach-panel"
              className={`transition-all duration-300 ease-in-out ${
                isApproachExpanded
                  ? 'max-h-[900px] opacity-100 py-6 px-6'
                  : 'max-h-0 opacity-0 py-0 px-6 overflow-hidden'
              } bg-background`}
              aria-hidden={!isApproachExpanded}
            >
              {/* Optional video inside approach */}
              {APPROACH_VIDEO_PROBLEM_IDS.includes(id) && (
                <div className="mb-4 flex justify-center">
                  <div className="w-full max-w-md aspect-video bg-muted rounded-lg overflow-hidden flex items-center justify-center">
                    <video
                      controls
                      poster={approachVideoPoster}
                      className="w-full h-full object-cover"
                    >
                      <source src={approachVideoUrl} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <div className="text-xs text-muted-foreground mt-2 text-center mb-2 w-full">
                    (Video explanation coming soon)
                  </div>
                </div>
              )}
              <p className="whitespace-pre-line text-base text-muted-foreground">{problem.approach}</p>
            </div>
          </Card>
        </section>
        
        {/* Contribute section - after Suggested Approach */}
        <section className="mb-12 bg-primary/5 rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Contribute to Open Product Problems</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="glass-card rounded-xl p-6 text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Share Your Solution</h3>
              <p className="text-muted-foreground mb-4">
                Have an approach to this problem? Share your solution with the community.
              </p>
              <Link to="/share-solution" className="button-primary w-full">
                Share Solution
              </Link>
            </div>
            <div className="glass-card rounded-xl p-6 text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <PlusCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Suggest a Problem</h3>
              <p className="text-muted-foreground mb-4">
                Know a great product problem? Help grow our collection.
              </p>
              <Link to="/share-problem" className="button-primary w-full">
                Share Problem
              </Link>
            </div>
          </div>
        </section>
        
        {/* Navigation */}
        <div className="mt-16 border-t pt-8 flex justify-between">
          {prevProblem ? (
            <Button asChild variant="secondary">
              <Link to={`/problem/${prevProblem.id}`}>
                <ChevronLeft className="mr-2 h-4 w-4" />
                Previous Problem
              </Link>
            </Button>
          ) : (
            <Button asChild variant="secondary">
              <Link to="/problems">
                <ChevronLeft className="mr-2 h-4 w-4" />
                All Problems
              </Link>
            </Button>
          )}

          {nextProblem ? (
            <Button asChild variant="primary">
              <Link to={`/problem/${nextProblem.id}`}>
                Next Problem
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          ) : (
            <Button asChild variant="primary">
              <Link to="/problems">
                All Problems
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          )}
        </div>
      </main>
    </div>
  );
};

export default ProblemDetail;
