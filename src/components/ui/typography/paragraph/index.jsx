import { cn } from '@/libs/utils/cn'
import React from 'react'

const Paragraph = ({ className, children }) => {
    return (
        <p className={cn('text-sm sm:text-base text-para ', className)}>{children}</p>
    )
}

export default Paragraph