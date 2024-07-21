import { cn } from '@/libs/utils/cn'
import Link from 'next/link'
import React from 'react'

const Logo = ({ className }) => {
    return (
        <Link href='/'>
            <h1 className={cn('text-2xl md:text-3xl font-cf font-semibold tracking-wide ', className)}> SHOP.CO</h1>
        </Link>
    )
}

export default Logo