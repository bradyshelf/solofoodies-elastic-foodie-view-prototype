
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ChatHome from "./pages/ChatHome";
import RestaurantDetail from "./pages/RestaurantDetail";
import ChatConversation from "./pages/ChatConversation";
import TipNotification from "./pages/TipNotification";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/chat" element={<ChatHome />} />
          <Route path="/restaurant/:restaurantId" element={<RestaurantDetail />} />
          <Route path="/chat/tip/:chatId" element={<TipNotification />} />
          <Route path="/chat/:chatId" element={<ChatConversation />} />
          <Route path="*" element={<Index />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
