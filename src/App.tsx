
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import Problems from "./pages/Problems";
import ProblemDetail from "./pages/ProblemDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Sponsor from "./pages/Sponsor";
import ShareSolution from "./pages/ShareSolution";
import ShareProblem from "./pages/ShareProblem";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Use HashRouter for GitHub Pages compatibility
const Router = process.env.NODE_ENV === 'production' ? HashRouter : BrowserRouter;

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/problems" element={<Problems />} />
            <Route path="/problem/:id" element={<ProblemDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/sponsor" element={<Sponsor />} />
            <Route path="/share-solution" element={<ShareSolution />} />
            <Route path="/share-problem" element={<ShareProblem />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </Router>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
