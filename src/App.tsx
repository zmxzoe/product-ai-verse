
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import Index from "./pages/Index";
import ProductUpload from "./pages/ProductUpload";
import ProductDetail from "./pages/ProductDetail";
import ResourceCenter from "./pages/ResourceCenter";
import ServiceMarket from "./pages/ServiceMarket";
import JobBoard from "./pages/JobBoard";
import UserCenter from "./pages/UserCenter";
import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/upload" element={<ProductUpload />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/resources" element={<ResourceCenter />} />
            <Route path="/services" element={<ServiceMarket />} />
            <Route path="/jobs" element={<JobBoard />} />
            <Route path="/user" element={<UserCenter />} />
            <Route path="/auth" element={<Auth />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
