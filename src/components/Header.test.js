import {screen, render} from "@testing-library/react"
import Header from './Header' 
import { BrowserRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event'

describe("<Header />", () => {
    it("Render without crashing", () => {
        render(<Header/>)
        const showLink = screen.getByText(/See All The Cats/i)
        expect(showLink).toBeInTheDocument()
    })
    it("Has Clickable Links", () => {
        render(
        <BrowserRouter>
            <Header />
        </BrowserRouter>
              )
              userEvent.click(screen.getByText("See All The Cats"))
              expect(screen.getByText("See All The Cats")).toBeInTheDocument()
              userEvent.click(screen.getByText("Add A Cat"))
              expect(screen.getByText("Add A Cat")).toBeInTheDocument()
              userEvent.click(screen.getByText("Edit A Cat"))
              expect(screen.getByText("Edit A Cat")).toBeInTheDocument()
    })
})

