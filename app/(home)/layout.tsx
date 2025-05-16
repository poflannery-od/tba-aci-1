'use client';


import PageWrapperMobile from '@/components/wrappers/PageWrapperMobile'
import useMediaQuery from '@/src/hooks/use-media-query';
import Image from 'next/image';
import React from 'react'

interface LayoutProps {
    children?: React.ReactNode
}

const NotReadyLoading = () => {
    return (
        <div className='bg-[#779a46] w-full h-screen flex items-center justify-center gap-4 flex-col'>
            <div className="relative w-[292px] h-[150px]">
                <Image src="/images/logo/tba.png" alt="TBA White Logo" priority fill />
            </div>
            <span className='text-white font-light text-lg'>Loading...</span>
        </div>
    )
}

const ErrorSizePage = () => {
    return (
        <div className='bg-[#779a46] w-full h-screen flex items-center justify-center gap-4 flex-col'>
            <span className='text-white font-extrabold text-7xl'>Oh, no!</span>
            <span className='text-white font-light text-lg'>You are trying to access this webpage from a non-mobile device.</span>
            <span className='text-white font-light text-lg'>Return to this site when you have a mobile device to view the content.</span>
            <div className='w-[150px] h-[45px] relative mx-auto'>
                <Image alt="ACI Logo" src="/images/logo/aci-horizontal.png" fill />
            </div>
        </div>
    )
}



const MainLayout = ({ children }: LayoutProps) => {

    const { isMobile, isTablet, isDesktop } = useMediaQuery();

    if (!isMobile) {
        if (isDesktop || isTablet) {
            return <ErrorSizePage />;
        } else {
            return <NotReadyLoading />;
        }
    }

    return (
        <PageWrapperMobile>
            {children}
        </PageWrapperMobile>
    )
}

export default MainLayout