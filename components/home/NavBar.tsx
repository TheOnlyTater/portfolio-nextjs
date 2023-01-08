import {useState, useEffect} from 'react'
import Link from 'next/link'
import { RemoveScroll } from 'react-remove-scroll'

import { navLinks, email } from '../../config'

import { AiOutlineClose, AiOutlineMail } from 'react-icons/ai'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { BiMenuAltLeft } from 'react-icons/bi'
import { FiSettings } from 'react-icons/fi'
import { useRouter } from 'next/router'

const NavBar = ({
	mottext,
	lang,
	nor,
	ger,
	eng,
	them,
	old,
	mod,
	con
}:any) => {
	const { locale, locales, push } = useRouter()

	const [show, setShow] = useState(true);
	const [prevScroll, setPrevScroll] = useState(0);

	const [nav, setNav] = useState(false);
	const [showSettings, setShowSettings] = useState(false);
	const [displayThemes, setDisplayThemes] = useState(false);
	const [displayLanguages, setDisplayLanguages] = useState(false)

	const handleThemes = () => {
		setDisplayThemes(!displayThemes)
	}

	const handleLanguages = () => {
		setDisplayLanguages(!displayLanguages)
	}

	const handleNav = () => {
		setNav(!nav)
	}

	const handleSettings = () => {
		setShowSettings(!showSettings)
	}

	const handLanguageChange = (l:string) => {
		push('/', undefined, {locale:l})
	}

	useEffect(() => {
		if (nav) {
			setShowSettings(false)
		}
	},[])

	useEffect(() => {
		const CheckShow = () => {
			if (prevScroll <= window.scrollY){
				setShow(false)
				setShowSettings(false)
				setDisplayLanguages(false)
				setDisplayThemes(false)
			} else {
				setShow(true)
			}

			setPrevScroll(window.scrollY)
		}

		if (typeof window !== undefined) {
			window.addEventListener('scroll', CheckShow)

			return () => {
				window.removeEventListener('scroll', CheckShow)
			}
		}

	},[prevScroll])

	return (
    <div className={show ? 'absolute top-[-10px] ease-in duration-150 max-w-[1920px]' : 'absolute top-[-10%] ease-in duration-150'}>
		<div className='fixed w-full h-20 border-b-2 max-w-[1920px] border-black z-[100] bg-[url(https://images.unsplash.com/photo-1617565084998-13053b7d8510?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y3J1bXBsZWQlMjBwYXBlcnxlbnwwfHwwfHw%3D&w=1000&q=80)]'>
		<div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
			<div>

			</div>
			<div>
			<ul className='hidden md:flex items-center buttoncolor'>
				{
					navLinks.map(({name, url}, i) => (
						<Link href={url}>
							<li key={i} className='flex justify-center items-center h-14 w-40 ml-10 border-4 bg-[var(--button-color)] buttonShadow border-black text-lg uppercase hover:scale-105 duration-100'>{name}</li>
						</Link>
					))
				}
				<div onClick={handleSettings} className='ml-6 hover:scale-110 duration-100 cursor-pointer'>
				<FiSettings size={30} />
				</div>
			</ul>

			<div className={showSettings ? 'absolute right-0 top-[80px] flex justify-center items-center pr-14 bg-[url(https://images.unsplash.com/photo-1617565084998-13053b7d8510?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y3J1bXBsZWQlMjBwYXBlcnxlbnwwfHwwfHw%3D&w=1000&q=80)] border-4 border-black pb-4 ease-in duration-200 z-[10]'
									: 'absolute right-0 top-[80px] flex justify-center items-center pr-14 bg-[url(https://images.unsplash.com/photo-1617565084998-13053b7d8510?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y3J1bXBsZWQlMjBwYXBlcnxlbnwwfHwwfHw%3D&w=1000&q=80)] border-4 border-black pb-4 ease-in duration-200 z-[0] opacity-0'}>
			<div className={displayLanguages ? 'flex flex-col justify-center items-center h-48 w-40 ml-10 border-4 bg-[var(--button2-color)] buttonShadow border-black text-lg uppercase duration-100 mt-4'
											: 'flex flex-col justify-center items-center h-14 w-40 ml-10 border-4 bg-[var(--button2-color)] buttonShadow border-black text-lg uppercase hover:scale-105 duration-100 mt-4 cursor-pointer'}>
				<p onClick={handleLanguages}   className='py-2 hover:scale-105 cursor-pointer w-[100]'>{lang}</p>
				{
					displayLanguages ? (
						<div className='flex justify-center items-center flex-col bottom-[-60px] w-[100%]'>
							<a onClick={() => handLanguageChange('de')} className='w-[100%] py-2 border-4 border-black text-center hover:scale-110 cursor-pointer ease-in duration-100'>{ger}</a>
							<a onClick={() => handLanguageChange('en')} className='w-[100%] py-2 border-4 border-black text-center hover:scale-110 cursor-pointer ease-in duration-100'>{eng}</a>
						</div>
					) : (
						<div></div>
					)
				}
			</div>
			<div  className={displayThemes ? 'flex flex-col justify-center items-center h-42 w-40 ml-10 border-4 bg-[var(--button2-color)] buttonShadow border-black text-lg uppercase duration-100 mt-4' 
										: 'flex flex-col justify-center items-center h-14 w-40 ml-10 border-4 bg-[var(--button2-color)] buttonShadow border-black text-lg uppercase hover:scale-105 duration-190 mt-4 cursor-pointer'}>
				<p onClick={handleThemes} className='py-2 hover:scale-105 cursor-pointer w-[100]'>{them}</p>
				{
					displayThemes ? (
						<div className='flex justify-center items-center flex-col bottom-[-60px] w-[100%]'>
							<a className='w-[100%] py-2 border-4 border-black text-center hover:scale-110 cursor-pointer ease-in duration-100'>{old}</a>
							<a className='w-[100%] py-2 border-4 border-black text-center hover:scale-110 cursor-pointer ease-in duration-100'>{mod}</a>
						</div>
					) : (
						<div></div>
					)
				}
			</div>
		</div>

			<div onClick={handleNav} className='border-4 border-black md:hidden cursor-pointer hover:scale-110'>
				<BiMenuAltLeft size={30} />
			</div>
			</div>
		</div>
		<RemoveScroll enabled={nav}>
		<div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
			<div className={nav ? 'fixed left-0 top-0 w-[80%] sm:w-[65%] m:w-[50%] h-screen bg-[url(https://images.unsplash.com/photo-1617565084998-13053b7d8510?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y3J1bXBsZWQlMjBwYXBlcnxlbnwwfHwwfHw%3D&w=1000&q=80)] p-10 ease-in duration-500'
								: 'fixed left-[-100%] top-0 w-[80%] sm:w-[65%] m:w-[50%] h-screen bg-[url(https://images.unsplash.com/photo-1617565084998-13053b7d8510?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y3J1bXBsZWQlMjBwYXBlcnxlbnwwfHwwfHw%3D&w=1000&q=80)] p-10 ease-in duration-500'}>
			<div className='ml-4'>
				<div className='flex w-full items-center justify-between'>
					<div/>
				<div onClick={handleNav} className='border-4 border-black buttonShadow bg-[var(--highlight-color)] p-2 cursor-pointer hover:scale-110 duration-100'>
					<AiOutlineClose size={30} />
				</div>
				</div>
				<div className='border-b border-gray-300 my-4 '>
					<p className='w-[85%] md:w-[90%] p-4 border-2 border-black bg-[var(--text-bg-color)]'>{mottext}</p>
				</div>
			</div>
			<div className='py-4 flex flex-col'>
				<ul className='w-[100%] uppercase flex flex-wrap'>
				{
					navLinks.map(({name, url}, i) => (
					<Link key={i} href={url}>
						<li className=' flex justify-center items-center h-14 w-40 ml-4 border-4 bg-[var(--button-color)] buttonShadow border-black text-lg uppercase hover:scale-105 duration-100 mt-4'>{name}</li>
					</Link>
					))
				}
				</ul>
				<div className='flex flex-wrap mt-10 z-[200]'>
					<div className={displayLanguages ? 'flex flex-col justify-center items-center w-40 ml-4 border-4 bg-[var(--button2-color)] buttonShadow border-black text-lg uppercase duration-100 mt-4'
													: 'flex flex-col justify-center items-center ml-4 h-14 w-40 border-4 bg-[var(--button2-color)] buttonShadow border-black text-lg uppercase hover:scale-105 duration-100 mt-4 cursor-pointer'}>
						<p onClick={handleLanguages}   className='py-2 hover:scale-105 cursor-pointer w-[100]'>{lang}</p>
						{
							displayLanguages ? (
								<div className='flex justify-center items-center flex-col bottom-[-60px] w-[100%]'>
									<a className='w-[100%] py-2 border-4 border-black text-center hover:scale-110 cursor-pointer ease-in duration-100'>{ger}</a>
									<a className='w-[100%] py-2 border-4 border-black text-center hover:scale-110 cursor-pointer ease-in duration-100'>{eng}</a>
								</div>
							) : (
								<div></div>
							)
						}
					</div>
					<div className={displayThemes ? 'flex flex-col justify-center items-center max-h-26  w-40 ml-4 border-4 bg-[var(--button2-color)] buttonShadow border-black text-lg uppercase duration-100 mt-4'
												: 'flex flex-col justify-center items-center ml-4 h-14 w-40 border-4 bg-[var(--button2-color)] buttonShadow border-black text-lg uppercase hover:scale-105 duration-100 mt-4 cursor-pointer'}>
						<p onClick={handleThemes} className='py-2 hover:scale-105 cursor-pointer w-[100]'>{them}</p>
						{
							displayThemes ? (
								<div className='flex justify-center items-center flex-col bottom-[-60px] w-[100%]'>
									<a className='w-[100%] py-2 border-4 border-black text-center hover:scale-110 cursor-pointer ease-in duration-100'>{old}</a>
									<a className='w-[100%] py-2 border-4 border-black text-center hover:scale-110 cursor-pointer ease-in duration-100'>{mod}</a>
								</div>
							) : (
								<div />
							)
						}
					</div>
				</div>
				<div className={displayLanguages || displayThemes ? 'hidden' : 'pt-20 ml-4 max-w-[80%]'}>
				<p className='uppercase tracking-widest p-4 border-2 border-black bg-[var(--text-bg-color)]'>{con}</p>
				<div className='flex items-center justify-between my-4'>
					<a href='https://no.linkedin.com/' target='_blank' className='border-2 bg-[var(--highlight-color)] border-black p-3 cursor-pointer hover:scale-125 hover:bg-[#0072b1] ease-in duration-100'>
						<FaLinkedinIn />
					</a>
					<a href='https://github.com/TheOnlyTater' target='_blank' className='border-2 bg-[var(--highlight-color)] border-black p-3 cursor-pointer hover:scale-125 hover:bg-[#fffbed] ease-in duration-100'>
						<FaGithub />
					</a>
					<a href={'mailto:' + email} className='border-2 bg-[var(--highlight-color)] border-black p-3 cursor-pointer hover:scale-125 hover:bg-[#b66eff] ease-in duration-100'>
						<AiOutlineMail />
					</a>
					{/*
					<div className='border-2 bg-[var(--highlight-color)] border-black p-3 cursor-pointer hover:scale-125 hover:bg-[#4dffcc] ease-in duration-100'>
						<BsFillPersonLinesFill />
					</div>
					*/}
				</div>
				</div>
			</div>
			</div>
		</div>
		</RemoveScroll>
		</div>
    </div>
  )
}

export default NavBar