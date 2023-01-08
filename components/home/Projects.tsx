import Image from 'next/image'
import React from 'react'
import { useInView } from 'react-intersection-observer/useInView'

const Projects = () => {


return (
    <div id='#work' className='bg-[var(--bg-color)] flex flex-col items-center w-full'>
        <h1 className='uppercase tracking-widest border-2 border-black bg-[var(--text-bg-color)] my-10'>Projects</h1>
        <p>Let's see what i have made</p>
        <div className='flex justify-between w-full my-9 max-md:flex-col'>
            <Image className='ml-20' src='/../public/placeholder.webp' alt='/' width={500} height={500} />
            <div className='mr-20'>
                <h1 className='uppercase tracking-widest border-2 border-black bg-[var(--text-bg-color)]'>Project Placeholder</h1>
                <p className='w-[500px] text-right notload'>
                    I started web developement in 2013 managing multiple e-commerce
                    websites on CMS platforms such as WordPress, BigCommerce, and
                    Shopify. I have experience working directly with clients and taking
                    mock wireframes all the way to deployed applications. In my spare
                    time I run Code Commerce, a Youtube channel where I teach web
                    developement and various front-end technologies.
                </p>
            </div>
        </div>
        
    </div>
  )
}

export default Projects