import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const AwardRecipienctPage = () => {
  return (
    <div className="w-full flex flex-col items-center justify-start min-h-screen py-8 gap-12 bg-[#779a46] ">
      <div className="flex items-center justify-center gap-2 flex-col px-4 pt-10">
        <span className="text-white font-bold text-4xl text-center">2025</span>
        <span className="text-white font-bold text-3xl text-center">
          GROWING through Adoption Families
        </span>
      </div>
      <div className="w-[80px] h-[1px] bg-white/30" />
      <div className="flex flex-col items-center justify-center gap-4 px-6">
        <Carousel className="w-full max-w-xs">
          <CarouselContent>
            <CarouselItem
              key={0}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-[280px] h-[350px] flex ">
                <Image
                  src={`/images/families/webb/webb_0.jpg`}
                  alt={0 + "_webb_photo"}
                  width={280}
                  height={350}
                  className="ovject-contain"
                />
              </div>
            </CarouselItem>
            <CarouselItem
              key={1}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-[280px] h-[350px]v">
                <Image
                  src={`/images/families/webb/webb_1.jpg`}
                  alt={1 + "_webb_photo"}
                  width={280}
                  height={350}
                  className="object-contain"
                />
              </div>
            </CarouselItem>
            <CarouselItem
              key={1}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-[280px] h-[350px] flex">
                <Image
                  src={`/images/families/webb/webb_2.jpg`}
                  alt={1 + "_webb_photo"}
                  width={280}
                  height={350}
                  className="object-contain"
                />
              </div>
            </CarouselItem>
            <CarouselItem
              key={1}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-[280px] h-[350px] flex">
                <Image
                  src={`/images/families/webb/webb_3.jpg`}
                  alt={1 + "_webb_photo"}
                  width={280}
                  height={350}
                  className="object-contain"
                />
              </div>
            </CarouselItem>
            <CarouselItem
              key={1}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-[280px] h-[350px] flex">
                <Image
                  src={`/images/families/webb/webb_4.jpg`}
                  alt={1 + "_webb_photo"}
                  width={280}
                  height={350}
                  className="object-cover"
                />
              </div>
            </CarouselItem>
            <CarouselItem
              key={1}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-[280px] h-[350px] flex">
                <Image
                  src={`/images/families/webb/webb_5.jpg`}
                  alt={1 + "_webb_photo"}
                  width={280}
                  height={350}
                  className="object-contain"
                />
              </div>
            </CarouselItem>
            <CarouselItem
              key={1}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-[280px] h-[350px] flex">
                <Image
                  src={`/images/families/webb/webb_6.jpg`}
                  alt={1 + "_webb_photo"}
                  width={280}
                  height={350}
                  className="object-contain"
                />
              </div>
            </CarouselItem>
            <CarouselItem
              key={1}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-[280px] h-[350px] flex">
                <Image
                  src={`/images/families/webb/webb_7.jpg`}
                  alt={1 + "_webb_photo"}
                  width={280}
                  height={350}
                  className="object-contain"
                />
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
        <div>
          <span className="text-white/50 italic text-sm text-center">
            (Scroll through to see more images)
          </span>
        </div>
        <span className="text-white font-bold text-3xl text-center">
          The Webb Family
        </span>
        <span className="text-white/80 font-base text-lg text-center">
          2023 Adoption{" "}
        </span>
      </div>
      <div className="w-[80px] h-[1px] bg-white/30" />
      <div className="flex flex-col items-center justify-center gap-4 px-6">
        <Carousel className="w-full max-w-xs">
          <CarouselContent>
            <CarouselItem
              key={1}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-[280px] h-[350px]v">
                <Image
                  src={`/images/families/harris/harris_1.jpeg`}
                  alt={1 + "_webb_photo"}
                  width={280}
                  height={350}
                  className="object-contain"
                />
              </div>
            </CarouselItem>
            <CarouselItem
              key={1}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-[280px] h-[350px] flex">
                <Image
                  src={`/images/families/harris/harris_2.jpeg`}
                  alt={1 + "_webb_photo"}
                  width={280}
                  height={350}
                  className="object-contain"
                />
              </div>
            </CarouselItem>
            <CarouselItem
              key={1}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-[280px] h-[350px] flex">
                <Image
                  src={`/images/families/harris/harris_3.jpeg`}
                  alt={1 + "_webb_photo"}
                  width={280}
                  height={350}
                  className="object-contain"
                />
              </div>
            </CarouselItem>
            <CarouselItem
              key={1}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-[280px] h-[350px] flex">
                <Image
                  src={`/images/families/harris/harris_4.jpeg`}
                  alt={1 + "_webb_photo"}
                  width={280}
                  height={350}
                  className="object-cover"
                />
              </div>
            </CarouselItem>
            <CarouselItem
              key={1}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-[280px] h-[350px] flex">
                <Image
                  src={`/images/families/harris/harris_5.jpeg`}
                  alt={1 + "_webb_photo"}
                  width={280}
                  height={350}
                  className="object-contain"
                />
              </div>
            </CarouselItem>
            <CarouselItem
              key={1}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-[280px] h-[350px] flex">
                <Image
                  src={`/images/families/harris/harris_6.jpeg`}
                  alt={1 + "_webb_photo"}
                  width={280}
                  height={350}
                  className="object-contain"
                />
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
        <div>
          <span className="text-white/50 italic text-sm text-center">
            (Scroll through to see more images)
          </span>
        </div>
        <span className="text-white font-bold text-3xl text-center">
          The Harris Family
        </span>
        <span className="text-white/80 font-base text-lg text-center">
          2021 Adoption{" "}
        </span>
      </div>
      <div className="w-[80px] h-[1px] bg-white/30" />
      <div className="flex flex-col items-center justify-center gap-4 px-6">
        <Carousel className="w-full max-w-xs">
          <CarouselContent>
            <CarouselItem
              key={1}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-[280px] h-[350px]v">
                <Image
                  src={`/images/families/falk/falk_1.jpeg`}
                  alt={1 + "_falk_photo"}
                  width={280}
                  height={350}
                  className="object-contain"
                />
              </div>
            </CarouselItem>
            <CarouselItem
              key={1}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-[280px] h-[350px] flex">
                <Image
                  src={`/images/families/falk/falk_2.jpeg`}
                  alt={1 + "_falk_photo"}
                  width={280}
                  height={350}
                  className="object-contain"
                />
              </div>
            </CarouselItem>
            <CarouselItem
              key={1}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-[280px] h-[350px] flex">
                <Image
                  src={`/images/families/falk/falk_3.jpg`}
                  alt={1 + "_falk_photo"}
                  width={280}
                  height={350}
                  className="object-contain"
                />
              </div>
            </CarouselItem>
            <CarouselItem
              key={1}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-[280px] h-[350px] flex">
                <Image
                  src={`/images/families/falk/falk_4.jpg`}
                  alt={1 + "_falk_photo"}
                  width={280}
                  height={350}
                  className="object-cover"
                />
              </div>
            </CarouselItem>
            <CarouselItem
              key={1}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-[280px] h-[350px] flex">
                <Image
                  src={`/images/families/falk/falk_5.jpg`}
                  alt={1 + "_falk_photo"}
                  width={280}
                  height={350}
                  className="object-contain"
                />
              </div>
            </CarouselItem>
            <CarouselItem
              key={1}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-[280px] h-[350px] flex">
                <Image
                  src={`/images/families/falk/falk_6.jpg`}
                  alt={1 + "_falk_photo"}
                  width={280}
                  height={350}
                  className="object-contain"
                />
              </div>
            </CarouselItem>
            <CarouselItem
              key={1}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-[280px] h-[350px] flex">
                <Image
                  src={`/images/families/falk/falk_7.png`}
                  alt={1 + "_falk_photo"}
                  width={280}
                  height={350}
                  className="object-contain"
                />
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
        <div>
          <span className="text-white/50 italic text-sm text-center">
            (Scroll through to see more images)
          </span>
        </div>
        <span className="text-white font-bold text-3xl text-center">
          The Falk Family
        </span>
        <span className="text-white/80 font-base text-lg text-center">
          2019, 2021, 2023 Adoptions{" "}
        </span>
      </div>
      <div className="w-[80px] h-[1px] bg-white/30" />
      <div className="flex flex-col items-center justify-center gap-4 px-6">
        <Carousel className="w-full max-w-xs">
          <CarouselContent>
            <CarouselItem
              key={1}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-[280px] h-[350px]v">
                <Image
                  src={`/images/families/messner/messner_1.jpeg`}
                  alt={1 + "_messner_photo"}
                  width={280}
                  height={350}
                  className="object-contain"
                />
              </div>
            </CarouselItem>
            <CarouselItem
              key={1}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-[280px] h-[350px] flex">
                <Image
                  src={`/images/families/messner/messner_2.jpg`}
                  alt={1 + "_messner_photo"}
                  width={280}
                  height={350}
                  className="object-contain"
                />
              </div>
            </CarouselItem>
            <CarouselItem
              key={1}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-[280px] h-[350px] flex">
                <Image
                  src={`/images/families/messner/messner_3.jpg`}
                  alt={1 + "_messner_photo"}
                  width={280}
                  height={350}
                  className="object-contain"
                />
              </div>
            </CarouselItem>
            <CarouselItem
              key={1}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-[280px] h-[350px] flex">
                <Image
                  src={`/images/families/messner/messner_4.jpg`}
                  alt={1 + "_messner_photo"}
                  width={280}
                  height={350}
                  className="object-cover"
                />
              </div>
            </CarouselItem>
            <CarouselItem
              key={1}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-[280px] h-[350px] flex">
                <Image
                  src={`/images/families/messner/messner_5.jpg`}
                  alt={1 + "_messner_photo"}
                  width={280}
                  height={350}
                  className="object-contain"
                />
              </div>
            </CarouselItem>
            <CarouselItem
              key={1}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-[280px] h-[350px] flex">
                <Image
                  src={`/images/families/messner/messner_6.jpg`}
                  alt={1 + "_messner_photo"}
                  width={280}
                  height={350}
                  className="object-contain"
                />
              </div>
            </CarouselItem>
            <CarouselItem
              key={1}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-[280px] h-[350px] flex">
                <Image
                  src={`/images/families/messner/messner_7.jpg`}
                  alt={1 + "_messner_photo"}
                  width={280}
                  height={350}
                  className="object-contain"
                />
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
        <div>
          <span className="text-white/50 italic text-sm text-center">
            (Scroll through to see more images)
          </span>
        </div>
        <span className="text-white font-bold text-3xl text-center">
          The Messner Family
        </span>
        <span className="text-white/80 font-base text-lg text-center">
          2020 Adoption{" "}
        </span>
      </div>
      <div className="w-[80px] h-[1px] bg-white/30" />
      <Link href="/" className="flex items-center justify-center gap-4 p-4">
        <ArrowLeft className="text-white" strokeWidth={1} />
        <span className="text-white font-base text-lg">Return Home</span>
      </Link>
    </div>
  );
};

export default AwardRecipienctPage;
