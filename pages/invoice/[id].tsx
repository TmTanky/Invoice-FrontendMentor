import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Info } from '../../components/Invoice/Info/Info'
import { Button } from '../../components/Button'
import * as S from '../../components/Pages/Invoice/index.styles'
import { fakeData } from '../../data'
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
          <button className='go-back-btn' onClick={() => router.back()} type='button'> Go back </button>
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
  const paths = fakeData.map((invoice) => ({
    params: { id: invoice.id }
  }))

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string }
  const invoice = fakeData.find((item) => item.id === id)

  return {
    props: {
      invoice
    }
  }
}
