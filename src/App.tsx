import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Aktivitetslokalen from "./pages/Aktivitetslokalen";
import Tjanster from "./pages/Tjanster";
import Kontakt from "./pages/Kontakt";
import HyrPlats from "./pages/HyrPlats";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/aktivitetslokalen" element={<Aktivitetslokalen />} />
          <Route path="/tjanster" element={<Tjanster />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/hyr-plats" element={<HyrPlats />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
