import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import useSWR from 'swr'
import { Info } from '@/components/Invoice/Info/Info'
import { Button } from '@/components/Button'
import { Options } from '@/components/Invoice/Options/Options'
import * as S from '@/components/Pages/Invoice/index.styles'
import { Loader } from '@/components/Spinner'
import { InvoiceType } from '@/types/interfaces'
import { getInvoice } from 'utils/fetch/invoices/getInvoice'
import { getInvoices } from 'utils/fetch/invoices/getInvoices'
import { fetcher, url } from '../../utils'

type InvoiceItemPageProps = {
  invoice: InvoiceType
}

const InvoiceItemPage = ({ invoice }: InvoiceItemPageProps) => {
  const router = useRouter()
  const { data } = useSWR<{ data: InvoiceType }>(
    `${url}/api/getInvoice/${router.query.id}`,
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
        <Options
          invoice={data.data}
          id={data.data._id}
          listID={data.data.list.items._id}
        />
      </S.Container>
    </div>
  )
}

export default InvoiceItemPage

export const getStaticPaths: GetStaticPaths = async () => {
  // const res = await fetch(`${url}/api/getInvoices`)
  const data = JSON.parse(await getInvoices()) as InvoiceType[]
  // const data = (await res.json()) as { message: string; data: InvoiceType[] }
  const paths = data.map((invoice) => {
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
  const invoice = JSON.parse(await getInvoice(id))
  // const res = await fetch(`${url}/api/getInvoice/${id}`)
  // const data = (await res.json()) as {
  //   message: string
  //   data: InvoiceType
  //   type: string
  // }
  return {
    props: {
      invoice
    }
  }
}
