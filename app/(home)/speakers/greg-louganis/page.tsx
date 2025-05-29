import { ArrowLeft } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
// To -do: Get Greg Louganis Photo
const IndividualSpeakerPage = () => {
    return (
        <div className="w-full flex flex-col items-center justify-start min-h-screen py-8 gap-8 bg-[#779a46]">
            <div className='h-[40px] w-full' />
            <div className='w-[280px] h-[350px] flex items-center relative justify-center shadow-xl rounded-lg overflow-hidden'>
                <Image src="/images/speakers/greg/greg.jpg" alt="Greg Louganis Cover" fill className='object-cover' />
            </div>
            <div className="flex items-center justify-center gap-4 flex-col px-4 pt-10">
                <span className="text-white font-bold text-3xl text-center">Greg Louganis</span>
                <span className="text-white/70 font-base italic text-xl text-center">Growing through Adoption, 2025</span>
                <div className='bg-white/30 h-[1px] w-[80px]' />
                <span className="text-white/80 font-base text-lg text-center">Considered the greatest diver in history, Greg is the 1st male
                    to win gold medals on both 3m springboard & 10m platform
                    in consecutive Olympic Games. Across the globe, billions
                    who watched him compete were enthralled by the poetry
                    that was Greg Louganis: the beauty & power of his diving
                    captured the world and is still unmatched.</span>
                <span className="text-white/80 font-base text-lg text-center">Greg was adopted at a very young age by the Louganis
                    family, and learned all about being a Greek American
                    through his upbringing.</span>
                <span className="text-white/80 font-base text-lg text-center">As a young adult he was able to learn
                    about and connect with his birth family. Since this time he
                    continues to learn more about his AANHPI heritage. In June of
                    2022, Greg was made a Samoan High Chief by the Royal
                    Family of Samoa.</span>
                <span className="text-white/80 font-base text-lg text-center">In 1995 he wrote
                    his memoir, Breaking The Surface, which quickly became a
                    NY Times Bestseller.</span>
                <span className="text-white/80 font-base text-lg text-center">As an elder in the LGBTQ community
                    Greg is often looked to for his knowledge that comes from
                    his lived experience during this time. He staunchly advocates
                    for all members of the LGBTQ+ community and is adored for
                    his honest talk about sensitive and important topics.
                </span>
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