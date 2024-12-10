"use client";
import React from "react";
import Image from "next/image";
import loginBanner from "@/assets/images/login/loginBanner.png";
import bgImage from "@/assets/images/login/background.png";

const Login = () => {
  return (
    <div className="relative flex items-center justify-center">
      <Image
        src={bgImage}
        alt="Background"
        layout="fill"
        objectFit="cover"
        priority
        className="-z-10"
      />

      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-10 p-4 relative z-10">
        <div className="flex-1 flex justify-center">
          <Image
            src={loginBanner}
            alt="Doctors Illustration"
            className="w-full"
            priority
            width={759}
            height={431}
          />
        </div>

        <div
          className="flex-1 p-8 text-white bg-gradient-to-r from-[#1AE2E9] to-[#03676A] 
          border border-solid 
          border-image-[linear-gradient(108.87deg,_rgba(255,_255,_255,_0.8)_0.66%,_rgba(211,_211,_211,_0.1)_99.48%)] 
          backdrop-blur-[28px] rounded-lg max-w-[479px] h-[497px]"
          style={{
            background:
              "linear-gradient(118.43deg, #1AE2E9 -5.9%, #019196 42.54%, #03676A 90.98%)",
          }}
        >
          <h1 className="text-[40px] font-normal leading-[48.76px] mb-4 text-left">
            LOGIN
          </h1>
          <div className="w-[110px] h-[1px] bg-white mb-6"></div>
          <p className="text-[20px] font-light leading-[30px] mb-6 text-left">
            Welcome to Apollo Healthcare
          </p>

          <form>
            <div className="my-7">
              <label
                htmlFor="mobile"
                className="block text-[15px] font-normal leading-[22.5px] mb-2 text-left"
              >
                Mobile Number
              </label>
              <input
                id="mobile"
                type="text"
                placeholder="Enter your Mobile Number"
                className="w-[419px] h-[47px] p-[12px_10px] bg-transparent border border-[#FFFFFFCC] border-solid rounded-[10px] text-white border-image-[linear-gradient(108.87deg,_rgba(255,_255,_255,_0.8)_0.66%,_rgba(211,_211,_211,_0.1)_99.48%)] border-image-slice-1 backdrop-blur-[60px] placeholder:text-white placeholder:text-[15px] placeholder:font-light placeholder:leading-[22.5px]"
              />
            </div>

            <div className="my-7">
              <label
                htmlFor="otp"
                className="block text-[15px] font-normal leading-[22.5px] mb-2 text-left"
              >
                OTP
              </label>
              <input
                id="otp"
                type="text"
                placeholder="123456"
                className="w-[419px] h-[47px] p-[12px_10px] bg-transparent border border-[#FFFFFFCC] border-solid rounded-[10px] text-white border-image-[linear-gradient(108.87deg,_rgba(255,_255,_255,_0.8)_0.66%,_rgba(211,_211,_211,_0.1)_99.48%)] border-image-slice-1 backdrop-blur-[60px] placeholder:text-white placeholder:text-[15px] placeholder:font-light placeholder:leading-[22.5px]"
              />
            </div>

            <button
              type="submit"
              className="h-[50px] mb-4 mt-4 px-[184px] py-[11px] bg-[#B0E0E1] hover:bg-[#96C8C9] text-black text-lg font-semibold rounded-[10px] transition-all"
            >
              LOGIN
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
