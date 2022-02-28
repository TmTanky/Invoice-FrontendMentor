import React, { ReactNode, useContext, Dispatch, SetStateAction } from 'react'
import { AnimatePresence } from 'framer-motion'
import { FormContext, FormContextType } from 'contexts'
import { Sidebar } from '../Sidebar'
import { Form } from '../Form'
import * as S from './Layout.styles'

type LayoutProps = {
  setTheme: Dispatch<SetStateAction<string>>
  children: ReactNode
}

export const Layout = ({ children, setTheme }: LayoutProps) => {
  const { showForm, setShowForm } = useContext<FormContextType>(FormContext)

  return (
    <div>
      <S.RootContainer>
        <div className='first-section'>
          <Sidebar setTheme={setTheme} />
        </div>
        {showForm && (
          <AnimatePresence>
            <Form setShowForm={setShowForm} />
          </AnimatePresence>
        )}
        <div className='second-section'>{children}</div>
      </S.RootContainer>
    </div>
  )
}
