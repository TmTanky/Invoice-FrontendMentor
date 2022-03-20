import { useState, useContext } from 'react'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import { AnimatePresence } from 'framer-motion'
import useSWR, { SWRConfig } from 'swr'
import { Loader } from '@/components/Spinner'
import { InvoiceItem } from '@/components/Invoice'
import { Form } from '@/components/Form'
import { Toolbar } from '@/components/Toolbar'
import * as S from '@/components/Pages/Index/Index.styles'
import { InvoiceType } from '@/types/interfaces'
import { FormContextType, FormContext } from '../contexts'
import { establishConnection } from '../lib/mongo'
import { filterInvoice, fetcher, getInvoices } from '../utils'

type HomeProps = {
  fallback: {
    [key: string]: InvoiceType[]
  }
}

const Home = ({ fallback }: HomeProps) => {
  const { showForm, setShowForm } = useContext<FormContextType>(FormContext)
  const [filter, setFilter] = useState('')
  const { data } = useSWR<{ data: InvoiceType[] }>(`/api/getInvoices`, fetcher)
  if (!data) {
    return <Loader />
  }

  return (
    <SWRConfig value={{ fallback }}>
      <S.Right>
        <Head>
          <title> Invoice | FrontendMentor </title>
        </Head>
        <Toolbar
          setFilter={setFilter}
          setShowForm={setShowForm}
          invoiceTotal={data?.data?.length!}
        />
        {showForm && (
          <AnimatePresence exitBeforeEnter initial={showForm}>
            <Form setShowForm={setShowForm} />
          </AnimatePresence>
        )}
        <ul data-testid='invoices'>
          {filterInvoice(data?.data!, filter).map((item) => {
            return (
              <li data-testid={`invoice-${item.id}`} key={item.id}>
                <InvoiceItem
                  id={item.id}
                  name={item.fullName}
                  total={item.list.items.list.reduce(
                    (acc, curr) => acc + (curr.total as number),
                    0
                  )}
                  dueDate={new Date(item.list.createdAt).toLocaleString('en', {
                    dateStyle: 'medium'
                  })}
                  status={item.status}
                />
              </li>
            )
          })}
        </ul>
        {filterInvoice(data?.data!, filter).length === 0 && (
          <p className='no-invoice'> No Invoices </p>
        )}
      </S.Right>
    </SWRConfig>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
  const { User, List } = await establishConnection()
  const invoices = JSON.parse(await getInvoices(User, List)) as InvoiceType[]
  return {
    props: {
      fallback: {
        '/api/getInvoices': invoices
      }
    }
  }
}
