import React, { Dispatch, SetStateAction } from 'react'
import Image from 'next/image'
import { useTheme } from 'styled-components'
import { BiBasketball } from 'react-icons/bi'
import { IoPersonCircle } from 'react-icons/io5'
import * as S from './Sidebar.styles'

type SidebarProps = {
  setTheme: Dispatch<SetStateAction<string>>
}

export const Sidebar = ({ setTheme }: SidebarProps) => {
  const { theme } = useTheme() as { theme: 'light' | 'dark' }

  return (
    <S.Container>
      <S.UpperContainer>
        <div className='logo'>
          <BiBasketball size={60} color='white' />
        </div>
      </S.UpperContainer>
      <S.LowerContainter>
        <S.ThemeToggle>
          <Image
            src={`/images/icon-${theme === 'light' ? 'moon' : 'sun'}.svg`}
            height={25}
            width={25}
            alt='theme-toggle'
            onClick={() =>
              setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
            }
          />
        </S.ThemeToggle>
        <S.Avatar>
          <IoPersonCircle color='white' size={40} />
        </S.Avatar>
      </S.LowerContainter>
    </S.Container>
  )
}
