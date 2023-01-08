import React from 'react'
import { email } from '../../config'

const Contact = ({
  ct,
  uct,
  uce,
  ucb
}:any) => {
  return (
    <div id='contact' className='bg-[var(--bg-color)] flex flex-col justify-center items-center'>
        <h2 className='border-4 border-black shadow-2xl bg-[var(--button-color)] -rotate-6'>{ct}</h2>
        <h1 className='my-6 font-medium border-4 border-black shadow-2xl bg-[var(--highlight-color)] rotate-6'>{uct}</h1>
        <p className='w-[450px] max-sm:w-full text-center border-4 shadow-2xl border-black bg-[var(--text-bg-color)]'>
            {uce}
        </p>
        <a href={'mailto:' + email}>
            <li className='flex justify-center items-center my-12 h-14 w-40 border-4 bg-[var(--button2-color)] buttonShadow border-black text-lg uppercase hover:scale-105 duration-100'>{ucb}</li>
        </a>
    </div>
  )
}

export default Contact