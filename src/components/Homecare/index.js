import { Button, Heading } from "@medusajs/ui";
import whatsappSvg from "@/assets/images/homepage/whatsapp.svg";
import calendar from "@/assets/images/homepage/calendar.svg";

import Image from "next/image";

const Homecare = () => {
  return (
    <div className="bg-gradient-to-linear-gradient(118.43deg, #1AE2E9 -5.9%, #019196 42.54%, #03676A 90.98%);">
      <div className="py-16 px-4 my-20 card rounded-[32px] text-white text-center bg-gradient-to-r from-[#1AE2E9] via-[#019196] to-[#03676A] shadow-lg  container mx-auto ">
        <h1 className="text-2xl font-semibold mb-4">
          Why is Homecare Important These Days?
        </h1>
        <p className="text-sm opacity-80 w-[676px] text-center mx-auto">
          In today&rsquo;s fast-paced world, the importance of receiving medical
          care at home has never been greater. Homecare offers a comfortable,
          safe, and personalized approach to healthcare, providing support for
          recovery, chronic conditions, and general wellness without the need
          for frequent hospital visits.
        </p>
        <div className="flex justify-center items-center mt-5">
          <Button className="mr-10 px-5 py-2 rounded-[32px] bg-[#009A9F] text-white flex justify-center items-center">
            <Image src={calendar} alt="calendar" />
            Schedule
          </Button>
          <Button className="px-5 py-2 rounded-[32px] bg-white text-[#009A9F] flex justify-center items-center">
            <Image src={whatsappSvg} alt="whatsapp" /> Book Now
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Homecare;
