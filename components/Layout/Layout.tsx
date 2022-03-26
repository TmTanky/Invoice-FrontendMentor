import React, {
  ReactNode,
  useContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState
} from 'react'
import { AnimatePresence } from 'framer-motion'
import { FormContext, FormContextType } from 'contexts'
import { SWRConfig } from 'swr'
import { Sidebar } from '../Sidebar'
import { Form } from '../Form'
import * as S from './Layout.styles'

type LayoutProps = {
  setTheme: Dispatch<SetStateAction<string>>
  children: ReactNode
}

export const Layout = ({ children, setTheme }: LayoutProps) => {
  const { showForm, setShowForm } = useContext<FormContextType>(FormContext)
  const [showChild, setShowChild] = useState(false)

  useEffect(() => {
    setShowChild(true)
  }, [showChild])

  return (
    <SWRConfig>
      <S.RootContainer>
        <div className='first-section'>
          <Sidebar setTheme={setTheme} />
        </div>
        {showChild && (
          <AnimatePresence initial={false}>
            {showForm && <Form setShowForm={setShowForm} />}
          </AnimatePresence>
        )}
        <div className='second-section'>{children}</div>
      </S.RootContainer>
    </SWRConfig>
  )
}
