import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { LoginForm } from './LoginForm'
import {setupServer} from 'msw/node'
import {rest} from 'msw'

const fakeUserResponse = {token: 'fake_user_token'}
const server = setupServer(
  rest.post('/login', (req, res, ctx) => {
    const { username } = req.body
    return res(
      ctx.json({
        id: 'f79e82e8-c34a-4dc7-a49e-9fadc0979fda',
        username,
        firstName: 'John',
        lastName: 'Maverick',
      })
    )
  }),
)

beforeAll(() => server.listen())

afterEach(() => {
    server.resetHandlers()
    window.localStorage.removeItem('token')
  })

afterAll(() => server.close())

describe('LoginForm', () => {
  it('should allow a user to log in', async () => {
    render(<LoginForm />)

    await userEvent.type(screen.getByLabelText(/username/i), 'johnUser')

    userEvent.click(screen.getByRole('button', { name: /submit/i }))

    expect(await screen.findByText('f79e82e8-c34a-4dc7-a49e-9fadc0979fda')).toBeInTheDocument()
    expect(await screen.findByText('John')).toBeInTheDocument()
    expect(await screen.findByText('Maverick')).toBeInTheDocument()
  })
})
