import Card from "./Card/Card";
import NewsLetter from "./NewsLetter";
import PageHeader from "./PageHeader/PageHeader";

function Shop() {
  return (
    <>
      <PageHeader
        Image="https://code-with-mj.github.io/E_commerce_website/images/pexels-angela-roma-7319273.jpg"
        desc="Save more with coupons & up to 60% off!"
        HeaderTitle="#Stayhome"
      />
      <div className=" w-[600x] h-auto  flex justify-center items-center flex-col ">
        <h1 className=" flex justify-center text-[46px] text-black font-bold mt-8">
          Our Product
        </h1>
        <p className=" mb-[20px] mt-[15px]">New collection</p>
        <div className=" w-[90%] h-[auto]  mb-4">
          <div className=" flex flex-row justify-between flex-wrap pt-[20px] gap-4 ">
            {" "}
            <Card
              Image="https://code-with-mj.github.io/E_commerce_website/images/n1.jpg"
              title={"Adidas"}
              desc="Cartoon Astronaut t shirts"
              price="250rs"
            />
            <Card Image="https://code-with-mj.github.io/E_commerce_website/images/n2.jpg" />
            <Card Image="https://code-with-mj.github.io/E_commerce_website/images/n3.jpg" />
            <Card Image="https://code-with-mj.github.io/E_commerce_website/images/n4.jpg" />
            <Card Image="https://code-with-mj.github.io/E_commerce_website/images/n5.jpg" />
            <Card Image="https://code-with-mj.github.io/E_commerce_website/images/n6.jpg" />
            <Card Image="https://code-with-mj.github.io/E_commerce_website/images/n7.jpg" />
            <Card Image="https://code-with-mj.github.io/E_commerce_website/images/n8.jpg" />
            <Card Image="https://code-with-mj.github.io/E_commerce_website/images/products/f1.jpg" />
            <Card Image="https://code-with-mj.github.io/E_commerce_website/images/products/f2.jpg" />
            <Card Image="https://code-with-mj.github.io/E_commerce_website/images/products/f3.jpg" />
            <Card Image="https://code-with-mj.github.io/E_commerce_website/images/products/f4.jpg" />
            <Card Image="https://code-with-mj.github.io/E_commerce_website/images/products/f5.jpg" />
            <Card Image="https://code-with-mj.github.io/E_commerce_website/images/products/f6.jpg" />
            <Card Image="https://code-with-mj.github.io/E_commerce_website/images/products/f7.jpg" />
            <Card Image="https://code-with-mj.github.io/E_commerce_website/images/products/f8.jpg" />
          </div>
        </div>
      </div>
      <NewsLetter />
    </>
  );
}

export default Shop;
