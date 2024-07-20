import { cn } from '@/libs/utils/cn'
import React from 'react'
import Iconify from '../iconify'

const BgIcon = ({ className, children, icon, iconClass }) => {
    return (
        <div className={cn(' flex justify-center items-center gap-2 bg-black rounded-full w-fit h-fit px-4 py-1.5 cursor-pointer', className)}>
            <Iconify iconName={icon} className={`text-white w-5 h-5 ${iconClass}`} />
            {children ? <span className='text-white text-sm sm:text-base'>{children}</span> : null}
        </div>
    )
}

export default BgIcon