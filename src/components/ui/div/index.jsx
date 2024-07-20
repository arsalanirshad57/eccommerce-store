import { cn } from '@/libs/utils/cn'
import React from 'react'

const Div = ({ className, children }) => {
    return (
        <div className={cn('px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-8', className)}>{children}</div>
    )
}

export default Div