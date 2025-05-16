import { Button } from "@/components/ui/button";
import { Award, Building2, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  return (
    <div className="w-full flex flex-col items-center justify-start min-h-screen py-8 gap-12 bg-[#779a46] ">
      <div className="flex items-center justify-center">
        <div className="flex items-center justify-center relative w-[280px] h-[145px]">
          <Image src="/images/logo/tba.png" alt="TBA ACI Logo White" fill />
        </div>
      </div>
      <div className="flex items-center justify-center gap-2 flex-col px-4">
        <span className="text-white/80 font-base text-xl text-center">Thank you for joining us for the <span className="font-bold">6th Annual</span> Touched by Adoption evening!</span>
        <span className="text-white/80 font-base text-xl text-center mt-6">Tonight, we not only celebrate adoption and how it touches so many lives, but raise funds to strengthen internal and community-focused programming and lessen the financial burden of adoption for Wisconsin families.</span>
        <span className="text-white/80 font-base text-xl text-center mt-6">This exciting evening includes a delightful dinner, cash bar, wine pull and stage program, plus silent & live auctions.</span>
      </div>
      <div className="w-[80px] h-[1px] bg-white/30" />
      <div className="w-full grid grid-cols-1 gap-4 px-4">
        <Link href="/speakers" className="w-full border-[2px] border-white/80 rounded-lg p-2 flex flex-col items-center justify-start shadow-lg select-none">
          <Users className="w-20 h-20 text-white" strokeWidth={1} />
          <div className="w-full h-[1px] bg-white/80" />
          <span className="text-white font-base text-2xl text-center select-none">Tonight&apos;s Speakers</span>
        </Link>
        <Link href="/sponsors" className="w-full border-[2px] border-white/80 rounded-lg p-2 flex flex-col items-center justify-start shadow-lg select-none">
          <Building2 className="w-20 h-20 text-white" strokeWidth={1} />
          <div className="w-full h-[1px] bg-white/80" />
          <span className="text-white font-base text-2xl text-center select-none">Event Sponsors</span>
        </Link>
        <Link href="/award-recipient" className="w-full border-[2px] border-white/80 rounded-lg p-2 flex flex-col items-center justify-start shadow-lg select-none">
          <Award className="w-20 h-20 text-white" strokeWidth={1} />
          <div className="w-full h-[1px] bg-white/80" />
          <span className="text-white font-base text-2xl text-center select-none">Award Receipient</span>
        </Link>
      </div>
      <div className="flex items-center justify-center gap-2 flex-col bg-[#3e4c5f] py-8">
        <span className="text-white font-bold text-3xl">Tonight&apos;s Program</span>
        <span className="text-white/80 font-base text-lg text-center w-full px-4">Check out the schedule for this evening below.</span>
        <Button className="bg-white/10 hover:bg-white/10 border-white border-[2px] text-white" asChild>
          <Link href="/program">See Program</Link>
        </Button>
      </div>

      <div className="flex items-center justify-center gap-2 flex-col px-4 pb-4">
        <span className="text-white font-bold text-3xl">Meet the Board</span>
        <span className="text-white/80 font-base text-lg text-center">See the members of the Adoption Choice, Inc. Board of Directors here.</span>
        <Button className="bg-white/10 hover:bg-white/10 border-white border-[2px] text-white" asChild>
          <Link href="/board-members">View ACI Board</Link>
        </Button>
      </div>
    </div>


  )
};

export default Page;