function NewsLetter() {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-center items-center bg-no-repeat bg-center bg-cover bg-[#5804F3]">
        <div className="p-5 md:p-10 mx-2 md:mx-16 text-lg md:text-xl text-white">
          <h4 className="block my-3 md:my-5 mx-0 font-bold">
            Sign Up For Newsletters
          </h4>
          <div className="flex flex-col md:flex-row items-center md:items-start bg-cover bg-center bg-no-repeat text-white">
            <p className="text-center md:text-left">
              Subscribe to our newsletter and get 20% off your first purchase
              and some
            </p>
            <div className="text-[#0AE88E] text-lg md:text-xl my-2 md:ml-4 font-bold">
              Special Offers
            </div>
          </div>
          <div className="flex flex-col mt-4 md:flex-row md:mt-0">
            <input
              className="w-full md:w-[60%] rounded-tl-md md:rounded-tl-xl rounded-bl-md md:rounded-bl-xl h-[45px] md:h-[55px] text-start px-4 md:px-6 mb-2 md:mb-0"
              type="text"
              placeholder="Your email Address"
            />
            <button className="bg-green-500 text-white rounded-tr-md md:rounded-tr-xl rounded-br-md md:rounded-br-xl font-semibold px-4 md:px-6 py-3 md:h-[55px] cursor-pointer border-none outline-none transition duration-300">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewsLetter;
