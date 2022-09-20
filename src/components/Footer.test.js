import {screen, render} from "@testing-library/react"
import Footer from './Footer' 


describe("<Footer />", () => {
    it("Render without crashing", () => {
// Arrange
        render(<Footer/>)
        const showLink = screen.getByText(/Cat Tinder Project by Jereme Doan and Sam Scott/i)
        expect(showLink).toBeInTheDocument()
// Terminal Response
// PASS  src/components/Header.test.js
// PASS  src/components/Footer.test.js
// Test Suites: 2 passed, 2 total
// Tests:       3 passed, 3 total
// Snapshots:   0 total
// Time:        4.392 s

    })
})