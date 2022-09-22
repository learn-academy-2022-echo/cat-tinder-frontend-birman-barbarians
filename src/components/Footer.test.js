import {screen, render} from "@testing-library/react"
import Footer from './Footer' 


describe("<Footer />", () => {
    it("Render without crashing", () => {
// Arrange
        render(<Footer/>)
        const showLink = screen.getByText(/Cat Tinder Project by Jereme Doan and Sam Scott/i)
        expect(showLink).toBeInTheDocument()

    })
})