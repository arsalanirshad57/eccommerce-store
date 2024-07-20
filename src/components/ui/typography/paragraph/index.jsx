import { cn } from '@/libs/utils/cn'
import React from 'react'

const Paragraph = ({ className, children }) => {
    return (
        <p className={cn('text-15fs sm:text-base text-para ', className)}>{children}</p>
    )
}

export default Paragraph