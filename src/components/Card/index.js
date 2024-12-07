import Image from "next/image";
import whatsappSvg from "@/assets/images/homepage/whatsapp.svg";

export const Card = (props) => {
  return (
    <div
      className="bg-white flex items-center p-5 w-full flex-col rounded-[20px] h-[300px] relative "
      style={{
        boxShadow: "0px 4px 18.3px 0px rgba(0, 0, 0, 0.25)",
      }}
    >
      <p className="text-lg font-medium text-[#000000] py-3 text-center">
        {props?.title}
      </p>
      <div className="my-4">
        <Image
          src={props?.image}
          alt={props?.title}
          style={{ width: "6rem", height: "6rem", borderRadius: "9rem" }}
        />
      </div>
      <button className="flex  items-center text-base font-semibold bg-white text-[#009A9F] border-[#009A9F] rounded-[50px] px-5 m-auto border py-2 absolute bottom-3">
        <Image src={whatsappSvg} alt="whatsapp" height={15} width={15} />
        Enquire Now
      </button>
    </div>
  );
};
