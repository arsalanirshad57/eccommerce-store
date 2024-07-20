import { cn } from '@/libs/utils/cn'
import React from 'react'
import Iconify from '../../iconify'

const IconButtton = ({ className, children, disable, iconClass, icon, ...props }) => {
    return (
        <button className={cn(' rounded-full px-4 sm:px-6 py-2.5 sm:py-3 bg-gray-2 text-para text-sm md:text-base font-semibold', className)} {...props}>
            {children}
            <Iconify iconName={icon} className={iconClass} />
        </button>
    )
}

export default IconButtton