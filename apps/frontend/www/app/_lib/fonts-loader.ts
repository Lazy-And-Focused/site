import type { NextFont } from "next/dist/compiled/@next/font";

import {
  Balsamiq_Sans,
  Ubuntu_Sans,
  Ubuntu_Condensed,
  Ubuntu_Sans_Mono,
} from "next/font/google";

const heading = Balsamiq_Sans({
  weight: "400",
  style: "normal",
  subsets: ["cyrillic", "latin"],
});

const sans = Ubuntu_Sans({
  weight: "400",
  style: "normal",
  subsets: ["cyrillic", "latin"],
});

const mono = Ubuntu_Sans_Mono({
  weight: "400",
  style: "normal",
  subsets: ["cyrillic", "latin"],
});

const serif = Ubuntu_Condensed({
  weight: "400",
  style: ["normal"],
  subsets: ["cyrillic", "latin"],
});

export default function loaded() {
  const fonts: { [key: string]: NextFont } = { heading, sans, serif, mono };

  return fonts;
}
