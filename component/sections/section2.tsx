import { Badge } from "@/component/ui/badge";
import Image from "next/image";
import { forwardRef } from "react";
import Counter from "../ui/counter";

const Section2 = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <section ref={ref} className="py-[80px] flex flex-col gap-[80px]">
      <section className="self-center w-[80%] md:w-[90%] border-3 border-extra border-lightteal relative py-[30px] px-[30px]">
        <p className="text-[16px] md:text-[32px] text-center">
          We take pride in our distinctive approach: rather than directly
          teaching technical skills,
          <span className="font-bold">
            we focus on unleashing the inherent potential within talented tech
            enthusiasts.
          </span>
        </p>
        <div className=" border-lightteal w-4 h-4 border-2 border-extra absolute  -top-[11px] -right-[11px] bg-white"></div>
        <div className=" border-lightteal w-4 h-4 border-2  absolute -top-[11px] -left-[11px] bg-white"></div>
        <div className=" border-lightteal w-4 h-4 border-2 border-extra absolute -bottom-[11px] -left-[11px] bg-white"></div>
        <div className="border-lightteal  w-4 h-4 border-2 border-extra absolute -bottom-[11px] bg-white -right-[11px]"></div>
      </section>
      <div className="  flex flex-col  gap-[80px]">
        <Badge className="self-center">OUR UNIQUE IMPACT</Badge>
        <div className="self-center bg-[#E6F2EF] flex gap-[40px] px-[40px] rounded-[10px] flex-col md:flex-row ">
          <div className="py-[30px] px-[16px] flex flex-col items-center">
            <Image
              src="/section2/UsersFour.svg"
              width={48}
              height={48}
              alt="Team work"
            />
            <p className="font-bold text-[38px]">
              {" "}
              <Counter to={1000} />+
            </p>
            <p className="font-normal text-[18px]"> Tech Talents Transformed</p>
          </div>

          <div className="py-[30px] px-[16px] flex flex-col items-center">
            <Image
              src="/section2/Target.svg"
              width={48}
              height={48}
              alt="Target Icon"
            />
            <p className="font-bold text-[38px]">
              {" "}
              <Counter to={10} />+
            </p>
            <p className="font-normal text-[18px]"> Years of impact</p>
          </div>

          <div className="py-[30px] px-[16px] flex flex-col items-center">
            <Image
              src="/section2/Handshake.svg"
              width={48}
              height={48}
              alt="Handshake Icon"
            />
            <p className="font-bold text-[38px]">
              {" "}
              <Counter to={50} />+
            </p>
            <p className="font-normal text-[18px]"> Collaborative Projects</p>
          </div>
        </div>
        <div className="px-[20px] md:px-[60px] flex flex-col lg:flex-row gap-y-[80px] justify-between">
          <div className=" flex flex-col gap-[24]">
            <div className="flex flex-col gap-[8px]">
              <p className="text-deepteal font-bold text-[18px]">
                OUR APPROACH
              </p>
              <p className="text-[18px] font-normal text-black">
                Through mentorship, motivation, and strategic guidance, we help{" "}
                <br />
                talented individuals transform into outstanding tech
                professionals.
                <br />
                Our strength lies in our community-first approach, where real
                growth
                <br /> happens through shared learning and accountability.
              </p>
            </div>
            <div className="flex flex-col gap-[8px]">
              <p className="text-deepteal font-bold text-[18px]">
                &quot;THE MACHINE SPIRIT&quot;
              </p>
              <p className="text-[18px] font-normal text-black">
                We’ve built what our members call the &quot;Machine Spirit&quot;
                a culture of
                <br /> relentless excellence, problem-solving, and world-class
                work ethic. It’s
                <br /> not just about skills. It’s about becoming the kind of
                person who stands
                <br /> out anywhere.
              </p>
            </div>
            <div className="flex flex-col gap-[8px]">
              <p className="text-deepteal font-bold text-[18px]">
                FROM POTENTIAL TO POWER
              </p>
              <p className="text-[18px] font-normal text-black">
                Our members don’t just level up in tech.
                <br />
                They lead with clarity, solve with confidence, and thrive in
                every
                <br />
                challenge professionally and personally.{" "}
              </p>
            </div>
          </div>

          <Image
            src="/unique-impact.png"
            width={500}
            height={400}
            alt="Target Icon "
            className="w-full md:w-[500px] h-auto"
          />
        </div>
      </div>

      <section className="self-center w-[80%] md:w-[90%] border-3 border-extra border-lightteal relative py-[30px] px-[30px]">
        <p className="text-[16px] md:text-[32px] ">
          &quot;Our community doesn&apos;t just create developers or designers –
          <span className="font-bold">
            we nurture individuals who approach every challenge with the
            &apos;Machine Spirit&apos;
          </span>
          , turning them into exceptional problem solvers and leaders in their
          fields.&quot;
        </p>
        <div className=" border-lightteal w-4 h-4 border-2 border-extra absolute  -top-[11px] -right-[11px] bg-white"></div>
        <div className=" border-lightteal w-4 h-4 border-2  absolute -top-[11px] -left-[11px] bg-white"></div>
        <div className=" border-lightteal w-4 h-4 border-2 border-extra absolute -bottom-[11px] -left-[11px] bg-white"></div>
        <div className="border-lightteal  w-4 h-4 border-2 border-extra absolute -bottom-[11px] bg-white -right-[11px]"></div>
      </section>
    </section>
  );
});
Section2.displayName = "Section2";
export default Section2;
