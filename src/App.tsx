import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/context/ThemeContext";
import Home from "@/pages/Home";
import AllProjects from "@/pages/AllProjects";
import CaseStudies from "@/pages/Casestudies";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
     <Route path="/" component={Home} />
      <Route path="/projects" component={AllProjects} />
      <Route path="/casestudies" component={CaseStudies} />
      <Route path="/survey" component={Survey} />
      <Route component={NotFound} />
    
    </Switch>
  );
}

function App() {
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
            <Router />
          </WouterRouter>
          <Toaster />
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
