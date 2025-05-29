import { ArrowLeft } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
const IndividualSpeakerPage = () => {
    return (
        <div className="w-full flex flex-col items-center justify-start min-h-screen py-8 gap-8 bg-[#779a46]">
            <div className='h-[40px] w-full' />
            <div className='w-[280px] h-[350px] flex items-center relative justify-center shadow-xl rounded-lg overflow-hidden'>
                <Image src="/images/speakers/nelson-family/cover.png" alt="Nelson Family Cover" fill className='object-cover' />
            </div>
            <div className="flex items-center justify-center gap-4 flex-col px-4 pt-10">
                <span className="text-white font-bold text-3xl text-center">Nelson Family</span>
                <span className="text-white/70 font-base italic text-xl text-center">2025 Notable Mention</span>
                <div className='bg-white/30 h-[1px] w-[80px]' />
                <span className="text-white/80 font-base text-lg text-center">Since the inception of the Touched by Adoption celebration in 2019, we have been humbled to have the encouragement and support of Green Bay Packer Alum Jordy Nelson and Emily Nelson.</span>
                <span className="text-white/80 font-base text-lg text-center">Without hesitation, they have supported our vision and goals to uplift adoptive families, birthparents and the broader community.</span>
                <span className="text-white/80 font-base text-lg text-center">Adoption Choice, Inc. had the honor to walk with them as they grew their family through adoption, and they have generously chosen to walk with us on our development path in the present and future. We welcome their support for this Growing Through Adoption event.</span>
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