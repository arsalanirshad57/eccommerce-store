import { cn } from '@/libs/utils/cn'
import React from 'react'

const H1 = ({ children, className }) => {
    return (
        <h1 className={cn(' font-cf text-4xl md:text-5xl  lg:text-6xl font-bold leading-9 md:leading-[45px] lg:leading-60lh lg:w-550wd text-center lg:text-start tracking-wide ', className)}>
            {children}
        </h1>
    )
}

export default H1
