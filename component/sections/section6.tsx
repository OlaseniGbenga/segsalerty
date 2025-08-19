import { Badge } from "@/component/ui/badge";
import { Button } from "@mantine/core";
import Image from "next/image";

const Section6 = () => {
  return (
    <section className="flex  flex-col gap-[80px] py-[80px] px-[20px] md:px-[60px] bg-cyan">
      <div className="flex flex-col gap-[20px]">
        <Badge className="self-center">SUPPORT OUR MISSION</Badge>
        <p className="font-normal text-[17px] text-center">
          <span className="font-bold">
            All support inquiries are reviewed exclusively through our official
            Telegram{" "}
          </span>
          channel to ensure transparency, proper coordination, and compliance{" "}
          <br /> with regulations. This process helps prevent fraudulent
          activities, including money laundering and terrorism financing.
        </p>
        <p className="text-center">How you can support:</p>
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
            MID-LEVEL ACCELERATOR
          </p>
          <p className="text-[18px]">
            Designed for established professionals <br />
            seeking to elevate their career trajectory <br /> through innovative
            thinking, strategic <br /> networking, and enhanced leadership{" "}
            <br /> capabilities. This program connects <br />
            accomplished talents with a community <br /> of like-minded
            professionals.
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
           Join the Accelerator
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

export default Section6;
