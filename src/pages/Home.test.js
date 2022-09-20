import {screen, render} from "@testing-library/react"
import Home from './Home' 

describe("<Home />", () => {
    it("Render without crashing", () => {
// Arrange
        render(<Home/>)
        const showLink = screen.getByText(/Welcome to Cat Tinder/i)
        expect(showLink).toBeInTheDocument()
// Terminal Response
// PASS  src/components/Footer.test.js
// PASS  src/components/Header.test.js
// PASS  src/pages/Home.test.js
// Test Suites: 3 passed, 3 total
// Tests:       4 passed, 4 total
// Snapshots:   0 total
// Time:        5.949 s
// Ran all test suites related to changed files.
    })
})