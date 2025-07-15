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
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
