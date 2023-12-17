import FeatureCard from "./Card/FeatureCard";

function FeaturSection() {
  return (
    <>
      <div className=" flex  justify-between items-center flex-wrap py-10 px-5 flexw md:px-10 lg:px-20">
        <FeatureCard
          image="https://code-with-mj.github.io/E_commerce_website/images/f1.png"
          Title="Free Shipping"
          color="#e9967a"
        />
        <FeatureCard
          image="https://code-with-mj.github.io/E_commerce_website/images/f2.png"
          Title="Online Order"
          color="#e9967a"
        />
        <FeatureCard
          image="https://code-with-mj.github.io/E_commerce_website/images/f3.png"
          Title="Save Money"
          color="#e9967a"
        />
        <FeatureCard
          image="https://code-with-mj.github.io/E_commerce_website/images/f4.png"
          Title="Promotion"
          color="#e9967a"
        />
        <FeatureCard
          image="https://code-with-mj.github.io/E_commerce_website/images/f5.png"
          Title="Happy Sell"
          color="#e9967a"
        />
        <FeatureCard
          image="https://code-with-mj.github.io/E_commerce_website/images/f6.png"
          Title="f24/7 Support"
          color="#e9967a"
        />
      </div>
    </>
  );
}

export default FeaturSection;
