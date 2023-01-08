import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'

const About = ({
    firstName,
    lastName,
    nametitle,
    desc,
    underDesc,
    ButtonLink
}:any) => {
    const {ref, inView, entry} = useInView()

    return (
        <div ref={ref} id='about' className='relative w-full flex items-center max-md:flex-col bg-[#d6d6d4]  '>
            <Image className='xl:h-[1080px] md:h-[700px]' src='/../public/rock.jpg' alt='/' width={1920} height={1080} />
                <div className='md:absolute md:right-14 bg-[var(--highlight-color)] shadow-xl shadow-[var(--highlight-color)] border-8 border-black w-[600px] md:w-[500px] max-md:w-full p-6 md:my-10'>
                    <h1 className={inView ? 'fadeIn1' : 'notload'}>{firstName}</h1>
                    <h1 className={inView ? 'fadeIn2' : 'notload'}>{lastName}</h1>
                    <h2 className={inView ?'my-4 text-red-600 fadeIn3' : 'notload'}>{nametitle}</h2>
                    <p className={inView ? 'my-4 fadeIn4' : 'notload'}>
                        {desc}
                    </p>
                    <p className={inView ? 'my-6 fadeIn4' : 'notload'}>
                        {underDesc}
                    </p>
                    <Link className='w-[250px]' href='/projects'>
                        <li className='flex justify-center items-center h-14 w-40 border-4 bg-[var(--button-color)] buttonShadow border-black text-lg uppercase hover:scale-105 duration-100'>{ButtonLink}</li>
                    </Link>
                </div>
    </div>
  )
}

export default About