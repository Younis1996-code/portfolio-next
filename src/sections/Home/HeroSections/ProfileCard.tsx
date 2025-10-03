import Image from 'next/image'
import React from 'react'
import GradientCircle from '../../../svg/GradientCircle'
import { FaGreaterThan, FaLessThan } from 'react-icons/fa'
// import GradientLessThan from '@/svg/GradientLessThan'
// import GradientGreaterThan from '@/svg/GradientGreaterThan'

const ProfileCard = () => {
  return (
    <div className='relative w-full lg:w-1/2 h-[85vw] md:h-[91.79487vw] lg:h-[38vw] overflow-hidden'>
      <FaLessThan className='absolute top-[13.10256vw] md:top-[17.10256vw] lg:top-[5vw] xl:top-[3.875vw] left-0 w-[15vw] h-[15vw] lg:w-[7vw] lg:h-[7vw] xl:w-[7vw] xl:h-[7vw] fill-none stroke-Green-70 opacity-80 stroke-6' />
      {/* <GradientLessThan className='absolute top-0 left-0 w-40 h-40' /> */}
      <GradientCircle className="absolute w-[85%] h-full -bottom-[5.1282vw] lg:bottom-0 lg:w-[35.4166vw] lg:h-[35.4166vw] left-1/2 -translate-x-1/2 -rotate-90 overflow-visible" />
      <FaGreaterThan className='absolute bottom-[4.10256vw] md:bottom-[6.10256vw] lg:bottom-[3vw] xl:bottom-[1.875vw] right-0 w-[15vw] h-[15vw] lg:w-[7vw] lg:h-[7vw] xl:w-[7vw] xl:h-[7vw] fill-none stroke-Green-65 opacity-80 stroke-6' />
      {/* <GradientGreaterThan className='absolute bottom-0 right-0 w-40 h-40' /> */}

      {/* <div className="w-full h-full rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 
            [mask:radial-gradient(farthest-side,transparent_calc(100%-20px),black_0)]">
</div> */}
      {/* <div className='absolute top-0 left-0 w-full h-full rounded-full border-50 border-Green-90'>

      </div> */}
        <div className='absolute bottom-0 lg:bottom-0 left-[53%] -translate-x-1/2 w-[73vw] h-[96.8vw] md:h-[100vw] lg:w-[33vw] lg:h-[45vw] xl:w-[34vw] xl:h-[45vw]'>
      <Image src="/profile1.png" alt="Younis profile" fill priority sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw' />
    </div>
    </div>
  )
}

export default ProfileCard



