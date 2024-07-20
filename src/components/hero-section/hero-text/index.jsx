import React from 'react'
import Div from '@/components/ui/div'
import H1 from '@/components/ui/typography/h1'
import H4 from '@/components/ui/typography/h4'
import Paragraph from '@/components/ui/typography/paragraph'
import PrimaryButtton from '@/components/ui/buttons/primary'
import { PROJECT_NUMBER } from '@/_mock/__project'

const HeroText = () => {
    return (
        <div className="flex flex-col gap-5 justify-center items-center lg:items-start lg:justify-start w-full lg:w-45pr z-10">
            <H1>FIND CLOTHES THAT MATCHES YOUR STYLE</H1>
            <Paragraph className='text-center lg:text-start'>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</Paragraph>
            <PrimaryButtton className=' w-full min-400:w-fit min-400:!px-14'>Shop Now</PrimaryButtton>

            <div className="flex justify-center items-center gap-4 sm:gap-8 -ml-5 mt-5 flex-wrap">
                {
                    PROJECT_NUMBER?.map((item) => (
                        <div key={item?.id} className={`flex flex-col gap-0 pl-5 w-full min-350:w-36 min-400:w-40 sm:w-auto justify-center items-center  min-350:justify-start min-350:items-start ${item?.id == 2 ? 'min-350:border-l-2 border-neutral-300' : item?.id == 3 ? 'min-550:border-l-2 border-neutral-300' : ""}`}>
                            <H4 className="">{item?.heading}</H4>
                            <Paragraph >{item?.para}</Paragraph>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default HeroText