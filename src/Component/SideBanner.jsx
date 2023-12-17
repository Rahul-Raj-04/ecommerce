function SideBanner() {
  return (
    <div className="flex flex-col lg:flex-row justify-between flex-wrap px-4 lg:px-8">
      <div className="flex flex-col justify-center items-start min-w-full lg:min-w-[30%] h-[30vh] bg-cover bg-center mb-4  lg:mr-4 lg:mb-[20px] bg-[url(https://code-with-mj.github.io/E_commerce_website/images/hangers-1850082_1280.jpg)]">
        <h2 className="mx-3 text-black font-extrabold text-lg lg:text-2xl">
          Season sale
        </h2>
        <h3 className="my-2 mx-3 text-red-600 font-extrabold text-sm lg:text-base block">
          Winter collection -50% OFF
        </h3>
      </div>
      <div className="flex flex-col justify-center items-start min-w-full lg:min-w-[30%] h-[30vh] bg-cover bg-center mb-4  lg:mr-4 lg:mb-[20px] bg-[url(https://code-with-mj.github.io/E_commerce_website/images/newfootwear.jpeg)]">
        <h2 className="mx-3 text-black font-extrabold text-lg lg:text-2xl">
          New footwear collection
        </h2>
        <h3 className="my-2 mx-3 text-red-600 font-extrabold text-sm lg:text-base block">
          Will be in sale soon
        </h3>
      </div>
      <div className="flex flex-col justify-center items-start min-w-full lg:min-w-[30%] h-[30vh] bg-cover bg-center mb-4 lg:mb-0 bg-[url(https://code-with-mj.github.io/E_commerce_website/images/b10.jpg)]">
        <h2 className="mx-3 text-black font-extrabold text-lg lg:text-2xl">
          T-Shirts
        </h2>
        <h3 className="my-2 mx-3 text-red-600 font-extrabold text-sm lg:text-base block">
          New Trendy prints
        </h3>
      </div>
    </div>
  );
}

export default SideBanner;
