import PageLayout from "../../layouts/PageLayout";
import HeroSection from "../home/components/HeroSection";
import DealsAndOffers from "../home/components/DealsAndOffers";
import ShowCase from "../home/components/ShowCase";
import QuoteRequestForm from "../home/components/QuoteRequestForm";
import RecommendedItems from "./components/RecommendedItems";
import ExtraServices from "./components/ExtraServices";
import RegionsList from "./components/RegionsList";
import Subscribe from "../../components/Subscribe";

const HomePage = () => {
  return (
    <PageLayout>
      <HeroSection />
      <DealsAndOffers />
      <ShowCase />
      <ShowCase />
      <QuoteRequestForm />
      <RecommendedItems />
      <ExtraServices />
      <RegionsList />
      <Subscribe />
    </PageLayout>
  );
};

export default HomePage;
