import { ArrowLeft } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const IndividualSpeakerPage = () => {
    return (
        <div className="w-full flex flex-col items-center justify-start min-h-screen py-8 gap-8 bg-[#779a46]">
            <div className='h-[40px] w-full' />
            <div className='w-[280px] h-[350px] flex items-center relative justify-center shadow-xl rounded-lg overflow-hidden'>
                <Image src="/images/speakers/miss-wisconsin/full-shot.jpg" alt="Miss Wisconsin Cover" fill className='object-cover' />
            </div>
            <div className="flex items-center justify-center gap-4 flex-col px-4 pt-10">
                <span className="text-white font-bold text-3xl text-center">Mandi Genord</span>
                <span className="text-white/70 font-base italic text-xl text-center">Miss Wisconsin 2024</span>
                <div className='bg-white/30 h-[1px] w-[80px]' />
                <span className="text-white/80 font-base text-lg text-center">Mandi Genord, from Beaver Dam, Wisconsin, is excited to begin serving as Miss Wisconsin 2024 and traveling the state to promote her service initiative: Connecting Lives: Adoption Resources & Advocacy.</span>
                <span className="text-white/80 font-base text-lg text-center">Mandi hopes to spread awareness across the state regarding adoption and the resources available to help families who are looking to adopt.  This initiative is close to Mandi&apos;s heart as she became an Aunt via adoption.</span>
                <span className="text-white/80 font-base text-lg text-center">As a 4th generation, classically trained dancer, Mandi has always felt at home on the stage.  While at Miss Wisconsin 2024, Mandi earned a preliminary talent award for her contemporary jazz routine to “You Don&apos;t Own Me.”  When not performing, Mandi enjoys being a volunteer dance instructor with Arts n&apos; Autism.</span>
                <span className="text-white/80 font-base text-lg text-center">Mandi is a proud 2024 graduate of the University of Alabama, earning a triple major in Dance, Political Science, and Communications Studies.  She aspires to attend Law School to become a Family Attorney.</span>
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