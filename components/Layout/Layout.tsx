import React, { ReactNode, useContext } from 'react'
import { AnimatePresence } from 'framer-motion'
import { FormContext, FormContextType } from 'contexts'
import { Sidebar } from '../Sidebar'
import { Form } from '../Form'
import * as S from './Layout.styles'

type LayoutProps = {
  children: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  const { showForm, setShowForm } = useContext<FormContextType>(FormContext)

  return (
    <div>
      <S.RootContainer>
        <div className='first-section'>
          <Sidebar />
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
