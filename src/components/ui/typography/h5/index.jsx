import { cn } from '@/libs/utils/cn'
import React from 'react'

const H5 = ({ children, className }) => {
    return (
        <h5 className={cn('text-xl sm:text-2xl font-bold leading-7', className)}>
            {children}
        </h5>
    )
}

export default H5
