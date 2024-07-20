import { cn } from '@/libs/utils/cn'
import React from 'react'

const Logo = ({ className }) => {
    return (
        <h1 className={cn('text-2xl md:text-3xl font-cf font-semibold ', className)}> SHOP.CO</h1>
    ) 
}

export default Logo