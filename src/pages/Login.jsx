import { useEffect, useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";
import api from "../service/api";

const Login = () => {
  const [isPasswordHidden, setIsPasswordHidden] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const access_token = localStorage.getItem("access_token");
  useEffect(() => {
    if (access_token) {
      navigate("/");
    }
  }, []);

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const body = {
        phone: e.target.phone.value,
        password: e.target.password.value,
      };
      const res = await api.post("auth/login", body);
      if (res.statusText == "OK") {
        localStorage.setItem("access_token", res.data.access_token);
        localStorage.setItem("refresh_token", res.data.refresh_token);
        toast.success(res.data.message);
        navigate("/");
        // window.location.href = "/";
      }
      console.log(res);
      setIsLoading(false);
    } catch (err) {
      console.log(err.response.data.message);
      toast.error(err.response.data.message);
      setIsLoading(false);
    }
  };
  return (
    <div className="min-h-screen bg-[#e8f1ff] flex items-center justify-center ">
      <div className="w-[300px] md:w-[400px] max-w-md bg-white p-8 rounded-2xl shadow-xl">
        <img
          className="text-center m-auto w-27 h-25 mb-7"
          src="/img/logo/logo-3yDBfNV0.png"
          alt=""
        />
        <h2 className="text-2xl font-semibold text-center text-blue-800 mb-5">
          Hisobga kirish
        </h2>
        <form onSubmit={loginHandler}>
          <div className="mb-4">
            <label
              className="block text-[rgba(0,0,0,0.88)] text-sm md:text-base font-semibold mb-[6px]"
              htmlFor="phone"
            >
              Telefon Raqami:
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="bg-white w-full px-2 py-1 rounded-[4px] focus:outline-none focus:ring-2 focus:ring-blue-500 border border-solid border-[#d9d9d9]"
            />
          </div>
          <div className="mb-8">
            <label
              htmlFor="password"
              className="block text-[rgba(0,0,0,0.88)] text-sm md:text-base font-semibold mb-[6px]"
            >
              Parol:
            </label>
            <div className="relative">
              <input
                type={isPasswordHidden ? "password" : "text"}
                name="password"
                id="password"
                className="w-full px-2 py-1 border bg-white border-[#d9d9d9] rounded-[4px] focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
              />
              <span
                className="absolute right-4 text-xl text-gray-500 font-bold top-[50%] translate-y-[-50%] cursor-pointer"
                onClick={() => setIsPasswordHidden((i) => !i)}
              >
                {isPasswordHidden ? <IoEyeOutline /> : <IoEyeOffOutline />}
              </span>
            </div>
          </div>
          <button
            disabled={isLoading}
            className="mb-3 w-full h-9 cursor-pointer font-semibold text-sm md:text-base rounded-[6px] text-white bg-[#2563eb] disabled:bg-gray-400 disabled:cursor-progress"
          >
            {isLoading ? "Loading..." : "Kirish"}
          </button>
          <Link
            to={"/register"}
            className="block text-sm text-center text-[#257efa] hover:text-[#69b1ff] cursor-pointer transition-colors duration-300"
          >
            Ro'yxatdan o'tish
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
