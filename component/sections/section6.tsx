import { Badge } from "@/component/ui/badge";
import { Button } from "@mantine/core";
import Image from "next/image";

const Section6 = () => {
  return (
    <section className="flex  flex-col gap-[80px] py-[80px] px-[20px] md:px-[60px] bg-[#F5F7FA]">
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
        <div className="rounded-[10px] p-[24px] flex flex-col gap-[24px] justify-between w-[350px]  sm:w-[411px]  bg-white">
          <div className="flex flex-col gap-[24px]">
            <div className=" w-[300px] sm:w-[363px] h-[200px] rounded-[10px] bg-[url('/section6/image1.jpg')] bg-cover bg-center"></div>
            <p className="text-[24px] font-bold text-deepteal">
              FINANCIAL SUPPORT
            </p>
            <p className="text-[18px]">
              Contribute to our community fund to
              <br /> help provide resources and support to
              <br /> rising talents.
            </p>
          </div>
          <Button
            component="a"
            href="https://t.me/+aXqfEpkBcy4xNTc8"
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
              <Image src="/give-white.svg" width={20} height={18} alt="Logo" />
            }
          >
            Give to the Community
          </Button>
        </div>

        <div className="rounded-[10px] p-[24px] flex flex-col justify-between gap-[24px] w-[350px]  sm:w-[411px]  bg-white">
          <div className="flex flex-col gap-[24px]">
            <div className=" w-[300px] sm:w-[363px] h-[200px] rounded-[10px] bg-[url('/section6/image2.jpg')] bg-cover bg-center"></div>
            <p className="text-[24px] font-bold text-deepteal">
              PROJECT OPPORTUNITIES
            </p>
            <p className="text-[18px]">
              Outsource your tech projects to our
              <br /> talented community members.
            </p>
          </div>
          <Button
            component="a"
            href="https://docs.google.com/forms/d/e/1FAIpQLSfQ2SgADzMvZZK0xxRtUK84ikSjY0QLz-wHeJfO4pzxm-jrug/viewform"
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
              <Image src="/leftArrow.svg" width={20} height={18} alt="Left Arrow" />
            }
          >
            Join the Accelerator
          </Button>
        </div>

        <div className="rounded-[10px] p-[24px] flex flex-col gap-[24px] justify-between w-[350px]  sm:w-[411px]  bg-white">
          <div className="flex flex-col gap-[24px]">
            <div className=" w-[300px] sm:w-[363px] h-[200px] rounded-[10px] bg-[url('/section6/image3.jpg')] bg-cover bg-center"></div>

            <p className="text-[24px] font-bold text-deepteal">
              JOIN AS A MENTOR
            </p>
            <p className="text-[18px]">
              Share your expertise and experience <br /> with our community
              members.
            </p>
          </div>
          <Button
            component="a"
            href="https://docs.google.com/forms/d/e/1FAIpQLSfhxJES6a3Ur4GL4w37TQkuC9BZ_OmCQluG-hiII71cSzlNng/viewform"
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
              <Image src="/wigledArrow.svg" width={20} height={18} alt="wigled Arrow" />
            }
          >
            Start Mentoring
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
