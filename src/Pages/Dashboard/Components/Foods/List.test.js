import { MockedProvider } from '@apollo/client/testing'
import { render, screen } from '@testing-library/react'
// Local
import { FOOD_NAMES } from 'API/foods'
import List from './List'
import { ITEMS_PER_PAGE } from '../constants'

describe('Foods List', () => {
  it('Renders a list of foods', () => {
    const page = 1
    const take = ITEMS_PER_PAGE
    const skip = (page - 1) * ITEMS_PER_PAGE
    const graphData = {
      foods: [
        {
          name: 'Abiyuch, raw',
        },
        {
          name: 'Acerola juice, raw',
        },
        {
          name: 'Acerola, (west indian cherry), raw',
        },
        {
          name: 'Alfalfa seeds, sprouted, raw',
        },
        {
          name: 'Amaranth grain, cooked',
        },
      ],
    }
    const mocks = [
      {
        request: {
          query: FOOD_NAMES,
          variables: {
            take,
            skip,
          },
        },
        result: {
          data: graphData,
        },
      },
    ]

    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <List page={page} />
      </MockedProvider>
    )

    screen.debug()
    // expect(screen.getByText(graphData.foods[0].name)).toBeInTheDocument()
  })
})
