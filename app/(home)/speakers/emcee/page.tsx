import { ArrowLeft } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
const IndividualSpeakerPage = () => {
    return (
        <div className="w-full flex flex-col items-center justify-start min-h-screen py-8 gap-8 bg-[#779a46]">
            <div className='h-[40px] w-full' />
            <div className='w-[280px] h-[350px] flex items-center relative justify-center shadow-xl rounded-lg overflow-hidden'>
                <Image src="/images/speakers/emcee/randy.jpg" alt="Emcee Cover" fill className='object-cover' />
            </div>
            <div className="flex items-center justify-center gap-4 flex-col px-4 pt-10">
                <span className="text-white font-bold text-3xl text-center">Randy {`"Shotgun"`} Shannon</span>
                <span className="text-white/70 font-base italic text-xl text-center">2025 Emcee</span>
                <div className='bg-white/30 h-[1px] w-[80px]' />
                <span className="text-white/80 font-base text-lg text-center">Randy “Shotgun” Shannon is the lively host of Y100 Green Bay&apos;s popular morning show, Shotgun & Charli.</span>
                <span className="text-white/80 font-base text-lg text-center">A proud Wisconsin native, Randy brings over 40 years of radio experience to the airwaves. Known for his booming voice and big heart, he&apos;s been deeply involved with many charitable organizations throughout his career.</span>
                <span className="text-white/80 font-base text-lg text-center">We first connected through his {`"Bake Someone's Day"`} campaign. Our Green Bay office was chosen to receive homemade baked goods made by Randy himself!</span>
                <span className="text-white/80 font-base text-lg text-center">As we enjoyed his delicious bars, we had the chance to share the mission of ACI—and he&apos;s been a supporter ever since! We thank him for volunteering his time for our cause.</span>
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