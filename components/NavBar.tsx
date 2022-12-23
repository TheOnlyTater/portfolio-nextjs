import {useState, useEffect} from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { navLinks, email } from '../config'

import { AiOutlineClose, AiOutlineMail } from 'react-icons/ai'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { BiMenuAltLeft } from 'react-icons/bi'
import { FiSettings } from 'react-icons/fi'

const NavBar = () => {
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
    <div className={show ? 'absolute top-0 ease-in duration-150' : 'absolute top-[-10%] ease-in duration-150'}>
		<div className='fixed w-full h-20 border-b-2 border-black z-[100] bg-[url(https://images.unsplash.com/photo-1617565084998-13053b7d8510?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y3J1bXBsZWQlMjBwYXBlcnxlbnwwfHwwfHw%3D&w=1000&q=80)]'>
		<div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
			<Image src='/../public/assets/navlogo.png' alt='/' width={60} height={60} />
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
			
			<div onClick={handleNav} className='border-4 border-black md:hidden cursor-pointer hover:scale-110'>
				<BiMenuAltLeft size={30} />
			</div>
			</div>
		</div>

		<div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
			<div className={nav ? 'fixed left-0 top-0 w-[80%] sm:w-[65%] m:w-[50%] h-screen bg-[url(https://images.unsplash.com/photo-1617565084998-13053b7d8510?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y3J1bXBsZWQlMjBwYXBlcnxlbnwwfHwwfHw%3D&w=1000&q=80)] p-10 ease-in duration-500'
								: 'fixed left-[-100%] top-0 w-[80%] sm:w-[65%] m:w-[50%] h-screen bg-[url(https://images.unsplash.com/photo-1617565084998-13053b7d8510?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y3J1bXBsZWQlMjBwYXBlcnxlbnwwfHwwfHw%3D&w=1000&q=80)] p-10 ease-in duration-500'}>
			<div className='ml-4'>
				<div className='flex w-full items-center justify-between'>
				<Image src='/../public/assets/navlogo.png' alt='/' width={60} height={60} />
				<div onClick={handleNav} className='border-4 border-black buttonShadow bg-[var(--highlight-color)] p-2 cursor-pointer hover:scale-110 duration-100'>
					<AiOutlineClose size={30} />
				</div>
				</div>
				<div className='border-b border-gray-300 my-4 '>
				<p className='w-[85%] md:w-[90%] p-4 border-2 border-black bg-[var(--text-bg-color)]'>Let's build somthing legendary together</p>
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
				<div className='flex flex-wrap mt-10'>
					<div className={displayLanguages ? 'flex flex-col justify-center items-center w-40 ml-4 border-4 bg-[var(--button2-color)] buttonShadow border-black text-lg uppercase duration-100 mt-4' 
													: 'flex flex-col justify-center items-center ml-4 h-14 w-40 border-4 bg-[var(--button2-color)] buttonShadow border-black text-lg uppercase hover:scale-105 duration-100 mt-4 cursor-pointer'}>
						<p onClick={handleLanguages}   className='py-2 hover:scale-105 cursor-pointer w-[100]'>language</p>
						{
							displayLanguages ? (
								<div className='flex justify-center items-center flex-col bottom-[-60px] w-[100%]'>
									<a className='w-[100%] py-2 border-4 border-black text-center hover:scale-110 cursor-pointer ease-in duration-100'>Norwegian</a>
									<a className='w-[100%] py-2 border-4 border-black text-center hover:scale-110 cursor-pointer ease-in duration-100'>German</a>
									<a className='w-[100%] py-2 border-4 border-black text-center hover:scale-110 cursor-pointer ease-in duration-100'>English</a>
								</div>
							) : (
								<div></div>
							)
						}
					</div>
					<div className={displayThemes ? 'flex flex-col justify-center items-center max-h-26  w-40 ml-4 border-4 bg-[var(--button2-color)] buttonShadow border-black text-lg uppercase duration-100 mt-4' 
												: 'flex flex-col justify-center items-center ml-4 h-14 w-40 border-4 bg-[var(--button2-color)] buttonShadow border-black text-lg uppercase hover:scale-105 duration-100 mt-4 cursor-pointer'}>
						<p onClick={handleThemes} className='py-2 hover:scale-105 cursor-pointer w-[100]'>Themes</p>
						{
							displayThemes ? (
								<div className='flex justify-center items-center flex-col bottom-[-60px] w-[100%]'>
									<a className='w-[100%] py-2 border-4 border-black text-center hover:scale-110 cursor-pointer ease-in duration-100'>OldSchool</a>
									<a className='w-[100%] py-2 border-4 border-black text-center hover:scale-110 cursor-pointer ease-in duration-100'>Modern</a>
								</div>
							) : (
								<div></div>
							)
						}
					</div>
				</div>
				<div className={displayLanguages || displayThemes ? 'hidden' : 'pt-40 ml-4 max-w-[80%]'}>
				<p className='uppercase tracking-widest p-4 border-2 border-black bg-[var(--text-bg-color)]'>Let's Connect!!!</p>
				<div className='flex items-center justify-between my-4'>
					<div className='border-2 bg-[var(--highlight-color)] border-black p-3 cursor-pointer hover:scale-125 hover:bg-[#0072b1] ease-in duration-100'>
					<FaLinkedinIn />
					</div>
					<div className='border-2 bg-[var(--highlight-color)] border-black p-3 cursor-pointer hover:scale-125 hover:bg-[#fffbed] ease-in duration-100'>
					<FaGithub />
					</div>
					<div className='border-2 bg-[var(--highlight-color)] border-black p-3 cursor-pointer hover:scale-125 hover:bg-[#b66eff] ease-in duration-100'>
					<AiOutlineMail />
					</div>
					<div className='border-2 bg-[var(--highlight-color)] border-black p-3 cursor-pointer hover:scale-125 hover:bg-[#4dffcc] ease-in duration-100'>
					<BsFillPersonLinesFill />
					</div>
				</div>
				</div>
			</div>
			</div>
		</div>
		</div>
		<div className={showSettings ? 'fixed flex justify-center items-center pr-14 bg-[url(https://images.unsplash.com/photo-1617565084998-13053b7d8510?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y3J1bXBsZWQlMjBwYXBlcnxlbnwwfHwwfHw%3D&w=1000&q=80)] border-4 border-black top-16 right-0 pb-4 ease-in duration-200' 
									: 'flex justify-center items-center h-14 ml-10 absolute top-[-5%] right-14 duration-500 bg-[url(https://images.unsplash.com/photo-1617565084998-13053b7d8510?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y3J1bXBsZWQlMjBwYXBlcnxlbnwwfHwwfHw%3D&w=1000&q=80)] ease-in duration-500'}>
			<div className={displayLanguages ? 'flex flex-col justify-center items-center h-48 w-40 ml-10 border-4 bg-[var(--button2-color)] buttonShadow border-black text-lg uppercase duration-100 mt-4' 
											: 'flex flex-col justify-center items-center h-14 w-40 ml-10 border-4 bg-[var(--button2-color)] buttonShadow border-black text-lg uppercase hover:scale-105 duration-100 mt-4 cursor-pointer'}>
				<p onClick={handleLanguages}   className='py-2 hover:scale-105 cursor-pointer w-[100]'>language</p>
				{
					displayLanguages ? (
						<div className='flex justify-center items-center flex-col bottom-[-60px] w-[100%]'>
							<a className='w-[100%] py-2 border-4 border-black text-center hover:scale-110 cursor-pointer ease-in duration-100'>Norwegian</a>
							<a className='w-[100%] py-2 border-4 border-black text-center hover:scale-110 cursor-pointer ease-in duration-100'>German</a>
							<a className='w-[100%] py-2 border-4 border-black text-center hover:scale-110 cursor-pointer ease-in duration-100'>English</a>
						</div>
					) : (
						<div></div>
					)
				}
			</div>
			<div  className={displayThemes ? 'flex flex-col justify-center items-center h-42 w-40 ml-10 border-4 bg-[var(--button2-color)] buttonShadow border-black text-lg uppercase duration-100 mt-4' 
										: 'flex flex-col justify-center items-center h-14 w-40 ml-10 border-4 bg-[var(--button2-color)] buttonShadow border-black text-lg uppercase hover:scale-105 duration-190 mt-4 cursor-pointer'}>
				<p onClick={handleThemes} className='py-2 hover:scale-105 cursor-pointer w-[100]'>Theme</p>
				{
					displayThemes ? (
						<div className='flex justify-center items-center flex-col bottom-[-60px] w-[100%]'>
							<a className='w-[100%] py-2 border-4 border-black text-center hover:scale-110 cursor-pointer ease-in duration-100'>OldSchool</a>
							<a className='w-[100%] py-2 border-4 border-black text-center hover:scale-110 cursor-pointer ease-in duration-100'>Modern</a>
						</div>
					) : (
						<div></div>
					)
				}
			</div>
		</div>
    </div>
  )
}

export default NavBar