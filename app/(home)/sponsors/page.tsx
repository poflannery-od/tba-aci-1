import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BoardMembersPage = () => {
  return (
    <div className="w-full flex flex-col items-center justify-start min-h-screen py-8 gap-12 bg-[#779a46] ">
      <div className="flex items-center justify-center gap-2 flex-col px-4 pt-10">
        <span className="text-white font-bold text-3xl text-center">
          2025 Sponsors
        </span>
      </div>
      <div className="w-full flex items-center justify-center gap-2 flex-col py-6 bg-[#672543]">
        <span className="text-white font-base text-4xl text-center">
          Title Sponsors
        </span>
      </div>
      <div className="w-[80px] h-[1px] bg-white/30" />
      <div className="grid grid-cols-1 px-4 gap-6">
        {/* <div className="flex flex-col gap-4 items-center justify-center">
          <div className="w-[240px] h-[240px] bg-white relative shadow-xl rounded-full overflow-hidden flex items-center justify-center">
            <Image
              src="/images/sponsors/kass.jpg"
              alt="Kass Foundation Cover"
              width={220}
              height={220}
              className="object-fit"
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="text-white font-base text-2xl select-none text-center">
              Kass Foundation
            </span>
            <span className="text-white/70 italic font-light text-light select-none text-center">
              Title Sponsor
            </span>
          </div>
        </div> */}
        <Link
          href="https://glcminerals.com/"
          target="_blank"
          className="flex flex-col gap-4 items-center justify-center"
        >
          <div className="w-[240px] h-[240px] bg-white relative shadow-xl rounded-full overflow-hidden flex items-center justify-center">
            <Image
              src="/images/sponsors/glc.jpg"
              alt="GLC Minerals Cover"
              width={220}
              height={220}
              className="object-contain"
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="text-white font-base text-2xl select-none text-center">
              GLC Minerals
            </span>
            <span className="text-white/70 italic font-light text-light select-none text-center">
              Silver Sponsor
            </span>
          </div>
        </Link>
      </div>
      <div className="w-[80px] h-[1px] bg-white/30" />
      {/* <div className="w-full flex items-center justify-center gap-2 flex-col py-6 bg-[#672543]">
        <span className="text-white font-base text-3xl text-center">
          Our Gold Sponsors
        </span>
      </div> */}
      {/* <div className="w-[80px] h-[1px] bg-white/30" /> */}
      {/* <div className="grid grid-cols-1 px-4 gap-6">
        <Link
          href="https://www.gklaw.com/"
          target="_blank"
          className="flex flex-col gap-4 items-center justify-center"
        >
          <div className="w-[240px] h-[240px] bg-white relative shadow-xl rounded-full overflow-hidden flex items-center justify-center">
            <Image
              src="/images/sponsors/g&k.png"
              alt="Godfrey Kahn, SC Cover"
              width={220}
              height={220}
              className="object-contain"
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="text-white font-base text-2xl select-none text-center">
              Godfrey Kahn, SC
            </span>
            <span className="text-white/70 italic font-light text-light select-none text-center">
              Gold Sponsor
            </span>
          </div>
        </Link>
      </div> */}
      {/* <div className="w-[80px] h-[1px] bg-white/30" /> */}
      <div className="w-full flex items-center justify-center gap-2 flex-col py-6 bg-[#672543]">
        <span className="text-white font-base text-3xl text-center">
          Our Silver Sponsors
        </span>
      </div>
      <div className="w-[80px] h-[1px] bg-white/30" />
      <div className="flex flex-col gap-4 items-center justify-center">
        <div className="w-[240px] h-[240px] bg-white relative shadow-xl rounded-full overflow-hidden flex items-center justify-center">
          <Image
            src="/images/sponsors/chuck_barbara_johnson_rm.png"
            alt="Chuck And Barbara Johnson"
            width={220}
            height={220}
            className="object-fill"
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <span className="text-white font-base text-2xl select-none text-center">
            Chuck and Barbara Johnson
          </span>
          <span className="text-white/70 italic font-light text-light select-none text-center">
            Silver Sponsor
          </span>
        </div>
      </div>
      <div className="grid grid-cols-1 px-4 gap-6">
        <Link
          href="https://baycareclinic.com/about-us/baycare-clinic-foundation/"
          target="_blank"
          className="flex flex-col gap-4 items-center justify-center"
        >
          <div className="w-[240px] h-[240px] bg-white relative shadow-xl rounded-full overflow-hidden flex items-center justify-center">
            <Image
              src="/images/sponsors/bccf.png"
              alt="BCCF Cover"
              width={220}
              height={220}
              className="object-contain"
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="text-white font-base text-2xl select-none text-center">
              Bay Care Clinic Foundation
            </span>
            <span className="text-white/70 italic font-light text-light select-none text-center">
              Silver Sponsor
            </span>
          </div>
        </Link>
        <Link
          href="https://www.nicoletbank.com/"
          target="_blank"
          className="flex flex-col gap-4 items-center justify-center"
        >
          <div className="w-[240px] h-[240px] bg-white relative shadow-xl rounded-full overflow-hidden flex items-center justify-center">
            <Image
              src="/images/sponsors/nicolet.png"
              alt="Nicolet Cover"
              width={220}
              height={220}
              className="object-contain"
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="text-white font-base text-2xl select-none text-center">
              Nicolet National Bank
            </span>
            <span className="text-white/70 italic font-light text-light select-none text-center">
              Silver Sponsor
            </span>
          </div>
        </Link>
        <Link
          href="https://www.wipfli.com/"
          target="_blank"
          className="flex flex-col gap-4 items-center justify-center"
        >
          <div className="w-[240px] h-[240px] bg-white relative shadow-xl rounded-full overflow-hidden flex items-center justify-center">
            <Image
              src="/images/sponsors/wip.png"
              alt="Wipfli Cover"
              width={140}
              height={140}
              className="object-contain"
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="text-white font-base text-2xl select-none text-center">
              Wipfli
            </span>
            <span className="text-white/70 italic font-light text-light select-none text-center">
              Silver Sponsor
            </span>
          </div>
        </Link>
        <Link
          href="https://mcdonaldcompanies.com/"
          target="_blank"
          className="flex flex-col gap-4 items-center justify-center"
        >
          <div className="w-[240px] h-[240px] bg-white relative shadow-xl rounded-full overflow-hidden flex items-center justify-center">
            <Image
              src="/images/sponsors/mcdonald.png"
              alt="Mcdonald Cover"
              width={220}
              height={220}
              className="object-contain"
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="text-white font-base text-2xl select-none text-center">
              Mcdonald Companies
            </span>
            <span className="text-white/70 italic font-light text-light select-none text-center">
              Silver Sponsor
            </span>
          </div>
        </Link>
        <Link
          href="https://aloft-hotels.marriott.com/"
          target="_blank"
          className="flex flex-col gap-4 items-center justify-center"
        >
          <div className="w-[240px] h-[240px] bg-white relative shadow-xl rounded-full overflow-hidden flex items-center justify-center">
            <Image
              src="/images/sponsors/aloft.png"
              alt="Aloft Hotels Cover"
              width={220}
              height={220}
              className="object-contain"
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="text-white font-base text-2xl select-none text-center">
              Aloft Hotels
            </span>
            <span className="text-white/70 italic font-light text-light select-none text-center">
              Silver Sponsor
            </span>
          </div>
        </Link>
      </div>
      <div className="w-[80px] h-[1px] bg-white/30" />
      {/* <div className="w-full flex items-center justify-center gap-2 flex-col py-6 bg-[#672543]">
        <span className="text-white font-base text-3xl text-center">
          Family and Friends
        </span>
      </div> */}
      {/* <div className="w-[80px] h-[1px] bg-white/30" /> */}
      {/* <div className="grid grid-cols-1 px-4 gap-6">
        <Link
          href="https://dewittllp.com/"
          target="_blank"
          className="flex flex-col gap-4 items-center justify-center"
        >
          <div className="w-[180px] h-[180px] bg-white relative shadow-xl rounded-full overflow-hidden flex items-center justify-center">
            <Image
              src="/images/sponsors/dewitt.jpg"
              alt="Dewitt & Roetter Cover"
              width={160}
              height={160}
              className="object-contain"
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="text-white font-base text-2xl select-none text-center">
              Dewitt & Roetter
            </span>
            <span className="text-white/70 italic font-light text-light select-none text-center">
              Family and Friends
            </span>
          </div>
        </Link>
        <Link
          href="https://www.plannedparenthood.org/planned-parenthood-wisconsin"
          target="_blank"
          className="flex flex-col gap-4 items-center justify-center"
        >
          <div className="w-[180px] h-[180px] bg-white relative shadow-xl rounded-full overflow-hidden flex items-center justify-center">
            <Image
              src="/images/sponsors/pp.png"
              alt="Planned Parenthood Cover"
              width={160}
              height={160}
              className="object-contain"
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="text-white font-base text-2xl select-none text-center">
              Planned Parenthood
            </span>
            <span className="text-white/70 italic font-light text-light select-none text-center">
              Family and Friends
            </span>
          </div>
        </Link>
        <div className="flex flex-col gap-4 items-center justify-center">
          <div className="w-[180px] h-[180px] bg-white relative shadow-xl rounded-full overflow-hidden flex items-center justify-center">
            <Users2
              className=" text-black/80 w-[120px] h-[120px]"
              strokeWidth={0.3}
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="text-white font-base text-2xl select-none text-center">
              Wes and Kim Garner
            </span>
            <span className="text-white/70 italic font-light text-light select-none text-center">
              Family and Friends
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-4 items-center justify-center">
          <div className="w-[180px] h-[180px] bg-white relative shadow-xl rounded-full overflow-hidden flex items-center justify-center">
            <Users2
              className=" text-black/80 w-[120px] h-[120px]"
              strokeWidth={0.3}
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="text-white font-base text-2xl select-none text-center">
              Gina Stilp and Patrick Nowak
            </span>
            <span className="text-white/70 italic font-light text-light select-none text-center">
              Family and Friends
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-4 items-center justify-center">
          <div className="w-[180px] h-[180px] bg-white relative shadow-xl rounded-full overflow-hidden flex items-center justify-center">
            <Users2
              className=" text-black/80 w-[120px] h-[120px]"
              strokeWidth={0.3}
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="text-white font-base text-2xl select-none text-center">
              Fox-Simes Family
            </span>
            <span className="text-white/70 italic font-light text-light select-none text-center">
              Family and Friends
            </span>
          </div>
        </div>
      </div>
      <div className="w-[80px] h-[1px] bg-white/30" /> */}
      {/* <div className="w-full flex items-center justify-center gap-2 flex-col py-6 bg-[#672543]">
        <span className="text-white font-base text-3xl text-center">
          Our Notable Donors
        </span>
      </div> */}
      <Link href="/" className="flex items-center justify-center gap-4 p-4">
        <ArrowLeft className="text-white" strokeWidth={1} />
        <span className="text-white font-base text-lg">Return Home</span>
      </Link>
    </div>
  );
};

export default BoardMembersPage;
