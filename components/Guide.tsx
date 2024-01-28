import React from 'react'
import Image from 'next/image'

const Guide = () => {
  return (
    <section className='felxCenter flex-col'>
      <div className='padding-container max-container w-full pb-24'>
        <Image src="/camp.svg"
               alt="camp"
               width={50}
               height={50}/>
          <p className='regular-18 -mt-1 mb-3 text-green-50'>
            WE ARE HERE FOR YOU
          </p>  
          <div className='flex flex-wrap justify-between gap-5 lg:gap-10'>
            <h2 className='lg:bold-4 xl:max-w-[390px] bold-52'>
              Guide You to Easy Path
            </h2>
            <p className='regular-16 text-gray-30 xl:max-w-[550px]'>Only with the hilink application you will no
               longer get lost and get lost again, because 
               we already support offline maps when there 
               is no internet connection in the field. 
               Invite your friends, relatives and friends 
               to have fun in the wilderness through the 
               valley and reach the top of the mountain</p>
          </div>  
      </div>
      <div className='flexCenter max-container relative w-full '>
        <Image className=' object-cover object-center xl:rounded-5xl '
               src="/boat.png"
               alt="boat"
               width={1400}
               height={580} />
        <div className='absolute flex bg-white py-8 pl-5 pr-7 gap-3 
                        rounded-3xl border shadow-md md:left-[5%] lg:top-20'>
          <Image src="/meter.svg"
                 alt="meter"
                 height={188}
                 width={24}
                 />
          <div className='flexBetween flex-col'>
            <div className='flex w-full flex-col'>
              <div className='flexBetween w-full'>
                <p className='regular-16 text-gray-20'>
                  Destination
                </p>
                <p className='text-green-50 bold-16'>
                  48 min
                </p>
              </div>
              <p className='bold-20 mt-2'>
                Aguas Calientes
              </p>
            </div>

            <div className='flex w-full flex-col '>
              <p className='regular-16 text-gray-20'>
                Start Track
              </p>              
              <p className='bold-20 mt-2 '>
                Wonorejo Pasuruan
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Guide