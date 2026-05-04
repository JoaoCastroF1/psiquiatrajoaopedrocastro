import { Outlet } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const MainLayout = () => (
  <div className="min-h-screen">
    <Navbar />
    <Outlet />
    <Footer />
    <WhatsAppButton />
  </div>
);

export default MainLayout;
