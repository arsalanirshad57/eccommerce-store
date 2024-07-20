'use client'
import { cn } from '@/libs/utils/cn'
import React, { useRef, useEffect } from 'react'

const Modal = ({ isOpen, onClose, children, className }) => {

    const modalRef = useRef()

    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (modalRef.current && !modalRef.current.contains(e.target)) {
                onClose()
            }

        }
        document.addEventListener('mousedown', handleOutsideClick)
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick)
        };
    }, [isOpen, onClose]);

    return (
        isOpen ? (
            <div className='fixed top-0 flex justify-center items-center h-dvh w-full bg-black bg-opacity-50 z-50 overflow-y-hidden p-5'>
                <div className={cn(' relative bg-white rounded-lg shadow-xl ', className)} ref={modalRef}>
                    {children}
                </div>
            </div>
        ) : null
    )
}

export default Modal