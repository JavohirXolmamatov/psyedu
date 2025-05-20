import { BsTelegram } from "react-icons/bs";
import { psyedu } from "../assets";
import { AiFillInstagram } from "react-icons/ai";
import { VscGlobe } from "react-icons/vsc";
import { TbPhone } from "react-icons/tb";
import { CgMail } from "react-icons/cg";

function Footer() {
  return (
    <footer>
      <div className="px-5 py-17 flex items-start justify-between gap-4 flex-wrap max-[770px]:px-7 max-[500px]:px-5">
        <div className="-mt-2">
          <div className="flex items-center gap-3 w-[290px] max-[500px]:w-[250px]">
            <div className="w-[100px] h-[100px]">
              <img src={psyedu} alt="psyedu" className=" w-full h-full" />
            </div>
            <h1 className="text-white w-[60%] font-medium max-[500px]:w-full">
              Psixologlarni uzluksiz kasbiy rivojlantirish platformasi
            </h1>
          </div>

          <div className="flex items-start gap-5 pt-4 pl-2">
            <a href="#">
              <div className="w-[30px] h-[30px] bg-white rounded-md flex items-center justify-center">
                <BsTelegram className="text-[#154DA6] text-md" />
              </div>
            </a>

            <a href="#">
              <div className="w-[30px] h-[30px] bg-white rounded-md flex items-center justify-center">
                <AiFillInstagram className="text-[#154DA6] text-[18px]" />
              </div>
            </a>

            <a href="#">
              <div className="w-[30px] h-[30px] bg-white rounded-md flex items-center justify-center">
                <div className="w-[16px] h-[16px] bg-[#154DA6] rounded-[4px] flex items-center justify-center">
                  <VscGlobe className="text-white text-[14px] pt-[1px]"/>
                </div>
              </div>
            </a>
          </div>
        </div>

        <div className="w-full max-w-[330px] h-full">
          <iframe
            className="rounded-xl w-full max-w-[320px] sm:max-w-[360px]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2994.899290307712!2d69.21183067624544!3d41.35454267130387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8c3fa12f11a3%3A0xc849830383f1974d!2sA.AVLONIY%20NOMIDAGI%20PEDAGOGLARNI%20KASBIY%20RIVOJLANTIRISH%20VA%20YANGI%20METODIKALARGA%20O'RGATISH%20MILLIY-TADQIQOT%20INSTITUTI!5e0!3m2!1sen!2s!4v1742970755489!5m2!1sen!2s"
            width="100%"
            height="187"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade" 
          ></iframe>
          <p className="text-white mt-2 font-semibold text-[0.75rem] underline">
            Abdulla Avloniy nomidagi pedagogik mahorat milliy instituti
          </p>
        </div>

        <ul className="w-[240px] flex flex-col gap-3 max-[500px]:w-[250px]">
          <li className="text-[#0dff00] flex items-center gap-2">
            <TbPhone className="text-2xl" />
            <p className="text-lg font-normal">Telefon</p>
          </li>

          <li className="">
            <a href="tel:+998975131905" className="text-white">
              +998 97 513 19 05
            </a>
          </li>

          <li className="text-[#0dff00] flex items-center gap-2">
            <CgMail className="text-2xl" />
            <p className="text-lg font-normal">Elektron pochta</p>
          </li>

          <li className="">
            <a
              href="mailto:jumanoverdavlat701@gmail.com"
              className="text-white"
            >
              jumanoverdavlat701@gmail.com
            </a>
          </li>

          <li className="text-[#0dff00] flex items-center gap-2">
            <VscGlobe className="text-2xl" />
            <p className="text-lg font-normal">Veb-say</p>
          </li>

          <li className="">
            <a href="https://www.psyedu.uz" className="text-white">
              www.psyedu.uz
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
