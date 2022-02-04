import type { NextPage } from 'next'
import { InvoiceItem } from '../components/InvoiceItem'
import * as S from '../components/Pages/Index/Index.styles'
// import { Toolbar } from '../components/Toolbar'
import { fakeData } from '../data'

const Home: NextPage = () => {
  return (
    <S.Right>
      {/* <Toolbar setShowForm={setShowForm} invoiceTotal={fakeData.length} /> */}
      {fakeData.map((item) => {
        return (
          <InvoiceItem
            id={item.id}
            key={item.id}
            name={item.user.name}
            total={item.items.total}
            dueDate={item.dueDate}
            status={item.status}
          />
        )
      })}
    </S.Right>
  )
}

export default Home
