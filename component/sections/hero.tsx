import { Button } from "@mantine/core";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="mt-[75px] py-[80px] px-[20px] gap-[40px] md:px-[60px] bg-[url('/BACKGROUND.png')] bg-cyan bg-cover flex flex-col-reverse lg:flex-row items-center  justify-between">
      <div className="flex flex-col gap-[30px]">
        <p className="font-bold text-[54px] leading-[60px]">
          Nurturing <br /> Africa’s Gifted <br />
          Tech Talents
        </p>
        <p>
          A decade of discovering, nurturing, and <br /> empowering gifted minds
          to become world-
          <br />
          class tech leaders
        </p>
        <div className="flex flex-col md:flex-row gap-[24px] ">
          <Button
            style={{
              borderRadius: "10px",
              color: "white",
              background: "var(--dark-green)",
              height: "48px",
              padding: "16px 24px",
            }}
            variant="fill"
            rightSection={
              <Image src="/support.svg" width={20} height={18} alt="support" />
            }
          >
            Support Our Mission
          </Button>
          <Button
            style={{
              borderRadius: "10px",
              color: "var(--dark-green)",
              border: "solid 1px var(--dark-green)",
              background: "var(--cyan)",
                height: "48px",
            padding: "16px 24px",
            }}
            variant="default"
            rightSection={
              <Image src="/Vector.svg" width={10} height={10} alt="support" />
            }
          >
            Support Our Mission
          </Button>
        </div>
      </div>

      <Image
        src="/hero-img.png"
        width={557}
        height={460}
        alt="Team work"
        className="w-full md:w-[557px] h-auto"
      />
    </div>
  );
};

export default Hero;
