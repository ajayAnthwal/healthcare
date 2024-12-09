import Image from "next/image";
import whatsappSvg from "@/assets/images/homepage/whatsapp.svg";

export const Card = (props) => {
  return (
    <div
      className="bg-white flex items-center justify-between p-3 w-full flex-col rounded-[20px] h-[250px] md:h-[300px] relative "
      style={{
        boxShadow: "0px 4px 18.3px 0px rgba(0, 0, 0, 0.25)",
      }}
    >
      <div className="">
        <p className="text-[12px] md:text-lg font-medium text-[#000000] pt-3 text-center">
          {props?.title}
        </p>
      </div>
      <div className="max-w-[80px] md:max-w-[110px]">
        <Image
          src={props?.image}
          alt={props?.title}
          className=" rounded-full"
          // style={{ width: "6rem", height: "6rem", borderRadius: "9rem" }}
        />
      </div>
      <div className="flex justify-center">
        <button className="flex items-center text-base font-semibold bg-white text-[#009A9F] border-[#009A9F] rounded-[50px] px-2 m-auto border py-2 absolute bottom-3 h-[23px] text-[11px]">
          <Image src={whatsappSvg} alt="whatsapp" className="md:h-[15px] md:w-[15px] h-[8px] w-[8px]" />
          <span>Enquire Now</span>
        </button>
      </div>
    </div>
  );
};
