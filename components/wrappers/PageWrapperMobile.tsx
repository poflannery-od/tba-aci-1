"use client";

import useMediaQuery from "@/src/hooks/use-media-query";
import React, { useEffect, useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

import { Menu, Award, Newspaper, Facebook, Twitter } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";

interface WrapperMobile {
  className?: string;
  children?: React.ReactNode;
}

const PageWrapperMobile = ({ className, children }: WrapperMobile) => {
  const [sheetOpen, setSheetOpen] = useState<boolean>(false);
  const [sheetOpenTwo, setSheetOpenTwo] = useState<boolean>(false);

  const [currentEvent, setCurrentEvent] = useState<{
    time: string;
    title: string;
  }>();
  const [nextEvent, setNextEvent] = useState<{ time: string; title: string }>();
  const [beforeEvent, setBeforeEvent] = useState<boolean>(true);
  const [afterEvent, setAfterEvent] = useState<boolean>(true);

  const [eventStart, setEventStart] = useState<{ date: string; time: string }>({
    date: "October 17, 2024",
    time: "05:30 PM",
  });

  const getCurrentTime = () => {
    var currentTimeDate = new Date().getTime();
    var eventOne = new Date(Date.UTC(2024, 9, 17, 22, 30, 0, 0)).getTime();
    var eventTwo = new Date(Date.UTC(2024, 9, 17, 23, 15, 0, 0)).getTime();
    var eventThree = new Date(Date.UTC(2024, 9, 18, 0, 0, 0, 0)).getTime();
    var eventFour = new Date(Date.UTC(2024, 9, 18, 0, 40, 0, 0)).getTime();
    var eventFive = new Date(Date.UTC(2024, 9, 18, 1, 0, 0, 0)).getTime();
    var eventSix = new Date(Date.UTC(2024, 9, 18, 1, 15, 0, 0)).getTime();
    var eventOver = new Date(Date.UTC(2024, 9, 18, 2, 0, 0, 0)).getTime();

    // var eventOne = new Date(Date.UTC(2024, 9, 16, 22, 30, 0, 0)).getTime();
    // var eventTwo = new Date(Date.UTC(2024, 9, 16, 23, 15, 0, 0)).getTime();
    // var eventThree = new Date(Date.UTC(2024, 9, 17, 0, 0, 0, 0)).getTime();
    // var eventFour = new Date(Date.UTC(2024, 9, 17, 0, 40, 0, 0)).getTime();
    // var eventFive = new Date(Date.UTC(2024, 9, 17, 1, 0, 0, 0)).getTime();
    // var eventSix = new Date(Date.UTC(2024, 9, 17, 1, 15, 0, 0)).getTime();
    // var eventOver = new Date(Date.UTC(2024, 9, 17, 2, 0, 0, 0)).getTime();

    console.log(new Date());

    if (currentTimeDate < eventOne) {
      setAfterEvent(false);
      setBeforeEvent(true);
      return;
    }
    if (currentTimeDate >= eventOne && currentTimeDate < eventTwo) {
      setAfterEvent(false);
      setBeforeEvent(false);
      setCurrentEvent({
        time: "05:30 PM",
        title: "Doors Open, Silent Auction & Wine Pull Available",
      });
      setNextEvent({ time: "06:15 PM", title: "Buffet Opens" });
      return;
    }
    if (currentTimeDate >= eventTwo && currentTimeDate < eventThree) {
      setAfterEvent(false);
      setBeforeEvent(false);
      setCurrentEvent({ time: "06:15 PM", title: "Buffet Opens" });
      setNextEvent({ time: "07:00 PM", title: "Stage Program Begins" });
      return;
    }
    if (currentTimeDate >= eventThree && currentTimeDate < eventFour) {
      setAfterEvent(false);
      setBeforeEvent(false);
      setCurrentEvent({ time: "07:00 PM", title: "Stage Program Begins" });
      setNextEvent({
        time: "07:40 PM",
        title: "Silent Auction Closes; Live Auction Begins",
      });
      return;
    }
    if (currentTimeDate >= eventFour && currentTimeDate < eventFive) {
      setAfterEvent(false);
      setBeforeEvent(false);
      setCurrentEvent({
        time: "07:40 PM",
        title: "Silent Auction Closes; Live Auction Begins",
      });
      setNextEvent({ time: "08:00 PM", title: "Paddle Raise" });
      return;
    }
    if (currentTimeDate >= eventFive && currentTimeDate < eventSix) {
      setAfterEvent(false);
      setBeforeEvent(false);
      setCurrentEvent({ time: "08:00 PM", title: "Paddle Raise" });
      setNextEvent({
        time: "08:15 PM",
        title: "Auction Check-Out & Good-Byes",
      });
      return;
    }
    if (currentTimeDate >= eventSix && currentTimeDate < eventOver) {
      setBeforeEvent(false);
      setAfterEvent(false);
      setCurrentEvent({
        time: "08:15 PM",
        title: "Auction Check-Out & Good-Byes",
      });
      setNextEvent({ time: "09:00 PM", title: "Event Over" });
      return;
    }
    if (currentTimeDate >= eventOver) {
      setBeforeEvent(false);
      setAfterEvent(true);
      return;
    }
  };

  useEffect(() => {
    getCurrentTime();
  }, []);

  useEffect(() => {
    getCurrentTime();
  }, [sheetOpenTwo]);

  return (
    <div className="w-full flex flex-col items-start justify-start min-h-screen">
      <div
        id="header"
        className="w-full flex items-center justify-between h-[80px] fixed z-50 py-[10px] px-[10px]"
      >
        <Sheet onOpenChange={setSheetOpen} open={sheetOpen}>
          <SheetTrigger className="w-[60px] h-full flex items-center justify-center bg-white rounded-full shadow-xl shadow-black/30">
            <Menu className="text-[#672543] w-10 h-10" strokeWidth={1} />
          </SheetTrigger>
          <SheetContent
            side="top"
            className="w-full min-h-screen bg-white flex flex-col items-center justify-start gap-4"
          >
            <div className="w-[200px] h-[80px] relative mx-auto">
              <Image alt="ACI Logo" src="/images/logo/aci.svg" fill />
            </div>
            <div className="w-[80px] h-[1px] bg-black/30 mx-auto" />
            <Link
              onClick={() => {
                setSheetOpen(false);
              }}
              href="/"
              className="text-[#3e4c5f] font-light text-2xl"
            >
              Home
            </Link>
            <Link
              onClick={() => {
                setSheetOpen(false);
              }}
              href="/program"
              className="text-[#3e4c5f] font-light text-2xl"
            >
              Event Program
            </Link>
            <Link
              onClick={() => {
                setSheetOpen(false);
              }}
              href="/speakers"
              className="text-[#3e4c5f] font-light text-2xl"
            >
              Tonight&apos;s Speakers
            </Link>
            <Link
              onClick={() => {
                setSheetOpen(false);
              }}
              href="/sponsors"
              className="text-[#3e4c5f] font-light text-2xl"
            >
              Sponsors
            </Link>
            <Link
              onClick={() => {
                setSheetOpen(false);
              }}
              href="/growing-families"
              className="text-[#3e4c5f] font-light text-2xl"
            >
              GROWING Families
            </Link>
            <Link
              onClick={() => {
                setSheetOpen(false);
              }}
              href="/board-members"
              className="text-[#3e4c5f] font-light text-2xl"
            >
              ACI Board Members
            </Link>
            <Button
              variant="outline"
              className="bg-[#779a46] border-transparent w-[200px] py-6 px-4 rounded-lg shadow-xl text-white font-semibold text-xl"
              asChild
            >
              <Link
                href="https://cbo.io/bidapp/index.php?slug=gta"
                target="_blank"
              >
                View Auction
              </Link>
            </Button>
            <Button
              variant="outline"
              className="bg-[#779a46] border-transparent w-[200px] py-6 px-4 rounded-lg shadow-xl text-white font-semibold text-xl"
              asChild
            >
              <Link href="https://cbo.io/d/donate.php?slug=gta" target="_blank">
                Donate Here
              </Link>
            </Button>
          </SheetContent>
        </Sheet>
        <div className="flex items-center justify-center h-full">
          {/* <Sheet onOpenChange={setSheetOpenTwo} open={sheetOpenTwo}>
            <SheetTrigger className="w-[60px] h-full flex items-center justify-center bg-[#672543] rounded-full shadow-xl shadow-black/30">
              <Newspaper className="text-white w-10 h-10" strokeWidth={1} />
            </SheetTrigger>
            <SheetContent
              side="top"
              className="w-full max-h-[90%] bg-[#672543] border-[#672543] flex gap-4 flex-col items-center justify-start"
            >
              <span className="text-white font-bold text-2xl">
                Tonight&apos;s Program:
              </span>
              {beforeEvent ? (
                <div className="relative w-[280px] ">
                  <div className="mx-auto w-[90%] py-6 px-2.5 bg-white rounded-lg shadow-lg flex flex-col items-center justify-center">
                    <span className="text-[#672543] font-light text-base">
                      Event Starts on:
                    </span>
                    <span className="text-black font-base text-lg text-center">
                      {eventStart.date}
                    </span>
                    <span className="text-black font-base text-lg text-center">
                      {eventStart.time}
                    </span>
                  </div>
                </div>
              ) : afterEvent ? (
                <div className="relative w-[280px] ">
                  <div className="mx-auto w-[90%] py-6 px-2.5 bg-white rounded-lg shadow-lg flex flex-col items-center justify-center">
                    <span className="text-[#672543] font-light text-base">
                      Event has Ended:
                    </span>
                    <span className="text-black font-base text-lg text-center">
                      Thank you for Coming!
                    </span>
                  </div>
                </div>
              ) : (
                <div className="relative w-[280px] ">
                  <div className="mx-auto w-[90%] py-6 px-2.5 bg-white rounded-lg shadow-lg flex flex-col items-center justify-center gap-4">
                    <div className="flex flex-col items-center justify-center">
                      <span className="text-[#672543] font-light text-lg">
                        Current Event:
                      </span>
                      <span className="text-black font-base text-lg text-center">
                        {currentEvent?.title}
                      </span>
                      <span className="text-black font-base text-lg text-center">
                        {currentEvent?.time}
                      </span>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <span className="text-[#672543] font-light text-lg">
                        Next Event:
                      </span>
                      <span className="text-black font-base text-lg text-center">
                        {nextEvent?.title}
                      </span>
                      <span className="text-black font-base text-lg text-center">
                        {nextEvent?.time}
                      </span>
                    </div>
                  </div>
                </div>
              )}
              <div className="bg-white/30 h-[1px] w-[75%]" />
              <Link
                onClick={() => {
                  setSheetOpenTwo(false);
                }}
                href="/program"
                className="text-white font-light text-xl"
              >
                Click Here for Full Program
              </Link>
            </SheetContent>
          </Sheet> */}
          {/* <div className='w-[150px] h-full flex items-center justify-center bg-[#672543]'>
                        <span className='text-white font-extrabold text-lg tracking-wider '>Click to Bid</span>
                    </div> */}
        </div>
      </div>
      {children}
      <div
        id="footer"
        className="w-full flex flex-col items-center justify-start gap-6 py-10 px-6 bg-[#672543]"
      >
        <span className="text-white font-extrabold text-2xl text-center">
          Ready to View the Auction?
        </span>
        <div className="flex flex-col items-center justify-start gap-4">
          <Button
            className="bg-[#779a46] hover:bg-[#779a46] text-white"
            asChild
          >
            <Link
              href="https://cbo.io/bidapp/index.php?slug=gta"
              target="_blank"
            >
              Visit the Auction Site
            </Link>
          </Button>
        </div>
        <span className="text-white font-extrabold text-2xl text-center">
          Make a Donation!
        </span>
        <div className="flex flex-col items-center justify-start gap-4">
          <Button
            className="bg-[#779a46] hover:bg-[#779a46] text-white"
            asChild
          >
            <Link href="https://cbo.io/d/donate.php?slug=gta" target="_blank">
              Donate Here!
            </Link>
          </Button>
        </div>
        <div className="w-[150px] h-[45px] relative mx-auto">
          <Image alt="ACI Logo" src="/images/logo/aci-horizontal.png" fill />
        </div>
        <div className="w-[80px] h-[1px] bg-white/30 mx-auto" />
        <div className="w-full flex items-center justify-center text-center gap-0 flex-col">
          <span className="text-white/60 font-light text-base">
            All rights reserved
          </span>
          <span className="text-white/60 font-light text-base">©</span>
          <Link
            href="https://www.oflanneryphotography.com"
            target="_blank"
            className="text-white/60 font-light text-base"
          >
            OFlannery Studios, LLC
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PageWrapperMobile;
