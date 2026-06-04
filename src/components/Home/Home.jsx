import HeroSection from "./HeroSection";
import iphone from "../../assets/iphone-14-pro.webp";
import mac from "../../assets/mac-system-cut.jfif";
import FeaturedProducts from "./FeaturedProducts";

const Home = () => {
  return (
    <div>
      <HeroSection
        title="Buy iPhone 14 Pro"
        subTitle="Experience the power of the latest iPhone 14 with our most Pro camera ever."
        image={iphone}
        link="/"
      />
      {/* Featrued prod */}
      <FeaturedProducts />
      {/* Hero */}
      <HeroSection
        title="Build the ultimate setup"
        subTitle="You can add Studio Display and colour-matched Magic accessories to your bag after configure your Mac mini."
        image={mac}
        link="/"
      />
    </div>
  );
};

export default Home;
