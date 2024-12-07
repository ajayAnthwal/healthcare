import React from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import Image from "next/image"; // Next.js Image component
import add_home from "@/assets/images/longterm/add_home.svg";
import Nurse from "@/assets/images/longterm/Nurse.svg";
import self_improvement from "@/assets/images/longterm/self_improvement.svg";
import subscriptions from "@/assets/images/longterm/subscriptions.svg";
import Vector from "@/assets/images/longterm/Vector.svg";
import Vector_second from "@/assets/images/longterm/Vector_second.svg";

const LongTermCare = () => {
  return (
    <div className="bg-[#003638] ">
      <div className="px-[100px] py-5 container mx-auto">
        <TabGroup>
          <TabList className="flex gap-20">
            {/* Tab 1 with Image */}
            <Tab className="flex items-center gap-2 data-[selected]:bg-blue-500 data-[selected]:text-white data-[selected]:fill-yellow-600 data-[hover]:underline">
              <Image
                src={add_home}
                alt="Add Home Icon"
                width={24}
                height={24}
                className="fill-current"
              />
              Tab 1
            </Tab>

            {/* Tab 2 with Image */}
            <Tab className="flex items-center gap-2 data-[selected]:bg-blue-500 data-[selected]:text-white data-[selected]:fill-yellow-500 data-[hover]:underline">
              <Image
                src={Nurse}
                alt="Nurse Icon"
                width={24}
                height={24}
                className="fill-current"
              />
              Tab 2
            </Tab>

            {/* Tab 3 with Image */}
            <Tab className="flex items-center gap-2 data-[selected]:bg-blue-500 data-[selected]:text-white data-[selected]:fill-yellow-500 data-[hover]:underline">
              <Image
                src={self_improvement}
                alt="Self Improvement Icon"
                width={24}
                height={24}
                className="fill-current"
              />
              Tab 3
            </Tab>

            {/* Tab 4 with Image */}
            <Tab className="flex items-center gap-2 data-[selected]:bg-blue-500 data-[selected]:text-white data-[selected]:fill-yellow-500 data-[hover]:underline">
              <Image
                src={subscriptions}
                alt="Subscriptions Icon"
                width={24}
                height={24}
                className="fill-current"
              />
              Tab 4
            </Tab>

            {/* Tab 5 with Image */}
            <Tab className="flex items-center gap-2 data-[selected]:bg-blue-500 data-[selected]:text-white data-[selected]:fill-yellow-500 data-[hover]:underline">
              <Image
                src={Vector}
                alt="Vector Icon"
                width={24}
                height={24}
                className="fill-current"
              />
              Tab 5
            </Tab>

            {/* Tab 6 with Image */}
            <Tab className="flex items-center gap-2 data-[selected]:bg-blue-500 data-[selected]:text-white data-[selected]:fill-yellow-500 data-[hover]:underline">
              <Image
                src={Vector_second}
                alt="Vector Second Icon"
                width={24}
                height={24}
                className="fill-current"
              />
              Tab 6
            </Tab>
          </TabList>

          <TabPanels>
            <TabPanel>Content for Tab 1</TabPanel>
            <TabPanel>Content for Tab 2</TabPanel>
            <TabPanel>Content for Tab 3</TabPanel>
            <TabPanel>Content for Tab 4</TabPanel>
            <TabPanel>Content for Tab 5</TabPanel>
            <TabPanel>Content for Tab 6</TabPanel>
          </TabPanels>
        </TabGroup>
      </div>
    </div>
  );
};

export default LongTermCare;
