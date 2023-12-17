import PropTypes from "prop-types";

function BlogCard({
  Image = "https://code-with-mj.github.io/E_commerce_website/images/pic10.png",
}) {
  return (
    <div>
      <div className="flex items-center w-full relative py-16 px-16 md:py-20 md:px-20 lg:px-24 xl:px-28">
        <h1 className="ml-10 text-[#c9cbce] pt-4 absolute z-[-9] font-medium top-[40px] left-0 leading-[64px] text-2xl lg:text-4xl xl:text-5xl">
          13/01
        </h1>
        <div className="w-full lg:mr-24 flex flex-col md:flex-row gap-8">
          <img
            src={Image}
            alt=""
            className="w-full h-[300px] object-cover lg:w-[50%] lg:h-auto"
          ></img>
          <div className="w-full lg:w-[50%] object-cover">
            <h2 className="mb-4 mt-4 font-bold text-lg md:text-2xl lg:text-3xl xl:text-4xl">
              The cotton jersey zip-up jackets
            </h2>
            <p className="mt-2 mb-4 text-sm md:text-base lg:text-lg xl:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos inventore doloremque fuga eos accusantium dolorum
              dolor sint dicta accusamus quo tenetur beatae neque unde, cum,
              odit magnam debitis facere distinctio quibusdam placeat nulla aut
              nihil?
            </p>
            <h1 className="relative text-black text-sm md:text-base lg:text-lg xl:text-xl font-bold">
              CONTINUE READING
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

BlogCard.propTypes = {
  Image: PropTypes.string,
  title: PropTypes.string,
};

export default BlogCard;
