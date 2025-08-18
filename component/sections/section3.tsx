import { Badge } from "@/component/ui/badge";
import Image from "next/image";
import { forwardRef } from "react";

const Section3 = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <section ref={ref} className="flex  flex-col gap-[80px] py-[80px] px-[20px] md:px-[60px] bg-lightblue">
      <Badge className="self-center">MEET OUR FOUNDER</Badge>
      <div className=" flex flex-col-reverse lg:flex-row gap-[24] lg:gap-0 justify-between">
        <div className=" flex flex-col gap-[24]">
          <div className="flex flex-col gap-[8px]">
            <p className="text-deepteal font-bold text-[18px]">
              VISIONARY LEADERSHIP
            </p>
            <p className="text-[18px] font-normal text-black">
              <span className="font-bold">
                Segun Mustafa is a seasoned CTO and Software Engineering leader
              </span>
              with <br /> over 15 years of experience building and scaling
              enterprise systems — <br />
              particularly in business automation and fintech.
            </p>
          </div>
          <div className="flex flex-col gap-[8px]">
            <p className="text-deepteal font-bold text-[18px]">
              MASTER OF HIS CRAFT
            </p>
            <p className="text-[18px] font-normal text-black">
              A certified Oracle Java Master since 2011, Segun also holds a
              BTech in
              <br /> Information Technology and multiple technical
              certifications. His
              <br /> expertise spans high-performance systems, cloud-native
              architecture,
              <br /> and scalable platforms used across continents.{" "}
            </p>
          </div>
          <div className="flex flex-col gap-[8px]">
            <p className="text-deepteal font-bold text-[18px]">
              BEYOND TECHNICAL EXCELLENCE
            </p>
            <p className="text-[18px] font-normal text-black">
              What sets Segun apart is his unwavering commitment to giving back.
              <br /> Rather than simply leading from the top, he’s built an
              ecosystem that <br /> empowers aspiring African tech talents
              through mentorship, real-world
              <br /> projects, and access to global tech leaders.{" "}
            </p>
          </div>
          <div className="flex flex-col gap-[8px]">
            <p className="text-deepteal font-bold text-[18px]">
              BUILDING A MOVEMENT
            </p>
            <p className="text-[18px] font-normal text-black">
              He’s not just developing engineers — he’s fostering a culture of
              <br />
              excellence, inclusion, and impact. Through his leadership, a new
              <br />
              generation of African tech professionals is rising — bold,
              equipped, and
              <br /> ready to lead.
            </p>
          </div>
        </div>

        <Image
          src="/segun.png"
          width={500}
          height={400}
          alt="Team wok"
          className="w-full md:w-[500px] h-auto"
        />
      </div>
    </section>
  );
});

Section3.displayName = "Section3";

export default Section3;
