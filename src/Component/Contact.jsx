import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PageHeader from "./PageHeader/PageHeader";
import {
  faEnvelope,
  faMobileScreenButton,
  faClock,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

function Contact() {
  return (
    <>
      <PageHeader
        Image="https://code-with-mj.github.io/E_commerce_website/images/banner-3.jpg"
        HeaderTitle="#LetsTalk"
        desc="LEAVE A MESSAGE, We love to hear from you"
      />
      <div className=" flex   flex-row justify-between py-[40px] px-[80px]">
        <div className=" flex flex-col">
          {" "}
          <div className=" w-[80%] ">
            <span className=" text-[12px] font-medium">Get In Touch</span>
            <h2 className=" text-[26px] font-semibold leading-[35px] py-[20px]">
              Visit one of our agency locations or contact us today
            </h2>
            <h3 className=" pb-[15px] text-[16px] font-semibold">
              Head Office
            </h3>
          </div>
          <div className=" block">
            <li className=" flex py-[10px] gap-4 items-center">
              <FontAwesomeIcon icon={faLocationDot} />
              <p className=" text-[14px] text-[#465b52]">
                Visit one of our agency locations or contact us today
              </p>
            </li>
            <li className="flex py-[10px] gap-4 items-center">
              <FontAwesomeIcon icon={faEnvelope} />
              <p className=" text-[14px] text-[#465b52]">rahul@gmail.com</p>
            </li>
            <li className="flex py-[10px]  gap-4 items-center">
              <FontAwesomeIcon icon={faMobileScreenButton} />
              <p className=" text-[14px] text-[#465b52]">919820035336</p>
            </li>
            <li className="flex py-[10px] items-center gap-4">
              <FontAwesomeIcon icon={faClock} />
              <p className=" text-[14px] text-[#465b52]">
                Monday to Saturday: 9:00am to 5:00pm
              </p>
            </li>
          </div>
        </div>
        <div className=" w-[50%] bg-gray-700 h-full mt-4">
          {" "}
          <iframe
            className=" w-full h-[450px]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6723.360904304175!2d77.36561143262152!3d28.60959559981567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce571ce298f83%3A0x75a4ecce20c13f84!2sKoncept%20Automobiles%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1702127417941!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className=" flex justify-between m-[30px] p-[80px] border-[2px] border-[#e707be]">
        <form className=" w-[65%] flex flex-col items-start ">
          <span className=" text-[16px]">LEAVE A MESSAGE</span>
          <h2 className=" text-[26px] py-[20px] leading-[35px] font-bold text-black">
            We love to hear from you
          </h2>
          <input
            type="text"
            placeholder=" Your Name"
            className=" w-full py-[12px] px-[15px] mb-[20px] border-[2px] border-[rgb(231, 231, 215)] writing-horizontal p-1 pt-2 pl-2"
          ></input>
          <input
            type="email"
            placeholder=" Email"
            className=" w-full py-[12px] px-[15px] mb-[20px] border-[2px] border-[rgb(231, 231, 215)] writing-horizontal p-1 pt-2 pl-2"
          ></input>
          <input
            type="text"
            placeholder="Subject"
            className=" w-full py-[12px] px-[15px] mb-[20px] border-[2px] border-[rgb(231, 231, 215)] writing-horizontal p-1 pt-2 pl-2"
          ></input>
          <textarea
            placeholder=" Your Name"
            className=" w-full py-[12px] px-[15px] mb-[20px] border-[2px]  writing-horizontal p-1 pt-2 pl-2"
          ></textarea>
          <button className=" text-[14px] py-[15px] px-[30px] font-bold text-[#e4e8e7] bg-green-800 rounded-lg">
            Submit
          </button>
        </form>
        <div className=" w-[30%] flex">
          <img
            className=""
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
          ></img>
        </div>
      </div>
    </>
  );
}

export default Contact;
