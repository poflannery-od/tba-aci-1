import { ArrowLeft } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const IndividualSpeakerPage = () => {
    return (
        <div className="w-full flex flex-col items-center justify-start min-h-screen py-8 gap-8 bg-[#779a46]">
            <div className='h-[40px] w-full' />
            <div className='w-[280px] h-[350px] flex items-center relative justify-center shadow-xl rounded-lg overflow-hidden'>
                <Image src="/images/speakers/hartwig-family/cover.jpeg" alt="Hartwig Family Cover" fill className='object-cover' />
            </div>
            <div className="flex items-center justify-center gap-4 flex-col px-4 pt-10">
                <span className="text-white font-bold text-3xl text-center">The Hartwig Family</span>
                <span className="text-white/70 font-base italic text-xl text-center">Lucas and Alexandra Hartwig</span>
                <div className='bg-white/30 h-[1px] w-[80px]' />
                <span className="text-white/80 font-base text-lg text-center">Lucas and Alexandra Hartwig are dedicated parents who have been profoundly impacted by their experiences in adopting their two sons, Ezra (3) and Abel (1). Their journey has not only shaped their lives, but has also ignited a passion for open adoption, ensuring that their sons maintain a strong connection with their birth mothers and extended birth family.</span>
                <span className="text-white/80 font-base text-lg text-center">The Hartwigs are committed to preserving the cultural and racial backgrounds of their sons, recognizing the importance of embracing and celebrating diversity. Their experiences have inspired them to advocate for open adoption and to share their story in the hopes of encouraging others to consider this path to parenthood.</span>
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