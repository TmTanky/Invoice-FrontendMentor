import { useState } from 'react'
import { GetStaticProps } from 'next'
import { AnimatePresence } from 'framer-motion'
import Head from 'next/head'
import { InvoiceItem } from '../components/Invoice'
import { Form } from '../components/Form'
import { Toolbar } from '../components/Toolbar'
import * as S from '../components/Pages/Index/Index.styles'
import { InvoiceType } from '../types/interfaces'
import { filterInvoice } from '../utils'

type HomeProps = {
  invoices: InvoiceType[]
}

const Home = ({ invoices }: HomeProps) => {
  const [showForm, setShowForm] = useState(false)
  const [filter, setFilter] = useState('')

  return (
    <S.Right>
      <Head>
        <title> Invoice | FrontendMentor </title>
      </Head>
      <Toolbar
        setFilter={setFilter}
        setShowForm={setShowForm}
        invoiceTotal={invoices.length}
      />
      {showForm && (
        <AnimatePresence exitBeforeEnter initial={showForm}>
          <Form setShowForm={setShowForm} />
        </AnimatePresence>
      )}
      {filterInvoice(invoices, filter).map((item) => {
        return (
          <InvoiceItem
            id={item.id}
            key={item.id}
            name={item.fullName}
            total={4}
            dueDate={new Date().toLocaleString('en', {
              dateStyle: 'medium'
            })}
            status={item.status}
          />
        )
      })}
      {filterInvoice(invoices, filter).length === 0 && (
        <p className='no-invoice'> No Invoices </p>
      )}
    </S.Right>
  )
}

export default Home

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
