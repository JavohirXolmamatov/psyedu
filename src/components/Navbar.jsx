import { FaAngleLeft } from "react-icons/fa";
import { BsPersonGear } from "react-icons/bs";
import { IoHomeOutline } from "react-icons/io5";
import { FaUserGraduate } from "react-icons/fa6";
import { GiDiploma } from "react-icons/gi";
import { CiMedal } from "react-icons/ci";
import { FaChalkboardUser } from "react-icons/fa6";
import { FaAngleDoubleRight } from "react-icons/fa";
import { psyedu } from "../assets";
import { NavLink } from "react-router";
function Navbar({ setIsOpen, isOpen }) {
  return (
    <div className="p-6 text-white">
      <div className="flex w-full justify-between items-center gap-1 relative z-99 transition-all duration-500">
        <div className="flex items-center gap-3">
          <img src={psyedu} alt="psyedu" className="size-22" />
          <h1
            className={`${
              isOpen ? "block" : "hidden"
            } font-medium text-sm w-[60%]`}
          >
            Psixologlarni uzluksiz kasbiy rivojlantirish platformasi
          </h1>
        </div>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } w-14 h-10 border rounded-md flex justify-center items-center transition-all duration-500`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <FaAngleLeft />
        </div>
        <div
          className={`${
            isOpen ? "hidden" : "block"
          } w-14 h-18 rounded-3xl flex justify-center items-center absolute -right-13 bg-[#2964C2] -z-5 transition-all duration-500`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <FaAngleDoubleRight />
        </div>
      </div>

      <section className="w-full py-10 flex flex-col gap-4">
        <NavLink
          to={"/"}
          className="flex items-center gap-4 w-full bg-[#3475DB] p-3 rounded-md shadow"
        >
          <IoHomeOutline className="text-white size-6" />
          <p className={`${isOpen ? "block" : "hidden"} font-medium text-lg`}>
            Bosh sahifa
          </p>
        </NavLink>
        <NavLink
          to={"/personal-info"}
          className="flex items-center gap-4 w-full bg-[#3475DB] p-3 rounded-md shadow"
        >
          <BsPersonGear className="text-white size-6" />
          <p className={`${isOpen ? "block" : "hidden"} font-medium text-lg`}>
            Shaxsiy ma'lumotlar
          </p>
        </NavLink>
        <NavLink
          to={"/education-wrapper"}
          className="flex items-center gap-4 w-full bg-[#3475DB] p-3 rounded-md shadow"
        >
          <FaUserGraduate className="text-white size-6" />
          <p className={`${isOpen ? "block" : "hidden"} font-medium text-lg`}>
            Ta'lim
          </p>
        </NavLink>
        <NavLink
          to={"/results"}
          className="flex items-center gap-4 w-full bg-[#3475DB] p-3 rounded-md shadow"
        >
          <CiMedal className="text-white size-6" />
          <p className={`${isOpen ? "block" : "hidden"} font-medium text-lg`}>
            Natijalar
          </p>
        </NavLink>
        <NavLink
          to={"/certificate-programs"}
          className="flex items-center gap-4 w-full bg-[#3475DB] p-3 rounded-md shadow"
        >
          <GiDiploma className="text-white size-6" />
          <p className={`${isOpen ? "block" : "hidden"} font-medium text-lg`}>
            Sertifikatlar
          </p>
        </NavLink>
        <div className="w-full group">
          <div className="flex items-center gap-4 w-full bg-[#3475DB] p-3 rounded-md shadow mb-2 relative">
            <FaChalkboardUser className="text-white size-6" />
            <p className={`${isOpen ? "block" : "hidden"} font-medium text-lg`}>
              Testlar
            </p>
          </div>
          <div className="hidden group-hover:block absolute">
            <div className="flex flex-col w-full bg-[#3475DB] p-3 rounded-md shadow">
              <NavLink
                to={"/beginner-test"}
                className="font-medium hover:bg-[#2c63bb] p-3 rounded-md"
              >
                Boshlang'ich test
              </NavLink>
              <NavLink
                to={"/regular-test"}
                className="font-medium hover:bg-[#2c63bb] p-3 rounded-md"
              >
                Doimiy test
              </NavLink>
              <NavLink
                to={"/last-test"}
                className="font-medium hover:bg-[#2c63bb] p-3 rounded-md"
              >
                Yakuniy test
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Navbar;
