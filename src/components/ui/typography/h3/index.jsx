import { cn } from '@/libs/utils/cn'
import React from 'react'

const H3 = ({ children, className }) => {
    return (
        <h3 className={cn(' font-cf text-3xl sm:text-4xl md:text-40fs  font-bold leading-7', className)}>
            {children}
        </h3>
    )
}

export default H3
