function HeroSection() {
  return (
    <div>
      <div className="relative w-full h-[90vh] bg-black rounded-[2px] flex flex-col justify-center mb-16 items-start bg-cover pr-[5%] lg:pr-[80px] bg-[url(https://code-with-mj.github.io/E_commerce_website/images/bag-15841_1920.png)]">
        <h4 className="pb-15px absolute top-[20%] lg:top-[400px] ml-4 lg:ml-16 block font-bold my-4 text-black text-lg lg:text-2xl">
          Trendy offers
        </h4>
        <h2 className="pb-15px absolute top-[30%] lg:top-[420px] ml-4 lg:ml-16 block font-bold text-[24px] lg:text-[45px] my-4 text-black">
          Super value deals
        </h2>
        <h3 className="pb-15px absolute top-[40%] lg:top-[420px] ml-4 lg:ml-16 block font-bold text-[24px] lg:text-[45px] my-[75px] text-[rgb(0,255,255)]">
          On all products
        </h3>

        <button className="absolute mt-25 bottom-1 left-4 lg:left-[4%] bg-[url(https://code-with-mj.github.io/E_commerce_website/images/button.png)] pb-15px my-[100px] bg-transparent text-[#964B00] pt-[14px] pr-[4%] lg:pr-[80px] pb-[14px] pl-[4%] lg:pl-[65px] text-sm lg:text-base">
          Shop now
        </button>
      </div>
    </div>
  );
}

export default HeroSection;
