import { cn } from '@/libs/utils/cn'
import React from 'react'

const QuaternaryButton = ({ className, children, disable, ...props }) => {
    return (
        <button className={cn('rounded-full px-4 sm:px-6 py-2.5 bg-white text-black text-sm md:text-base font-medium w-fit', className)} {...props}>
            {children}
            {disable ? null : null}
        </button>
    )

}

export default QuaternaryButton