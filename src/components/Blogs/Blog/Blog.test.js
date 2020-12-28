import React from 'react'
import { getAllByTestId, getByTestId, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Blog from './Blog'

it('Load Blogs Data', async () => {
    const blogs = [
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
    render(<Blog blogs={blogs} />)
    expect(screen.findByText('delectus aut autem'))
})