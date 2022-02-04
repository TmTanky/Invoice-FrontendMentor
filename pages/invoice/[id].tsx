import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { fakeData } from '../../data'
import { InvoiceType } from '../../types/interfaces'

type InvoiceItemPageProps = {
  invoice: InvoiceType
}

const InvoiceItemPage = ({ invoice }: InvoiceItemPageProps) => {
  return <h1> {invoice.id} </h1>
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
