import { ArrowLeft } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const AwardRecipienctPage = () => {
    return (
        <div className="w-full flex flex-col items-center justify-start min-h-screen py-8 gap-12 bg-[#779a46] ">
            <div className="flex items-center justify-center gap-2 flex-col px-4 pt-10">
                <span className="text-white font-bold text-4xl text-center">2024</span>
                <span className="text-white font-bold text-3xl text-center">Award Recipients</span>
            </div>
            <div className='w-[80px] h-[1px] bg-white/30' />
            <div className="flex items-center justify-center gap-2 flex-col py-6 bg-[#672543]">
                <span className="text-white/80 font-base text-lg text-center">This year&apos;s award goes to: </span>
                <span className="text-white font-bold text-3xl text-center">Interstate Compact on Placement of Children (ICPC)</span>
            </div>
            <div className='w-[80px] h-[1px] bg-white/30' />
            <div className="flex items-center justify-center gap-2 flex-col px-4">
                <span className="text-white/80 font-base text-lg text-center">Accepting on behalf of ICPC:</span>
            </div>
            <div className='flex flex-col items-center justify-center gap-4 px-6'>
                <div className='w-[280px] h-[350px] flex items-center relative justify-center shadow-xl rounded-lg overflow-hidden'>
                    <Image src="/images/awards/kasia.png" alt="Alec Ingold Cover" fill className='object-cover' />
                </div>
                <span className="text-white font-bold text-3xl text-center">Kasia McCants</span>
                <span className="text-white/80 font-base text-lg text-center">Kasia McCants serves as an ICPC Specialist in the Interstate Compact for Placement of Children within the Out-of-Home Care Section at the Wisconsin Department of Children and Families. She has been part of the ICPC team since 2016, having previously worked as a program associate. </span>
                <span className="text-white/80 font-base text-lg text-center">In this role, Kasia had performed administrative dues to secure safe and secure placements for children across state lines. While studying in Poland, she acquired valuable experience in the field by working as a Counselor at a youth center, where she has not only cared for children ages 7-18 but also wrote and implemented social-therapy programs. </span>
                <span className="text-white/80 font-base text-lg text-center">Kasia holds a degree equivalent to the US bachelor&apos;s in social work, a master&apos;s degree in education, and a certificate in social therapy.</span>
                <span className="text-white font-bold text-3xl text-center">&</span>
                <div className='w-[280px] h-[350px] flex items-center relative justify-center shadow-xl rounded-lg overflow-hidden'>
                    <Image src="/images/awards/carrie.jpg" alt="Alec Ingold Cover" fill className='object-cover' />
                </div>
                <span className="text-white font-bold text-3xl text-center">Carrie Pederson</span>
                <span className="text-white/80 font-base text-lg text-center">Carrie Pederson is a seasoned social worker with over 25 years of experience. For the past 8 years, Carrie has served as the Deputy Compact Administrator for the Interstate Compact on the Placement of Children (ICPC) at the state of Wisconsin Department of Children and Families. </span>
                <span className="text-white/80 font-base text-lg text-center">In this role, Carrie has ensured compliance with legal and procedural requirements to secure safe and secure placements for children across state lines. Prior to her role at DCF Carrie dedicated 13 years to supporting adoptive families and expectant parents, offering guidance and care during their journeys. Her commitment to the well-being of her clients is evident in the two supports groups she established and facilitated, creating safe spaces for birth parents to share and heal. </span>
                <span className="text-white/80 font-base text-lg text-center">In addition to her extensive experience, Carrie holds certifications as a grief support specialist and is a certified social worker in the state of Wisconsin. With a compassionate approach and understanding of the complexities around both adoption and interstate placements, Carrie continues to make a meaningful impact to the lives of those she serves.</span>
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