import { render } from '@testing-library/react'
import { InvoiceItem } from '@/components/Invoice'
import { TestThemeProvider } from '../../../contexts/TestThemeProvider'

describe('It will render Invoice Items', () => {
  it('should render the item with a paid status', () => {
    const { getByTestId } = render(
      <TestThemeProvider>
        <InvoiceItem
          dueDate={new Date().toLocaleDateString()}
          id='1'
          name='John Cena'
          status='paid'
          total={100}
        />
      </TestThemeProvider>
    )

    expect(getByTestId('status')).toHaveStyle(
      'background-color: rgba(51, 214, 159, 0.06)'
    )
    expect(getByTestId('id')).toBeInTheDocument()
  })

  it('should render the item with a draft status', () => {
    const { getByTestId } = render(
      <TestThemeProvider>
        <InvoiceItem
          dueDate={new Date().toLocaleDateString()}
          id='1'
          name='John Cena'
          status='draft'
          total={100}
        />
      </TestThemeProvider>
    )

    expect(getByTestId('status')).toHaveStyle(
      'background-color: rgba(223, 227, 250, 0.06)'
    )
    expect(getByTestId('id')).toBeInTheDocument()
  })

  it('should render the item with a pending status', () => {
    const { getByTestId } = render(
      <TestThemeProvider>
        <InvoiceItem
          dueDate={new Date().toLocaleDateString()}
          id='1'
          name='John Cena'
          status='pending'
          total={100}
        />
      </TestThemeProvider>
    )

    expect(getByTestId('status')).toHaveStyle(
      'background-color: rgba(255, 143, 0, 0.06)'
    )
    expect(getByTestId('id')).toBeInTheDocument()
  })
})
