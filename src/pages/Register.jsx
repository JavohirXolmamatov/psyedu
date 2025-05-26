import { Button } from "antd";
import { useEffect, useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";
import RegionSelect from "../components/Selector";
import api from "../service/api";

const Register = () => {
  const [regionId, setRegionId] = useState(null);
  const [regionErr, setRegionErr] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);

  const navigate = useNavigate();
  const access_token = localStorage.getItem("access_token");
  useEffect(() => {
    if (access_token) {
      navigate("/");
    }
  }, []);

  const registerHandler = async (e) => {
    setRegionErr(false);
    setIsLoading(true);
    e.preventDefault();
    if (!regionId) {
      setRegionErr(true);
      setIsLoading(false);
      return toast.error("Viloyatingizni tanlang");
    }
    try {
      const body = {
        firstName: e.target.firstName.value,
        lastName: e.target.lastName.value,
        middleName: e.target.middleName.value,
        cityName: e.target.cityName.value,
        password: e.target.password.value,
        phone: e.target.phone.value,
        schoolName: e.target.schoolName.value,
        role: "user",
        regionId,
      };

      const res = await api.post("users", body);
      if (res.statusText === "Created") {
        toast.success("Ro'yxatdan o'tdingiz. Login qiling!");
        navigate("/login");
      }
      setIsLoading(false);
    } catch (err) {
      if (
        err.response.data.message.startsWith("User exist with phone number")
      ) {
        toast.error(
          "Bunday telefon raqamli foydalanuvchi mavjud: " + e.target.phone.value
        );
        e.target.phone.focus();
      } else {
        toast.error(err.response.data.message);
      }
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#e8f1ff] flex items-center justify-center px-4">
      <div className="w-full max-w-3xl p-6 md:p-8 rounded-md bg-white shadow-[0_2px_10px_rgba(0,0,0,0.1)] mx-auto">
        <img
          className="text-center m-auto w-27 h-25 mb-6"
          src="/img/logo/logo-3yDBfNV0.png"
          alt=""
        />
        <form onSubmit={registerHandler}>
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6">
            <div className="mb-3 sm:mb-4 flex-1">
              <label
                className="block text-[rgba(0,0,0,0.88)] text-sm font-semibold mb-[6px]"
                htmlFor="firstName"
              >
                Ismingiz
              </label>
              <input
                required
                type="text"
                id="firstName"
                name="firstName"
                className="bg-white w-full text-sm px-2 py-1 rounded-[6px] focus:outline-none focus:ring-2 focus:ring-blue-500 border border-solid border-[#d9d9d9]"
              />
            </div>
            <div className="mb-3 sm:mb-4 flex-1">
              <label
                className="block text-[rgba(0,0,0,0.88)] text-sm font-semibold mb-[6px]"
                htmlFor="lastName"
              >
                Familyangiz
              </label>
              <input
                required
                type="text"
                id="lastName"
                name="lastName"
                className="bg-white w-full text-sm px-2 py-1 rounded-[6px] focus:outline-none focus:ring-2 focus:ring-blue-500 border border-solid border-[#d9d9d9]"
              />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6">
            <div className="mb-3 sm:mb-4 flex-1">
              <label
                className="block text-[rgba(0,0,0,0.88)] text-sm font-semibold mb-[6px]"
                htmlFor="middleName"
              >
                Otangizni Ismi
              </label>
              <input
                required
                type="text"
                id="middleName"
                name="middleName"
                className="bg-white w-full text-sm px-2 py-1 rounded-[6px] focus:outline-none focus:ring-2 focus:ring-blue-500 border border-solid border-[#d9d9d9]"
              />
            </div>
            <div className="mb-3 sm:mb-4 flex-1">
              <label
                className="block text-[rgba(0,0,0,0.88)] text-sm font-semibold mb-[6px]"
                htmlFor="phone"
              >
                Telefon Raqami:
              </label>
              <input
                required
                type="tel"
                id="phone"
                name="phone"
                className="bg-white w-full text-sm px-2 py-1 rounded-[6px] focus:outline-none focus:ring-2 focus:ring-blue-500 border border-solid border-[#d9d9d9]"
              />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6">
            <div className="mb-3 sm:mb-4 flex-1">
              <label
                className="block text-[rgba(0,0,0,0.88)] text-sm font-semibold mb-[6px]"
                htmlFor="regionId"
              >
                Viloyat
              </label>
              <RegionSelect
                selected={regionId}
                setSelected={setRegionId}
                regionErr={regionErr}
                setRegionErr={setRegionErr}
              />
            </div>
            <div className="mb-3 sm:mb-4 flex-1">
              <label
                className="block text-[rgba(0,0,0,0.88)] text-sm font-semibold mb-[6px]"
                htmlFor="cityName"
              >
                Shahar / Tuman
              </label>
              <input
                required
                type="text"
                id="cityName"
                name="cityName"
                className="bg-white w-full text-sm px-2 py-1 rounded-[6px] focus:outline-none focus:ring-2 focus:ring-blue-500 border border-solid border-[#d9d9d9]"
              />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6">
            <div className="mb-3 sm:mb-4 flex-1">
              <label
                className="block text-[rgba(0,0,0,0.88)] text-sm font-semibold mb-[6px]"
                htmlFor="schoolName"
              >
                Maktab Nomi
              </label>
              <input
                required
                type="text"
                id="schoolName"
                name="schoolName"
                className="bg-white w-full text-sm px-2 py-1 rounded-[6px] focus:outline-none focus:ring-2 focus:ring-blue-500 border border-solid border-[#d9d9d9]"
              />
            </div>
            <div className="mb-4 flex-1">
              <label
                htmlFor="password"
                className="block text-[rgba(0,0,0,0.88)] text-sm font-semibold mb-[6px]"
              >
                Parol:
              </label>
              <div className="relative">
                <input
                  required
                  autoComplete="off"
                  type={isPasswordHidden ? "password" : "text"}
                  name="password"
                  id="password"
                  className="bg-white w-full text-sm px-2 py-1 rounded-[6px] focus:outline-none focus:ring-2 focus:ring-blue-500 border border-solid border-[#d9d9d9]"
                />
                <span
                  className="absolute right-4 text-xl text-gray-500 font-bold top-[50%] translate-y-[-50%] cursor-pointer"
                  onClick={() => setIsPasswordHidden((i) => !i)}
                >
                  {isPasswordHidden ? <IoEyeOffOutline /> : <IoEyeOutline />}
                </span>
              </div>
            </div>
          </div>

          <Button
            type="primary"
            htmlType="submit"
            loading={isLoading}
            className="w-full mb-3 mt-4 !bg-blue-600 hover:!bg-blue-700 !font-semibold !text-white !rounded-md px-6 py-2"
          >
            Ro'yxatdan o'tish
          </Button>
          <Link
            to={"/login"}
            className="block text-sm text-center text-[#257efa] hover:text-[#69b1ff] cursor-pointer transition-colors duration-300"
          >
            Allaqachon sizning hisobingiz bormi?
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Register;
