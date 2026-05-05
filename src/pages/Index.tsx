import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import GallerySection from "@/components/GallerySection";
import ArtistsSection from "@/components/ArtistsSection";
import TicketsSection from "@/components/TicketsSection";
import ContactsSection from "@/components/ContactsSection";

export default function Index() {
  return (
    <div className="min-h-screen bg-dark text-white">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <GallerySection />
      <ArtistsSection />
      <TicketsSection />
      <ContactsSection />
    </div>
  );
}
