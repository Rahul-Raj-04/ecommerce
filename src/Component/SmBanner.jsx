function SmBanner() {
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-between mb-8 flex-wrap py-4 lg:py-8 px-4 lg:px-8 mt-8 lg:mt-16">
        <div className="flex flex-col justify-center items-start text-start min-w-full lg:min-w-[700px] h-[50vh] bg-cover bg-center p-4 lg:p-[30px] bg-[url(https://code-with-mj.github.io/E_commerce_website/images/b17.jpg)]">
          <h4 className="text-[20px] font-light text-[#f30707] py-2 lg:py-4">
            Exciting Deals
          </h4>
          <h2 className="text-[28px] font-semibold text-[#f30707] py-1">
            Buy 1 get 1 free
          </h2>
          <span className="text-red-500 text-base font-semibold pb-2 lg:pb-4">
            The best classic dress is on sale at Wild store
          </span>
          <button className="text-base font-semibold px-2 lg:px-4 py-2 lg:py-3 text-blue-500 border border-red-500 rounded cursor-pointer transition duration-300 hover:bg-green-500 hover:rounded-xl hover:text-white focus:outline-none">
            Learn more...
          </button>
        </div>
        <div className="flex flex-col justify-center items-start min-w-full lg:min-w-[700px] h-[50vh] bg-cover bg-center p-4 lg:p-0 bg-[url(https://code-with-mj.github.io/E_commerce_website/images/girl-2581913_1920.jpg)]">
          <h4 className="text-red-500 font-light text-2xl pb-2">
            Spring/Summer
          </h4>
          <h2 className="text-red-500 text-4xl font-extrabold my-2">
            Coming Season
          </h2>
          <span className="text-red-500 text-base font-semibold pb-2">
            The dress will be available soon
          </span>
          <button className="text-base font-semibold px-2 lg:px-4 py-2 lg:py-3 text-blue-500 border border-red-500 rounded cursor-pointer transition duration-300 hover:bg-green-500 hover:rounded-xl hover:text-white focus:outline-none">
            Collection
          </button>
        </div>
      </div>
    </>
  );
}

export default SmBanner;
