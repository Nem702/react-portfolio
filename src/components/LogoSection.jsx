import React from 'react'
import { logoIconsList } from '../constants'

const LogoIcon = ({ icon }) => {
    return (
        <div className="flex-none flex-center marquee-item">
            <img 
                src={icon.imgPath} 
                alt={icon.name}
            />
            <span className='text-white-50 text-sm'>{icon.name}</span>
        </div>
    )
}

const LogoSection = () => {
  return (
    <div className='md:my-20 my-10 relative'>
        <div className="gradient-edge" />
        <div className="gradient-edge" />
        <div className="marquee h-52">
            <div className="marquee-box md:gap-12 gap-5">
                {/* looping through logos twice for marquee effect */}
                {logoIconsList.map((icon) => (
                    <LogoIcon key={icon.name} icon={icon} />
                ))}
                {/* animation: marquee 60 sec infinite */}
                {logoIconsList.map((icon) => (
                    <LogoIcon key={icon.name} icon={icon} />
                ))}
            </div>
        </div>
    </div>
    
  )
}

export default LogoSection