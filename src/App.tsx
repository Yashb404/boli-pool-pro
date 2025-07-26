import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { VendorDashboard } from "./vendor/pages/VendorDashboard";
import { JoinPool } from "./vendor/pages/JoinPool";
import { MyOrders } from "./vendor/pages/MyOrders";
import { MyWallet } from "./vendor/pages/MyWallet";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/vendor" element={<VendorDashboard />} />
          <Route path="/vendor/join-pool" element={<JoinPool />} />
          <Route path="/vendor/orders" element={<MyOrders />} />
          <Route path="/vendor/wallet" element={<MyWallet />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
