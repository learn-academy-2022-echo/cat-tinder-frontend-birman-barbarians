import {screen, render} from "@testing-library/react"
import Header from './Header' 
import { BrowserRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event'

describe("<Header />", () => {
    it("Render without crashing", () => {
// Arrange
        render(<Header/>)
        const showLink = screen.getByText(/See All The Cats/i)
        expect(showLink).toBeInTheDocument()
// Terminal Response
// PASS  src/components/Header.test.js
// <Header />
//   ✓ Render without crashing (56 ms)
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

// Terminal Response 
// PASS  src/components/Header.test.js
// <Header />
//   ✓ Render without crashing (72 ms)
//   ✓ Has Clickable Links (21 ms)

// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total
// Snapshots:   0 total
// Time:        3.824 s, estimated 7 s





})

