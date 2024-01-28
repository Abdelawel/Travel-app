import React from 'react'
import Button from './Button'
import Image from 'next/image'
const GetApp = () => {
  return (
    <section className='flexCenter flex-col w-full pb-[100px] lg:rounded-5xl'>
      <div className='get-app'>
        <div className='z-20 flex w-full flex-col flex-1 items-start justify-center gap-12'>
          <h2 className='bold-40 lg:bold-64 xl:max-w-[320px] '>
            Get For Free Now!
          </h2>
          <p className='regular-16 text-gray-10'>
            Available on IOS and Android
          </p>
          <div className='flex flex-col w-full gap-3 whitespace-nowrap lg:flex-row'>
            <Button type='button'
                    title='App Store'
                    icon='/apple.svg'
                    variant='btn_white'
                    full />
            <Button type='button'
                    title='Play Store'
                    icon='/android.svg'
                    variant='btn_dark_green_outline'
                    full={true} />
          </div>
        </div>

        <div className='flex flex-1 items-center justify-end'>
          <Image src='/phones.png'
                 alt='phones'
                 width={500}
                 height={1000}
                 />
        </div>
      </div>
    </section>
  )
}

export default GetApp