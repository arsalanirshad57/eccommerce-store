import { cn } from '@/libs/utils/cn'
import { Icon } from '@iconify/react'
import React from 'react'

const Iconify = ({ iconName, className }) => {
    return (
        <Icon icon={iconName} className={cn('w-6 h-6 text-black', className)} />
    )
}

export default Iconify