import FeaturSection from "./FeaturSection";
import PageHeader from "./PageHeader/PageHeader";

function About() {
  return (
    <>
      <PageHeader
        Image="https://code-with-mj.github.io/E_commerce_website/images/banner-1.jpg"
        desc="|We provide super deals since 1995!"
        HeaderTitle="#KnowUs"
      />
      <div className=" flex  items-center py-[40px] px-[80px]">
        <img
          src="https://code-with-mj.github.io/E_commerce_website/images/a6.jpg"
          alt=""
          className="w-[50%] h-auto overflow-hidden"
        ></img>
        <div className=" pl-[40px] w-[50%]">
          <h2 className=" text-black text-[46px] font-semibold text-1.5xl leading-[1.65em] mb-[0.83em] mt-[0.83em] mx-0">
            Who Are You
          </h2>
          <p className=" text-[16px] text-[#465b52] mt-[15px] mb-[20px] ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            sed rem iste perferendis pariatur, sit ratione asperiores velit
            reprehenderit dolores! Sit ullam cum illo mollitia nobis, repellat
            ab atque. Quaerat nam aliquid quas expedita architecto consequuntur
            numquam repellendus! Quibusdam, doloremque. Consequuntur illum
            facere beatae, maiores tempora autem molestias omnis doloribus
            optio, modi, ratione odit. Labore?
          </p>
          <p className=" pb-8">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
            exercitationem illum libero modi, ut nemo.
          </p>
          <div className="bg-gray-300 overflow-hidden ">
            <div className="animate-marquee p-4">{}</div>
          </div>
        </div>
      </div>
      <div className="  text-center mt-[110px] mb-[20px] ml-[10px] mr-[20px]">
        <h2 className=" text-[50px] text-black font-bold">
          Upcoming Our{" "}
          <span className=" text-[darkmagenta]  underline">App</span>
        </h2>
        <div className="  flex items-center w-full h-100vh justify-center">
          <video
            muted
            autoPlay
            loop
            controls
            className=" w-[70%] h-[100%] text-center mb-0 border-[2px] mt-[40px] rounded-[20px]   border-[darkmagenta]"
            src="https://code-with-mj.github.io/E_commerce_website/images/1.mp4"
          ></video>
        </div>
      </div>
      <FeaturSection />
    </>
  );
}

export default About;
