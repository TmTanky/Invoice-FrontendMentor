import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import useSWR from 'swr'
import { Info } from '@/components/Invoice/Info/Info'
import { Button } from '@/components/Button'
import * as S from '@/components/Pages/Invoice/index.styles'
import { Loader } from '@/components/Spinner'
import { InvoiceType } from '@/types/interfaces'
import { fetcher } from '../../utils'

type InvoiceItemPageProps = {
  invoice: InvoiceType
}

const InvoiceItemPage = ({ invoice }: InvoiceItemPageProps) => {
  const router = useRouter()
  const { data } = useSWR<{ data: InvoiceType }>(
    `/api/getInvoice/${router.query.id}`,
    fetcher,
    { fallback: invoice, revalidateOnMount: true }
  )

  if (!data) {
    return <Loader />
  }

  return (
    <div>
      <Head>
        <title> #{data.data.id} | Invoice </title>
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
            {data.data.status.toUpperCase()}
          </Button>
        </div>
        <Info invoice={data.data} />
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
  const res = await fetch(`http://localhost:3000/api/getInvoice/${id}`)
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
