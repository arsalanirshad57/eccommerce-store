import { cn } from '@/libs/utils/cn'
import React from 'react'

const PrimaryButtton = ({ className, children, disable, ...props }) => {
    return (
        <button className={cn('rounded-full px-4 sm:px-6 py-2.5 bg-black text-white text-sm md:text-base font-semibold w-fit', className)} {...props}>
            {children} 
            {disable ? null : null}
        </button>
    )

}

export default PrimaryButtton