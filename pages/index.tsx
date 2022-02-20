import { useState } from 'react'
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
import { filterInvoice, fetcher } from '../utils'

type HomeProps = {
  invoices: InvoiceType[]
}

const Home = ({ invoices }: HomeProps) => {
  const [showForm, setShowForm] = useState(false)
  const [filter, setFilter] = useState('')
  const { data } = useSWR<{ data: InvoiceType[] }>(
    '/api/getInvoices',
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

// Home.defaultProps = {
//   invoices: []
// }

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('http://localhost:3000/api/getInvoices')
  const data = (await res.json()) as {
    message: string
    data: InvoiceType[]
    type: string
  }
  return {
    props: {
      invoices: data.data
    }
  }
}
