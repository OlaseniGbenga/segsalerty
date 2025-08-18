import { Badge } from "@/component/ui/badge";

import Image from "next/image";

import Socials from "../ui/socials";

const Section8 = () => {
  return (
    <div className="flex flex-col bg-[url('/BACKGROUND.png')] bg-cover py-[80px] gap-[40px]">
      <section className="flex  flex-col md:flex-row gap-[20px]  items-center justify-center">
        <Badge className="self-center">GAIN VALUE FROM OUR SOCIALS</Badge>
        <div className="flex gap-[10px] items-center">
          <Image
            src="/Fb.svg"
            className="fill-white"
            width={40}
            height={40}
            alt="Facebook icon"
          />
          <Image
            src="/Tw.svg"
            className="fill-white"
            width={40}
            height={40}
            alt="Twitter Icon"
          />
          <Image
            src="/Ig.svg"
            className="fill-white"
            width={40}
            height={40}
            alt="Logo"
          />
          <Image
            src="/Ln.svg"
            className="fill-white "
            width={40}
            height={40}
            alt="Logo"
          />
        </div>
      </section>
      <Socials />
    </div>
  );
};

export default Section8;
