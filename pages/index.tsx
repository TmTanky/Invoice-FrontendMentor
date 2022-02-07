import { useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { InvoiceItem } from '../components/Invoice'
import { Form } from '../components/Form'
import * as S from '../components/Pages/Index/Index.styles'
import { Toolbar } from '../components/Toolbar'
import { fakeData } from '../data'

const Home: NextPage = () => {
  const [showForm, setShowForm] = useState(false)

  return (
    <S.Right>
      <Head>
        <title> Invoice | FrontendMentor </title>
      </Head>
      <Toolbar setShowForm={setShowForm} invoiceTotal={fakeData.length} />
      {showForm && <Form setShowForm={setShowForm} />}
      {fakeData.map((item) => {
        return (
          <InvoiceItem
            id={item.id}
            key={item.id}
            name={item.user.name}
            total={item.total}
            dueDate={item.dueDate}
            status={item.status}
          />
        )
      })}
    </S.Right>
  )
}

export default Home
