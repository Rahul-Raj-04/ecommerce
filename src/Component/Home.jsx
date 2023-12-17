import Banner from "./Banner";
import FeaturSection from "./FeaturSection";
import HeroSection from "./HeroSection";
import NewsLetter from "./NewsLetter";
import ProductSection from "./ProductSection";
import SideBanner from "./SideBanner";
import SmBanner from "./SmBanner";

function Home() {
  return (
    <>
      <HeroSection />
      <Banner />
      <ProductSection />
      <SmBanner />
      <SideBanner />
      <FeaturSection />
      <NewsLetter />
    </>
  );
}

export default Home;
