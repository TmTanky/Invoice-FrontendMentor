import { render, waitFor } from '@testing-library/react'
import Index from '../../pages/index'
import { TestThemeProvider } from '../../contexts/TestThemeProvider'
import { mockData } from '../../utils/index'

describe('Index/Home Page', () => {
  it('should render the page', async () => {
    const { getByTestId } = render(
      <TestThemeProvider>
        <Index
          fallback={{
            '/api/article': mockData
          }}
        />
      </TestThemeProvider>
    )

    // await expect(getByTestId('invoices')).toBeInTheDocument()
    await waitFor(() => {
      expect(getByTestId('invoices')).toBeInTheDocument()
    })
  })
})
