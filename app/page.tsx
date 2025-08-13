import Hero from "@/component/sections/hero";
import Section2 from "@/component/sections/section2";
import { Badge } from "@/component/ui/badge";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <Section2 />
      <section className="flex  flex-col">
        <Badge className="self-center">MEET OUR FOUNDER</Badge>
        <div className="px-[20px] md:px-[60px] flex flex-col lg:flex-row gap-[24] lg:gap-0 justify-between">
          <div className=" flex flex-col gap-[24]">
            <div className="flex flex-col gap-[8px]">
              <p className="text-deepteal font-bold text-[18px]">
                VISIONARY LEADERSHIP
              </p>
              <p className="text-[18px] font-normal text-black">
                <span className="font-bold">
                  Segun Mustafa is a seasoned CTO and Software Engineering
                  leader
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
                What sets Segun apart is his unwavering commitment to giving
                back.
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
            width={628}
            height={490}
            alt="Team wok"
            className="w-full md:w-[628px] h-auto"
          />
        </div>
      </section>
    </>
  );
}
//https://www.figma.com/design/jYLhtMYidPyTMQFPhuNep6/SEGSALERTY?node-id=183-818&t=uSN6N0F18SRIBmk9-0
