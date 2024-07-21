import { cn } from '@/libs/utils/cn'
import React from 'react'

const SecondaryButtton = ({ className, children, disable, ...props }) => {
    return (
        <button className={cn(' rounded-full px-4 sm:px-6 py-2.5 bg-gray-2 text-para text-sm md:text-base font-medium', className)} {...props}>
            {children}
            {disable ? null : null}
        </button>
    )
}

export default SecondaryButtton