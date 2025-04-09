import { Poppins } from "next/font/google";
import { NextFont } from "next/dist/compiled/@next/font";
import Image from "next/image";
import { cn } from "@/lib/utils";

const font: NextFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const Logo = () => {
  return (
    <div className={cn("flex flex-col items-center gap-y-4", font.className)}>
      <div className="bg-blue-200 rounded-full p-1">
        <Image src="/infinity.svg" alt="twitch logo" height={80} width={80} />
      </div>
      <div className="flex flex-col items-center">
        <p className="text-5xl font-nautigal font-semibold">Team Sync</p>
      </div>
    </div>
  );
};
