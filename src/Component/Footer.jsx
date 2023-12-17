import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="flex flex-wrap justify-center md:justify-between py-10 px-5 md:px-20 bg-gray-200">
        <div className="flex flex-col items-center md:items-start mb-8 md:mb-0 md:mr-8">
          <img
            src="https://code-with-mj.github.io/E_commerce_website/images/wild-high-resolution-color-logo.png"
            alt=""
            className="mb-4"
          />
          <h2 className="pb-4 text-black text-xl md:text-2xl font-semibold">
            Contact
          </h2>
          <strong className="text-gray-700 text-sm mb-2">
            Address: 542 Street sion koliwada wadala, Mumbai 100030
          </strong>
          <strong className="text-gray-700 text-sm mb-2">
            Mobile: 919820035336
          </strong>
          <strong className="text-gray-700 text-sm mb-2">Hours: 24/7</strong>
        </div>
        <div className="flex flex-col items-center md:items-start mb-8 md:mb-0 md:mr-8 cursor-pointer">
          <h4 className="pb-4 text-black text-xl md:text-2xl font-semibold">
            About us
          </h4>
          <strong className="text-gray-700 text-sm mb-2">About</strong>
          <strong className="text-gray-700 text-sm mb-2">
            Information of delivery
          </strong>
          <strong className="text-gray-700 text-sm mb-2">Privacy Policy</strong>
          <strong className="text-gray-700 text-sm mb-2">
            Terms and conditions
          </strong>
          <strong className="text-gray-700 text-sm mb-2">Contact us</strong>
        </div>
        <div className="flex flex-col items-center md:items-start mb-8 md:mb-0 md:mr-8 cursor-pointer">
          <h4 className="pb-4 text-black text-xl md:text-2xl font-semibold">
            My Account
          </h4>
          <strong className="text-gray-700 text-sm mb-2">Sign In</strong>
          <strong className="text-gray-700 text-sm mb-2">View Cart</strong>
          <strong className="text-gray-700 text-sm mb-2">My wishlist</strong>
          <strong className="text-gray-700 text-sm mb-2">Track my order</strong>
          <strong className="text-gray-700 text-sm mb-2">Help</strong>
        </div>
        <div className="flex flex-col items-center md:items-start mb-8 md:mb-0 cursor-pointer">
          <h4 className="pb-4 text-black text-xl md:text-2xl font-semibold">
            Follow Us
          </h4>

          <div className="flex flex-col gap-4">
            <Link to="#" rel="noopener noreferrer">
              FaceBook
            </Link>
            <Link to="#" rel="noopener noreferrer">
              Twitter
            </Link>
            <Link to="#" rel="noopener noreferrer">
              Instagram
            </Link>
          </div>
        </div>
        <div className="text-gray-700 text-sm">© 2023, E-Commerce Website</div>
      </div>
    </>
  );
}

export default Footer;
