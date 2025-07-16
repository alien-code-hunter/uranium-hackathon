import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Mining from "./pages/Mining";
import Market from "./pages/Market";
import Safety from "./pages/Safety";
import Education from "./pages/Education";
import Technology from "./pages/Technology";
import Legal from "./pages/Legal";
import Kids from "./pages/Kids";
import KidsAdventure from "./pages/KidsAdventure";
import Dashboards from "./pages/Dashboards";
import Updates from "./pages/Updates";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mining" element={<Mining />} />
          <Route path="/market" element={<Market />} />
          <Route path="/safety" element={<Safety />} />
          <Route path="/education" element={<Education />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/legal" element={<Legal />} />
            <Route path="/kids" element={<Kids />} />
            <Route path="/kids-adventure" element={<KidsAdventure />} />
          <Route path="/dashboards" element={<Dashboards />} />
          <Route path="/updates" element={<Updates />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
