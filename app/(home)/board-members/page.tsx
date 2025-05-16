import { ArrowLeft } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BoardMembersPage = () => {
    return (
        <div className="w-full flex flex-col items-center justify-start min-h-screen py-8 gap-12 bg-[#779a46] ">
            <div className="flex items-center justify-center gap-2 flex-col px-4 pt-10">
                <span className="text-white font-bold text-3xl text-center">Board of Directors</span>
                <span className="text-white/80 font-base text-lg text-center">See the members of the Adoption Choice, Inc. Board of Directors here.</span>
            </div>
            <div className='grid grid-cols-1 px-4 gap-6'>
                <div className='flex flex-col gap-4 items-center justify-center'>
                    <div className='w-[200px] h-[300px] relative shadow-xl rounded-lg overflow-hidden'>
                        <Image src="/images/board/molly.jpeg" alt="Molly Jante Cover" fill className='object-cover' />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <span className='text-white font-bold text-2xl select-none text-center'>Molly Jante</span>
                        <span className='text-white font-light text-base select-none text-center'>President</span>
                    </div>
                </div>
                <div className='flex flex-col gap-4 items-center justify-center'>
                    <div className='w-[200px] h-[300px] relative shadow-xl rounded-lg overflow-hidden'>
                        <Image src="/images/board/wes.jpeg" alt="Wes Garner Cover" fill className='object-cover' />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <span className='text-white font-bold text-2xl select-none text-center'>Wes Gerner</span>
                        <span className='text-white font-light text-base select-none text-center'>Officer and Past President</span>
                    </div>
                </div>
                <div className='flex flex-col gap-4 items-center justify-center'>
                    <div className='w-[200px] h-[300px] relative shadow-xl rounded-lg overflow-hidden'>
                        <Image src="/images/board/robin.jpeg" alt="Robin Fox Cover" fill className='object-cover' />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <span className='text-white font-bold text-2xl select-none text-center'>Robin Fox</span>
                        <span className='text-white font-light text-base select-none text-center'>Officer</span>
                    </div>
                </div>
                <div className='flex flex-col gap-4 items-center justify-center'>
                    <div className='w-[200px] h-[300px] relative shadow-xl rounded-lg overflow-hidden'>
                        <Image src="/images/board/kim.jpeg" alt="Kim Garner Cover" fill className='object-cover' />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <span className='text-white font-bold text-2xl select-none text-center'>Kim Garner</span>
                        <span className='text-white font-light text-base select-none text-center'>Officer</span>
                    </div>
                </div>
                <div className='flex flex-col gap-4 items-center justify-center'>
                    <div className='w-[200px] h-[300px] relative shadow-xl rounded-lg overflow-hidden'>
                        <Image src="/images/board/kaylee.jpeg" alt="Kaylee Corr Cover" fill className='object-cover' />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <span className='text-white font-bold text-2xl select-none text-center'>Kaylee Corr</span>
                        <span className='text-white font-light text-base select-none text-center'>Officer</span>
                    </div>
                </div>
            </div>
            <div className='w-[80px] h-[1px] bg-white/30' />
            <Link href="/" className='flex items-center justify-center gap-4 p-4'>
                <ArrowLeft className='text-white' strokeWidth={1} />
                <span className='text-white font-base text-lg'>Return Home</span>
            </Link>
        </div>
    )
}

export default BoardMembersPage