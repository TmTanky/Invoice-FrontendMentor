import { useState, useContext } from 'react'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import { AnimatePresence } from 'framer-motion'
import useSWR from 'swr'
import { Loader } from '@/components/Spinner'
import { InvoiceItem } from '@/components/Invoice'
import { Form } from '@/components/Form'
import { Toolbar } from '@/components/Toolbar'
import * as S from '@/components/Pages/Index/Index.styles'
import { InvoiceType } from '@/types/interfaces'
import { FormContextType, FormContext } from 'contexts'
import { getInvoices } from 'utils/fetch/invoices/getInvoices'
import { filterInvoice, fetcher, url } from '../utils'

type HomeProps = {
  invoices: InvoiceType[]
}

const Home = ({ invoices }: HomeProps) => {
  const { showForm, setShowForm } = useContext<FormContextType>(FormContext)
  const [filter, setFilter] = useState('')
  const { data } = useSWR<{ data: InvoiceType[] }>(
    `${url}/api/getInvoices`,
    fetcher,
    { fallback: invoices, revalidateOnMount: true }
  )

  if (!data) {
    return <Loader />
  }

  return (
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
      {filterInvoice(data?.data!, filter).map((item) => {
        return (
          <InvoiceItem
            id={item.id}
            key={item.id}
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
        )
      })}
      {filterInvoice(data?.data!, filter).length === 0 && (
        <p className='no-invoice'> No Invoices </p>
      )}
    </S.Right>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
  // const res = await fetch(`${url}/api/getInvoices`)
  // const data = (await res.json()) as {
  //   message: string
  //   data: InvoiceType[]
  //   type: string
  // }
  const invoices = JSON.parse(await getInvoices())
  // console.log(tae)
  return {
    props: {
      invoices
    }
  }
}
