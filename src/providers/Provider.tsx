'use client';

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';


interface ProviderProps {
    children?: React.ReactNode
}




const Provider = ({ children }: ProviderProps) => {
    return (
        <>
            {children}
            <ProgressBar
                height="4px"
                color="#672543"
                options={{ showSpinner: false }}
                shallowRouting
            />
        </>
    )
}

export default Provider