import '@testing-library/jest-dom'
import * as React from 'react'
import {rest} from 'msw'
import {setupServer} from 'msw/node'
import {render, fireEvent, screen} from '@testing-library/react'
import Login from './Login'


const fakeUserResponse = {token: 'fake_user_token'}
const server = setupServer(
  rest.post('/api/login', (req, res, ctx) => {
    return res(ctx.json(fakeUserResponse))
  }),
)

beforeAll(() => server.listen())

afterEach(() => {
    server.resetHandlers()
    window.localStorage.removeItem('token')
  })

afterAll(() => server.close())


test('allows the user to login successfully', async () => {
    render(<Login />)
  
    // fill out the form
    fireEvent.change(screen.getByLabelText(/username/i), {
      target: {value: 'chuck'},
    })
    fireEvent.change(screen.getByLabelText(/password/i), {
      target: {value: 'norris'},
    })
  
    fireEvent.click(screen.getByText(/submit/i))
  
    // just like a manual tester, we'll instruct our test to wait for the alert
    // to show up before continuing with our assertions.
    const alert = await screen.findByRole('alert')
  
    // .toHaveTextContent() comes from jest-dom's assertions
    // otherwise you could use expect(alert.textContent).toMatch(/congrats/i)
    // but jest-dom will give you better error messages which is why it's recommended
    expect(alert).toHaveTextContent(/congrats/i)
    expect(window.localStorage.getItem('token')).toEqual(fakeUserResponse.token)
  })
  