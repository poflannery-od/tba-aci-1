import { ArrowLeft } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
// To-do: Get Wes and Kim Garner Photo
const IndividualSpeakerPage = () => {
    return (
        <div className="w-full flex flex-col items-center justify-start min-h-screen py-8 gap-8 bg-[#779a46]">
            <div className='h-[40px] w-full' />
            <div className='w-[280px] h-[350px] flex items-center relative justify-center shadow-xl rounded-lg overflow-hidden'>
                <Image src="/images/speakers/garner/garner-2.JPG" alt="Wes and Kim Garner Cover" fill className='object-cover' />
            </div>
            <div className="flex items-center justify-center gap-4 flex-col px-4 pt-10">
                <span className="text-white font-bold text-3xl text-center">Wes and Kim Garner</span>
                <span className="text-white/70 font-base italic text-xl text-center">2025 Notable Mention</span>
                <div className='bg-white/30 h-[1px] w-[80px]' />
                <span className="text-white/80 font-base text-lg text-center">Wes and Kim began their adoption journey in 1999 with Adoption Choice, Inc.  Desiring to adopt internationally, they started their journey in Vietnam.</span>
                <span className="text-white/80 font-base text-lg text-center">In December 2000, they were united with their beautiful 6-month-old baby daughter, Lely.  The following year, Kim became pregnant, and they were blessed with Max.</span>
                <span className="text-white/80 font-base text-lg text-center">After a failed adoption in 2022 from South Africa, they were given the incredible opportunity to adopt a baby girl, Ela, from India.</span>
                <span className="text-white/80 font-base text-lg text-center">In 2004, they completed their family by adopting Solomon from Ethiopia.  When their children were younger, they each had the opportunity to travel to their birth countries and meet their birth families, which are memories that will forever be treasured.</span>
                <span className="text-white/80 font-base text-lg text-center">Wes and Kim&apos;s passion for adoption led them to become professionally involved with Adoption Choice, Inc. in 2006.</span>
                <span className="text-white/80 font-base text-lg text-center">Over the years, they have dedicated themselves to various roles within the organization, driven by their unwavering love and commitment to helping other families experience the same joy they have known.</span>
            </div>
            <div className='bg-white/30 h-[1px] w-[80px]' />
            <Link href="/speakers" className='flex items-center justify-center gap-4 p-4'>
                <ArrowLeft className='text-white' strokeWidth={1} />
                <span className='text-white font-base text-lg'>Return to All Speakers</span>
            </Link>
        </div>
    )
}

export default IndividualSpeakerPage