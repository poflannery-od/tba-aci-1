import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const AwardRecipienctPage = () => {
  return (
    <div className="w-full flex flex-col items-center justify-start min-h-screen py-8 gap-12 bg-[#779a46] ">
      <div className="flex items-center justify-center gap-2 flex-col px-4 pt-10">
        <span className="text-white font-bold text-3xl text-center">
          GROWING through Adoption Families
        </span>
      </div>
      <div className="w-[80px] h-[1px] bg-white/30" />
      <span className="text-white/80 font-base text-lg text-center px-4">
        Scroll through some of our adoptive families who have utilized Adoption Choice over the years.{" "}
      </span>
      <div className="w-[80px] h-[1px] bg-white/30" />
      <div className="flex flex-col items-center justify-center gap-4 px-6">
        <Carousel className="w-full max-w-xs">
          <CarouselContent>
            <CarouselItem
              key={1}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-[280px] h-[350px]">
                <Image
                  src={`/images/families/brophy-domina/Brophy-Domina_1.jpeg`}
                  alt={1 + "__brophy_domina_photo"}
                  width={280}
                  height={350}
                  className="object-contain rounded-xl overflow-hidden"
                />
              </div>
            </CarouselItem>
            <CarouselItem
              key={1}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-[280px] h-[350px]">
                <Image
                  src={`/images/families/brophy-domina/Brophy-Domina_2.jpeg`}
                  alt={1 + "__brophy_domina_photo"}
                  width={280}
                  height={350}
                  className="object-contain rounded-xl overflow-hidden"
                />
              </div>
            </CarouselItem>
            <CarouselItem
              key={1}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-[280px] h-[350px]">
                <Image
                  src={`/images/families/brophy-domina/Brophy-Domina_3.jpeg`}
                  alt={1 + "__brophy_domina_photo"}
                  width={280}
                  height={350}
                  className="object-contain rounded-xl overflow-hidden"
                />
              </div>
            </CarouselItem>
            <CarouselItem
              key={1}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-[280px] h-[350px]">
                <Image
                  src={`/images/families/brophy-domina/Brophy-Domina_4.jpeg`}
                  alt={1 + "__brophy_domina_photo"}
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
              <div className="w-[280px] h-[350px]">
                <Image
                  src={`/images/families/brophy-domina/Brophy-Domina_5.jpeg`}
                  alt={1 + "__brophy_domina_photo"}
                  width={280}
                  height={350}
                  className="object-contain rounded-xl overflow-hidden"
                />
              </div>
            </CarouselItem>
            <CarouselItem
              key={1}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-[280px] h-[350px]">
                <Image
                  src={`/images/families/brophy-domina/Brophy-Domina_6.jpeg`}
                  alt={1 + "__brophy_domina_photo"}
                  width={280}
                  height={350}
                  className="object-contain rounded-xl overflow-hidden"
                />
              </div>
            </CarouselItem>
            <CarouselItem
              key={1}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-[280px] h-[350px]">
                <Image
                  src={`/images/families/brophy-domina/Brophy-Domina_7.jpeg`}
                  alt={1 + "__brophy_domina_photo"}
                  width={280}
                  height={350}
                  className="object-contain rounded-xl overflow-hidden"
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
          The Brophy-Domina Family
        </span>
        <span className="text-white/80 font-base text-lg text-center">
          Miles and Ella Brophy-Domina{" "}
        </span>
        <span className="text-white/80 font-base text-lg text-center">
          2021, 2024 Adoptions{" "}
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
                  src={`/images/families/eiles/eiles_1.jpeg`}
                  alt={1 + "_eiles_photo"}
                  width={280}
                  height={350}
                  className="object-contain rounded-xl overflow-hidden"
                />
              </div>
            </CarouselItem>
            <CarouselItem
              key={1}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-[280px] h-[350px]">
                <Image
                  src={`/images/families/eiles/eiles_2.jpeg`}
                  alt={1 + "_eiles_photo"}
                  width={280}
                  height={350}
                  className="object-contain rounded-xl overflow-hidden"
                />
              </div>
            </CarouselItem>
            <CarouselItem
              key={1}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-[280px] h-[350px]">
                <Image
                  src={`/images/families/eiles/eiles_3.jpeg`}
                  alt={1 + "_eiles_photo"}
                  width={280}
                  height={350}
                  className="object-contain rounded-xl overflow-hidden"
                />
              </div>
            </CarouselItem>
            <CarouselItem
              key={1}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-[280px] h-[350px]">
                <Image
                  src={`/images/families/eiles/eiles_4.jpeg`}
                  alt={1 + "_eiles_photo"}
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
              <div className="w-[280px] h-[350px]">
                <Image
                  src={`/images/families/eiles/eiles_5.jpeg`}
                  alt={1 + "_eiles_photo"}
                  width={280}
                  height={350}
                  className="object-contain rounded-xl overflow-hidden"
                />
              </div>
            </CarouselItem>
            <CarouselItem
              key={1}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-[280px] h-[350px]">
                <Image
                  src={`/images/families/eiles/eiles_6.jpeg`}
                  alt={1 + "_eiles_photo"}
                  width={280}
                  height={350}
                  className="object-contain rounded-xl overflow-hidden"
                />
              </div>
            </CarouselItem>
            <CarouselItem
              key={1}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-[280px] h-[350px]">
                <Image
                  src={`/images/families/eiles/eiles_7.jpeg`}
                  alt={1 + "_eiles_photo"}
                  width={280}
                  height={350}
                  className="object-contain rounded-xl overflow-hidden"
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
          The Eiles Family
        </span>
        <span className="text-white/80 font-base text-lg text-center">
          Ellie Eiles{" "}
        </span>
        <span className="text-white/80 font-base text-lg text-center">
          2024 Adoption{" "}
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
                  src={`/images/families/endries/endries_1.jpg`}
                  alt={1 + "_endries_photo"}
                  width={280}
                  height={350}
                  className="object-contain rounded-xl overflow-hidden"
                />
              </div>
            </CarouselItem>
            <CarouselItem
              key={1}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-[280px] h-[350px]">
                <Image
                  src={`/images/families/endries/endries_2.jpg`}
                  alt={1 + "_endries_photo"}
                  width={280}
                  height={350}
                  className="object-contain rounded-xl overflow-hidden"
                />
              </div>
            </CarouselItem>
            <CarouselItem
              key={1}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-[280px] h-[350px]">
                <Image
                  src={`/images/families/endries/endries_3.jpg`}
                  alt={1 + "_endries_photo"}
                  width={280}
                  height={350}
                  className="object-contain rounded-xl overflow-hidden"
                />
              </div>
            </CarouselItem>
            <CarouselItem
              key={1}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-[280px] h-[350px]">
                <Image
                  src={`/images/families/endries/endries_4.jpg`}
                  alt={1 + "_endries_photo"}
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
              <div className="w-[280px] h-[350px]">
                <Image
                  src={`/images/families/endries/endries_5.jpg`}
                  alt={1 + "_endries_photo"}
                  width={280}
                  height={350}
                  className="object-contain rounded-xl overflow-hidden"
                />
              </div>
            </CarouselItem>
            <CarouselItem
              key={1}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-[280px] h-[350px]">
                <Image
                  src={`/images/families/endries/endries_6.jpg`}
                  alt={1 + "_endries_photo"}
                  width={280}
                  height={350}
                  className="object-contain rounded-xl overflow-hidden"
                />
              </div>
            </CarouselItem>
            <CarouselItem
              key={1}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-[280px] h-[350px]">
                <Image
                  src={`/images/families/endries/endries_7.jpg`}
                  alt={1 + "_endries_photo"}
                  width={280}
                  height={350}
                  className="object-contain rounded-xl overflow-hidden"
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
          The Endries Family
        </span>
        <span className="text-white/80 font-base text-lg text-center">
          Wyatt and Lyla Endries{" "}
        </span>
        <span className="text-white/80 font-base text-lg text-center">
          2019, 2022 Adoptions{" "}
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
                  className="object-contain rounded-xl overflow-hidden"
                />
              </div>
            </CarouselItem>
            <CarouselItem
              key={1}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-[280px] h-[350px]">
                <Image
                  src={`/images/families/falk/falk_2.jpeg`}
                  alt={1 + "_falk_photo"}
                  width={280}
                  height={350}
                  className="object-contain rounded-xl overflow-hidden"
                />
              </div>
            </CarouselItem>
            <CarouselItem
              key={1}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-[280px] h-[350px]">
                <Image
                  src={`/images/families/falk/falk_3.jpg`}
                  alt={1 + "_falk_photo"}
                  width={280}
                  height={350}
                  className="object-contain rounded-xl overflow-hidden"
                />
              </div>
            </CarouselItem>
            <CarouselItem
              key={1}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-[280px] h-[350px]">
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
              <div className="w-[280px] h-[350px]">
                <Image
                  src={`/images/families/falk/falk_5.jpg`}
                  alt={1 + "_falk_photo"}
                  width={280}
                  height={350}
                  className="object-contain rounded-xl overflow-hidden"
                />
              </div>
            </CarouselItem>
            <CarouselItem
              key={1}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-[280px] h-[350px]">
                <Image
                  src={`/images/families/falk/falk_6.jpg`}
                  alt={1 + "_falk_photo"}
                  width={280}
                  height={350}
                  className="object-contain rounded-xl overflow-hidden"
                />
              </div>
            </CarouselItem>
            <CarouselItem
              key={1}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-[280px] h-[350px]">
                <Image
                  src={`/images/families/falk/falk_7.png`}
                  alt={1 + "_falk_photo"}
                  width={280}
                  height={350}
                  className="object-contain rounded-xl overflow-hidden"
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
          Jackson, Sophia, Lexi and Cameron Falk{" "}
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
                  src={`/images/families/harris/harris_1.jpeg`}
                  alt={1 + "_webb_photo"}
                  width={280}
                  height={350}
                  className="object-contain rounded-xl overflow-hidden"
                />
              </div>
            </CarouselItem>
            <CarouselItem
              key={1}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-[280px] h-[350px]">
                <Image
                  src={`/images/families/harris/harris_2.jpeg`}
                  alt={1 + "_webb_photo"}
                  width={280}
                  height={350}
                  className="object-contain rounded-xl overflow-hidden"
                />
              </div>
            </CarouselItem>
            <CarouselItem
              key={1}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-[280px] h-[350px]">
                <Image
                  src={`/images/families/harris/harris_3.jpeg`}
                  alt={1 + "_webb_photo"}
                  width={280}
                  height={350}
                  className="object-contain rounded-xl overflow-hidden"
                />
              </div>
            </CarouselItem>
            <CarouselItem
              key={1}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-[280px] h-[350px]">
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
              <div className="w-[280px] h-[350px]">
                <Image
                  src={`/images/families/harris/harris_5.jpeg`}
                  alt={1 + "_webb_photo"}
                  width={280}
                  height={350}
                  className="object-contain rounded-xl overflow-hidden"
                />
              </div>
            </CarouselItem>
            <CarouselItem
              key={1}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-[280px] h-[350px]">
                <Image
                  src={`/images/families/harris/harris_6.jpeg`}
                  alt={1 + "_webb_photo"}
                  width={280}
                  height={350}
                  className="object-contain rounded-xl overflow-hidden"
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
          Declan Harris{" "}
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
                  src={`/images/families/messner/messner_1.jpeg`}
                  alt={1 + "_messner_photo"}
                  width={280}
                  height={350}
                  className="object-contain rounded-xl overflow-hidden"
                />
              </div>
            </CarouselItem>
            <CarouselItem
              key={1}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-[280px] h-[350px]">
                <Image
                  src={`/images/families/messner/messner_2.jpg`}
                  alt={1 + "_messner_photo"}
                  width={280}
                  height={350}
                  className="object-contain rounded-xl overflow-hidden"
                />
              </div>
            </CarouselItem>
            <CarouselItem
              key={1}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-[280px] h-[350px]">
                <Image
                  src={`/images/families/messner/messner_3.jpg`}
                  alt={1 + "_messner_photo"}
                  width={280}
                  height={350}
                  className="object-contain rounded-xl overflow-hidden"
                />
              </div>
            </CarouselItem>
            <CarouselItem
              key={1}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-[280px] h-[350px]">
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
              <div className="w-[280px] h-[350px]">
                <Image
                  src={`/images/families/messner/messner_5.jpg`}
                  alt={1 + "_messner_photo"}
                  width={280}
                  height={350}
                  className="object-contain rounded-xl overflow-hidden"
                />
              </div>
            </CarouselItem>
            <CarouselItem
              key={1}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-[280px] h-[350px]">
                <Image
                  src={`/images/families/messner/messner_6.jpg`}
                  alt={1 + "_messner_photo"}
                  width={280}
                  height={350}
                  className="object-contain rounded-xl overflow-hidden"
                />
              </div>
            </CarouselItem>
            <CarouselItem
              key={1}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-[280px] h-[350px]">
                <Image
                  src={`/images/families/messner/messner_7.jpg`}
                  alt={1 + "_messner_photo"}
                  width={280}
                  height={350}
                  className="object-contain rounded-xl overflow-hidden"
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
          Lincoln Messner{" "}
        </span>
        <span className="text-white/80 font-base text-lg text-center">
          2020 Adoption{" "}
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
              <div className="w-[280px] h-[350px] ">
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
                  className="object-contain rounded-xl overflow-hidden"
                />
              </div>
            </CarouselItem>
            <CarouselItem
              key={1}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-[280px] h-[350px]">
                <Image
                  src={`/images/families/webb/webb_2.jpg`}
                  alt={1 + "_webb_photo"}
                  width={280}
                  height={350}
                  className="object-contain rounded-xl overflow-hidden"
                />
              </div>
            </CarouselItem>
            <CarouselItem
              key={1}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-[280px] h-[350px]">
                <Image
                  src={`/images/families/webb/webb_3.jpg`}
                  alt={1 + "_webb_photo"}
                  width={280}
                  height={350}
                  className="object-contain rounded-xl overflow-hidden"
                />
              </div>
            </CarouselItem>
            <CarouselItem
              key={1}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-[280px] h-[350px]">
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
              <div className="w-[280px] h-[350px]">
                <Image
                  src={`/images/families/webb/webb_5.jpg`}
                  alt={1 + "_webb_photo"}
                  width={280}
                  height={350}
                  className="object-contain rounded-xl overflow-hidden"
                />
              </div>
            </CarouselItem>
            <CarouselItem
              key={1}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-[280px] h-[350px]">
                <Image
                  src={`/images/families/webb/webb_6.jpg`}
                  alt={1 + "_webb_photo"}
                  width={280}
                  height={350}
                  className="object-contain rounded-xl overflow-hidden"
                />
              </div>
            </CarouselItem>
            <CarouselItem
              key={1}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-[280px] h-[350px]">
                <Image
                  src={`/images/families/webb/webb_7.jpg`}
                  alt={1 + "_webb_photo"}
                  width={280}
                  height={350}
                  className="object-contain rounded-xl overflow-hidden"
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
          Kayden and Marquise Webb{" "}
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
                  src={`/images/families/sether/sether_1.jpeg`}
                  alt={1 + "_sether_photo"}
                  width={280}
                  height={350}
                  className="object-contain rounded-xl overflow-hidden"
                />
              </div>
            </CarouselItem>
            <CarouselItem
              key={1}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-[280px] h-[350px]">
                <Image
                  src={`/images/families/sether/sether_2.jpg`}
                  alt={1 + "_sether_photo"}
                  width={280}
                  height={350}
                  className="object-contain rounded-xl overflow-hidden"
                />
              </div>
            </CarouselItem>
            <CarouselItem
              key={1}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-[280px] h-[350px]">
                <Image
                  src={`/images/families/sether/sether_3.jpg`}
                  alt={1 + "_sether_photo"}
                  width={280}
                  height={350}
                  className="object-contain rounded-xl overflow-hidden"
                />
              </div>
            </CarouselItem>
            <CarouselItem
              key={1}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-[280px] h-[350px]">
                <Image
                  src={`/images/families/sether/sether_4.jpg`}
                  alt={1 + "_sether_photo"}
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
              <div className="w-[280px] h-[350px]">
                <Image
                  src={`/images/families/sether/sether_5.jpg`}
                  alt={1 + "_sether_photo"}
                  width={280}
                  height={350}
                  className="object-contain rounded-xl overflow-hidden"
                />
              </div>
            </CarouselItem>
            <CarouselItem
              key={1}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-[280px] h-[350px]">
                <Image
                  src={`/images/families/sether/sether_6.jpg`}
                  alt={1 + "_sether_photo"}
                  width={280}
                  height={350}
                  className="object-contain rounded-xl overflow-hidden"
                />
              </div>
            </CarouselItem>
            <CarouselItem
              key={1}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-[280px] h-[350px]">
                <Image
                  src={`/images/families/sether/sether_7.jpg`}
                  alt={1 + "_sether_photo"}
                  width={280}
                  height={350}
                  className="object-contain rounded-xl overflow-hidden"
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
          The Sether Family
        </span>
        <span className="text-white/80 font-base text-lg text-center">
          Ezra and Kai Sether{" "}
        </span>
        <span className="text-white/80 font-base text-lg text-center">
          2012, 2020 Adoptions{" "}
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
                  src={`/images/families/reed/reed_1.jpeg`}
                  alt={1 + "_reed_photo"}
                  width={280}
                  height={350}
                  className="object-contain rounded-xl overflow-hidden"
                />
              </div>
            </CarouselItem>
            <CarouselItem
              key={1}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-[280px] h-[350px]">
                <Image
                  src={`/images/families/reed/reed_2.jpeg`}
                  alt={1 + "_reed_photo"}
                  width={280}
                  height={350}
                  className="object-contain rounded-xl overflow-hidden"
                />
              </div>
            </CarouselItem>
            <CarouselItem
              key={1}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-[280px] h-[350px]">
                <Image
                  src={`/images/families/reed/reed_3.jpeg`}
                  alt={1 + "_reed_photo"}
                  width={280}
                  height={350}
                  className="object-contain rounded-xl overflow-hidden"
                />
              </div>
            </CarouselItem>
            <CarouselItem
              key={1}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-[280px] h-[350px]">
                <Image
                  src={`/images/families/reed/reed_4.jpeg`}
                  alt={1 + "_reed_photo"}
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
              <div className="w-[280px] h-[350px]">
                <Image
                  src={`/images/families/reed/reed_5.jpeg`}
                  alt={1 + "_reed_photo"}
                  width={280}
                  height={350}
                  className="object-contain rounded-xl overflow-hidden"
                />
              </div>
            </CarouselItem>
            <CarouselItem
              key={1}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-[280px] h-[350px]">
                <Image
                  src={`/images/families/reed/reed_6.jpeg`}
                  alt={1 + "_reed_photo"}
                  width={280}
                  height={350}
                  className="object-contain rounded-xl overflow-hidden"
                />
              </div>
            </CarouselItem>
            <CarouselItem
              key={1}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-[280px] h-[350px]">
                <Image
                  src={`/images/families/reed/reed_7.jpeg`}
                  alt={1 + "_reed_photo"}
                  width={280}
                  height={350}
                  className="object-contain rounded-xl overflow-hidden"
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
          The Reed Family
        </span>
        <span className="text-white/80 font-base text-lg text-center">
          Izzy Reed{" "}
        </span>
        <span className="text-white/80 font-base text-lg text-center">
          2019 Adoption{" "}
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
                  src={`/images/families/czachanski/Czechanski_1.jpeg`}
                  alt={1 + "_Czechanski_photo"}
                  width={280}
                  height={350}
                  className="object-contain rounded-xl overflow-hidden"
                />
              </div>
            </CarouselItem>
            <CarouselItem
              key={1}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-[280px] h-[350px]">
                <Image
                  src={`/images/families/czachanski/Czechanski_2.jpg`}
                  alt={1 + "_Czechanski_photo"}
                  width={280}
                  height={350}
                  className="object-contain rounded-xl overflow-hidden"
                />
              </div>
            </CarouselItem>
            <CarouselItem
              key={1}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-[280px] h-[350px]">
                <Image
                  src={`/images/families/czachanski/Czechanski_3.jpg`}
                  alt={1 + "_Czechanski_photo"}
                  width={280}
                  height={350}
                  className="object-contain rounded-xl overflow-hidden"
                />
              </div>
            </CarouselItem>
            <CarouselItem
              key={1}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-[280px] h-[350px]">
                <Image
                  src={`/images/families/czachanski/Czechanski_4.jpg`}
                  alt={1 + "_Czechanski_photo"}
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
              <div className="w-[280px] h-[350px]">
                <Image
                  src={`/images/families/czachanski/Czechanski_5.jpg`}
                  alt={1 + "_Czechanski_photo"}
                  width={280}
                  height={350}
                  className="object-contain rounded-xl overflow-hidden"
                />
              </div>
            </CarouselItem>
            <CarouselItem
              key={1}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-[280px] h-[350px]">
                <Image
                  src={`/images/families/czachanski/Czechanski_6.jpg`}
                  alt={1 + "_Czechanski_photo"}
                  width={280}
                  height={350}
                  className="object-contain rounded-xl overflow-hidden"
                />
              </div>
            </CarouselItem>
            <CarouselItem
              key={1}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-[280px] h-[350px]">
                <Image
                  src={`/images/families/czachanski/Czechanski_7.jpg`}
                  alt={1 + "_Czechanski_photo"}
                  width={280}
                  height={350}
                  className="object-contain rounded-xl overflow-hidden"
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
          The Czechanski Family
        </span>
        <span className="text-white/80 font-base text-lg text-center">
          Layla, Stevenson, Jack, Fanelson and Wilson Czechanski{" "}
        </span>
        <span className="text-white/80 font-base text-lg text-center">
          2019 Adoption{" "}
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
                  src={`/images/families/ripp/ripp_1.jpg`}
                  alt={1 + "_ripp_photo"}
                  width={280}
                  height={350}
                  className="object-contain rounded-xl overflow-hidden"
                />
              </div>
            </CarouselItem>
            <CarouselItem
              key={1}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-[280px] h-[350px]">
                <Image
                  src={`/images/families/ripp/ripp_2.jpg`}
                  alt={1 + "_ripp_photo"}
                  width={280}
                  height={350}
                  className="object-contain rounded-xl overflow-hidden"
                />
              </div>
            </CarouselItem>
            <CarouselItem
              key={1}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-[280px] h-[350px]">
                <Image
                  src={`/images/families/ripp/ripp_3.jpg`}
                  alt={1 + "_ripp_photo"}
                  width={280}
                  height={350}
                  className="object-contain rounded-xl overflow-hidden"
                />
              </div>
            </CarouselItem>
            <CarouselItem
              key={1}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-[280px] h-[350px]">
                <Image
                  src={`/images/families/ripp/ripp_4.jpg`}
                  alt={1 + "_ripp_photo"}
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
              <div className="w-[280px] h-[350px]">
                <Image
                  src={`/images/families/ripp/ripp_5.jpg`}
                  alt={1 + "_ripp_photo"}
                  width={280}
                  height={350}
                  className="object-contain rounded-xl overflow-hidden"
                />
              </div>
            </CarouselItem>
            <CarouselItem
              key={1}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-[280px] h-[350px]">
                <Image
                  src={`/images/families/ripp/ripp_6.JPG`}
                  alt={1 + "_ripp_photo"}
                  width={280}
                  height={350}
                  className="object-contain rounded-xl overflow-hidden"
                />
              </div>
            </CarouselItem>
            <CarouselItem
              key={1}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-[280px] h-[350px]">
                <Image
                  src={`/images/families/ripp/ripp_7.JPG`}
                  alt={1 + "_ripp_photo"}
                  width={280}
                  height={350}
                  className="object-contain rounded-xl overflow-hidden"
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
          The Ripp Family
        </span>
        <span className="text-white/80 font-base text-lg text-center">
          Waylon Ripp{" "}
        </span>
        <span className="text-white/80 font-base text-lg text-center">
          2013 Adoption{" "}
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
                  src={`/images/families/duckert/duckert_1.JPG`}
                  alt={1 + "_duckert_photo"}
                  width={280}
                  height={350}
                  className="object-contain rounded-xl overflow-hidden"
                />
              </div>
            </CarouselItem>
            <CarouselItem
              key={1}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-[280px] h-[350px]">
                <Image
                  src={`/images/families/duckert/duckert_2.jpg`}
                  alt={1 + "_duckert_photo"}
                  width={280}
                  height={350}
                  className="object-contain rounded-xl overflow-hidden"
                />
              </div>
            </CarouselItem>
            <CarouselItem
              key={1}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-[280px] h-[350px]">
                <Image
                  src={`/images/families/duckert/duckert_3.JPG`}
                  alt={1 + "_duckert_photo"}
                  width={280}
                  height={350}
                  className="object-contain rounded-xl overflow-hidden"
                />
              </div>
            </CarouselItem>
            <CarouselItem
              key={1}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-[280px] h-[350px]">
                <Image
                  src={`/images/families/duckert/duckert_4.JPG`}
                  alt={1 + "_duckert_photo"}
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
              <div className="w-[280px] h-[350px]">
                <Image
                  src={`/images/families/duckert/duckert_5.jpg`}
                  alt={1 + "_duckert_photo"}
                  width={280}
                  height={350}
                  className="object-contain rounded-xl overflow-hidden"
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
          The Duckert Family
        </span>
        <span className="text-white/80 font-base text-lg text-center">
          Genevieve Duckert{" "}
        </span>
        <span className="text-white/80 font-base text-lg text-center">
          2011 Adoption{" "}
        </span>
      </div>
      <div className="w-[80px] h-[1px] bg-white/30" />
      <div className="flex flex-col items-center justify-center gap-4 px-6">
        <Carousel className="w-full max-w-xs">
          <CarouselContent>
            {/* <CarouselItem
              key={1}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-[280px] h-[350px]v">
                <Image
                  src={`/images/families/garner/garner_1.jpg`}
                  alt={1 + "_garner_photo"}
                  width={280}
                  height={350}
                  className="object-contain rounded-xl overflow-hidden"
                />
              </div>
            </CarouselItem> */}
            <CarouselItem
              key={1}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-[280px] h-[350px]">
                <Image
                  src={`/images/families/garner/garner_2.jpg`}
                  alt={1 + "_garner_photo"}
                  width={280}
                  height={350}
                  className="object-contain rounded-xl overflow-hidden"
                />
              </div>
            </CarouselItem>
            <CarouselItem
              key={1}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-[280px] h-[350px]">
                <Image
                  src={`/images/families/garner/garner_3.jpg`}
                  alt={1 + "_garner_photo"}
                  width={280}
                  height={350}
                  className="object-contain rounded-xl overflow-hidden"
                />
              </div>
            </CarouselItem>
            <CarouselItem
              key={1}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-[280px] h-[350px]">
                <Image
                  src={`/images/families/garner/garner_4.jpg`}
                  alt={1 + "_garner_photo"}
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
              <div className="w-[280px] h-[350px]">
                <Image
                  src={`/images/families/garner/garner_5.jpg`}
                  alt={1 + "_garner_photo"}
                  width={280}
                  height={350}
                  className="object-contain rounded-xl overflow-hidden"
                />
              </div>
            </CarouselItem>
            <CarouselItem
              key={1}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-[280px] h-[350px]">
                <Image
                  src={`/images/families/garner/garner_6.jpg`}
                  alt={1 + "_garner_photo"}
                  width={280}
                  height={350}
                  className="object-contain rounded-xl overflow-hidden"
                />
              </div>
            </CarouselItem>
            <CarouselItem
              key={1}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-[280px] h-[350px]">
                <Image
                  src={`/images/families/garner/garner_7.jpg`}
                  alt={1 + "_garner_photo"}
                  width={280}
                  height={350}
                  className="object-contain rounded-xl overflow-hidden"
                />
              </div>
            </CarouselItem>
            <CarouselItem
              key={1}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-[280px] h-[350px]v">
                <Image
                  src={`/images/families/garner/garner_8.jpg`}
                  alt={1 + "_garner_photo"}
                  width={280}
                  height={350}
                  className="object-contain rounded-xl overflow-hidden"
                />
              </div>
            </CarouselItem>
            <CarouselItem
              key={1}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-[280px] h-[350px]">
                <Image
                  src={`/images/families/garner/garner_9.jpg`}
                  alt={1 + "_garner_photo"}
                  width={280}
                  height={350}
                  className="object-contain rounded-xl overflow-hidden"
                />
              </div>
            </CarouselItem>
            <CarouselItem
              key={1}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-[280px] h-[350px]">
                <Image
                  src={`/images/families/garner/garner_10.jpg`}
                  alt={1 + "_garner_photo"}
                  width={280}
                  height={350}
                  className="object-contain rounded-xl overflow-hidden"
                />
              </div>
            </CarouselItem>
            <CarouselItem
              key={1}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-[280px] h-[350px]">
                <Image
                  src={`/images/families/garner/garner_11.jpg`}
                  alt={1 + "_garner_photo"}
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
              <div className="w-[280px] h-[350px]">
                <Image
                  src={`/images/families/garner/garner_12.jpg`}
                  alt={1 + "_garner_photo"}
                  width={280}
                  height={350}
                  className="object-contain rounded-xl overflow-hidden"
                />
              </div>
            </CarouselItem>
            <CarouselItem
              key={1}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-[280px] h-[350px]">
                <Image
                  src={`/images/families/garner/garner_13.jpg`}
                  alt={1 + "_garner_photo"}
                  width={280}
                  height={350}
                  className="object-contain rounded-xl overflow-hidden"
                />
              </div>
            </CarouselItem>
            <CarouselItem
              key={1}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-[280px] h-[350px]">
                <Image
                  src={`/images/families/garner/garner_14.jpg`}
                  alt={1 + "_garner_photo"}
                  width={280}
                  height={350}
                  className="object-contain rounded-xl overflow-hidden"
                />
              </div>
            </CarouselItem>
            <CarouselItem
              key={1}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-[280px] h-[350px]v">
                <Image
                  src={`/images/families/garner/garner_15.jpg`}
                  alt={1 + "_garner_photo"}
                  width={280}
                  height={350}
                  className="object-contain rounded-xl overflow-hidden"
                />
              </div>
            </CarouselItem>
            <CarouselItem
              key={1}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-[280px] h-[350px]">
                <Image
                  src={`/images/families/garner/garner_16.jpg`}
                  alt={1 + "_garner_photo"}
                  width={280}
                  height={350}
                  className="object-contain rounded-xl overflow-hidden"
                />
              </div>
            </CarouselItem>
            <CarouselItem
              key={1}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-[280px] h-[350px]">
                <Image
                  src={`/images/families/garner/garner_17.jpg`}
                  alt={1 + "_garner_photo"}
                  width={280}
                  height={350}
                  className="object-contain rounded-xl overflow-hidden"
                />
              </div>
            </CarouselItem>
            <CarouselItem
              key={1}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-[280px] h-[350px]">
                <Image
                  src={`/images/families/garner/garner_18.jpg`}
                  alt={1 + "_garner_photo"}
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
              <div className="w-[280px] h-[350px]">
                <Image
                  src={`/images/families/garner/garner_19.jpg`}
                  alt={1 + "_garner_photo"}
                  width={280}
                  height={350}
                  className="object-contain rounded-xl overflow-hidden"
                />
              </div>
            </CarouselItem>
            <CarouselItem
              key={1}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-[280px] h-[350px]">
                <Image
                  src={`/images/families/garner/garner_20.jpg`}
                  alt={1 + "_garner_photo"}
                  width={280}
                  height={350}
                  className="object-contain rounded-xl overflow-hidden"
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
          The Garner Family
        </span>
        <span className="text-white/80 font-base text-lg text-center">
          Lely, Max, Ela and Solomon Garner{" "}
        </span>
        <span className="text-white/80 font-base text-lg text-center">
          2000, 2003, 2004 Adoption{" "}
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
                  src={`/images/families/opicka/opicka_1.jpeg`}
                  alt={1 + "_opicka_photo"}
                  width={280}
                  height={350}
                  className="object-contain rounded-xl overflow-hidden"
                />
              </div>
            </CarouselItem>
            <CarouselItem
              key={1}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-[280px] h-[350px]">
                <Image
                  src={`/images/families/opicka/opicka_2.jpeg`}
                  alt={1 + "_opicka_photo"}
                  width={280}
                  height={350}
                  className="object-contain rounded-xl overflow-hidden"
                />
              </div>
            </CarouselItem>
            <CarouselItem
              key={1}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-[280px] h-[350px]">
                <Image
                  src={`/images/families/opicka/opicka_3.jpeg`}
                  alt={1 + "_opicka_photo"}
                  width={280}
                  height={350}
                  className="object-contain rounded-xl overflow-hidden"
                />
              </div>
            </CarouselItem>
            <CarouselItem
              key={1}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-[280px] h-[350px]">
                <Image
                  src={`/images/families/opicka/opicka_4.jpeg`}
                  alt={1 + "_opicka_photo"}
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
              <div className="w-[280px] h-[350px]">
                <Image
                  src={`/images/families/opicka/opicka_5.jpeg`}
                  alt={1 + "_opicka_photo"}
                  width={280}
                  height={350}
                  className="object-contain rounded-xl overflow-hidden"
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
          The Opicka Family
        </span>
        <span className="text-white/80 font-base text-lg text-center">
          Vita Opicka{" "}
        </span>
        <span className="text-white/80 font-base text-lg text-center">
          2012 Adoption{" "}
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
                  src={`/images/families/clegg/clegg_1.JPG`}
                  alt={1 + "_clegg_photo"}
                  width={280}
                  height={350}
                  className="object-contain rounded-xl overflow-hidden"
                />
              </div>
            </CarouselItem>
            <CarouselItem
              key={1}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-[280px] h-[350px]">
                <Image
                  src={`/images/families/clegg/clegg_2.JPG`}
                  alt={1 + "_clegg_photo"}
                  width={280}
                  height={350}
                  className="object-contain rounded-xl overflow-hidden"
                />
              </div>
            </CarouselItem>
            <CarouselItem
              key={1}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-[280px] h-[350px]">
                <Image
                  src={`/images/families/clegg/clegg_3.jpg`}
                  alt={1 + "_clegg_photo"}
                  width={280}
                  height={350}
                  className="object-contain rounded-xl overflow-hidden"
                />
              </div>
            </CarouselItem>
            <CarouselItem
              key={1}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-[280px] h-[350px]">
                <Image
                  src={`/images/families/clegg/clegg_4.jpg`}
                  alt={1 + "_clegg_photo"}
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
              <div className="w-[280px] h-[350px]">
                <Image
                  src={`/images/families/clegg/clegg_5.jpg`}
                  alt={1 + "_clegg_photo"}
                  width={280}
                  height={350}
                  className="object-contain rounded-xl overflow-hidden"
                />
              </div>
            </CarouselItem>
            <CarouselItem
              key={1}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-[280px] h-[350px]">
                <Image
                  src={`/images/families/clegg/clegg_6.png`}
                  alt={1 + "_clegg_photo"}
                  width={280}
                  height={350}
                  className="object-contain rounded-xl overflow-hidden"
                />
              </div>
            </CarouselItem>
            <CarouselItem
              key={1}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-[280px] h-[350px]">
                <Image
                  src={`/images/families/clegg/clegg_7.png`}
                  alt={1 + "_clegg_photo"}
                  width={280}
                  height={350}
                  className="object-contain rounded-xl overflow-hidden"
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
          The Clegg Family
        </span>
        <span className="text-white/80 font-base text-lg text-center">
          Paris Clegg{" "}
        </span>
        <span className="text-white/80 font-base text-lg text-center">
          2001 Adoption{" "}
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
