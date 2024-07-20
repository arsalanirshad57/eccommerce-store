import { cn } from '@/libs/utils/cn'
import React from 'react'

const H2 = ({ children, className }) => {
    return (
        <h2 className={cn(' font-cf text-3xl sm:text-4xl md:text-5xl font-bold leading-7' , className)}>
            {children}
        </h2>
    )
}

export default H2
