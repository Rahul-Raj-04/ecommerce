import PropTypes from "prop-types";
function FeatureCard({
  image = "https://code-with-mj.github.io/E_commerce_website/images/f2.png",
  Title = "Demo",
  color = "",
}) {
  return (
    <div>
      <div className="w-48 mx-auto text-center py-6 px-4 border-2 border-pink-200 rounded-md my-4 hover:rounded-3xl cursor-pointer ">
        <img
          className=" w-full mb-[10px] overflow-hidden"
          src={image}
          alt=""
        ></img>
        <h6
          className={`inline-block px-2 py-1.5 leading-4 rounded-md text-green-600 bg-[${color}] font-bold text-xs `}
        >
          {Title}
        </h6>
      </div>
    </div>
  );
}
FeatureCard.propTypes = {
  image: PropTypes.string,
  Title: PropTypes.string,
  color: PropTypes.string,
};

export default FeatureCard;
