import QuaternaryButton from '@/components/ui/buttons/quaternary'
import Div from '@/components/ui/div'
import Input from '@/components/ui/forms/input'
import H3 from '@/components/ui/typography/h3'
import React from 'react'

const NewsLetter = () => {
    return (
        <Div className=' relative flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-10 bg-black rounded-2xl py-8 md:py-12 w-11/12 mx-auto -mb-20 !z-20 '>
            <H3 className='text-white w-full lg:w-1/2 xl:w-[45%]'>STAY UPTO DATE ABOUT OUR LATEST OFFERS</H3>
            <div className="flex flex-col gap-2 md:gap-3 w-full md:w-2/5 lg:w-2/6 ">
                <Input placeholder='Enter your Email Address' firstIcon={true} icon='mi:email' secondIcon={false} />
                <QuaternaryButton className='w-full'>Subscribe to Newsletter</QuaternaryButton>
            </div>
        </Div>
    )
}

export default NewsLetter