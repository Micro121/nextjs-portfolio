import { BiMoon, BiMenu, BiSun } from 'react-icons/bi'
import { useState, useEffect, useRef } from 'react'
import {setColor, toggleNav, toggleTheme} from '@/utils'
import { useRouter } from 'next/router'
import { Container } from '@/layouts'
import Navbar from '@/components/Navbar'
import Link from 'next/link'

export default function Header() {
  const navRef = useRef()
  const [isDark, setIsDark] = useState(true)
  const { query } = useRouter()

  // check of what we get from localstorage
  // this used to prevent double click to swicth between dark mode
  useEffect(() => {
    if (localStorage.getItem('NJP_ColorTheme') === 'dark') {
      setIsDark(false)
      setColor()
    } else {
      setIsDark(true)
      setColor()
    }
  }, [])

  return (
    <Container header>
      <Link href='/'>
        <a className='text-lg sm:text-xl lg:text-2xl font-medium hover:text-blue-500 dark:hover:text-pink-500 text-gray-900 dark:text-gray-200'>
          Your Name
        </a>
      </Link>

      <Container navContainer>
        <Navbar refHook={navRef} query={query} />
        <Container btnWrapper>
          <BtnToggler onEvent={() => toggleTheme(isDark, setIsDark)}>{isDark ? <BiMoon /> : <BiSun />}</BtnToggler>
          {query.id ? null : (
            <BtnToggler classes='lg:hidden' onEvent={() => toggleNav(navRef)}>
              <BiMenu />
            </BtnToggler>
          )}
        </Container>
      </Container>
    </Container>
  )
}


function BtnToggler ({ children, classes = '', onEvent }){
  return (
    <div
      onClick={onEvent}
      className={`grid place-items-center w-10 h-10 sm:w-12 sm:h-12 text-sm sm:text-base lg:text-lg rounded-full cursor-pointer text-gray-900 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 ${classes}`}>
      {children}
    </div>
  )
}