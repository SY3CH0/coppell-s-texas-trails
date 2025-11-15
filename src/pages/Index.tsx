import Hero from "@/components/Hero";
import FeaturedResources from "@/components/FeaturedResources";
import ResourceDirectory from "@/components/ResourceDirectory";
import CommunityStats from "@/components/CommunityStats";
import SubmitResourceForm from "@/components/SubmitResourceForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <FeaturedResources />
      <CommunityStats />
      <ResourceDirectory />
      <SubmitResourceForm />
      <Footer />
    </div>
  );
};

export default Index;
