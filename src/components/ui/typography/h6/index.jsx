import { cn } from '@/libs/utils/cn'
import React from 'react'

const H6 = ({ children, className }) => {
    return (
        <h5 className={cn('text-lg sm:text-xl font-bold leading-7', className)}>
            {children}
        </h5>
    )
}

export default H6
