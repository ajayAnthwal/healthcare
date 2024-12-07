import React from "react";
import Image from "next/image";
import call from "@/assets/images/homepage/call.svg";
import mail from "@/assets/images/homepage/mail.svg";
import location from "@/assets/images/homepage/location.svg";
import location_on from "@/assets/images/header/location_on.svg";
import arrowDown from "@/assets/images/homepage/arrow_down.svg";
import keyboard_arrow_down from "@/assets/images/header/keyboard_arrow_down.svg";
import search from "@/assets/images/header/search.svg";
import shopping_cart from "@/assets/images/header/shopping_cart.svg";
import profile from "@/assets/images/header/profile.svg";
import logo from "@/assets/images/homepage/logo.svg";
import shoppingCart from "@/assets/images/homepage/shoppingCart.svg";
import account from "@/assets/images/homepage/account.svg";

const Header = () => {
  return (
    <div className="sticky top-0 inset-x-0 z-50">
      <div className="hidden md:block">
        {/* Top Header */}
        <header className="h-16 border-b bg-[#e6f5f5] border-ui-border-base">
          <nav className="container flex items-center justify-between w-full h-full px-4 mx-auto">
            <div className="flex items-center h-full"></div>

            <div className="hidden md:flex items-center gap-x-6 h-full">
              <div className="flex items-center text-[#FF784B] font-medium text-sm">
                <Image src={location} alt="location" height={19} width={19} />
                <p className="ms-2">New Delhi, Delhi</p>
                <Image
                  src={arrowDown}
                  className="ms-2"
                  alt="arrow down"
                  height={19}
                  width={19}
                />
              </div>

              <p className="text-[#FF784B]">|</p>
              <div className="flex items-center text-[#FF784B] font-medium text-sm">
                <Image src={call} alt="call" height={19} width={19} />
                <p className="ms-2">1800 108 8586</p>
              </div>

              <p className="text-[#FF784B]">|</p>
              <div className="flex items-center text-[#FF784B] font-medium text-sm">
                <Image src={mail} alt="mail" height={19} width={19} />
                <p className="ms-2">care@apollohomecare.com</p>
              </div>
            </div>
          </nav>
        </header>

        {/* Main Header */}
        <div
          className="sticky top-0 inset-x-0 z-50 bg-[#e6f5f5] py-4"
          style={{ top: "4rem" }}
        >
          <div className="container flex justify-between items-center mx-auto px-4 md:px-0">
            <Image
              alt="logo"
              loading="lazy"
              width={114}
              height={48}
              decoding="async"
              className="p-3"
              src={logo}
            />

            <div className="hidden md:flex items-center gap-x-6">
              <a
                className="cursor-pointer"
                style={{ color: "#009A9F" }}
                href="/#"
              >
                Home
              </a>
              <a
                className="cursor-pointer"
                style={{ color: "#009A9F" }}
                href="/#"
              >
                Long term care
              </a>
              <a
                className="cursor-pointer"
                style={{ color: "#009A9F" }}
                href="/#"
              >
                Book
              </a>
              <a
                className="cursor-pointer"
                style={{ color: "#009A9F" }}
                href="/#"
              >
                Buy/Rent Equipments
              </a>
            </div>

            <div className="hidden md:flex items-center gap-x-4">
              <button
                style={{ background: "#009A9F", borderRadius: "50px" }}
                className="px-4 py-2 text-white"
              >
                I need consultation
              </button>
              <button
                style={{ background: "#009A9F", borderRadius: "50px" }}
                className="relative inline-flex items-center justify-center overflow-hidden px-4 py-2 text-white"
              >
                <Image
                  alt="Shopping Cart"
                  loading="lazy"
                  width={20}
                  height={20}
                  src={shoppingCart}
                />
              </button>
              <button
                style={{ background: "#009A9F", borderRadius: "50px" }}
                className="relative inline-flex items-center justify-center overflow-hidden px-4 py-2 text-white"
              >
                <Image
                  alt="account"
                  loading="lazy"
                  width={20}
                  height={20}
                  src={account}
                />
                Rahul
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="md:hidden block">
        <header className="bg-[#e6f5f5] flex items-center justify-between px-[20px]">
          {/* Logo */}
          <div>
            <Image
              alt="logo"
              loading="lazy"
              width={85}
              height={40}
              decoding="async"
              className="p-3"
              src={logo}
            />
          </div>
          {/* Address */}
          <div>
            <div className="flex items-center text-[#009A9F] font-medium text-sm">
              <Image
                className=""
                src={location_on}
                alt="location"
                height={15}
                width={15}
              />
              <p className="mx-1 text-[12px]">New Delhi, Delhi</p>
              <Image
                src={keyboard_arrow_down}
                className=""
                alt="arrow down"
                height={15}
                width={15}
              />
            </div>
          </div>
          {/* links */}
          <div>
            <div className="flex gap-[10px]">
              <div>
                <Image
                  src={search}
                  className=""
                  alt="search"
                  height={24}
                  width={24}
                />
              </div>
              <div>
                <div className="w-[24px] h-[24px] flex justify-center items-center rounded-full bg-[#009A9F]">
                  <Image
                    src={shoppingCart}
                    className=""
                    alt="search"
                    height={12}
                    width={12}
                  />
                </div>
              </div>
              <div className="w-[24px] h-[24px] flex justify-center items-center rounded-full bg-[#009A9F]">
                <Image
                  src={profile}
                  className=""
                  alt="search"
                  height={19}
                  width={19}
                />
              </div>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Header;
