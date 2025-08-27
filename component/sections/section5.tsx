import { Badge } from "@/component/ui/badge";

import { Button, Card, Text } from "@mantine/core";
import Image from "next/image";
import { forwardRef } from "react";

const Section5 = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <section
      ref={ref}
      className="flex  flex-col gap-[80px] py-[80px] px-[20px] md:px-[60px] bg-deepteal"
    >
      <div className="flex flex-col gap-[20px]">
        <Badge className="self-center bg-white text-black">
          FINANCIAL TRANSPARENCY
        </Badge>
        <p className="font-normal text-[17px] text-center text-white">
          While this initiative has been primarily self-funded by our founder
          since inception, external donations play a crucial role in amplifying
          our impact.
          <br /> Your support not only validates our mission but enables us to
          reach and support more talented individuals, creating a wider ripple
          effect in the <br /> tech community. Every contribution helps us
          extend our comprehensive support to more deserving talents who could
          benefit from our proven <br />
          mentorship and guidance programs.
        </p>
      </div>
      <div className="">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
          {/* Current Funding Status */}

          <Card
            style={{ padding: "60px 24px" }}
            className="col-span-2 lg:col-end-1 gap-[10px] py-[40px]"
            shadow="sm"
            radius="md"
          >
            <div className="flex gap-[12px] flex-col w-full">
              <Text
                style={{
                  padding: "4px 8px",
                  color: "var(--dark-green)",
                  fontSize: "10PX",
                }}
                className="text-deepteal font-normal text-[10px] rounded-[13.5px]   bg-cyan self-start"
              >
                Updated 5th of March, 2025
              </Text>
              <Text
                style={{ fontSize: "18px", fontWeight: 700 }}
                className="text-[18px] font-bold"
              >
                CURRENT FUNDING STATUS
              </Text>
            </div>
            <div>
              <Text
                style={{
                  padding: "0",
                  fontSize: "56px",
                  color: "var(--deep-teal)",
                  fontWeight: 700,
                }}
                className=""
              >
                ₦4,550,000
              </Text>
              <Text style={{ fontWeight: 400, fontSize: "18px" }}>
                Cash in Bank (+ External Donations)
              </Text>
            </div>
            <Text
              style={{
                color: "#505050",
                fontWeight: 400,
                fontSize: "18px",
                marginTop: "30px",
              }}
              className="mt-2 text-gray-500"
            >
              65% is the Founder’s personal contribution
            </Text>
          </Card>

          {/* Quarterly Expenses Overview */}
          <Card
            className="col-span-2 lg:col-span-3 gap-[30px] py-[40px]"
            shadow="sm"
            radius="md"
            style={{ padding: "60px 24px" }}
          >
            <div className="flex flex-col gap-2">
              <Text
                style={{
                  padding: "4px 8px",
                  color: "var(--dark-green)",
                  fontSize: "10PX",
                }}
                className="text-deepteal font-normal text-[10px] rounded-[13.5px]   bg-cyan self-start"
              >
                Next Report: End of Q2 2025
              </Text>
              <Text
                style={{ fontSize: "18px", fontWeight: 700 }}
                className="text-[18px] font-bold"
              >
                Quarterly Expenses Overview
              </Text>
            </div>
            <Text style={{ fontSize: "20px" }} className="mt-2 text-[20px]">
              Detailed quarterly expense reports are published at the end of
              each quarter, providing complete transparency on:
            </Text>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <span className="h-[12px] w-[12px] bg-[#FF7A00] rounded-full"></span>
                <p className="text-[18px] font-normal">
                  Talent support disbursements
                </p>
              </div>

              <div className="flex items-center gap-2">
                <span className="h-[12px] w-[12px] bg-[#FF7A00] rounded-full"></span>
                <p className="text-[18px] font-normal">
                  Tools and resources provided
                </p>
              </div>

              <div className="flex items-center gap-2">
                <span className="h-[12px] w-[12px] bg-[#FF7A00] rounded-full"></span>
                <p className="text-[18px] font-normal">
                  Community events and activities
                </p>
              </div>

              <div className="flex items-center gap-2">
                <span className="h-[12px] w-[12px] bg-[#FF7A00] rounded-full"></span>
                <p className="text-[18px] font-normal">Operational costs</p>
              </div>
            </div>
          </Card>
        </div>

        <Card
          className=" gap-[30px] py-[40px]"
          shadow="sm"
          radius="md"
          style={{ padding: "60px 24px" }}
        >
          <div className="flex flex-col gap-2">
            <Text
              style={{ fontSize: "18px", fontWeight: 700 }}
              className="text-[18px] font-bold"
            >
              DONATION PROCESS
            </Text>
          </div>
          <Text style={{ fontSize: "20px" }} className="mt-2 text-[20px]">
            While we deeply appreciate the community&apos;s interest in
            supporting our mission, we maintain a careful due diligence process
            for all potential donations:
          </Text>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="h-[12px] w-[12px] bg-[#FF7A00] rounded-full"></span>
              <p className="text-[18px] font-normal">
                Talent support disbursements
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="h-[12px] w-[12px] bg-[#FF7A00] rounded-full"></span>
              <p className="text-[18px] font-normal">
                Tools and resources provided
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="h-[12px] w-[12px] bg-[#FF7A00] rounded-full"></span>
              <p className="text-[18px] font-normal">
                Community events and activities
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="h-[12px] w-[12px] bg-[#FF7A00] rounded-full"></span>
              <p className="text-[18px] font-normal">Operational costs</p>
            </div>
          </div>

          <Text
            style={{
              color: "#505050",
              fontWeight: 400,
              fontSize: "14px",
            }}
            className=" text-gray-500"
          >
            Note: External donations enable us to expand our reach and impact,
            helping us support more talented individuals while validating and
            strengthening our community&apos;s mission. Together, we can create
            more opportunities for deserving tech talents.
          </Text>
        </Card>
      </div>
      <Button
        component="a"
        href="https://t.me/+aXqfEpkBcy4xNTc8"
        target="_blank"
        rel="noopener noreferrer"
        className="self-center text-darkgreen"
        style={{
          borderRadius: "10px",
          color: "var(--dark-green)",
          background: "var(--white)",
          height: "48px",
          padding: "16px 24px",
        }}
        variant="filled"
        rightSection={
          <Image src="/give.svg" width={20} height={18} alt="Give Icon" />
        }
      >
        Give to the community
      </Button>
    </section>
  );
});

Section5.displayName = "Section5";

export default Section5;
