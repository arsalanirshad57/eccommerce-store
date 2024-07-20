import React from 'react'
import HeroText from '@/components/hero-section/hero-text'
import Div from '@/components/ui/div'
import HeroImages from '@/components/hero-section/hero-images'

const HeroSection = () => {
    return (
        <Div className=" relative flex flex-col lg:flex-row justify-between items-center gap-5 sm:gap-10 bg-gray-1 pt-32 lg:pt-24 pb-0 h-full lg:h-dvh border w-full">
            <HeroText />
            <HeroImages />
        </Div>
    )
}

export default HeroSection