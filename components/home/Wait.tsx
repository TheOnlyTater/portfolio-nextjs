import React from 'react';
import { useInView } from 'react-intersection-observer';

const Wait = ({ex}:any) => {
    const {ref, inView, entry} = useInView()
    const blackLines = [1,2,3,4,5,6,7,8,9,10, 11, 12, 13, 14, 15, 16]

    return (
    <div ref={ref} id='work' className={inView ? 'relative h-screen bg-[var(--bg-color)] flex items-center justify-center overflow-hidden load' : 'notload'}>
        <div className={inView ? 'absolute w-[120%] h-12 bg-yellow-400 rotate-12 flex justify-evenly overflow-hidden right load' : 'notload'}>
            {
                blackLines.map((e, i):any => (
                    <div key={i} className='relative bottom-6 bg-black h-[200%] w-8 max-md:w-3 -rotate-45' />
                ))
            }
        </div>
        <div className={inView ? 'absolute w-[120%] h-12 bg-yellow-400 -rotate-12 flex justify-evenly overflow-hidden left load' : 'notload' }>
            {
                blackLines.map((e, i):any => (
                    <div key={i} className='relative  bottom-6 bg-black h-[200%] w-8 max-md:w-3 rotate-45' />
                ))
            }
        </div>
        <p className={inView ? 'relative top-24 w-[200px] text-center bg-[var(--text-bg-color)] border-4 border-black drop load' : 'notload'}>
            {ex}
        </p>
    </div>
  )
}

export default Wait