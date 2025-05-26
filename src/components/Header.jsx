import { FaChevronLeft } from "react-icons/fa6";
import { useNavigate } from "react-router";
import { IoMdMenu } from "react-icons/io";
import { useContext, useState } from "react";
import { UserContext } from "../context/userContext";

function Header({ setIsOpen, isOpen }) {
  const { user } = useContext(UserContext);

  const [isOpenModal, setIsOpenModal] = useState(false);

  const navigate = useNavigate();
  const logoutHandler = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    navigate("/login");
  };
  return (
    <div className=" my-8 mx-auto">
      <div className="bg-white h-[90px] justify-between md:justify-end rounded-3xl shadow-xl flex items-center px-5">
        <IoMdMenu
          className={`size-8 block md:hidden`}
          onClick={() => setIsOpen(!isOpen)}
        />

        <div className="relative">
          <img
            width={49}
            height={49}
            alt="user icon"
            src="/img/user.png"
            className="cursor-pointer"
            onClick={() => setIsOpenModal((e) => !e)}
          />
          {isOpenModal && (
            <div className="block absolute z-101 right-0 top-13 p-2.5 rounded-md bg-[#e8f1ff] text-black sm:w-60 w-48 shadow-[0px_2px_4px_rgba(41,100,194,0.1),-1px_6px_6px_rgba(41,100,194,0.09),-3px_14px_9px_rgba(41,100,194,0.05),-5px_25px_10px_rgba(41,100,194,0.01),-8px_39px_11px_rgba(41,100,194,0)]">
              <div className="flex items-start justify-between">
                <div className="flex sm:flex-row flex-col items-start sm:items-center gap-1 sm:gap-2 mb-4">
                  <img
                    width={42}
                    height={42}
                    alt="user icon"
                    src="/img/user.png"
                  />
                  <p className="text-lg sm:text-xl font-semibold sm:font-bold">
                    {user.firstName} {user.lastName}
                  </p>
                </div>
                <svg
                  onClick={() => setIsOpenModal(false)}
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="cursor-pointer"
                  height={25}
                  width={25}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </div>
              <button
                onClick={logoutHandler}
                className="flex items-center gap-2 py-2 px-3 rounded-sm cursor-pointer w-full text-white font-medium bg-[#bd1414]"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 512 512"
                  className="sm:text-[24px] text-[18px]"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={32}
                    d="M320 176v-40a40 40 0 0 0-40-40H88a40 40 0 0 0-40 40v240a40 40 0 0 0 40 40h192a40 40 0 0 0 40-40v-40m64-160 80 80-80 80m-193-80h273"
                  />
                </svg>
                <span className="sm:text-lg text-sm">Chiqish</span>
              </button>
            </div>
          )}
        </div>
        {isOpenModal && (
          <div
            onClick={() => setIsOpenModal(false)}
            className="absolute inset-0 z-100 bg-[#00000075]"
          ></div>
        )}
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
