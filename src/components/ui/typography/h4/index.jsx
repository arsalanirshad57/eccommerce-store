import { cn } from '@/libs/utils/cn'
import React from 'react'

const H4 = ({ children, className }) => {
    return (
        <h4 className={cn('text-2xl sm:text-3xl md:text-4xl font-bold leading-7', className)}>
            {children} 
        </h4>
    )
}

export default H4
