import { ArrowLeft } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
// To-do: Get Wes and Kim Garner Photo
const AwardRecipienctPage = () => {
    return (
        <div className="w-full flex flex-col items-center justify-start min-h-screen py-8 gap-12 bg-[#779a46] ">
            <div className="flex items-center justify-center gap-2 flex-col px-4 pt-10">
                <span className="text-white font-bold text-3xl text-center">Co-Chairs</span>
                <span className="text-white/80 font-base text-lg text-center">Learn about tonight&apos;s event Co-Chairs</span>
            </div>
            <div className='grid grid-cols-1 px-4 gap-6'>
                <Link href="/speakers/garner" className='w-[280px] h-[350px] flex items-center relative justify-center shadow-xl rounded-lg overflow-hidden'>
                    <div className='w-[280px] h-full z-30 bg-black/20 hover:bg-black/60 flex flex-col items-center justify-end absolute top-0 left-0 py-6'>
                        <span className='text-white font-bold text-2xl select-none'>Wes and Kim Garner</span>
                        <span className='text-white font-light text-base select-none'>Learn More...</span>
                    </div>
                    <Image src="/images/speakers/garner/garner-2.JPG" alt="Wes and Kim Garner Cover" fill className='object-cover' />
                </Link>
            </div>
            <div className='w-[80px] h-[1px] bg-white/30' />
            <div className="flex items-center justify-center gap-2 flex-col px-4">
                <span className="text-white font-bold text-3xl text-center">Tonight&apos;s</span>
                <span className="text-white font-bold text-3xl text-center">Event Speakers</span>
                <span className="text-white/80 font-base text-lg text-center">Learn more about the speakers we have tonight by going to their biography pages below.</span>
            </div>
            <div className='grid grid-cols-1 px-4 gap-6'>
                <Link href="/speakers/greg-louganis" className='w-[280px] h-[350px] flex items-center relative justify-center shadow-xl rounded-lg overflow-hidden'>
                    <div className='w-[280px] h-full z-30 bg-black/20 hover:bg-black/60 flex flex-col items-center justify-end absolute top-0 left-0 py-6'>
                        <span className='text-white font-bold text-2xl select-none'>Greg Louganis</span>
                        <span className='text-white font-light text-base select-none'>Learn More...</span>
                    </div>
                    <Image src="/images/speakers/greg/greg.jpg" alt="Greg Louganis Cover" fill className='object-cover' />
                </Link>
                <Link href="/speakers/emcee" className='w-[280px] h-[350px] flex items-center relative justify-center shadow-xl rounded-lg overflow-hidden'>
                    <div className='w-[280px] h-full z-30 bg-black/20 hover:bg-black/60 flex flex-col items-center justify-end absolute top-0 left-0 py-6'>
                        <span className='text-white font-bold text-2xl select-none'>Our Emcee</span>
                        <span className='text-white font-light text-base select-none'>Learn More...</span>
                    </div>
                    <Image src="/images/speakers/emcee/randy.jpg" alt="Emcee Cover" fill className='object-cover' />
                </Link>

            </div>
            <div className='w-[80px] h-[1px] bg-white/30' />
            <div className="flex items-center justify-center gap-2 flex-col px-4">
                <span className="text-white font-bold text-3xl text-center">Notable Mentions</span>
                <span className="text-white/80 font-base text-lg text-center">Check out the list of non-speakers who we would like to recognize tonight.</span>
            </div>
            <div className='grid grid-cols-1 px-4 gap-6'>
                <Link href="/speakers/nelson" className='w-[280px] h-[350px] flex items-center relative justify-center shadow-xl rounded-lg overflow-hidden'>
                    <div className='w-[280px] h-full z-30 bg-black/20 hover:bg-black/60 flex flex-col items-center justify-end absolute top-0 left-0 py-6'>
                        <span className='text-white font-bold text-2xl select-none'>The Nelson Family</span>
                        <span className='text-white font-light text-base select-none'>Learn More...</span>
                    </div>
                    <Image src="/images/speakers/nelson-family/cover.png" alt="Nelson Family Cover" fill className='object-cover' />
                </Link>
            </div>
            <div className='w-[80px] h-[1px] bg-white/30' />
            <Link href="/" className='flex items-center justify-center gap-4 p-4'>
                <ArrowLeft className='text-white' strokeWidth={1} />
                <span className='text-white font-base text-lg'>Return Home</span>
            </Link>
        </div>
    )
}

export default AwardRecipienctPage