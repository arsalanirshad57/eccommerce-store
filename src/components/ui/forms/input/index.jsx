import { cn } from '@/libs/utils/cn'
import React from 'react'
import Iconify from '../../iconify'

const Input = ({ className, placeholder, firstIcon, secondIcon, icon, type, ...props }) => {
    return (
        <div className={cn('flex items-center justify-center gap-2 bg-white rounded-full py-2.5 px-4 w-full ', className)}>
            {firstIcon ? <Iconify iconName={icon} className='text-custom_black_2' /> : null}
            <input type={type} placeholder={placeholder} className='border-none outline-none  text-sm sm:text-base text-para grow' {...props} />
            {secondIcon ? <Iconify iconName={icon} className='text-custom_black_2' /> : null}
        </div>
    )
}

export default Input