
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import CreateSnip from "./pages/CreateSnip";
import ReadDocs from "./pages/ReadDocs";
import ForDevelopers from "./pages/ForDevelopers";
import ForDesigners from "./pages/ForDesigners";
import Contact from "./pages/Contact";
import Waitlist from "./pages/Waitlist";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/create-snip" element={<CreateSnip />} />
          <Route path="/docs" element={<ReadDocs />} />
          <Route path="/for-developers" element={<ForDevelopers />} />
          <Route path="/for-designers" element={<ForDesigners />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/waitlist" element={<Waitlist />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
