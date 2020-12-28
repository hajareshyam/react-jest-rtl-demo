import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Blogs from './Blogs'
import { setupServer } from 'msw/node'
import { rest } from 'msw'

const server = setupServer(
    rest.get('/todos', (req, res, ctx) => {
        return res(
            ctx.json({
                data: [
                    {
                        userId: 1,
                        id: 1,
                        title: "delectus aut autem",
                        completed: false
                    },
                    {
                        userId: 1,
                        id: 2,
                        title: "quis ut nam facilis et officia qui",
                        completed: false
                    },
                    {
                        userId: 1,
                        id: 3,
                        title: "fugiat veniam minus",
                        completed: false
                    }]
            })
        )
    }),
)

beforeAll(() => server.listen())

afterEach(() => {
    server.resetHandlers()
    // window.localStorage.removeItem('token')
})

afterAll(() => server.close())

it('should allow a user to click button', async () => {
    const { getByTestId, getByText, queryByTestId, debug } = render(<Blogs />)

    const button = screen.getByText(/Fetch Blog/)
    expect(button).toBeInTheDocument()
    await userEvent.click(button)
    debug()
})