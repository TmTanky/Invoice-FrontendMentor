import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
// eslint-disable-next-line camelcase
import useSWR, { SWRConfig, unstable_serialize } from 'swr'
import { Info } from '@/components/Invoice/Info/Info'
import { Button } from '@/components/Button'
import { Options } from '@/components/Invoice/Options/Options'
import * as S from '@/components/Pages/Invoice/index.styles'
import { Loader } from '@/components/Spinner'
import { InvoiceType } from '@/types/interfaces'
// import { useInvoice } from '@/hooks/useInvoice'
import { establishConnection } from '@/lib/mongo'
import { fetcher, getInvoice, getInvoices } from '../../utils'

type InvoiceItemPageProps = {
  fallback: {
    [key: string]: InvoiceType
  }
}

const InvoiceItemPage = ({ fallback }: InvoiceItemPageProps) => {
  const router = useRouter()
  const { data } = useSWR<{ data: InvoiceType }>(
    `/api/getInvoice/${router.query.id}`,
    fetcher
  )

  if (!data) {
    return <Loader />
  }

  return (
    <SWRConfig value={{ fallback }}>
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
            <Button status={data.data.status}>
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
    </SWRConfig>
  )
}

export default InvoiceItemPage

export const getStaticPaths: GetStaticPaths = async () => {
  const { User, List } = await establishConnection()
  const data = JSON.parse(await getInvoices(User, List)) as InvoiceType[]
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
  const { User, List } = await establishConnection()
  const { id } = params as { id: string }
  const invoice = JSON.parse(await getInvoice(id, User, List))
  return {
    props: {
      fallback: {
        [unstable_serialize([`api`, 'invoice', id])]: invoice
      }
    }
  }
}
