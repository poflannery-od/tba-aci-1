import { ArrowLeft } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const IndividualSpeakerPage = () => {
    return (
        <div className="w-full flex flex-col items-center justify-start min-h-screen py-8 gap-8 bg-[#779a46]">
            <div className='h-[40px] w-full' />
            <div className='w-[280px] h-[350px] flex items-center relative justify-center shadow-xl rounded-lg overflow-hidden'>
                <Image src="/images/speakers/emcee/headshot.jpeg" alt="Emcee Cover" fill className='object-cover' />
            </div>
            <div className="flex items-center justify-center gap-4 flex-col px-4 pt-10">
                <span className="text-white font-bold text-3xl text-center">Mary Stoker Smith</span>
                <span className="text-white/70 font-base italic text-xl text-center">2024 Emcee</span>
                <div className='bg-white/30 h-[1px] w-[80px]' />
                <span className="text-white/80 font-base text-lg text-center">Mary is a proud member of the Fox 6 news team where she anchors the 5 and 10 PM news on Sunday through Thursday every week. She reently celebrated her14th year at the station and for the third year now, she is our emcee of tonight&apos;s Touched By Adoption Gala.</span>
                <span className="text-white/80 font-base text-lg text-center">From the people she sees every year to the new faces in the crowd, this event means a lot to her because together we&apos;re promoting the benefits of adoption and the need for children to find loving homes. In fact,  this La Crosse native knows all about that, she was adopted when she was 6 months old.</span>
                <span className="text-white/80 font-base text-lg text-center">When Mary isn&apos;t on air or emceeing an event, you can find her running on the lakefront, grabbing a cup of coffee at a local roastery with her husband Eric or maybe even out and about shopping! She loves the Badgers, the Bucks and the Packers and oh, by the way, Mary was Miss Wisconsin USA 1996 and never misses a good pageant!</span>
                <span className="text-white/80 font-base text-lg text-center">She is honored to be with us for another year and this year, she&apos;s brought a very special guest, her Mom Ella. She is so excited to be here and share this special night with you.</span>
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