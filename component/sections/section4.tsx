import { Badge } from "@/component/ui/badge";
import { Button } from "@mantine/core";
import Image from "next/image";

const Section4 = () => {
  return (
    <section className="flex  flex-col gap-[80px] py-[80px] px-[20px] md:px-[60px] bg-cyan">
     <div className="flex flex-col gap-[20px]">
         <Badge className="self-center">OUR PROGRAMS, DESIGNED FOR YOU</Badge>
      <p className="font-normal text-[17px] text-center">
        <span className="font-bold">Feeling stuck in your tech journey?</span>
        <br /> Whether you&apos;re just starting out or unsure how to grow,
        we&apos;ve designed each of our programs to meet you where you are — and
        move you
        <br /> forward.
      </p>
     </div>
      <div className="flex flex-wrap gap-4 justify-center">
        <div className="rounded-[10px] p-[24px] flex flex-col gap-[24px] w-[350px]  sm:w-[411px]  bg-white">
          <div className=" w-[300px] sm:w-[363px] h-[200px] rounded-[10px] bg-[url('/section4/man.jpg')] bg-cover bg-center"></div>
          <p className="text-[24px] font-bold text-deepteal">
            RISING STARS PROGRAM
          </p>
          <p className="text-[18px]">
            Our entry-level program identifies and <br /> nurtures exceptional
            early-career talents <br /> through comprehensive support.
            <br /> Understanding that emerging talents <br /> often need more
            than just mentorship, <br /> we provide substantial financial
            backing
            <br /> to support their self-development
            <br /> journey.
          </p>
          <Button
            visibleFrom="sm"
            style={{
              borderRadius: "10px",
              color: "white",
              background: "var(--dark-green)",
              height: "48px",
              padding: "16px 24px",
              alignSelf: "start",
            }}
            variant="filled"
            rightSection={
              <Image src="/Ellipse.svg" width={20} height={18} alt="Logo" />
            }
          >
            Join Our Community
          </Button>
        </div>
         <div className="rounded-[10px] p-[24px] flex flex-col gap-[24px] w-[350px]  sm:w-[411px]  bg-white">
          <div className=" w-[300px] sm:w-[363px] h-[200px] rounded-[10px] bg-[url('/section4/man.jpg')] bg-cover bg-center"></div>
          <p className="text-[24px] font-bold text-deepteal">
            RISING STARS PROGRAM
          </p>
          <p className="text-[18px]">
            Our entry-level program identifies and <br /> nurtures exceptional
            early-career talents <br /> through comprehensive support.
            <br /> Understanding that emerging talents <br /> often need more
            than just mentorship, <br /> we provide substantial financial
            backing
            <br /> to support their self-development
            <br /> journey.
          </p>
          <Button
            visibleFrom="sm"
            style={{
              borderRadius: "10px",
              color: "white",
              background: "var(--dark-green)",
              height: "48px",
              padding: "16px 24px",
              alignSelf: "start",
            }}
            variant="filled"
            rightSection={
              <Image src="/Ellipse.svg" width={20} height={18} alt="Logo" />
            }
          >
            Join Our Community
          </Button>
        </div>
         <div className="rounded-[10px] p-[24px] flex flex-col gap-[24px] w-[350px]  sm:w-[411px]  bg-white">
          <div className=" w-[300px] sm:w-[363px] h-[200px] rounded-[10px] bg-[url('/section4/man.jpg')] bg-cover bg-center"></div>
          <p className="text-[24px] font-bold text-deepteal">
            RISING STARS PROGRAM
          </p>
          <p className="text-[18px]">
            Our entry-level program identifies and <br /> nurtures exceptional
            early-career talents <br /> through comprehensive support.
            <br /> Understanding that emerging talents <br /> often need more
            than just mentorship, <br /> we provide substantial financial
            backing
            <br /> to support their self-development
            <br /> journey.
          </p>
          <Button
            visibleFrom="sm"
            style={{
              borderRadius: "10px",
              color: "white",
              background: "var(--dark-green)",
              height: "48px",
              padding: "16px 24px",
              alignSelf: "start",
            }}
            variant="filled"
            rightSection={
              <Image src="/Ellipse.svg" width={20} height={18} alt="Logo" />
            }
          >
            Join Our Community
          </Button>
        </div>
      
      </div>
      <p className="text-[28px] text-center">
        &quot;While we scale to impact more lives, our commitment remains
        unchanged:
        <br />{" "}
        <span className="font-bold">
          ensuring YOU receive the personal guidance and support YOU need to
          <br /> thrive. &quot;
        </span>
      </p>
    </section>
  );
};

export default Section4;
