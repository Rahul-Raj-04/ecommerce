import PropTypes from "prop-types";

function PageHeader({
  HeaderTitle = "Demo",
  Image = "https://code-with-mj.github.io/E_commerce_website/images/pexels-angela-roma-7319273.jpg",
  desc = "Save more with coupons & up to 60% off!",
}) {
  const style = {
    backgroundImage: `url(${Image})`,
    backgroundSize: "cover",
  };

  return (
    <div
      className="w-full h-[50vh] bg-cover flex justify-center text-center flex-col p-[14px]"
      style={style}
    >
      <h2 className="text-[46px] leading-[54px] text-red-500 font-semibold">
        {HeaderTitle}
      </h2>
      <p className="text-[#0520ed] text-[16px] mt-[15px] mb-[20px]">{desc}</p>
    </div>
  );
}

PageHeader.propTypes = {
  Image: PropTypes.string,
  HeaderTitle: PropTypes.string,
  desc: PropTypes.string,
};

export default PageHeader;
