function Banner() {
  return (
    <div>
      <div className="flex w-full h-[40vh] bg-[url(https://code-with-mj.github.io/E_commerce_website/images/b2.jpg)] bg-cover bg-center flex-col justify-center items-center text-center">
        <h4 className="text-white text-lg lg:text-2xl font-bold">
          Repair service
        </h4>
        <h3 className="text-white text-[24px] lg:text-[35px] flex">
          Up to{" "}
          <span className="flex text-red-600 font-bold ml-1 lg:ml-4">
            70% off
          </span>{" "}
          - All t-shirts & Accessories
        </h3>
        <button className="text-black w-[125px] lg:w-[150px] rounded-lg border-4 border-none bg-white py-[10px] my-4 lg:my-8 hover:rounded-[25px] hover:bg-[#880085]">
          Explore More
        </button>
      </div>
    </div>
  );
}

export default Banner;
