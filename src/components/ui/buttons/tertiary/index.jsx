import { cn } from '@/libs/utils/cn'
import React from 'react'

const TertiaryButtton = ({ className, children, disable, ...props }) => {
    return (
        <button className={cn(' rounded-full px-14 py-2.5 bg-white text-black border border-custom_black text-sm md:text-base font-medium', className)} {...props}>
            {children}
            {disable ? null : null}
        </button>
    )
}

export default TertiaryButtton