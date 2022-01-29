import React from 'react'
import Image from 'next/image'
import { BiBasketball } from 'react-icons/bi'
import { IoPersonCircle } from 'react-icons/io5'
import { Form } from '../Form'
import * as S from './Sidebar.styles'

export const Sidebar = () => {
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
            src='/images/icon-moon.svg'
            height={25}
            width={25}
            alt='theme-toggle'
          />
        </S.ThemeToggle>
        <S.Avatar>
          <IoPersonCircle color='white' size={40} />
        </S.Avatar>
      </S.LowerContainter>
      <Form />
    </S.Container>
  )
}
