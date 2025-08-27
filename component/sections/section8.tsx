import { Badge } from "@/component/ui/badge";

import Image from "next/image";

import Socials from "../ui/socials";
import { Anchor } from "@mantine/core";

const Section8 = () => {
  return (
    <div className="flex flex-col bg-[url('/BACKGROUND.png')] bg-cover py-[80px] gap-[40px]">
      <section className="flex  flex-col md:flex-row gap-[20px]  items-center justify-center">
        <Badge className="self-center">GAIN VALUE FROM OUR SOCIALS</Badge>
        <div className="flex gap-[10px] items-center">
          <Anchor
            href="https://www.linkedin.com/company/segsalerty/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/Fb.svg"
              className="fill-white"
              width={40}
              height={40}
              alt="Facebook icon"
            />
          </Anchor>

          <Anchor
            href="https://x.com/SegsalertyTS"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/Tw.svg"
              className="fill-white"
              width={40}
              height={40}
              alt="Twitter Icon"
            />
          </Anchor>

          <Anchor
            href="https://www.instagram.com/segsalertyts/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/Ig.svg"
              className="fill-white"
              width={40}
              height={40}
              alt="Instagram Icon"
            />
          </Anchor>

          <Anchor
            href="https://www.linkedin.com/company/segsalerty/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/Ln.svg"
              className="fill-white "
              width={40}
              height={40}
              alt="LinkedIn Icon"
            />
          </Anchor>
        </div>
      </section>
      <Socials />
    </div>
  );
};

export default Section8;
