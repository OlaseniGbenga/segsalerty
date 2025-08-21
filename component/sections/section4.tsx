import { Badge } from "@/component/ui/badge";
import { Button } from "@mantine/core";
import Image from "next/image";
import { forwardRef } from "react";

const Section4 = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <section
      ref={ref}
      className="flex  flex-col gap-[80px] py-[80px] px-[20px] md:px-[60px] bg-cyan"
    >
      <div className="flex flex-col gap-[20px]">
        <Badge className="self-center">OUR PROGRAMS, DESIGNED FOR YOU</Badge>
        <p className="font-normal text-[17px] text-center">
          <span className="font-bold">Feeling stuck in your tech journey?</span>
          <br /> Whether you&apos;re just starting out or unsure how to grow,
          we&apos;ve designed each of our programs to meet you where you are —
          and move you
          <br /> forward.
        </p>
      </div>
      <div className="flex flex-wrap gap-4 justify-center">
        <div className="rounded-[10px] p-[24px] flex flex-col justify-between gap-[24px] w-[350px]  sm:w-[411px]  bg-white">
          <div className="flex flex-col gap-[24px]">
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
          </div>
          <Button
            component="a"
            href="https://forms.gle/dz1kLrKTafhekxmP8"
            target="_blank"
            rel="noopener noreferrer"
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
              <Image src="/leftArrow.svg" width={20} height={18} alt="Logo" />
            }
          >
            Join Our Community
          </Button>
        </div>
        <div className="rounded-[10px] p-[24px] flex flex-col justify-between gap-[24px] w-[350px]  sm:w-[411px]  bg-white">
          <div className=" w-[300px] sm:w-[363px] h-[200px] rounded-[10px] bg-[url('/section4/lady.jpg')] bg-cover bg-center"></div>
          <div className="flex flex-col gap-[24px]">
            <p className="text-[24px] font-bold text-deepteal">
              MID-LEVEL ACCELERATOR
            </p>
            <p className="text-[18px]">
              Designed for established professionals <br />
              seeking to elevate their career trajectory <br /> through
              innovative thinking, strategic <br /> networking, and enhanced
              leadership <br /> capabilities. This program connects <br />
              accomplished talents with a community <br /> of like-minded
              professionals.
            </p>
          </div>
          <Button
            component="a"
            href="https://forms.gle/xhDDDuJatybSyk6M7"
            target="_blank"
            rel="noopener noreferrer"
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
              <Image src="leftArrow.svg" width={20} height={18} alt="Logo" />
            }
          >
            Join the Accelerator
          </Button>
        </div>
        <div className="rounded-[10px] p-[24px] flex flex-col justify-between gap-[24px] w-[350px]  sm:w-[411px]  bg-white">
          <div className="flex flex-col gap-[24px]">
            <div className=" w-[300px] sm:w-[363px] h-[200px] rounded-[10px] bg-[url('/section4/man-oncall.jpg')] bg-cover bg-center"></div>
            <p className="text-[24px] font-bold text-deepteal">
              TECH LEADERS CIRCLE
            </p>
            <p className="text-[18px]">
              An exclusive circle comprising
              <br /> distinguished industry veterans, trusted <br />
              former colleagues, and respected tech <br /> leaders who share our
              passion for
              <br /> nurturing talent. This close-knit network <br />
              of professionals brings together years of <br />
              experience and a shared commitment to
              <br /> giving back to the tech community.
            </p>
          </div>
          <Button
            component="a"
            href="https://forms.gle/bECC6DhKBPiCZd558"
            target="_blank"
            rel="noopener noreferrer"
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
              <Image src="/leftArrow.svg" width={20} height={18} alt="Logo" />
            }
          >
            Join the Circle
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
});

Section4.displayName = "Section4";

export default Section4;
