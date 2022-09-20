import {screen, render} from "@testing-library/react"
import NotFound from './NotFound' 
import { BrowserRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event'

describe("<NotFound />", () => {
    it("Render without crashing", () => {
// Arrange
    // const alert = document.createElement("<Alert>")




        render(<NotFound/>)
        const showLink = screen.getByText(/Something Happened/i)
        expect(showLink).toBeInTheDocument()
    })

    it("Has Clickable Links", () => {
        render(
        <BrowserRouter>
            <NotFound />
        </BrowserRouter>
              )

              userEvent.click(screen.getByText("Go Back Home!"))
              expect(screen.getByText("Go Back Home!")).toBeInTheDocument()

    })

})