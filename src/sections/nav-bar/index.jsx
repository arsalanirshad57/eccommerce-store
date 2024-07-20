import Logo from '@/components/logo'
import BgIcon from '@/components/ui/bg-icon'
import Div from '@/components/ui/div'
import React from 'react'

const NavBar = () => {
    return (
        <Div className="fixed w-full py-5 flex justify-between items-center bg-white z-40">
            <Logo />
            <div className="flex items-center w-fit gap-2 sm:gap-5">
                <BgIcon icon="gala:bag">0</BgIcon>
                <BgIcon icon="ph:user-circle-duotone" iconClass=" w-5 sm:!w-6 !h-5 sm:!h-6" className=" px-2 sm:px-3" />
            </div>
        </Div>
    )
}

export default NavBar