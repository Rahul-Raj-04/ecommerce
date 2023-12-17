import { CiStar } from "react-icons/ci";
import PropTypes from "prop-types";

function Card({
  title = "Adidas",
  Image = "https://code-with-mj.github.io/E_commerce_website/images/n1.jpg",
  desc = "Cartoon Astronaut t shirts",
  price = "450rs",
}) {
  return (
    <>
      <div className="w-full md:w-[48%] lg:w-[23%] min-w-[250px] border-[2px] border-[#cce7d0] p-2 px-3 rounded-[25px] custom-box-shadow mt-4 md:mt-0 relative cursor-pointer overflow-hidden transform transition-transform hover:scale-105">
        <img
          className="w-full rounded-[20px] cursor-pointer"
          src={Image}
          alt="Product img"
        ></img>
        <div className="text-start pt-4 md:pt-0">
          <div className="text-[#f20606]"> {title}</div>
          <h5 className="pt-2 md:pt-7 text-[#943b6f] text-[15px]">{desc}</h5>
        </div>
        <div className="text-start flex">
          <CiStar />
          <CiStar />
          <CiStar />
          <CiStar />
          <CiStar />
        </div>
        <div className="pt-2 md:pt-7 font-[15px] text-green-500">{price}</div>
        <div className="w-[100px] flex items-center justify-center cursor-pointer h-[40px] rounded-md bg-blue-700 font-medium text-white border-[1px] border-[#cce780] absolute bottom-[20px] right-[10px] transition-background-color hover:bg-blue-800">
          Add to cart
        </div>
      </div>
    </>
  );
}

Card.propTypes = {
  Image: PropTypes.string,
  title: PropTypes.string,
  desc: PropTypes.string,
  price: PropTypes.string,
};

export default Card;
