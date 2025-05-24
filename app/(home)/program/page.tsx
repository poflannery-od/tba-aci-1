import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProgramPage = () => {
  return (
    <div className="w-full flex flex-col items-center justify-start min-h-screen py-8 gap-12 bg-homepage">
      <div className="flex items-center justify-center relative w-[280px] h-[145px]">
        <Image src="/images/logo/tba-color.png" alt="TBA ACI Logo White" fill />
      </div>
      <div className="flex items-center justify-center gap-2 flex-col px-4">
        <span className="text-black font-bold text-3xl text-center">
          Tonight&apos;s Program
        </span>
        <span className="text-black/80 font-base text-lg text-center"></span>
      </div>
      <div className="w-[80px] h-[1px] bg-black/30" />
      <div className="flex flex-col items-center justify-center gap-4 px-4">
        <div className="flex flex-col items-center justify-center gap-1">
          <span className="text-black/70 font-semibold italic text-xl">
            05:30 pm
          </span>
          <span className="text-black/70 font-light text-2xl text-center">
            Doors Open, Cash Bar Open and Wine Pull Open
          </span>
        </div>
        <div className="flex flex-col items-center justify-center gap-1">
          <span className="text-black/70 font-semibold italic text-xl">
            06:00 pm
          </span>
          <span className="text-black/70 font-light text-2xl text-center">
            Buffet Opens
          </span>
        </div>
        <div className="flex flex-col items-center justify-center gap-1">
          <span className="text-black/70 font-semibold italic text-xl">
            07:00 pm
          </span>
          <span className="text-black/70 font-light text-2xl text-center">
            Stage Program Begins
          </span>
        </div>
        <div className="flex flex-col items-center justify-center gap-1">
          <span className="text-black/70 font-semibold italic text-xl">
            07:30 pm
          </span>
          <span className="text-black/70 font-light text-2xl text-center">
            Buffet Closes
          </span>
        </div>
        <div className="flex flex-col items-center justify-center gap-1">
          <span className="text-black/70 font-semibold italic text-xl">
            08:00 pm
          </span>
          <span className="text-black/70 font-light text-2xl text-center">
            Silent Auction Closes & Live Auction Begins
          </span>
        </div>
        <div className="flex flex-col items-center justify-center gap-1">
          <span className="text-black/70 font-semibold italic text-xl">
            08:45 pm
          </span>
          <span className="text-black/70 font-light text-2xl text-center">
            Auction Check-Out & Formal Photos with Greg Louganis
          </span>
        </div>
      </div>
      <div className="w-[80px] h-[1px] bg-black/30" />
      <Link href="/" className="flex items-center justify-center gap-4 p-4">
        <ArrowLeft className="text-black" strokeWidth={1} />
        <span className="text-black font-base text-lg">Return Home</span>
      </Link>
    </div>
  );
};

export default ProgramPage;
