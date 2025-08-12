import Hero from "@/component/sections/hero";
import { Badge } from "@/component/ui/badge";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="px-[20px] md:px-[60px] py-[80px] flex flex-col items-center">
        <p className="text-[32px] font-normal text-center">
          We take pride in our distinctive approach: rather than directly
          teaching <br /> technical skills,{" "}
          <span className="font-bold">
            we focus on unleashing the inherent potential within
            <br /> talented tech enthusiasts.
          </span>
        </p>
        <Badge>OUR UNIQUE IMPACT</Badge>
        <div className="bg-[#E6F2EF] flex gap-[40px] px-[40px] rounded-[10px] flex-col md:flex-row ">
          <div className="py-[30px] px-[16px] flex flex-col items-center">
            <Image
              src="/section2/UsersFour.svg"
              width={48}
              height={48}
              alt="Team work"
            />
            <p className="font-bold text-[48px]">1000+</p>
            <p className="font-normal text-[18px]"> Tech Talents Transformed</p>
          </div>

          <div className="py-[30px] px-[16px] flex flex-col items-center">
           <Image
              src="/section2/Target.svg"
              width={48}
              height={48}
              alt="Team work"
            />
            <p className="font-bold text-[48px]">10+</p>
            <p className="font-normal text-[18px]"> Years of impact</p>
          </div>

          <div className="py-[30px] px-[16px] flex flex-col items-center">
            <Image
              src="/section2/Handshake.svg"
              width={48}
              height={48}
              alt="Team work"
            />
            <p className="font-bold text-[48px]">50+</p>
            <p className="font-normal text-[18px]"> Collaborative Projects</p>
          </div>
        </div>
      </div>
    </>
  );
}
