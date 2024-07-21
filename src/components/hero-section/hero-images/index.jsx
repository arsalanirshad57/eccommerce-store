import React from 'react'

const HeroImages = () => {
    return (
        <div className="">
            {/* FOR DESKTOP  */}
            <img src="/assets/svg/hero.svg" alt="hero-image" className=" hidden lg:block absolute bottom-20 xl:bottom-0  right-16 xl:right-20 w-450wd xl:w-570wd -mt-3.5  " />
            <img src="/assets/svg/star.svg" alt="star" className="hidden lg:block absolute top-64 right-[430px] xl:right-[630px] w-10 h-10" />
            <img src="/assets/svg/star.svg" alt="star" className="hidden lg:block absolute top-32 right-20 w-14 h-14" />
            {/* FOR MOBILES  */}
            <div className=" block lg:hidden relative">
                <img src="/assets/svg/hero.svg" alt="hero-image" className=" block lg:hidden w-screen sm:w-96 md:w-450wd xl:w-570wd" />
                <img src="/assets/svg/star.svg" alt="star" className="absolute top-36 left-0 w-8 h-8" />
                <img src="/assets/svg/star.svg" alt="star" className="absolute top-5 right-0 w-12 h-12" />
            </div>
        </div>
    )
}

export default HeroImages