import {useEffect, useState} from 'react'
import Image from 'next/image';
import { FaLinkedinIn } from 'react-icons/fa'


const Hero = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(100);
    const [index, setIndex] = useState(1);
    const toRotate = [ "UI/UX", "Backend", "Everything" ];
    const period = 1000;

    useEffect(() => {
        let ticker = setInterval(() => {
        tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
        setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setIndex(prevIndex => prevIndex - 1);
        setDelta(period);
        } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setIndex(1);
        setDelta(500);
        } else {
        setIndex(prevIndex => prevIndex + 1);
        }
    }

    return (
    <div className='relative w-full h-screen text-center overflow-hidden'>
        <div className='fixed z-[-1] w-screen h-screen'>
            <Image className='h-[1000px]' src='/../public/starBackdrop.png' alt='/' width={4000} height={4000} />
        </div>
        
        <div className='absolute bottom-[22%] right-[45%] rotate-[12deg]'>
            <Image src={'/../public/spaceShip.png'} alt='/' width={300} height={300} />
        </div>
        <div className='absolute bottom-[-43%] left-[-10%] rounded-full w-[800px] h-[800px] bg-slate-400' />
        <div className='absolute bottom top-10 right-96 rounded-full w-44 h-44 bg-yellow-300' />
        <div className='absolute bottom-24 right-44 rounded-full w-36 h-36 bg-red-500' />
        <div className='absolute top-24 left-24 rounded-full w-36 h-36 bg-blue-500' />
        

        <div className='relative max-w-[2000px] w-full h-full mx-auto p-2 flex justify-center items-center text-white'>
            <div className='absolute font-[Amatic SC] flex justify-start items-start flex-col right-5'>
                <h1 className='text-8xl'>Engines On!</h1>
                <h3 className='mb-4 '>Let's find somthing legendary together</h3>
                <h2>Hi I'm Mikhail</h2>
                <h2 className='mt-4'>I have an apetit for</h2>
                <h2>{text}</h2>
            </div>
        </div>
    </div>
  )
}

export default Hero