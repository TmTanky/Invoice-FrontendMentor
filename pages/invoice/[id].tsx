import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Info } from '../../components/Invoice/Info/Info'
import { Button } from '../../components/Button'
import * as S from '../../components/Pages/Invoice/index.styles'
import { InvoiceType } from '../../types/interfaces'

type InvoiceItemPageProps = {
  invoice: InvoiceType
}

const InvoiceItemPage = ({ invoice }: InvoiceItemPageProps) => {
  const router = useRouter()

  return (
    <div>
      <Head>
        <title> #{invoice.id} | Invoice </title>
      </Head>
      <S.Container>
        <div className='go-back'>
          <button
            className='go-back-btn'
            onClick={() => router.back()}
            type='button'
          >
            Go back
          </button>
          <Button status={invoice.status}>
            {invoice.status.toUpperCase()}
          </Button>
        </div>
        <Info invoice={invoice} />
      </S.Container>
    </div>
  )
}

export default InvoiceItemPage

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch('http://localhost:3000/api/getInvoices')
  const data = (await res.json()) as { message: string; data: InvoiceType[] }
  const paths = data.data.map((invoice) => {
    return {
      params: { id: invoice.id }
    }
  })

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string }
  const res = await fetch(`http://localhost:3000/api/getInvoice`, {
    method: 'POST',
    body: JSON.stringify({ id })
  })
  const data = (await res.json()) as {
    message: string
    data: InvoiceType
    type: string
  }
  return {
    props: {
      invoice: data.data
    }
  }
}
