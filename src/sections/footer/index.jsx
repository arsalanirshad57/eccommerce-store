import React from 'react'
import Logo from '@/components/logo'
import Div from '@/components/ui/div'
import { SOCIAL_MEDIA_ICONS } from '@/_mock/__social_media'
import Link from 'next/link'
import Iconify from '@/components/ui/iconify'
import Paragraph from '@/components/ui/typography/paragraph'
import { PAYMENTS_CARDS } from '@/_mock/__payments'
import Image from 'next/image'

const Footer = () => {
    return (
        <Div className='flex flex-col justify-center items-center bg-gray-1 pt-28 gap-10 md:gap-20 !px-0 z-0'>
            {/* TOP  */}

            <div className="flex flex-col justify-center items-center gap-5 ">
                <Logo />
                <div className="flex items-center gap-8 w-fit" >
                    {
                        SOCIAL_MEDIA_ICONS?.map((item) => (
                            <Link href={item?.link} target='_blank' key={item?.id} className='flex justify-center items-center hover:bg-neutral-200 w-8 h-8 rounded-md'>
                                <Iconify key={item?.id} iconName={item?.icon} className=" !w-5 !!h-5 sm:!w-6 sm:!h-6 cursor-pointer" />
                            </Link>
                        ))
                    }
                </div>
            </div>

            {/* BOTTOM  */}

            <div className="flex flex-col md:flex-row items-center justify-between gap-3 border-t border-neutral-300 w-full pt-5 md:pt-10 px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20">
                <Paragraph className=' text-center md:text-start'>SHOP.CO© 2000-2021, All rights reserved</Paragraph>
                <div className="flex items-center gap-0 flex-wrap justify-center">
                    {PAYMENTS_CARDS?.map((item) => (
                        <Image src={item?.img} alt={item?.id} key={item?.id} className="-ml-1" width={56} height={20} />
                    ))
                    }
                </div>

            </div>
        </Div>
    )
}


export default Footer