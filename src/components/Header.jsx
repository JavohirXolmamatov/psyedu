import { FaChevronLeft } from "react-icons/fa6";
import { useNavigate } from "react-router";
import { IoMdMenu } from "react-icons/io";

function Header({ setIsOpen, isOpen }) {
  const navigate = useNavigate();

  return (
    <div className=" my-8 w-[90%] mx-auto">
      <div className="bg-white h-[90px]   rounded-3xl shadow-xl flex items-center px-5">
        <IoMdMenu
          className={`size-8 block md:hidden`}
          onClick={() => setIsOpen(!isOpen)}
        />
        <div className="size-14 rounded-full ml-auto bg-red-200"></div>
      </div>
      <div
        className="inline-flex my-8 items-center gap-2 select-none"
        onClick={() => navigate(-1)}
      >
        <div className="size-8 bg-[#2964C2] rounded-full flex justify-center items-center">
          <FaChevronLeft className=" text-white size-4 " />
        </div>
        <p className="font-medium text-xl text-[#2964C2]">Orqaga</p>
      </div>
    </div>
  );
}

export default Header;
