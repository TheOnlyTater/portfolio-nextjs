import {useEffect, useState} from 'react'
import Image from 'next/image';

interface Args {
    title:string,
    underTitle:string,
    introduction:string,
    joke:string,
    list:string
}

const Hero = ({title, underTitle, introduction, joke, list}:Args) => {

    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(100);
    const [index, setIndex] = useState(1);
    const toRotate = list === "en" ?  [ "UI/UX", "Backend", "Everything" ] : list === "de" ? [ "UI/UX", "Backend", "Alles" ] : [ "UI/UX", "Backend", "Everything" ]
    const period = 1000;

    useEffect(() => {
        let ticker = setInterval(() => {
        tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text, delta])

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
    <div className={'relative w-full max-h-[1400px] h-screen text-center overflow-hidden'}>
        <div className='fixed z-[-1] overflow-hidden'>
            <Image className='h-[1400px]' src='/../public/starBackdrop.png' alt='/' width={1920} height={4000} />
        </div>

        <div className='absolute bottom-[22%] right-[45%] rotate-12
                        max-sm:bottom-42'>
            <Image src={'/../public/spaceShip.png'} alt='/' width={300} height={300}
            className='max-sm:h-[200px] max-sm:w-[300px]' />
        </div>
        <div className='absolute bottom-[-43%] left-[-10%] rounded-full w-[800px] h-[800px] bg-slate-400
                        max-xl:w-[600px] max-xl:h-[600px]
                        max-sm:w-[500px] max-sm:h-[500px] max-sm:bottom-[-42%]' />

        <div className='absolute bottom top-10 right-96 rounded-full w-44 h-44 bg-yellow-300
                        max-lg:right-5
                        max-sm:right-10 max-sm:w-20 max-sm:h-20 max-sm:top-28' />
        <div className='absolute bottom-24 right-44 rounded-full w-36 h-36 bg-red-500
                        max-lg:right-7
                        max-sm:right-5 max-sm:bottom-44 max-sm:h-20 max-sm:w-20' />

        <div className='absolute top-24 left-24 rounded-full w-36 h-36 bg-blue-500
                        max-lg:h-20 max-lg:w-20 max-lg:left-8
                        max-sm:left-16 max-sm:w-14 max-sm:h-14 ' />

        <div className='relative max-w-[2000px] w-full h-full mx-auto p-2 flex justify-center items-center text-white'>
            <div className='absolute font-[Amatic SC] flex justify-start items-start flex-col right-5'>
                <h1 className='text-8xl'>{title}</h1>
                <h3 className='mb-4 '>{underTitle}</h3>
                <h2>{introduction}</h2>
                <h2 className='mt-4'>{joke}</h2>
                <h2 >{text}</h2>
            </div>
        </div>
    </div>
  )
}

export default Hero