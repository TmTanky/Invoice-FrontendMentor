import { render } from '@testing-library/react'
import { Options } from '../../../components/Invoice/Options/Options'
import { TestThemeProvider } from '../../../contexts/TestThemeProvider'
import { FormProvider } from '../../../contexts'
import { mockData } from '../../../utils'

describe('Option Component', () => {
  it('should render the Options component', () => {
    const { getByTestId } = render(
      <FormProvider>
        <TestThemeProvider>
          <Options
            id={mockData[0]._id}
            invoice={mockData[0]}
            listID={mockData[0].list.items._id}
          />
        </TestThemeProvider>
      </FormProvider>
    )
    expect(getByTestId('edit-btn')).toBeInTheDocument()
    expect(getByTestId('confirm-btn')).toBeInTheDocument()
  })

  test('should render the Options component and click Delete button to open Popup component then click Cancel button', async () => {
    const { getByTestId, queryByTestId } = render(
      <FormProvider>
        <TestThemeProvider>
          <Options
            id={mockData[0]._id}
            invoice={mockData[0]}
            listID={mockData[0].list.items._id}
          />
        </TestThemeProvider>
      </FormProvider>
    )
    expect(getByTestId('confirm-btn').click())
    expect(getByTestId('popup')).toBeInTheDocument()
    expect(getByTestId('cancel-popup').click())
    expect(queryByTestId('popup')).toBeFalsy()
  })
})
