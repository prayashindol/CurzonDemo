'use client'
import { navLinks } from '@/app/api/navlink'
import { Icon } from '@iconify/react'
import Link from 'next/link'
import { useEffect, useRef, useState, useCallback } from 'react'
import NavLink from './Navigation/NavLink'
import { useTheme } from 'next-themes'
import { usePathname } from 'next/navigation'

const Header: React.FC = () => {
  const [sticky, setSticky] = useState(false)
  const [navbarOpen, setNavbarOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const pathname = usePathname()

  const sideMenuRef = useRef<HTMLDivElement>(null)

  const handleClickOutside = (event: MouseEvent) => {
    if (sideMenuRef.current && !sideMenuRef.current.contains(event.target as Node)) {
      setNavbarOpen(false)
    }
  }

  const handleScroll = useCallback(() => {
    setSticky(window.scrollY >= 50)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [handleScroll])

  const isHomepage = pathname === '/'

  return (
    <header className={`fixed h-20 sm:h-24 py-1 z-50 w-full bg-transparent transition-all duration-300 lg:px-0 px-3 sm:px-4 ${sticky ? "top-2 sm:top-3" : "top-0"}`}>
      <nav className={`container mx-auto max-w-8xl flex items-center justify-between py-3 sm:py-4 duration-300 ${sticky ? "shadow-lg bg-white dark:bg-dark rounded-full top-5 px-3 sm:px-4 " : "shadow-none top-0"}`}>
        <div className='flex justify-between items-center gap-2 w-full'>
          <div>
            <Link href='/' className="flex items-center gap-2">
              <Icon
                icon="solar:city-bold"
                width={28}
                height={28}
                className={`${isHomepage ? sticky ? "text-dark dark:text-white" : "text-white" : "text-dark dark:text-white"}`}
              />
              <span className={`text-lg sm:text-xl md:text-2xl font-bold ${isHomepage ? sticky ? "text-dark dark:text-white" : "text-white" : "text-dark dark:text-white"}`}>
                Curzon
              </span>
            </Link>
          </div>
          <div className='flex items-center gap-2 sm:gap-4 md:gap-6'>
            <button
              className='hover:cursor-pointer p-1'
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              <Icon
                icon={'solar:sun-bold'}
                width={24}
                height={24}
                className={`dark:hidden block sm:w-8 sm:h-8 ${isHomepage
                  ? sticky
                    ? 'text-dark'
                    : 'text-white'
                  : 'text-dark'
                  }`}
              />
              <Icon
                icon={'solar:moon-bold'}
                width={24}
                height={24}
                className='dark:block hidden text-white sm:w-8 sm:h-8'
              />
            </button>
            <div className={`hidden lg:block`}>
              <Link href='tel:+447877227073' className={`text-sm md:text-base text-inherit flex items-center gap-2 border-r pr-4 md:pr-6 ${isHomepage
                ? sticky
                  ? 'text-dark dark:text-white hover:text-primary border-dark dark:border-white'
                  : 'text-white hover:text-primary border-white'
                : 'text-dark hover:text-primary border-dark'
                }`}
              >
                <Icon icon={'ph:phone-bold'} width={20} height={20} className="md:w-6 md:h-6" />
                <span className="hidden xl:inline">+44 7877 227073</span>
                <span className="xl:hidden">Call</span>
              </Link>
            </div>
            <div>
              <button
                onClick={() => setNavbarOpen(!navbarOpen)}
                className={`flex items-center gap-2 sm:gap-3 px-3 py-2 sm:px-5 sm:py-3 rounded-full text-sm sm:text-base font-semibold hover:cursor-pointer border transition-all duration-300 ${isHomepage
                  ? sticky
                    ? 'text-white bg-dark dark:bg-white dark:text-dark dark:hover:text-white dark:hover:bg-dark hover:text-dark hover:bg-white border-dark dark:border-white'
                    : 'text-dark bg-white dark:text-dark hover:bg-transparent hover:text-white border-white'
                  : 'bg-dark text-white hover:bg-transparent hover:text-dark dark:bg-white dark:text-dark dark:hover:bg-transparent dark:hover:text-white'
                  }`}
                aria-label='Toggle mobile menu'>
                <span>
                  <Icon icon={'ph:list'} width={20} height={20} className="sm:w-6 sm:h-6" />
                </span>
                <span className='hidden sm:block'>Menu</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {
        navbarOpen && (
          <div className='fixed top-0 left-0 w-full h-full bg-black/50 z-40' />
        )
      }

      <div
        ref={sideMenuRef}
        className={`fixed top-0 right-0 h-full w-full bg-dark shadow-lg transition-transform duration-300 max-w-2xl ${navbarOpen ? 'translate-x-0' : 'translate-x-full'} z-50 px-6 sm:px-12 md:px-20 overflow-auto no-scrollbar`}
      >
        <div className="flex flex-col h-full justify-between">
          <div className="">
            <div className='flex items-center justify-start py-10'>
              <button
                onClick={() => setNavbarOpen(false)}
                aria-label='Close mobile menu'
                className='bg-white p-3 rounded-full hover:cursor-pointer'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'>
                  <path
                    fill='none'
                    stroke='black'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              </button>
            </div>
            <nav className='flex flex-col items-start gap-4'>
              <ul className='w-full'>
                {navLinks.map((item, index) => (
                  <NavLink key={index} item={item} onClick={() => setNavbarOpen(false)} />
                ))}
                <li className='flex items-center gap-4'>
                  <Link href="/signin" className='py-4 px-8 bg-primary text-base leading-4 block w-fit text-white rounded-full border border-primary font-semibold mt-3 hover:bg-transparent hover:text-primary duration-300'>
                    Sign In
                  </Link>
                  <Link href="/" className='py-4 px-8 bg-transparent border border-primary text-base leading-4 block w-fit text-primary rounded-full font-semibold mt-3 hover:bg-primary hover:text-white duration-300'>
                    Sign up
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className='flex flex-col gap-2 my-8 sm:my-16 text-white'>
            <p className='text-sm sm:text-base font-normal text-white/40'>
              Contact
            </p>
            <Link href="mailto:hello@curzon.com" className='text-sm sm:text-base font-medium text-inherit hover:text-primary transition-colors break-all'>
              hello@curzon.com
            </Link>
            <Link href="tel:+447877227073" className='text-sm sm:text-base font-medium text-inherit hover:text-primary transition-colors'>
              +44 7877 227073
            </Link>
          </div>
        </div>
      </div>
    </header >
  )
}

export default Header
