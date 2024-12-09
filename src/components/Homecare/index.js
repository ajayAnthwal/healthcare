import { Button, Heading } from "@medusajs/ui";
import whatsappSvg from "@/assets/images/homepage/whatsapp.svg";
import calendar from "@/assets/images/homepage/calendar.svg";

import Image from "next/image";

const Homecare = () => {
  return (
    <div
      className="bg-gradient-to-linear-gradient(118.43deg, #1AE2E9 -5.9%, #019196 42.54%, #03676A 90.98%);
"
    >
      {/* ---------------Homecare Section---------------- */}
      <div className="py-16 px-4 my-20 card rounded-[32px] text-white text-center bg-gradient-to-r from-[#1AE2E9] via-[#019196] to-[#03676A] shadow-lg container mx-auto">
        <h1 className="text-[32px] font-semibold leading-[48px] text-center mb-4">
          Why is Homecare Important These Days?
        </h1>
        <p className="text-[16px] font-normal leading-[24px] text-center opacity-80 w-full sm:w-[676px] mx-auto">
          In today’s fast-paced world, the importance of receiving medical care
          at home has never been greater. Homecare offers a comfortable, safe,
          and personalized approach to healthcare, providing support for
          recovery, chronic conditions, and general wellness without the need
          for frequent hospital visits.
        </p>
        <div className="flex justify-center items-center mt-5 gap-5">
          {/* Schedule Button */}
          <button className="px-7 py-4 rounded-full border border-white shadow-lg flex items-center gap-2 bg-transparent hover:bg-white hover:text-[#009A9F] transition">
            <Image src={calendar} alt="calendar" />
            Schedule
          </button>
          {/* Book Now Button */}
          <button className="px-7 py-4 rounded-full bg-white text-[#009A9F] shadow-lg flex items-center gap-2 hover:bg-[#009A9F] hover:text-white transition">
            <Image src={whatsappSvg} alt="whatsapp" />
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};
export default Homecare;
