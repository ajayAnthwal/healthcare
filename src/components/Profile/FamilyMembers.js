import React from "react";
import Image from "next/image";
import Snehal from "@/assets/images/profile/Snehal.png";
import neha from "@/assets/images/profile/neha.png";
import rahul from "@/assets/images/profile/rahul.png";
import Swastik from "@/assets/images/profile/Swastik.png";

const familyMembers = [
  { name: "Rahul (self)", imgSrc: rahul },
  { name: "Neha", imgSrc: neha },
  { name: "Swastik", imgSrc: Swastik },
  { name: "Snehal", imgSrc: Snehal },
];

const FamilyMembers = () => {
  return (
    <div className="p-4 mx-auto">
      {/* Heading */}
      <h2 className="text-[20px] font-semibold leading-[24px] text-gray-800 text-center mb-4">
        Family Members
      </h2>

      {/* Grid Layout for Family Members */}
      <div className="grid grid-cols-2 gap-6 mb-6">
        {familyMembers.map((member, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-2 text-center"
          >
            {/* Image Container */}
            <div
              className="w-[85px] h-[85px] rounded-full bg-gradient-to-r from-[#BDFEFF] to-[#5FA4A7] p-[2px]"
              style={{
                borderImageSource:
                  "linear-gradient(118.43deg, #1AE2E9 -5.9%, #019196 42.54%, #03676A 90.98%)",
                borderImageSlice: 1,
              }}
            >
              <Image
                src={member.imgSrc}
                alt={member.name}
                width={81}
                height={81}
                className="rounded-full"
              />
            </div>

            {/* Member Name */}
            <span className="text-[14px] font-medium leading-[16.8px] text-gray-700 text-center">
              {member.name}
            </span>
          </div>
        ))}
      </div>

      {/* Add More Button */}
      <button className="flex flex-col items-center justify-center">
        {/* Circle with "+" */}
        <div className="w-[81px] h-[81px] rounded-full bg-[#004548] flex items-center justify-center">
          <span className="text-white text-[40px] font-bold -mt-2">+</span>
        </div>

        {/* Text below the circle */}
        <span className="text-teal-500 mt-2 text-[14px] text-center">
          Add more
        </span>
      </button>
    </div>
  );
};

export default FamilyMembers;
