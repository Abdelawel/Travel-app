"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'
import hilink from '/public/hilink-logo.svg'
import { NAV_LINKS } from '@/constants'
import Button from './Button'
const Navbar = () => {
    const [toggleDropDown, setToggleDropDown] = useState(false)
  return (
        <nav className='z-30'>
            <div className='flexBetween max-container padding-container
                        relative z-30 py-5'>
                <Link href="/">
                    <Image src={hilink} alt='Logo' width={74} height={29} />
                </Link>
                <ul className='hidden h-full gap-12 lg:flex'>
                    {/* on small dev... this will be hidden, on large will appear */}
                    {NAV_LINKS.map((link) => (
                        <Link href={link.href} 
                            key={link.key}
                            className='regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold'
                        >
                            {link.label}
                        </Link>
                    ))}
                </ul>
                <div className='lg:flexCenter hidden'>
                    <Button type="button"
                            title="Login"
                            icon="/user.svg"
                            variant="btn_dark_green" />
                </div>
                <Image src="/menu.svg" alt="menu" 
                    width={32} height={32}
                    className='inline-block cursor-pointer lg:hidden '
                    onClick={ () => setToggleDropDown((prev) => !prev)}/>
            </div>
            
                   
                   {toggleDropDown &&
                   <div className='z-30 absolute mr-2 p-5 items-center flex flex-col right-0 lg:hidden rounded-xl bg-green-50 transition-all '>
                        <ul className='flex-col cursor-pointer lg:hidden'>
                   
                            {NAV_LINKS.map((link) => (
                                <Link href={link.href} 
                                        key={link.key}
                                        className='regular-16 text-white flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold '
                                >
                                   <label className='cursor-pointer' >{link.label}</label> 
                                </Link>
                            ))}
                        </ul>
                        <div>
                        <Button type="button"
                                title="Login"
                                icon="/user.svg"
                                variant="btn_dark_green" />
                        </div>
                        
                    </div>
                   
               }
        </nav>
    
    
  )
}

export default Navbar