import localFont from "next/font/local";

export const SpaceGrotesk = localFont({
  src: [
    {
      path: "../../public/fonts/space-grotesk/SpaceGrotesk-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/space-grotesk/SpaceGrotesk-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/space-grotesk/SpaceGrotesk-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/space-grotesk/SpaceGrotesk-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/space-grotesk/SpaceGrotesk-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-grotesk",
  display: "swap",
  preload: true,
});
