import { ArrowLeft, User, User2, Users, Users2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BoardMembersPage = () => {
    return (
        <div className="w-full flex flex-col items-center justify-start min-h-screen py-8 gap-12 bg-[#779a46] ">
            <div className="flex items-center justify-center gap-2 flex-col px-4 pt-10">
                <span className="text-white font-bold text-3xl text-center">2024 Sponsors</span>
            </div>
            <div className="w-full flex items-center justify-center gap-2 flex-col py-6 bg-[#672543]">
                <span className="text-white font-base text-4xl text-center">Title Sponsors</span>
            </div>
            <div className='w-[80px] h-[1px] bg-white/30' />
            <div className='grid grid-cols-1 px-4 gap-6'>
                <div className='flex flex-col gap-4 items-center justify-center'>
                    <div className='w-[240px] h-[240px] bg-white relative shadow-xl rounded-full overflow-hidden flex items-center justify-center'>
                        <Image src="/images/sponsors/kass.jpg" alt="Kass Foundation Cover" width={220} height={220} className='object-fit' />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <span className='text-white font-base text-2xl select-none text-center'>Kass Foundation</span>
                        <span className='text-white/70 italic font-light text-light select-none text-center'>Title Sponsor</span>
                    </div>
                </div>
            </div>
            <div className='w-[80px] h-[1px] bg-white/30' />
            <div className="w-full flex items-center justify-center gap-2 flex-col py-6 bg-[#672543]">
                <span className="text-white font-base text-3xl text-center">Our Gold Sponsors</span>
            </div>
            <div className='w-[80px] h-[1px] bg-white/30' />
            <div className='grid grid-cols-1 px-4 gap-6'>
                <Link href="https://www.gklaw.com/" target='_blank' className='flex flex-col gap-4 items-center justify-center'>
                    <div className='w-[240px] h-[240px] bg-white relative shadow-xl rounded-full overflow-hidden flex items-center justify-center'>
                        <Image src="/images/sponsors/g&k.png" alt="Godfrey Kahn, SC Cover" width={220} height={220} className='object-contain' />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <span className='text-white font-base text-2xl select-none text-center'>Godfrey Kahn, SC</span>
                        <span className='text-white/70 italic font-light text-light select-none text-center'>Gold Sponsor</span>
                    </div>
                </Link>
            </div>
            <div className='w-[80px] h-[1px] bg-white/30' />
            <div className="w-full flex items-center justify-center gap-2 flex-col py-6 bg-[#672543]">
                <span className="text-white font-base text-3xl text-center">Our Silver Sponsors</span>
            </div>
            <div className='w-[80px] h-[1px] bg-white/30' />
            <div className='grid grid-cols-1 px-4 gap-6'>
                <Link href="https://giraffeandjones.com/" target='_blank' className='flex flex-col gap-4 items-center justify-center'>
                    <div className='w-[240px] h-[240px] bg-white relative shadow-xl rounded-full overflow-hidden flex items-center justify-center'>
                        <Image src="/images/sponsors/giraffe.png" alt="Giraffe Jones Creative Cover" width={220} height={220} className='object-contain' />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <span className='text-white font-base text-2xl select-none text-center'>Giraffe Jones Creative</span>
                        <span className='text-white/70 italic font-light text-light select-none text-center'>Silver Sponsor</span>
                    </div>
                </Link>
                <Link href="https://glcminerals.com/" target='_blank' className='flex flex-col gap-4 items-center justify-center'>
                    <div className='w-[240px] h-[240px] bg-white relative shadow-xl rounded-full overflow-hidden flex items-center justify-center'>
                        <Image src="/images/sponsors/glc.jpg" alt="GLC Minerals Cover" width={220} height={220} className='object-contain' />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <span className='text-white font-base text-2xl select-none text-center'>GLC Minerals</span>
                        <span className='text-white/70 italic font-light text-light select-none text-center'>Silver Sponsor</span>
                    </div>
                </Link>
                <Link href="https://www.greatermilwaukeefoundation.org/" target="_blank" className='flex flex-col gap-4 items-center justify-center'>
                    <div className='w-[240px] h-[240px] bg-white relative shadow-xl rounded-full overflow-hidden flex items-center justify-center'>
                        <Image src="/images/sponsors/gmf.jpg" alt="Greater Milwaukee Foundation Cover" width={220} height={220} className='object-contain' />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <span className='text-white font-base text-2xl select-none text-center'>Greater Milwaukee Foundation</span>
                        <span className='text-white/70 italic font-light text-light select-none text-center'>Silver Sponsor</span>
                    </div>
                </Link>
                <Link href="https://www.ghnlawyers.com/" target="_blank" className='flex flex-col gap-4 items-center justify-center'>
                    <div className='w-[240px] h-[240px] bg-white relative shadow-xl rounded-full overflow-hidden flex items-center justify-center'>
                        <Image src="/images/sponsors/ghn.jpg" alt="Grady, Hayes & Neary, LLC Cover" width={220} height={220} className='object-contain' />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <span className='text-white font-base text-2xl select-none text-center'>Grady, Hayes & Neary, LLC</span>
                        <span className='text-white/70 italic font-light text-light select-none text-center'>Silver Sponsor</span>
                    </div>
                </Link>
                <Link href="https://mindpoollive.com/" target="_blank" className='flex flex-col gap-4 items-center justify-center'>
                    <div className='w-[240px] h-[240px] bg-white relative shadow-xl rounded-full overflow-hidden flex items-center justify-center'>
                        <Image src="/images/sponsors/mindpool.jpg" alt="Mindpool Productions LLC Cover" width={140} height={140} className='object-contain' />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <span className='text-white font-base text-2xl select-none text-center'>Mindpool Productions LLC</span>
                        <span className='text-white/70 italic font-light text-light select-none text-center'>Silver Sponsor</span>
                    </div>
                </Link>
                <Link href="https://www.pnc.com/" target="_blank" className='flex flex-col gap-4 items-center justify-center'>
                    <div className='w-[240px] h-[240px] bg-white relative shadow-xl rounded-full overflow-hidden flex items-center justify-center'>
                        <Image src="/images/sponsors/pnc.jpg" alt="PNC Bank Cover" width={220} height={220} className='object-contain' />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <span className='text-white font-base text-2xl select-none text-center'>PNC Bank</span>
                        <span className='text-white/70 italic font-light text-light select-none text-center'>Silver Sponsor</span>
                    </div>
                </Link>
            </div>
            <div className='w-[80px] h-[1px] bg-white/30' />
            <div className="w-full flex items-center justify-center gap-2 flex-col py-6 bg-[#672543]">
                <span className="text-white font-base text-3xl text-center">Family and Friends</span>
            </div>
            <div className='w-[80px] h-[1px] bg-white/30' />
            <div className='grid grid-cols-1 px-4 gap-6'>
                <Link href="https://dewittllp.com/" target='_blank' className='flex flex-col gap-4 items-center justify-center'>
                    <div className='w-[180px] h-[180px] bg-white relative shadow-xl rounded-full overflow-hidden flex items-center justify-center'>
                        <Image src="/images/sponsors/dewitt.jpg" alt="Dewitt & Roetter Cover" width={160} height={160} className='object-contain' />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <span className='text-white font-base text-2xl select-none text-center'>Dewitt & Roetter</span>
                        <span className='text-white/70 italic font-light text-light select-none text-center'>Family and Friends</span>
                    </div>
                </Link>
                <Link href="https://www.plannedparenthood.org/planned-parenthood-wisconsin" target='_blank' className='flex flex-col gap-4 items-center justify-center'>
                    <div className='w-[180px] h-[180px] bg-white relative shadow-xl rounded-full overflow-hidden flex items-center justify-center'>
                        <Image src="/images/sponsors/pp.png" alt="Planned Parenthood Cover" width={160} height={160} className='object-contain' />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <span className='text-white font-base text-2xl select-none text-center'>Planned Parenthood</span>
                        <span className='text-white/70 italic font-light text-light select-none text-center'>Family and Friends</span>
                    </div>
                </Link>
                <div className='flex flex-col gap-4 items-center justify-center'>
                    <div className='w-[180px] h-[180px] bg-white relative shadow-xl rounded-full overflow-hidden flex items-center justify-center'>
                        <Users2 className=' text-black/80 w-[120px] h-[120px]' strokeWidth={0.3} />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <span className='text-white font-base text-2xl select-none text-center'>Wes and Kim Garner</span>
                        <span className='text-white/70 italic font-light text-light select-none text-center'>Family and Friends</span>
                    </div>
                </div>
                <div className='flex flex-col gap-4 items-center justify-center'>
                    <div className='w-[180px] h-[180px] bg-white relative shadow-xl rounded-full overflow-hidden flex items-center justify-center'>
                        <Users2 className=' text-black/80 w-[120px] h-[120px]' strokeWidth={0.3} />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <span className='text-white font-base text-2xl select-none text-center'>Gina Stilp and Patrick Nowak</span>
                        <span className='text-white/70 italic font-light text-light select-none text-center'>Family and Friends</span>
                    </div>
                </div>
                <div className='flex flex-col gap-4 items-center justify-center'>
                    <div className='w-[180px] h-[180px] bg-white relative shadow-xl rounded-full overflow-hidden flex items-center justify-center'>
                        <Users2 className=' text-black/80 w-[120px] h-[120px]' strokeWidth={0.3} />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <span className='text-white font-base text-2xl select-none text-center'>Chuck and Barbara Johnson</span>
                        <span className='text-white/70 italic font-light text-light select-none text-center'>Family and Friends</span>
                    </div>
                </div>
                <div className='flex flex-col gap-4 items-center justify-center'>
                    <div className='w-[180px] h-[180px] bg-white relative shadow-xl rounded-full overflow-hidden flex items-center justify-center'>
                        <Users2 className=' text-black/80 w-[120px] h-[120px]' strokeWidth={0.3} />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <span className='text-white font-base text-2xl select-none text-center'>Fox-Simes Family</span>
                        <span className='text-white/70 italic font-light text-light select-none text-center'>Family and Friends</span>
                    </div>
                </div>
            </div>
            <div className='w-[80px] h-[1px] bg-white/30' />
            <div className="w-full flex items-center justify-center gap-2 flex-col py-6 bg-[#672543]">
                <span className="text-white font-base text-3xl text-center">Our Notable Donors</span>
            </div>
            <div className='w-[80px] h-[1px] bg-white/30' />
            <div className='grid grid-cols-1 px-4 gap-6'>
                <Link href="https://www.sundropdayz.com/" target='_blank' className='flex flex-col gap-4 items-center justify-center'>
                    <div className='w-[180px] h-[180px] bg-white relative shadow-xl rounded-full overflow-hidden flex items-center justify-center'>
                        <Image src="/images/sponsors/sundrop.png" alt="Sundrop Dayz Cover" width={160} height={160} className='object-contain' />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <span className='text-white font-base text-2xl select-none text-center'>Sundrop Dayz</span>
                        <span className='text-white/70 italic font-light text-light select-none text-center'>Notable Donor</span>
                    </div>
                </Link>
                <Link href="https://villageofendeavor.org/index.asp?SEC=2075B866-95B1-40CC-8A63-CA69C641F096" target='_blank' className='flex flex-col gap-4 items-center justify-center'>
                    <div className='w-[180px] h-[180px] bg-white relative shadow-xl rounded-full overflow-hidden flex items-center justify-center'>
                        <Image src="/images/sponsors/endeavor.png" alt="Village of Endeavor Police Department Cover" width={160} height={160} className='object-contain' />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <span className='text-white font-base text-2xl select-none text-center'>Village of Endeavor Police Department</span>
                        <span className='text-white/70 italic font-light text-light select-none text-center'>Notable Donor</span>
                    </div>
                </Link>
                <div className='flex flex-col gap-4 items-center justify-center'>
                    <div className='w-[180px] h-[180px] bg-white relative shadow-xl rounded-full overflow-hidden flex items-center justify-center'>
                        <User2 className=' text-black/80 w-[160px] h-[160px]' strokeWidth={0.3} />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <span className='text-white font-base text-2xl select-none text-center'>Tim and Lori Kneeland Family Fund</span>
                        <span className='text-white/70 italic font-light text-light select-none text-center'>Notable Donor</span>
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