import { ArrowLeft } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const IndividualSpeakerPage = () => {
    return (
        <div className="w-full flex flex-col items-center justify-start min-h-screen py-8 gap-8 bg-[#779a46]">
            <div className='h-[40px] w-full' />
            <div className='w-[280px] h-[350px] flex items-center relative justify-center shadow-xl rounded-lg overflow-hidden'>
                <Image src="/images/speakers/alec/image.jpg" alt="Alec Ingold Cover" fill className='object-cover' />
            </div>
            <div className="flex items-center justify-center gap-4 flex-col px-4 pt-10">
                <span className="text-white font-bold text-3xl text-center">Alec Ingold</span>
                <span className="text-white/70 font-base italic text-xl text-center">2024 Notable Mention</span>
                <div className='bg-white/30 h-[1px] w-[80px]' />
                <span className="text-white/80 font-base text-lg text-center">Alec Ingold plays professional football for the Miami Dolphins. Alec grew up in Green Bay, Wisconsin, where he was adopted into a close-knit and supportive family. He played college football for the Wisconsin Badgers.</span>
                <span className="text-white/80 font-base text-lg text-center">In 2019, he signed with the Oakland Raiders as an undrafted free agent, and in 2021 signed with the Miami Dolphins. He is a gifted motivational speaker and while his accomplishments are remarkable on their own, it&apos;s Alec&apos;s story of overcoming adversity that has inspired thousands.</span>
                <span className="text-white/80 font-base text-lg text-center">Through his Ingold Family Foundation, Alec works to empower underserved youth through accessible and impactful learning experiences.</span>
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